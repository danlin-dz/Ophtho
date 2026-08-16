# Recording script — Tagalog

48 takes. One file per phrase, named exactly by its ID.

## For the speaker

Read each line the way you would say it to a patient in their seventies who is
anxious and cannot see well: unhurried, warm, fully articulated. Not a
newsreader, not a robot. Slightly slower than conversational pace.

- One take per file. Leave about 0.3 s of silence at the start and end.
- Quiet room, phone or laptop mic is fine held a hand's width away, no music.
- If you would phrase something differently as a clinician or as a native
  speaker, say so. These translations have not been reviewed and your correction
  matters more than the recording.

## For whoever processes the files

Mono, 32–48 kbps AAC in .m4a. From any source format:

    for f in raw/*.wav; do
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/tl/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/tl/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `intro-doctor` | `intro-doctor.m4a` | Ako po ang inyong doktor sa mata. | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | Maupo po kayo rito. | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | Masakit po ba? Ituro po ninyo kung saan. | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | May kamag-anak po ba kayong may glaucoma? | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | Isuot po ninyo ang inyong salamin. | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | Takpan po ninyo ang kaliwang mata. | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | Takpan po ninyo ang kanang mata. | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | Alin po ang pinakamalapit sa nakikita ninyo? Ituro po ninyo. | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | Pakibasa po ang pinakamaliit na linyang nakikita ninyo. | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | Tingnan po ninyo sa maliit na butas, baka mas linaw. | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | Ilang daliri po? | How many fingers? |
| `vis-see-this` | `vis-see-this.m4a` | Nakikita po ba ninyo ito? | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | Sabihin po ninyo kung gumagalaw ang ilaw. | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | Tingnan po ninyo ang ilong ko. | Look at my nose. |
| `vis-double` | `vis-double.m4a` | Nakikita po ba ninyo akong dalawa? | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | Mas malala po ba kapag tumitingin sa ganitong direksyon? | Is it worse looking this way? |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | Tatapatan ko po ng ilaw ang mga mata ninyo. Tingnan po ninyo ang pader sa likod ko. | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | Huwag po tingnan ang ilaw, tumingin po sa malayo. | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | Imulat po ninyo ang dalawang mata. | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-finger` | `mot-finger.m4a` | Tingnan po ninyo ang daliri ko. Huwag pong igalaw ang ulo. | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | Tumingin po sa itaas. | Look up. |
| `mot-down` | `mot-down.m4a` | Tumingin po sa ibaba. | Look down. |
| `mot-left` | `mot-left.m4a` | Tumingin po sa kaliwa. | Look left. |
| `mot-right` | `mot-right.m4a` | Tumingin po sa kanan. | Look right. |
| `mot-straight` | `mot-straight.m4a` | Tumingin po sa harap. | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | Susukatin ko po ang presyon ng mata ninyo. | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | Hindi po ito masakit. Makakaramdam po kayo ng bahagyang dampi sa mata. | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | Tumingin po sa harap, huwag pong gumalaw, at huwag pong kumurap. | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | Tingnan po ninyo ang ilong ko, huwag ang kamay ko. | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | Itaas po ninyo ang kamay kapag nakita ang daliri ko. | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | Ilang daliri po ang nakikita ninyo ngayon? | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | May allergy po ba kayo sa kahit anong gamot? | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | Lalagyan ko po ng patak ang mata ninyo. | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | Tumingin po sa itaas. | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | Pampamanhid po ito sa mata. Maaaring humapdi ng ilang segundo. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | Palalakihin po nito ang balintataw ninyo. | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | Malalabo po ang paningin ninyo nang humigit-kumulang anim na oras. | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | Ipikit po ninyo ang mga mata. | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | Huwag pong kuskusin ang mata. | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | Ipatong po ang baba dito at idikit ang noo sa bar. | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | Imulat po ninyo nang maluwang ang mga mata. | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | Huwag pong iurong ang ulo. | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | Maliwanag po ang ilaw. Pasensya po sandali. | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | Tingnan po ninyo ang tainga ko. | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | Hahawakan ko po ang talukap ng mata ninyo. | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | Malapit na pong tapos. | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | Tapos na po ang pagsusuri. Salamat po. | The exam is finished. Thank you. |
| `close-interpreter` | `close-interpreter.m4a` | Gagamit po tayo ng interpreter para ipaliwanag ang resulta. | We will use an interpreter to explain the results. |

---

**48 takes total.** Roughly 20 minutes of recording including retakes.
