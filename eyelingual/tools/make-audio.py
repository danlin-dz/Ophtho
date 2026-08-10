#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Pre-generate the spoken audio and commit it to the repo.

WHY THIS EXISTS
---------------
The cards fall back to the Web Speech API, which can only use voices already
installed on the listener's device. Apple ships Arabic, Mandarin, Japanese and
Korean by default; it does not ship Punjabi, Farsi, Cantonese or Filipino. So on
a stock Mac or iPhone those four are silent — and the whole point of the site is
that it works for a language you don't have.

Generating the audio once and shipping the files removes the device from the
equation entirely. The card already prefers a recorded file over the device
voice, so dropping files into audio/<code>/ is all that is needed.

USAGE
-----
    pip install edge-tts
    python3 tools/make-audio.py --list            # show voices for our languages
    python3 tools/make-audio.py pa fa yue tl      # generate for those languages
    python3 tools/make-audio.py --all

edge-tts uses Microsoft's neural voices through the same free endpoint Edge's
read-aloud feature uses. No API key, no account, no cost. It needs a network
connection at generation time only — the output files are static.

This produces MP3. Convert to m4a if you prefer (ffmpeg one-liner below); the
player accepts either, but index.json and the fetch path assume .m4a, so either
convert or change AUDIO_EXT in _template/card.html.

    for f in audio/pa/*.mp3; do
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "${f%.mp3}.m4a" && rm "$f"
    done

A NOTE ON QUALITY
-----------------
Neural TTS is good but it is not a clinician's voice, and it will not carry the
warmth an anxious eighty-year-old responds to. Treat this as the floor, not the
ceiling: it makes every language work on every device today, and real recordings
can replace any file later without touching the code.

It also does NOT substitute for translation review. A synthetic voice reading a
wrong sentence is a wrong sentence delivered fluently.
"""
import asyncio, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from langdata import LANGS, STAGES  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Preferred voice per language. Verify against `--list` before a big run; the
# catalogue changes. Female voices chosen for consistency, not preference —
# swap freely.
VOICES = {
    "zh":  "zh-CN-XiaoxiaoNeural",
    "yue": "zh-HK-HiuMaanNeural",
    "pa":  "pa-IN-VaaniNeural",
    "fa":  "fa-IR-DilaraNeural",
    "ar":  "ar-SA-ZariyahNeural",
    "ko":  "ko-KR-SunHiNeural",
    "ja":  "ja-JP-NanamiNeural",
    "vi":  "vi-VN-HoaiMyNeural",
    "tl":  "fil-PH-BlessicaNeural",
}

RATE = "-15%"   # slower than default: these are instructions to an anxious patient


def load_phrases(code):
    """Read <code>/phrases.js without a JS engine — it is a flat literal."""
    import re
    src = open(os.path.join(ROOT, code, "phrases.js"), encoding="utf-8").read()
    out = []
    for m in re.finditer(r'\{id:"(s\d\d-\d\d)", en:"(.*?)", x:"(.*?)"', src):
        out.append((m.group(1), m.group(3)))
    return out


async def list_voices():
    import edge_tts
    wanted = {v.split("-")[0] + "-" + v.split("-")[1] for v in VOICES.values()}
    all_v = await edge_tts.list_voices()
    print("Voices available for the nine Eyelingual languages:\n")
    for v in sorted(all_v, key=lambda x: x["ShortName"]):
        loc = v["Locale"]
        if "-".join(loc.split("-")[:2]) in wanted:
            star = "  <-- configured" if v["ShortName"] in VOICES.values() else ""
            print("  %-28s %-8s %s%s" % (v["ShortName"], loc, v.get("Gender", ""), star))
    print("\nMissing a language above means edge-tts has no voice for it; that one "
          "needs a human recording.")


async def gen(code):
    import edge_tts
    voice = VOICES[code]
    name = next(l["english"] for l in LANGS if l["code"] == code)
    outdir = os.path.join(ROOT, "audio", code)
    os.makedirs(outdir, exist_ok=True)
    items = load_phrases(code)
    print("\n%s  (%s)  %d phrases" % (name, voice, len(items)))

    done = []
    for pid, text in items:
        path = os.path.join(outdir, pid + ".mp3")
        try:
            await edge_tts.Communicate(text, voice, rate=RATE).save(path)
            if os.path.getsize(path) < 500:
                raise RuntimeError("suspiciously small file")
            done.append(pid)
            print("  ok   %s  %s" % (pid, text[:44]))
        except Exception as e:
            print("  FAIL %s  %s" % (pid, e))

    idx = os.path.join(outdir, "index.json")
    meta = json.load(open(idx, encoding="utf-8")) if os.path.exists(idx) else {}
    meta.update({"language": name, "voice": voice, "recorded": done,
                 "reviewedBy": meta.get("reviewedBy"), "reviewedOn": meta.get("reviewedOn")})
    json.dump(meta, open(idx, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("  wrote %d/%d, updated audio/%s/index.json" % (len(done), len(items), code))


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if "--list" in sys.argv:
        asyncio.run(list_voices()); return
    codes = list(VOICES) if ("--all" in sys.argv or not args) else args
    bad = [c for c in codes if c not in VOICES]
    if bad:
        sys.exit("unknown language code(s): " + ", ".join(bad))
    for c in codes:
        asyncio.run(gen(c))
    print("\nNow convert to .m4a if you want, then bump CACHE in tools/build.py "
          "and rebuild so phones pick the new files up.")


if __name__ == "__main__":
    main()
