# Recording script — Arabic

34 takes. One file per phrase, named exactly by its ID.

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
| `s01-01` | `s01-01.m4a` | أنا الطبيب، سأفحص عينيك. | I'm the doctor, I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | من فضلك اجلس هنا. | Please sit here. |
| `s01-03` | `s01-03.m4a` | من فضلك اخلع نظارتك. | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | هل تشعر بألم؟ أشر إلى مكانه. | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | اقرأ أصغر سطر تراه. | Please read the smallest line you can see. |
| `s02-02` | `s02-02.m4a` | كم إصبعاً؟ | How many fingers? |
| `s02-03` | `s02-03.m4a` | هل ترى هذا؟ | Can you see this? |
| `s02-04` | `s02-04.m4a` | أخبرني إذا رأيت الضوء يتحرك. | Tell me if you see the light move. |
| `s02-05` | `s02-05.m4a` | انظر إلى أنفي. | Look at my nose. |
| `s02-06` | `s02-06.m4a` | هل ترانِي اثنين؟ | Do you see two of me? |
| `s02-07` | `s02-07.m4a` | هل يزداد سوءاً عند النظر هكذا؟ | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | انظر إلى إصبعي. لا تحرك رأسك. | Look at my finger. Don't move your head. |
| `s03-02` | `s03-02.m4a` | انظر إلى الأعلى. | Look up. |
| `s03-03` | `s03-03.m4a` | انظر إلى الأسفل. | Look down. |
| `s03-04` | `s03-04.m4a` | انظر إلى اليسار. | Look left. |
| `s03-05` | `s03-05.m4a` | انظر إلى اليمين. | Look right. |
| `s03-06` | `s03-06.m4a` | انظر إلى البعيد. | Look far away. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | هل لديك حساسية من أي دواء؟ | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | سأضع قطرة في عينك. | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | من فضلك انظر إلى الأعلى. | Please look up. |
| `s04-04` | `s04-04.m4a` | هذه قطرة مخدرة للعين. قد تسبب وخزاً لبضع ثوانٍ. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | هذه القطرة توسع حدقة العين. | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | ستكون رؤيتك ضبابية نحو ست ساعات. | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | من فضلك أغمض عينيك. | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | لا تفرك عينيك. | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | ضع ذقنك هنا. | Chin on the rest. |
| `s05-02` | `s05-02.m4a` | ألصق جبهتك بهذا الشريط. | Forehead against the bar. |
| `s05-03` | `s05-03.m4a` | لا تسحب رأسك للخلف. | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | الضوء ساطع. تحمل قليلاً. | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | انظر إلى أذني. | Look at my ear. |
| `s05-06` | `s05-06.m4a` | سألمس جفنك. | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | أوشكنا على الانتهاء. | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | انتهى الفحص. شكراً لك. | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | سنستعين بمترجم لشرح النتائج. | We will use an interpreter to explain the results. |

---

**34 takes total.** Roughly 20 minutes of recording including retakes.
