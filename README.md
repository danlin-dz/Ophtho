# Eyelingual

Cards for an ophthalmic examination. Can be used offline with no service.
Pick a language, tap a phrase, it fills the screen with options to enlarge the text.
3 text sizes are available. 
The patient can read the phrase, or tap the speaker and it plays aloud.

9 languages: Mandarin, Cantonese, Punjabi, Farsi, Arabic, Korean, Japanese,
Vietnamese, Tagalog. Each card opens with a **Most used** panel at the top 
with the 8 commands that come up on nearly every exam, and three shortcut boxes
underneath that jump straight to Vision, Drops or Slit lamp.

**Scope is deliberately narrow.** Every phrase is either an instruction 
the patient can act on, or a question answerable by nodding, shaking, or pointing. 
History, consent, findings, or plan go through a professional interpreter. 
In BC, that is the PHSA Provincial Language Service, 1-877-228-2557.

Site contains no analytics, no data collection of any kind.

---

**8/9 pages have not yet been reviewed by a native speaker.**

Only Mandarin has, by Danlin Zeng. The other 8 pages say "Translations Reviewed by:
not yet reviewed" in the footer of their own card. There is no banner and no
*Draft* badge on the homepage, so nothing is visible until a reader scrolls to
the bottom of a card.

To record a review, set `reviewedBy` and `reviewedOn` in
`audio/<code>/index.json` and rebuild.

Also before going live:
- [ ] Buy a domain before printing any QR codes
- [ ] Generate or record the audio: 4/9 languages are silent on a stock Apple device without it

## Build

Everything is generated from one template, so the 9 cards cannot drift apart.

    python3 tools/build.py              # regenerate pages (leaves phrases alone)
    python3 tools/build.py --phrases    # also regenerate phrase files from tools/langdata.py

Edit `_template/card.html` once and rebuild; every card changes together. Edit a
`<code>/phrases.js` directly for wording fixes — the plain build will not overwrite it.

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

## Exam order

9 stages: intro, visual acuity, pupils, eye movements, intraocular pressure,
confrontation fields, dilating drops, slit lamp, closing. 52 phrases per language.

Phrase ids are stable semantic slugs (`vis-fingers`, `iop-check`), not positions.
Reordering a stage or inserting a phrase never renames anything, so recorded
audio stays attached to its phrase.

## The image pickers

Images (14 symptom tiles and 3 diplopia tiles) in the Vision stage. 
This is the strongest case for imagery on the whole site. 
Perceptual experiences are difficult to describe in any language.
A picture asks it better than a sentence can.

2 source photographs, provided by Danlin Zeng:

- `_src/scene.jpg` — a view of Vancouver with fine linear detail from the utility poles.
  Blur and distortion are only legible against straight lines.
- `_src/dip.jpg` — a vertical silhouette and one discrete bright disc from the sunset against
  the Toronto skyline, so the doubling is unambiguous: two towers, two suns.

A locally recognizable scene was used as it may work better than a generic one.
A patient who has stood on that street maps their own experience onto it faster.

Regenerate both sets with
`python3 tools/make-symptom-images.py _src/scene.jpg _src/dip.jpg`.


### Visual field loss

**It is intentionally not black.** The black-tunnel image used almost everywhere
online is not merely stylized, it is misleading, and the evidence against it is
direct.

Crabb DP, Smith ND, Glen FC, Burton R, Garway-Heath DF. *How does glaucoma look?
Patient perception of visual field loss.* Ophthalmology. 2013;120(6):1120–6.
PMID 23415421. A total of 50 patients aged 52–82 with a range of glaucomatous field
defects were shown 6 renderings and asked which matched their own vision. The
authors concluded that patients do not perceive their loss as a black tunnel or
as black patches. Patients compare the standard depiction against their own
sight, conclude they cannot have glaucoma, and stop their drops.

For hemianopia and quadrantanopia the argument is different, and worth stating
precisely: **there is no equivalent forced-choice rendering study.** What the
literature establishes is that the defect is frequently not perceived at all.

- Celesia GG, Brigell MG, Vaphiades MS. *Hemianopic anosognosia.* Neurology.
  1997;49(1):88–97. PMID 9222175. Prospective series of 32 consecutive patients
  with homonymous field defects after ischaemic infarct; 20 of 32 (62%) were
  unaware of the loss.
- Chokron S, Dubourg L, Garric C, Martinelli F, Perez C. *Dissociations between
  perception and awareness in hemianopia.* Restor Neurol Neurosci. 2020.
  doi:10.3233/RNN-190951. Review of anosognosia, blindsight, and the ipsilesional
  deficits patients do not notice.

A hemianopic field is an absence of input, not a perceived grey or black wall.
That rules out a hard black edge; it does not positively validate any particular
rendering.

**What these tiles actually do:** field loss (hemianopia, quadrantanopia,
scotoma, tunnel) is drawn darkened and blurred, with a soft gradient. 
Detail goes before luminance, and nothing has a hard boundary. This is a
compromise — closer to "absent" than black, and legible at thumbnail size where
pure blur is not. It is informed by the evidence above rather than validated by it.

**A detachment curtain does render black/dark**, because that is the word patients
use — a shadow or curtain coming across.

The images are meant for triaging when no interpreter is immediately available. 
What the patient points at still needs confirming through a professional interpreter.

## Structure

    index.html              language picker
    <code>/index.html       generated card — do not hand-edit, it will be overwritten
    <code>/phrases.js       wording — safe to hand-edit
    audio/<code>/index.json which phrases have recordings; review status
    img/sym-*.jpg           symptom and diplopia tiles
    _src/                   source photographs for the tiles
    _template/card.html     the single source for all nine cards
    tools/langdata.py       phrases, fonts, TTS codes, grid order
    tools/phonetics.py      the respellings printed under each phrase
    tools/build.py          generator
    tools/make-symptom-images.py
    tools/make-audio.py
    tools/make-recording-scripts.js
    tools/make-icons.py
    tools/check-colours.py  contrast audit, including simulated colour blindness
    sw.js                   offline cache; bump CACHE on every content change
    docs/recording-script-* generated take lists

## Audio

The cards fall back to the Web Speech API, which can only use voices already
installed on the listener's device. Apple ships Arabic, Mandarin, Japanese and
Korean; it does not ship Punjabi, Farsi, Cantonese or Filipino. On a stock Mac or
iPhone those four are silent.

The fix is to generate the audio once and commit the files. If we have a recorded 
file, this removes the listener's device from the equation entirely.

    pip install edge-tts
    python3 tools/make-audio.py --list      # check voice availability first
    python3 tools/make-audio.py --all

Until that is done, a card whose language has no device voice stays silent and
says so, and dims its speaker buttons. It deliberately does **not** hand the text
to whatever default voice the device has — an English voice given Gurmukhi reads
the punctuation and nothing else, which is worse than saying nothing.

That uses Microsoft's neural voices through the same free endpoint Edge's
read-aloud uses. No API key, no cost, network needed only at generation time.

Human recordings are the next step. Synthetic voices flatten prosody and carry
none of the warmth an anxious 80-year-old patient responds to. We will replace 
all files with real recordings as speakers become available.

### Recording humans instead

1. `node tools/make-recording-scripts.js ko` → a 52-take script with recording
   notes. Hand it to the speaker.
2. Convert to mono AAC, drop the files in `audio/ko/` named by phrase ID.
3. List the IDs in the `recorded` array of `audio/ko/index.json`.
4. Bump `CACHE` in `tools/build.py` and rebuild.

Anything not listed in `recorded` falls back to the device voice, so partial sets
ship fine. Phrases with a real recording will show a dot on the speaker button.

Phrase IDs are identical across all 9 languages: `vis-fingers` in Korean is
the same sentence as `vis-fingers` in Arabic. That keeps the recording scripts
comparable and means audio folders share filenames.

## Notes on the design

The palette is taken from a dilated fundus — pupil black, red reflex orange,
optic disc cream. Light text on dark is a deliberate choice: exams are often
conducted in dim settings where a bright phone ruins dark adaptation, and the
patient is often photophobic. Also, reduced glare scatter helps patients with cataracts.

Every foreground and background pair passes WCAG AA under normal vision and under
simulated protanopia, deuteranopia and tritanopia. Nothing conveys meaning by
colour alone. `python3 tools/check-colours.py` re-runs the audit and exits
non-zero on failure, so it doubles as a pre-deploy check.

The animation of a narrow band of light sweeping the phrase when it opens
fullscreen, is mimicking a slit lamp. It also signals to the patient and
healthcare provider that the screen has changed.

Where a phrase has a glyph, it appears above the words in the fullscreen view as
well, sized 1:1 with the text off a single CSS variable, so it cannot drift out
of proportion when the size changes.

The patient-facing fullscreen view has 3 text sizes, up to ~170px.
This is to accommodate patients with visual difficulties or who cannot hear — 
The largest text size should be readable at arm's length by a patient 
whose vision is poor.

The line under each phrase is an English-friendly phonetic re-spelling. 
Tone is not represented, so for Mandarin, Cantonese, and Vietnamese these get you close 
but not accurate. The scholarly romanizations are preserved in `tools/langdata.py`.

Typically, Punjabi inflects first-person futures and some participles for the
speaker's gender. Punjabi is written to avoid speaker-gender marking entirely.  
One form now works for male or female clinicians.

One phrase to watch when the translations are reviewed: the family history
question for glaucoma. Several languages name glaucoma and cataract as a matched
pair — Punjabi ਕਾਲਾ ਮੋਤੀਆ "black cataract" against ਸਫ਼ੈਦ ਮੋਤੀਆ "white cataract",
Farsi آب سیاه "black water" against آب مروارید, Arabic الماء الأزرق "blue water"
against الماء الأبيض — and patients mix them up in their own language. Both the
clinical and the lay term are given where they differ. A "no" here should not be
recorded as a negative family history without an interpreter confirming it.

The three shortcut boxes under Most used are a separate case from the phrase
glyphs below: they are navigation, and the clinician is the reader, so an icon
standing in for a whole stage is doing the job icons are actually good at.

Twelve phrases carry a glyph: four direction arrows, an open eye, a shut eye,
glasses, a tilted dropper, an ear, and a check. The check marks "Your eyes are
healthy" rather than a thumbs up, because a thumbs up is a gesture and gestures
are the one thing that does not travel — it is obscene in parts of the Middle
East and West Africa, which includes languages this card serves. A star or a
sparkle borrows "rated highly" or "new" from consumer apps and means nothing
about health outside that convention. They are redundant with the text on
purpose. An arrow alone is ambiguous between "your eyes go up" and "the thing is
up there", and an object icon is weaker still — a bottle names a noun while the
clinical content is the instruction attached to it, so the same picture could mean
"these are drops", "I am putting drops in", or "do you use drops at home". Beside
a phrase they reinforce it and make the card findable at a glance; they are never
something to point at instead of the words, and there is no icon row to point at.

Phrases whose meaning is a position rather than an object or a direction get
nothing: "Look here" and "Look straight ahead" are defined by where your hand is,
which no glyph can carry.

Search function corresponds to the English phrase only, not the translated script 
or the phonetic respelling

Mandarin has a simplified/traditional (简 / 繁) toggle. Cantonese is traditional only.
Farsi and Arabic render right-to-left; their romanization lines stay left-to-right.

## Licence

CC BY-NC-SA 4.0. Adapt it, translate it, use it in your Ophthalmology department. 
Don't sell it, and pass on the same terms.

Translations are provided in good faith and are not a substitute for a
professional interpreter.
