/* Service worker.
 *
 * The failure mode this is written against: a clinician installs the card,
 * a translation is later found to be wrong and fixed, and their phone keeps
 * serving the old text off disk for months. So the strategy is split:
 *
 *   HTML / JS / JSON  -> network-first. Online, they always get current text.
 *                        Offline, they fall back to the last good copy.
 *   audio / icons     -> cache-first. Immutable once recorded, and the whole
 *                        point of the recordings is that they work with no signal.
 *
 * Bump CACHE on every content change. It is the only thing that evicts old text.
 */

const CACHE = "eyecard-zh-2026.07.27";

const SHELL = [
  "./",
  "./index.html",
  "./phrases.js",
  "./manifest.webmanifest",
  "./audio/zh/index.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(()=>self.skipWaiting())
      .catch(()=>self.skipWaiting())   // a single 404 must not block install
  );
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("message", e=>{
  if(e.data === "skipWaiting") self.skipWaiting();
});

const isMedia = url => /\.(m4a|mp3|ogg|wav|png|svg|ico|webp)$/i.test(url.pathname);

self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method !== "GET") return;

  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return;

  // cache-first: immutable assets
  if(isMedia(url)){
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res=>{
        if(res.ok){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }))
    );
    return;
  }

  // network-first: anything carrying text a patient will read
  e.respondWith(
    fetch(req)
      .then(res=>{
        if(res.ok){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(()=> caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});
