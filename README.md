# Eyelingual

Cards for an ophthalmic examination. Can be used offline with no service. 
Pick a language, tap a phrase, it fills the screen.
The patient can read the phrase, or tap the speaker and it plays aloud.

9 languages: Mandarin, Cantonese, Punjabi, Farsi, Arabic, Korean, Japanese,
Vietnamese, Tagalog. Each card opens with a **Most used** panel at the top with 
the 11 phrases that come up on nearly every exam.

**Scope is deliberately narrow.** Instructions and closed questions only —
"chin on the rest", "look at my nose", "do not rub your eyes". Every phrase is
either a command the patient can act on or a question answerable by nodding,
shaking, or pointing. History, consent, findings, and plan go through a professional
interpreter. In BC that is the PHSA Provincial Language Service, 1-877-228-2557.

Site contains no analytics, no data collection of any kind.

---

## Read this before you deploy

**8/9 pages have not been reviewed by a native speaker.**
Only Mandarin has. The other eight carry a red "Draft translation — do not
distribute" banner and a *Draft* badge on the homepage tile. That is not a bug, 
and the banner should stay until a real speaker has read the card.

To clear a banner, set `reviewedBy` and `reviewedOn` in
`audio/<code>/index.json` and rebuild.

Also before going live:

- [ ] Buy a domain before printing any QR codes
- [ ] Generate or record the audio: 4/9 languages are silent on a stock Apple device without it

## Build

Everything is generated from one template, so the nine cards cannot drift apart.

    python3 tools/build.py              # regenerate pages (leaves phrases alone)
    python3 tools/build.py --phrases    # also regenerate phrase files from tools/langdata.py

Edit `_template/card.html` once and rebuild; every card changes together. Edit a
`<code>/phrases.js` directly for wording fixes — the plain build will not
overwrite it.

## Deploy

Cloudflare Pages, free tier — unlimited bandwidth, custom domains, automatic SSL.

1. Push this folder to a public GitHub repo.
2. `pages.cloudflare.com` → Create → Connect to Git → pick the repo.
3. Framework preset **None**, build command **empty**, output directory **`/`**.
4. Deploy. Every push to `main` redeploys in about 20 seconds.

> Service workers require HTTPS. Opening the files off your own disk works, but
> installing to the home screen and offline caching only happen on the deployed
> URL. Note also that the cards load `phrases.js` as a separate file, so a single
> card HTML opened on its own will not run — serve the folder.

## Structure

    index.html              language picker
    <code>/index.html       generated card — do not hand-edit, it will be overwritten
    <code>/phrases.js       wording — safe to hand-edit
    audio/<code>/index.json which phrases have recordings; review status
    _template/card.html     the single source for all nine cards
    tools/langdata.py       phrases, fonts, TTS codes, grid order
    tools/build.py          generator
    tools/make-recording-scripts.js
    tools/make-icons.py
    sw.js                   offline cache; bump CACHE on every content change
    docs/recording-script-* generated take lists

## Audio

The cards fall back to the Web Speech API, which can only use voices already
installed on the listener's device. Apple ships Arabic, Mandarin, Japanese and
Korean; it does not ship Punjabi, Farsi, Cantonese or Filipino. On a stock Mac or
iPhone those four are silent — which defeats the point of the site.

The fix is to generate the audio once and commit the files. The card already
prefers a recorded file over the device voice, so this removes the listener's
device from the equation entirely.

    pip install edge-tts
    python3 tools/make-audio.py --list      # check voice availability first
    python3 tools/make-audio.py --all

Until that is done, a card whose language has no device voice stays silent and
says so, and dims its speaker buttons. It deliberately does **not** hand the text
to whatever default voice the device has — an English voice given Gurmukhi reads
the punctuation and nothing else, which is worse than saying nothing.

That uses Microsoft's neural voices through the same free endpoint Edge's
read-aloud uses. No API key, no cost, network needed only at generation time.

Human recordings are the next step — synthetic voices flatten prosody and carry 
none of the warmth an anxious eighty-year-old responds to. Replace files with 
real recordings as speakers become available.

### Recording humans instead

1. `node tools/make-recording-scripts.js ko` → a 34-take script with recording
   notes. Hand it to the speaker.
2. Convert to mono AAC, drop the files in `audio/ko/` named by phrase ID.
3. List the IDs in the `recorded` array of `audio/ko/index.json`.
4. Bump `CACHE` in `tools/build.py` and rebuild.

Anything not listed in `recorded` falls back to the device voice, so partial sets
ship fine. Phrases with a real recording show a dot on the speaker button.

Phrase IDs are identical across all nine languages: `s01-01` in Korean is the
same sentence as `s01-01` in Arabic. That keeps the recording scripts
comparable and means audio folders share filenames.

## Notes on the design

The palette is taken from a dilated fundus — pupil black, red reflex orange,
optic disc cream. Light text on dark is a deliberate choice: exams are often
conducted in dim settings, a bright phone ruins dark adaptation, and the 
patient is often photophobic, and reduced glare scatter helps anyone with a cataract.

The one animation, a narrow band of light sweeping the phrase when it opens
fullscreen, is mimicking a slit lamp. It also signals to the patient and 
healthcare provider that the screen has changed.

The line under each phrase is an English-friendly phonetic respelling, not a
scholarly romanisation — "jow fye hoe lah" rather than "Zau6 faai3 hou2 laa3",
because tone numbers and diacritics tell a non-speaker nothing. Tone is not
represented, so for Mandarin, Cantonese, and Vietnamese these get you close but
not accurate. The scholarly romanizations are preserved in `tools/langdata.py`.

Punjabi is written to avoid speaker-gender marking entirely. Punjabi inflects
first-person futures and some participles for the speaker's gender, which would
otherwise mean a female clinician reading masculine forms. Four phrases needed
rewording — `s02-07`, `s04-02`, `s05-06`, `s06-02` — each moving agreement onto a
noun or an impersonal construction. The other thirty-one are imperatives or agree
with a noun, so they were already neutral. One form now works for male or female.

Mandarin has a simplified/traditional (简 / 繁) toggle. 
Cantonese is traditional only. 
Farsi and Arabic render right-to-left; their romanization lines stay left-to-right.

## Licence

CC BY-NC-SA 4.0. Adapt it, translate it, use it in your department. Don't sell
it, and pass on the same terms.

Translations are provided in good faith and are not a substitute for a
professional interpreter.
