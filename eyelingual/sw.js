/* Service worker.
 *
 * The failure mode this is written against: a clinician installs a card, a
 * translation is later found to be wrong and fixed, and their phone keeps
 * serving the old text off disk for months. So the strategy is split:
 *
 *   HTML / JS / JSON  -> network-first. Online, they always get current text.
 *                        Offline, they fall back to the last good copy.
 *   audio / icons     -> cache-first. Immutable once recorded, and the whole
 *                        point of the recordings is that they work with no signal.
 *
 * Bump CACHE on every content change. It is the only thing that evicts old text.
 */

const CACHE = "eyelingual-2026-08-02";

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon.png",
  "./zh/",
  "./zh/index.html",
  "./zh/phrases.js",
  "./audio/zh/index.json",
  "./yue/",
  "./yue/index.html",
  "./yue/phrases.js",
  "./audio/yue/index.json",
  "./pa/",
  "./pa/index.html",
  "./pa/phrases.js",
  "./audio/pa/index.json",
  "./fa/",
  "./fa/index.html",
  "./fa/phrases.js",
  "./audio/fa/index.json",
  "./ar/",
  "./ar/index.html",
  "./ar/phrases.js",
  "./audio/ar/index.json",
  "./ko/",
  "./ko/index.html",
  "./ko/phrases.js",
  "./audio/ko/index.json",
  "./ja/",
  "./ja/index.html",
  "./ja/phrases.js",
  "./audio/ja/index.json",
  "./vi/",
  "./vi/index.html",
  "./vi/phrases.js",
  "./audio/vi/index.json",
  "./tl/",
  "./tl/index.html",
  "./tl/phrases.js",
  "./audio/tl/index.json"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(()=>self.skipWaiting())
      .catch(()=>self.skipWaiting())
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
