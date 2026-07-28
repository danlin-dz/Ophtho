# Eye Exam Card — Mandarin

An offline phrase card for the parts of an ophthalmic examination that break down
without shared language. Tap a phrase, it fills the screen for the patient; tap
the speaker, it plays aloud.

**Scope is deliberately narrow.** Instructions and closed questions only —
"chin on the rest", "look at my nose", "do not drive today". History, consent,
findings and plan go through a professional interpreter. In BC that is the PHSA
Provincial Language Service, 1-877-228-2557, free at health authority sites.

Static site, no build step, no dependencies, no analytics, no data collection of
any kind.

---

## Before you deploy

Four placeholders ship in the repo on purpose. The card is not fit to hand out
until all four are dealt with.

- [ ] **Get the translations reviewed** by a native speaker — ideally a PLS
      interpreter or a Mandarin-speaking clinician. The dilation block is the one
      that matters most; an error there has consequences. Until this is done the
      page shows a red "unreviewed draft" banner, which is correct behaviour, not
      a bug.
- [ ] **`CONTACT@EXAMPLE.COM`** in `index.html` → a real address for corrections.
- [ ] **`MAINTAINER NAME`** in `index.html` → your name. Anonymous clinical tools
      don't get adopted, and named accountability is what makes the review mean
      something.
- [ ] **Buy a domain** before printing anything. See "QR codes" below.

To clear the banner once reviewed, fill in `reviewedBy` and `reviewedOn` in
`audio/zh/index.json`.

## Deploy

Cloudflare Pages, free tier — unlimited bandwidth, custom domains, automatic SSL.

1. Push this folder to a public GitHub repo.
2. `pages.cloudflare.com` → Create → Connect to Git → pick the repo.
3. Framework preset **None**, build command **empty**, output directory **`/`**.
4. Deploy. Every push to `main` redeploys in about 20 seconds.

Custom domain: Pages → your project → Custom domains → add. If the domain is
registered at Cloudflare it is one click; elsewhere it is one CNAME record.

GitHub Pages also works (Settings → Pages → deploy from `main`, root) but caps
bandwidth at 100 GB/month.

> Service workers require HTTPS. Opening `index.html` off your own disk works,
> but installing to the home screen and offline caching only happen on the
> deployed URL.

## QR codes

QR codes on badge cards and workroom posters are how this actually spreads —
nobody types a URL in an ED. Which is why the domain comes first: 500 printed
codes pointing at `something.pages.dev` all die the day you migrate. A custom
domain makes the code permanent regardless of what sits behind it.

Print the URL in text underneath the code as well. A fair number of people will
be reading it off a card while wearing loupes.

    npx qrcode -o qr.png -s 12 "https://your-domain.ca"

## Adding recorded audio

Human recordings beat synthesized speech here — TTS flattens prosody, mangles
some clinical terms, and a warm human voice lands better with an anxious
eighty-year-old. But recruiting speakers is the bottleneck, not the code, so the
card is built to ship without them and upgrade quietly as they arrive.

1. `node tools/make-recording-script.js` → `docs/recording-script-zh.md`,
   a 52-take script with recording notes. Hand this to the speaker.
2. Convert to mono AAC and drop the files in `audio/zh/` named by phrase ID.
3. List the IDs in the `recorded` array of `audio/zh/index.json`.
4. Bump `CACHE` in `sw.js` and `VERSION` in `index.html`.

Anything not listed in `recorded` falls back to the device voice, so a partial
set is fine to ship. Phrases with a real recording show a dot on the speaker
button.

Roughly 700 KB per language at 52 takes — small enough that offline caching
stays trivial even at six languages.

## Adding a language

`phrases.js` is the whole content layer. Copy it, translate the `s`/`t`/`p`
fields, and point `LANG` in `index.html` at a new `audio/` folder. For
non-Chinese languages drop the 简/繁 toggle and the `t` field.

Keep the phrase IDs identical across languages. It makes the recording scripts
comparable and means a fix to the English label propagates cleanly.

Change `ACCENT` in `tools/make-icons.py` and regenerate, so the cards read as one
family but stay distinguishable on a home screen.

Worth doing next, by BC interpreter request volume rather than census counts:
Punjabi, Cantonese, Vietnamese, Arabic, Korean, Tagalog, Farsi.

## Files

    index.html                  card, styling, and behaviour
    phrases.js                  all content — the only file most edits touch
    sw.js                       offline cache; bump CACHE on every content change
    manifest.webmanifest        home screen install
    audio/zh/index.json         which phrases have recordings; review status
    docs/recording-script-*     generated take lists
    tools/make-icons.py         icon set
    tools/make-recording-script.js

## Notes on the design

The palette is taken from a dilated fundus — pupil black, red reflex orange,
optic disc cream, vessel red for the safety block. Light text on dark is not a
style choice: exam lanes are dim, a bright phone ruins your dark adaptation and
the patient is often photophobic, and reduced glare scatter helps anyone with a
cataract.

The one animation, a narrow band of light sweeping the phrase when it opens
fullscreen, is the slit lamp's own gesture. It also does a job — it signals to
the patient that the screen has changed.

The only pictogram is the diplopia picker. Symbols carry nouns reliably and
propositions poorly; an arrow meaning "look up" is ambiguous between *your eyes
go up* and *the thing is up there*. Everything else on this card is a command or
a question, which is exactly where pictogram comprehension falls apart. Diplopia
geometry is the exception, being a perceptual judgement with no gesture
equivalent and clumsy phrasing in any language.

## Licence

CC BY-NC-SA 4.0. Adapt it, translate it, use it in your department. Don't sell
it, and pass on the same terms.

Translations are provided in good faith and are not a substitute for a
professional interpreter.
