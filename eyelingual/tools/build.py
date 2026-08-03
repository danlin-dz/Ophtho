#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates every Eyelingual page from one template.

    python3 tools/build.py

Nine language cards share a single template, so structure, fonts, spacing,
stage order and behaviour cannot drift apart. Edit _template/card.html once and
rebuild; every card changes together.

Writes:
    index.html              language picker
    <code>/index.html       one card per language
    <code>/phrases.js       phrase data (regenerated only with --phrases)
    audio/<code>/index.json recording + review manifest (never overwritten)
    manifest.webmanifest
    sw.js
"""
import json, os, sys, shutil
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from langdata import LANGS, GRID, STAGES, EN, DIP_EN, DIP_LABELS, DATA, QUICK
from phonetics import PHON

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VERSION = "1 August 2026"
CACHE = "eyelingual-2026-08-01"
WRITE_PHRASES = "--phrases" in sys.argv or "--all" in sys.argv

DIP_SVGS = [
    '<circle cx="50" cy="28" r="9"/>',
    '<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>',
    '<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>',
]

# TTS fallback chains — device voice inventories vary a lot, especially for
# Cantonese and Punjabi, so each card degrades to the nearest available voice
# rather than going silent.
TTS_FALLBACK = {
    "zh-CN": ["zh-Hans", "zh"],
    "zh-HK": ["yue-HK", "yue"],        # never fall back to Mandarin: wrong language
    "pa-IN": ["pa-Guru", "pa"],        # never fall back to Hindi: wrong script
    "fa-IR": ["fa"],
    "ar-SA": ["ar"],
    "ko-KR": ["ko"],
    "ja-JP": ["ja"],
    "vi-VN": ["vi"],
    "fil-PH": ["fil", "tl-PH", "tl"],  # never fall back to en-PH: that is an
}                                      # English voice reading Tagalog spelling

def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


# ------------------------------------------------------------ phrases.js ----
def build_phrases(lang):
    code = lang["code"]
    phrases, dip, dipopts = DATA[code]
    phon = PHON[code]
    two = code == "zh"

    out = ["/* Eyelingual — %s phrase set for the ophthalmic examination.\n"
           " *\n"
           " * id  — permanent. Audio files are named after it (audio/%s/s02-04.m4a).\n"
           " *       Never renumber an id once recording has started: a file would silently\n"
           " *       detach from its phrase.\n"
           " * en  — clinician-facing label, also what the search matches on\n"
           " * x   — what the patient reads\n"
           " * p   — romanisation for the clinician (empty for Latin-script languages)\n"
           " *\n"
           " * Ids are identical across all nine languages: s01-01 here is the same\n"
           " * sentence as s01-01 on every other card.\n"
           " *\n"
           " * Selection rule: every phrase is either a command the patient can act on, or\n"
           " * a question answerable by nodding, shaking, or pointing.\n"
           " */\n\nconst STAGES = [" % (lang["english"], code)]

    for si, st in enumerate(STAGES):
        head = '\n  {\n    id:"%s", num:"%s", title:"%s",' % (st["id"], st["num"], st["title"])
        if st.get("note"):
            head += '\n    note:"%s",' % esc(st["note"])
        if st.get("diplopiaAfter"):
            head += '\n    diplopiaAfter:"%s",' % st["diplopiaAfter"]
        head += "\n    items:["
        out.append(head)
        rows = []
        for pid in st["ids"]:
            rec = phrases[pid]
            p = phon[pid]                      # English-friendly respelling, not the
            if two:                            # scholarly romanisation in langdata.py
                x, t, _ = rec
                rows.append('      {id:"%s", en:"%s", x:"%s", t:"%s", p:"%s"}'
                            % (pid, esc(EN[pid]), esc(x), esc(t), esc(p)))
            else:
                x, _ = rec
                rows.append('      {id:"%s", en:"%s", x:"%s", p:"%s"}'
                            % (pid, esc(EN[pid]), esc(x), esc(p)))
        out.append("\n" + ",\n".join(rows) + "\n    ]\n  }" + ("," if si < len(STAGES) - 1 else ""))
    out.append("\n];\n")

    out.append("\n/* The eleven phrases that come up most, surfaced in a panel at the top of\n   the card so they are reachable without scrolling. These are references, not\n   copies: same ids, same audio, same wording as the stage they belong to. */\n"
               "const QUICK = [%s];\n" % ", ".join('"%s"' % q for q in QUICK))

    out.append('\n/* The one pictogram on the card. Diplopia geometry is a perceptual judgement\n'
               '   with no gesture equivalent and clumsy phrasing in any language, so a picture\n'
               '   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */\nconst DIP = {\n')
    out.append('  en:"%s",\n' % esc(DIP_EN))
    if two:
        out.append('  x:"%s",\n  t:"%s",\n' % (esc(dip[0]), esc(dip[1])))
    else:
        out.append('  x:"%s",\n' % esc(dip[0]))
    out.append('  p:"%s",\n' % esc(phon["DIP"]))
    out.append("  opts:[\n")
    rows = []
    for i, opt in enumerate(dipopts):
        ph = esc(phon["OPT%d" % i])
        if two:
            rows.append('    {svg:\'%s\', x:"%s", t:"%s", p:"%s", lab:"%s"}' % (DIP_SVGS[i], esc(opt[0]), esc(opt[1]), ph, DIP_LABELS[i]))
        else:
            rows.append('    {svg:\'%s\', x:"%s", p:"%s", lab:"%s"}' % (DIP_SVGS[i], esc(opt[0]), ph, DIP_LABELS[i]))
    out.append(",\n".join(rows) + "\n  ]\n};\n")
    return "".join(out)


# ----------------------------------------------------------- card html ------
TOGGLE_HTML = """      <div class="seg" role="group" aria-label="Character set">
        <button id="btnS" aria-pressed="true">简</button>
        <button id="btnT" aria-pressed="false">繁</button>
      </div>"""

TOGGLE_NOTE = """    <strong>简 / 繁.</strong> Simplified for mainland China and Singapore; traditional for Taiwan.
    Cantonese speakers from Hong Kong read traditional but will not follow spoken Mandarin.<br><br>
"""

BANNER = ('<div class="status">Draft translation — not yet reviewed by a native speaker. '
          'Do not distribute.</div>\n')


def build_card(lang, template):
    body_classes = []
    if lang["dir"] == "rtl":
        body_classes.append("rtl")
    s = template
    reps = {
        "__ENGLISH__": lang["english"],
        "__NATIVE__": lang["native"],
        "__CODE__": lang["code"],
        "__FONT__": lang["font"],
        "__TTS__": lang["tts"],
        "__TTSFALLBACKS__": json.dumps(TTS_FALLBACK.get(lang["tts"], [])),
        "__HASTOGGLE__": "true" if lang["scriptToggle"] else "false",
        "__BODYCLASS__": " ".join(body_classes),
        "__TOGGLE__": TOGGLE_HTML if lang["scriptToggle"] else "",
        "__FOOTNOTE__": TOGGLE_NOTE if lang["scriptToggle"] else "",
        "__STATUSBANNER__": "" if lang["reviewedBy"] else BANNER,
        "__REVIEWED__": lang["reviewedBy"] or "not yet reviewed",
    }
    # an empty optional block should take its whole line with it, so pages that
    # omit the toggle don't carry a stray blank line
    for k in ("__TOGGLE__", "__FOOTNOTE__", "__STATUSBANNER__"):
        if reps[k] == "":
            s = s.replace(k + "\n", "")
    for k, v in reps.items():
        s = s.replace(k, v)
    assert "__" not in s.replace("__", "", 0) or True
    left = [t for t in ["__ENGLISH__", "__NATIVE__", "__CODE__", "__FONT__", "__TTS__"] if t in s]
    assert not left, "unreplaced placeholders: " + str(left)
    return s


# ------------------------------------------------------------- homepage -----
HOME = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Eyelingual — offline ophthalmic examination phrase cards in nine languages.">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Eyelingual">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="theme-color" content="#150F0C">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<link rel="icon" href="icons/favicon.png" type="image/png">
<title>Eyelingual — Ophthalmic Exam Phrase Cards</title>
<style>
  :root{
    --pupil:#150F0C; --pupil-deep:#0D0908; --choroid:#241A15; --choroid-hi:#2E211A;
    --reflex:#FF8A4C; --disc:#F7EBDB; --taupe:#A08A7B; --taupe-dim:#716054;
    --line:rgba(247,235,219,.10); --line-hi:rgba(247,235,219,.20);
    --f-mono:ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;
    --f-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
  html,body{margin:0;padding:0}
  body{background:var(--pupil);color:var(--disc);font-family:var(--f-sans);
       -webkit-text-size-adjust:100%;padding-bottom:env(safe-area-inset-bottom)}
  .wrap{max-width:640px;margin:0 auto;padding:0 18px}

  header{padding:40px 0 24px;border-bottom:1px solid var(--line)}
  h1{margin:0;font-family:var(--f-mono);font-size:30px;font-weight:600;
     letter-spacing:.16em;text-transform:uppercase;line-height:1;color:var(--disc)}
  .tag{margin:16px 0 0;font-family:var(--f-mono);font-size:11px;letter-spacing:.24em;
       text-transform:uppercase;color:var(--reflex)}
  .scope{margin:20px 0 0;font-size:12.5px;line-height:1.55;color:var(--taupe)}
  .scope + .scope{margin-top:7px}
  .scope a{color:var(--reflex);text-decoration:none;border-bottom:1px solid rgba(255,138,76,.35)}

  .pick{margin:30px 0 14px;font-family:var(--f-mono);font-size:10.5px;
        letter-spacing:.22em;text-transform:uppercase;color:var(--taupe-dim)}

  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
  .tile{
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    aspect-ratio:1/1;text-decoration:none;text-align:center;padding:10px 6px;
    background:var(--choroid);border:1px solid var(--line);border-radius:14px;
    transition:background .12s ease,border-color .12s ease;
  }
  .tile:active{background:var(--choroid-hi);border-color:var(--reflex)}
  .tile:focus-visible{outline:2px solid var(--reflex);outline-offset:2px}
  .tile .eng{
    font-size:17px;font-weight:600;color:var(--disc);line-height:1.2;
    display:block;letter-spacing:.005em;
  }
  .tile .nat{
    margin-top:8px;font-size:13px;font-weight:500;color:var(--taupe);
    line-height:1.3;display:block;word-break:keep-all;
  }
  .tile .draft{
    margin-top:6px;font-family:var(--f-mono);font-size:7px;letter-spacing:.12em;
    text-transform:uppercase;color:var(--taupe-dim);
  }

  footer{border-top:1px solid var(--line);margin-top:36px;padding:22px 0 44px;
         font-size:11.5px;line-height:1.65;color:var(--taupe-dim)}
  footer strong{color:var(--taupe);font-weight:600}
  footer a{color:var(--reflex);text-decoration:none}
  .meta{margin-top:20px;padding-top:16px;border-top:1px solid var(--line);
        font-family:var(--f-mono);font-size:9.5px;letter-spacing:.1em;
        text-transform:uppercase;line-height:2}

  @media (max-width:360px){ .tile .eng{font-size:14px} .tile .nat{font-size:11px} }
</style>
</head>
<body>
<div class="wrap">

  <header>
    <h1>Eyelingual</h1>
    <p class="tag">Ophthalmic Exam Phrase Cards</p>
    <p class="scope">Brought to you by Danlin Zeng, Kim Papp (MD), Lele Xiao (MD)</p>
    <p class="scope">
      History, consent, and results go through a professional interpreter — PHSA Provincial
      Language Service, <a href="tel:+18772282557">1-877-228-2557</a>.
    </p>
  </header>

  <p class="pick">Pick a language</p>
  <div class="grid">
__TILES__
  </div>

  <footer>
    <strong>How to use.</strong> Pick a language, tap a phrase to fill the screen, hold it up
    for the patient. Tap the speaker to play it aloud. This page works with no signal.<br><br>
    <strong>Found an error?</strong> <a href="mailto:danlinz@student.ubc.ca?subject=Eyelingual%20%E2%80%94%20Website%20error">Report a correction</a>.
    Nothing on this site is collected, stored, or transmitted.
    <div class="meta">
      Last Updated: __VERSION__<br>
      Page Maintained By: Danlin Zeng<br>
      CC BY-NC-SA 4.0
    </div>
  </footer>

</div>

<script>
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js", {updateViaCache:"none"})
      .then(reg=>reg.update()).catch(()=>{});
  });
}
</script>
</body>
</html>
"""


def build_home():
    by_code = {l["code"]: l for l in LANGS}
    tiles = []
    for row in GRID:
        for code in row:
            l = by_code[code]
            draft = "" if l["reviewedBy"] else '\n      <span class="draft">Draft</span>'
            tiles.append(
                '    <a class="tile" href="%s/" lang="%s"%s>\n'
                '      <span class="eng">%s</span>\n'
                '      <span class="nat">%s</span>%s\n'
                '    </a>' % (l["slug"], l["htmlLang"],
                              ' dir="rtl"' if l["dir"] == "rtl" else "",
                              l["english"], l["native"], draft))
    return HOME.replace("__TILES__", "\n".join(tiles)).replace("__VERSION__", VERSION)


# ----------------------------------------------------------------- main -----
def main():
    with open(os.path.join(ROOT, "_template", "card.html"), encoding="utf-8") as f:
        template = f.read()

    made = []
    for lang in LANGS:
        code = lang["code"]
        write(os.path.join(ROOT, code, "index.html"), build_card(lang, template))
        made.append(code + "/index.html")

        pj = os.path.join(ROOT, code, "phrases.js")
        if WRITE_PHRASES or not os.path.exists(pj):
            write(pj, build_phrases(lang))
            made.append(code + "/phrases.js")

        aj = os.path.join(ROOT, "audio", code, "index.json")
        if not os.path.exists(aj):
            write(aj, json.dumps({
                "language": lang["english"], "voice": None,
                "reviewedBy": lang["reviewedBy"], "reviewedOn": lang["reviewedOn"],
                "recorded": []
            }, ensure_ascii=False, indent=2) + "\n")
            made.append("audio/%s/index.json" % code)

    write(os.path.join(ROOT, "index.html"), build_home())
    made.append("index.html")

    write(os.path.join(ROOT, "manifest.webmanifest"), json.dumps({
        "name": "Eyelingual — Ophthalmic Exam Phrase Cards",
        "short_name": "Eyelingual",
        "description": "Offline ophthalmic examination phrase cards in nine languages.",
        "id": "/", "start_url": ".", "scope": ".",
        "display": "standalone", "orientation": "portrait",
        "background_color": "#150F0C", "theme_color": "#150F0C",
        "categories": ["medical", "education", "utilities"], "lang": "en-CA",
        "icons": [
            {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
            {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
            {"src": "icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
        ],
    }, indent=2) + "\n")
    made.append("manifest.webmanifest")

    shell = ["./", "./index.html", "./manifest.webmanifest",
             "./icons/icon-192.png", "./icons/icon-512.png",
             "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png",
             "./icons/favicon.png"]
    for lang in LANGS:
        c = lang["code"]
        shell += ["./%s/" % c, "./%s/index.html" % c, "./%s/phrases.js" % c,
                  "./audio/%s/index.json" % c]

    write(os.path.join(ROOT, "sw.js"), SW.replace("__CACHE__", CACHE)
          .replace("__SHELL__", ",\n  ".join('"%s"' % p for p in shell)))
    made.append("sw.js")

    print("built %d files" % len(made))
    for m in made:
        print("  " + m)


SW = """/* Service worker.
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

const CACHE = "__CACHE__";

const SHELL = [
  __SHELL__
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

const isMedia = url => /\\.(m4a|mp3|ogg|wav|png|svg|ico|webp)$/i.test(url.pathname);

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
"""

if __name__ == "__main__":
    main()
