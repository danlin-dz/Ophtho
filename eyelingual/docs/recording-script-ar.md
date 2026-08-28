# Recording script — Arabic

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/ar/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/ar/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `intro-doctor` | `intro-doctor.m4a` | أنا طبيب العيون. | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | من فضلك اجلس هنا. | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | هل تشعر بألم؟ أشر إلى مكانه. | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | هل أحد في عائلتك مصاب بالماء الأزرق (الجلوكوما)؟ | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | من فضلك ضع نظارتك. | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | غطِّ عينك اليسرى. | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | غطِّ عينك اليمنى. | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | هل ترى مثل إحدى هذه؟ أشر إلى الأقرب. | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | اقرأ أصغر سطر تراه. | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | انظر من الثقب الصغير، قد ترى أوضح. | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | كم إصبعاً؟ | How many fingers? |
| `vis-hand-motion` | `vis-hand-motion.m4a` | هل ترى يدي تتحرك؟ | Do you see my hand moving? |
| `vis-see-this` | `vis-see-this.m4a` | هل ترى هذا؟ | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | أخبرني إذا رأيت الضوء يتحرك. | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | انظر إلى أنفي. | Look at my nose. |
| `vis-double` | `vis-double.m4a` | هل ترانِي اثنين؟ | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | هل يزداد سوءاً عند النظر هكذا؟ | Is it worse looking this way? |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | سأسلط ضوءاً على عينيك. انظر إلى الحائط خلفي. | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | لا تنظر إلى الضوء، انظر إلى البعيد. | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | أبقِ كلتا عينيك مفتوحتين. | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-look-here` | `mot-look-here.m4a` | انظر هنا. | Look here. |
| `mot-finger` | `mot-finger.m4a` | انظر إلى إصبعي. لا تحرك رأسك. | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | انظر إلى الأعلى. | Look up. |
| `mot-down` | `mot-down.m4a` | انظر إلى الأسفل. | Look down. |
| `mot-left` | `mot-left.m4a` | انظر إلى اليسار. | Look left. |
| `mot-right` | `mot-right.m4a` | انظر إلى اليمين. | Look right. |
| `mot-straight` | `mot-straight.m4a` | انظر إلى الأمام مباشرة. | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | سأقيس ضغط عينك. | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | هذا لا يؤلم. ستشعر بلمسة خفيفة على عينك. | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | انظر إلى الأمام، لا تتحرك، وحاول ألا ترمش. | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | انظر إلى أنفي، لا إلى يدي. | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | ارفع يدك عندما ترى أصابعي. | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | كم إصبعاً ترى الآن؟ | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | هل لديك حساسية من أي دواء؟ | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | سأضع قطرة في عينك. | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | من فضلك انظر إلى الأعلى. | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | هذه قطرة مخدرة للعين. قد تسبب وخزاً لبضع ثوانٍ. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | هذه القطرة توسع حدقة العين. | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | ستكون رؤيتك ضبابية نحو ست ساعات. | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | من فضلك أغمض عينيك. | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | لا تفرك عينيك. | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | ضع ذقنك هنا وألصق جبهتك بهذا الشريط. | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | افتح عينيك جيداً. | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | لا تسحب رأسك للخلف. | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | الضوء ساطع. تحمل قليلاً. | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | انظر إلى أذني. | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | سألمس جفنك. | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | أوشكنا على الانتهاء. | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | انتهى الفحص. شكراً لك. | The exam is finished. Thank you. |
| `close-healthy` | `close-healthy.m4a` | عيناك سليمتان. | Your eyes are healthy. |
| `close-consult` | `close-consult.m4a` | سأتحدث مع طبيب آخر عن عينيك. سأعود قريباً. | I will have to speak to another doctor about your eyes. I will be back. |
| `close-interpreter` | `close-interpreter.m4a` | سنستعين بمترجم لشرح النتائج. | We will use an interpreter to explain the results. |

---

**52 takes total.** Roughly 20 minutes of recording including retakes.
