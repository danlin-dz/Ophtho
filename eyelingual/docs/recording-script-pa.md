# Recording script — Punjabi

52 takes. One file per phrase, named exactly by its ID.

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/pa/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/pa/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `intro-doctor` | `intro-doctor.m4a` | ਮੈਂ ਤੁਹਾਡਾ ਅੱਖਾਂ ਦਾ ਡਾਕਟਰ ਹਾਂ। | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਇੱਥੇ ਬੈਠੋ। | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | ਦਰਦ ਹੈ? ਕਿੱਥੇ? ਇਸ਼ਾਰਾ ਕਰੋ। | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਵਿੱਚ ਕਿਸੇ ਨੂੰ ਕਾਲਾ ਮੋਤੀਆ ਹੋਇਆ ਹੈ? | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਲਗਾਓ। | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | ਖੱਬੀ ਅੱਖ ਢੱਕੋ। | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | ਸੱਜੀ ਅੱਖ ਢੱਕੋ। | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | ਤੁਹਾਡੀ ਨਜ਼ਰ ਕਿਹੜੀ ਵਰਗੀ ਹੈ? ਸਭ ਤੋਂ ਨੇੜੇ ਵਾਲੀ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰੋ। | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | ਜੋ ਸਭ ਤੋਂ ਛੋਟੀ ਲਾਈਨ ਦਿਸਦੀ ਹੈ ਉਹ ਪੜ੍ਹੋ। | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | ਛੋਟੀ ਮੋਰੀ ਵਿੱਚੋਂ ਦੇਖੋ, ਸ਼ਾਇਦ ਸਾਫ਼ ਦਿਸੇ। | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ? | How many fingers? |
| `vis-hand-motion` | `vis-hand-motion.m4a` | ਕੀ ਤੁਹਾਨੂੰ ਮੇਰਾ ਹੱਥ ਹਿੱਲਦਾ ਦਿਸਦਾ ਹੈ? | Do you see my hand moving? |
| `vis-see-this` | `vis-see-this.m4a` | ਕੀ ਇਹ ਦਿਸਦਾ ਹੈ? | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | ਜੇ ਰੌਸ਼ਨੀ ਹਿਲਦੀ ਦਿਸੇ ਤਾਂ ਦੱਸੋ। | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖੋ। | Look at my nose. |
| `vis-double` | `vis-double.m4a` | ਕੀ ਤੁਹਾਨੂੰ ਦੋ ਦਿਸਦੇ ਹਨ? | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | ਇਸ ਪਾਸੇ ਦੇਖਣ ਤੇ ਵੱਧ ਹੁੰਦਾ ਹੈ? | Is it worse looking this way? |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | ਹੁਣ ਅੱਖਾਂ ਵਿੱਚ ਰੌਸ਼ਨੀ ਪਾਉਣੀ ਹੈ। ਮੇਰੇ ਪਿੱਛੇ ਕੰਧ ਵੱਲ ਦੇਖੋ। | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | ਰੌਸ਼ਨੀ ਵੱਲ ਨਾ ਦੇਖੋ, ਦੂਰ ਦੇਖਦੇ ਰਹੋ। | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | ਦੋਵੇਂ ਅੱਖਾਂ ਖੁੱਲ੍ਹੀਆਂ ਰੱਖੋ। | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-look-here` | `mot-look-here.m4a` | ਇੱਥੇ ਦੇਖੋ। | Look here. |
| `mot-finger` | `mot-finger.m4a` | ਮੇਰੀ ਉਂਗਲ ਵੱਲ ਦੇਖੋ। ਸਿਰ ਨਾ ਹਿਲਾਓ। | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | ਉੱਪਰ ਦੇਖੋ। | Look up. |
| `mot-down` | `mot-down.m4a` | ਹੇਠਾਂ ਦੇਖੋ। | Look down. |
| `mot-left` | `mot-left.m4a` | ਖੱਬੇ ਦੇਖੋ। | Look left. |
| `mot-right` | `mot-right.m4a` | ਸੱਜੇ ਦੇਖੋ। | Look right. |
| `mot-straight` | `mot-straight.m4a` | ਸਿੱਧਾ ਸਾਹਮਣੇ ਦੇਖੋ। | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | ਹੁਣ ਅੱਖ ਦਾ ਦਬਾਅ ਜਾਂਚਣਾ ਹੈ। | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | ਇਸ ਵਿੱਚ ਦਰਦ ਨਹੀਂ ਹੁੰਦਾ। ਅੱਖ ਉੱਤੇ ਹਲਕਾ ਜਿਹਾ ਛੋਹ ਮਹਿਸੂਸ ਹੋਵੇਗਾ। | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | ਸਿੱਧਾ ਸਾਹਮਣੇ ਦੇਖੋ, ਹਿੱਲੋ ਨਾ, ਅਤੇ ਪਲਕ ਨਾ ਝਪਕੋ। | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖਦੇ ਰਹੋ, ਮੇਰੇ ਹੱਥ ਵੱਲ ਨਾ ਦੇਖੋ। | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | ਮੇਰੀਆਂ ਉਂਗਲਾਂ ਦਿਸਣ ਤੇ ਹੱਥ ਚੁੱਕੋ। | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | ਹੁਣ ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ ਦਿਸਦੀਆਂ ਹਨ? | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | ਕੀ ਤੁਹਾਨੂੰ ਕਿਸੇ ਦਵਾਈ ਤੋਂ ਐਲਰਜੀ ਹੈ? | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | ਹੁਣ ਤੁਹਾਡੀ ਅੱਖ ਵਿੱਚ ਬੂੰਦਾਂ ਪਾਉਣੀਆਂ ਹਨ। | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਉੱਪਰ ਦੇਖੋ। | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | ਇਹ ਅੱਖ ਸੁੰਨ ਕਰਨ ਵਾਲੀ ਦਵਾਈ ਹੈ। ਕੁਝ ਸਕਿੰਟ ਚੁਭ ਸਕਦੀ ਹੈ। | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | ਇਹ ਬੂੰਦ ਪੁਤਲੀ ਖੋਲ੍ਹ ਦੇਵੇਗੀ। | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | ਨਜ਼ਰ ਲਗਭਗ ਛੇ ਘੰਟੇ ਧੁੰਦਲੀ ਰਹੇਗੀ। | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ। | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | ਅੱਖਾਂ ਨਾ ਮਲੋ। | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | ਠੋਡੀ ਇੱਥੇ ਰੱਖੋ, ਮੱਥਾ ਇਸ ਪੱਟੀ ਨਾਲ ਲਗਾਓ। | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | ਅੱਖਾਂ ਪੂਰੀਆਂ ਖੋਲ੍ਹੋ। | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | ਸਿਰ ਪਿੱਛੇ ਨਾ ਕਰੋ। | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | ਰੌਸ਼ਨੀ ਤੇਜ਼ ਹੈ। ਥੋੜ੍ਹਾ ਬਰਦਾਸ਼ਤ ਕਰੋ। | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | ਮੇਰੇ ਕੰਨ ਵੱਲ ਦੇਖੋ। | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | ਹੁਣ ਤੁਹਾਡੀ ਪਲਕ ਨੂੰ ਛੂਹਣਾ ਹੈ। | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | ਲਗਭਗ ਹੋ ਗਿਆ। | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | ਜਾਂਚ ਪੂਰੀ ਹੋ ਗਈ। ਧੰਨਵਾਦ। | The exam is finished. Thank you. |
| `close-healthy` | `close-healthy.m4a` | ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ ਠੀਕ ਹਨ। | Your eyes are healthy. |
| `close-consult` | `close-consult.m4a` | ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ ਬਾਰੇ ਦੂਜੇ ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰਨੀ ਹੈ। ਥੋੜ੍ਹੀ ਦੇਰ ਬਾਅਦ ਵਾਪਸ ਆਉਣਾ ਹੈ। | I will have to speak to another doctor about your eyes. I will be back. |
| `close-interpreter` | `close-interpreter.m4a` | ਨਤੀਜੇ ਸਮਝਾਉਣ ਲਈ ਦੁਭਾਸ਼ੀਏ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਵੇਗੀ। | We will use an interpreter to explain the results. |

---

**52 takes total.** Roughly 20 minutes of recording including retakes.
