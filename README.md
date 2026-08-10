# Eyelingual

Cards for an ophthalmic examination. Can be used offline with no service.
Pick a language, tap a phrase, it fills the screen.
The patient can read the phrase, or tap the speaker and it plays aloud.

9 languages: Mandarin, Cantonese, Punjabi, Farsi, Arabic, Korean, Japanese,
Vietnamese, Tagalog. Each card opens with a **Most used** panel at the top with
the seven direction and eyelid commands that come up on nearly every exam.

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

## Exam order

Nine stages: intro, visual acuity, pupils, eye movements, intraocular pressure,
confrontation fields, drops, slit lamp, closing. Pressure is measured before any
dilating drop. 47 phrases per language.

Phrase ids are stable semantic slugs (`vis-fingers`, `iop-check`), not positions.
Reordering a stage or inserting a phrase never renames anything, so recorded
audio stays attached to its phrase.

## The image pickers

Two pickers sit in the Vision stage. The symptom grid renders directly beneath
the question that introduces it; the diplopia picker after "Do you see two of
me?". Both are anchored by phrase id in `tools/langdata.py`, so moving either is
one field, not a code change.

This is the strongest case for imagery on the whole site. Perceptual experience
has no gesture equivalent and is clumsy to describe in any language, so a picture
asks it better than a sentence can.

Two source photographs, on purpose:

- `_src/scene.jpg` — a wide view with fine linear detail. Blur and distortion are
  only legible against straight lines; a soft landscape shows nothing.
- `_src/dip.jpg` — a hard vertical silhouette and one discrete bright disc against
  near-empty sky, so the doubling is unambiguous: two towers, two suns. Soft
  repeating texture is the thing to avoid; a crop on tree foliage was tried and
  read as one blurry tree rather than two.

Fourteen symptom tiles and three diplopia tiles. Regenerate both sets with
`python3 tools/make-symptom-images.py _src/scene.jpg _src/dip.jpg`. A locally
recognisable scene works better than a generic one — a patient who has stood on
that street maps their own experience onto it faster.

### Why field loss is not drawn black

**Do not reintroduce black.** The black-tunnel image used almost everywhere
online is not merely stylised, it is misleading, and the evidence against it is
direct.

Crabb DP, Smith ND, Glen FC, Burton R, Garway-Heath DF. *How does glaucoma look?
Patient perception of visual field loss.* Ophthalmology. 2013;120(6):1120–6.
PMID 23415421. Fifty patients aged 52–82 with a range of glaucomatous field
defects were shown six renderings and asked which matched their own vision. The
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
scotoma, tunnel) is drawn darkened and blurred together, with a soft gradient
edge. Detail goes before luminance, and nothing has a hard boundary. This is a
compromise — closer to "absent" than black, and legible at thumbnail size where
pure blur is not. It is informed by the evidence above rather than validated by
it, and a reviewer may reasonably want it softer still.

**A detachment curtain does render dark**, because that is the word patients
use — a shadow or curtain coming across. Different phenomenon, different
reasoning.

Scope caveat: the symptom picker edges toward history taking, which the rest of
the card defers to an interpreter. It is meant for triage when no interpreter is
immediately to hand, and what the patient points at still needs confirming
through one.

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

1. `node tools/make-recording-scripts.js ko` → a 47-take script with recording
   notes. Hand it to the speaker.
2. Convert to mono AAC, drop the files in `audio/ko/` named by phrase ID.
3. List the IDs in the `recorded` array of `audio/ko/index.json`.
4. Bump `CACHE` in `tools/build.py` and rebuild.

Anything not listed in `recorded` falls back to the device voice, so partial sets
ship fine. Phrases with a real recording show a dot on the speaker button.

Phrase IDs are identical across all nine languages: `vis-fingers` in Korean is
the same sentence as `vis-fingers` in Arabic. That keeps the recording scripts
comparable and means audio folders share filenames.

## Notes on the design

The palette is taken from a dilated fundus — pupil black, red reflex orange,
optic disc cream. Light text on dark is a deliberate choice: exams are often
conducted in dim settings, a bright phone ruins dark adaptation, and the
patient is often photophobic, and reduced glare scatter helps anyone with a cataract.

Every foreground and background pair passes WCAG AA under normal vision and under
simulated protanopia, deuteranopia and tritanopia. Nothing conveys meaning by
colour alone. `python3 tools/check-colours.py` re-runs the audit and exits
non-zero on failure, so it doubles as a pre-deploy check.

The one animation, a narrow band of light sweeping the phrase when it opens
fullscreen, is mimicking a slit lamp. It also signals to the patient and
healthcare provider that the screen has changed.

The patient-facing fullscreen view has three text sizes, up to roughly 170px.
This is chiefly for patients who cannot hear — the screen is the whole channel
then, and it has to be readable at arm's length by someone whose vision is also
the problem.

The line under each phrase is an English-friendly phonetic respelling, not a
scholarly romanisation — "jow fye hoe lah" rather than "Zau6 faai3 hou2 laa3",
because tone numbers and diacritics tell a non-speaker nothing. Tone is not
represented, so for Mandarin, Cantonese, and Vietnamese these get you close but
not accurate. The scholarly romanizations are preserved in `tools/langdata.py`.

Punjabi is written to avoid speaker-gender marking entirely. Punjabi inflects
first-person futures and some participles for the speaker's gender, which would
otherwise mean a female clinician reading masculine forms. Four phrases needed
rewording — `vis-double`, `drp-putting`, `slit-touch-lid`, `close-interpreter` —
each moving agreement onto a noun or an impersonal construction. The rest are
imperatives or agree with a noun, so they were already neutral. One form now
works for male or female. A first-person future will reintroduce the problem, so
keep it in mind when editing Punjabi wording.

Search matches the English label only. Searching the target script or the
phonetic respelling turns up matches the clinician cannot read back, and the
respellings in particular produce noise — "kahn" hits half the Mandarin card.

Mandarin has a simplified/traditional (简 / 繁) toggle, and uses one font for both
so punctuation does not shift position when you switch.
Cantonese is traditional only.
Farsi and Arabic render right-to-left; their romanization lines stay left-to-right.

## Licence

CC BY-NC-SA 4.0. Adapt it, translate it, use it in your department. Don't sell
it, and pass on the same terms.

Translations are provided in good faith and are not a substitute for a
professional interpreter.
