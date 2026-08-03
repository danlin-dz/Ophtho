# Recording script — Farsi

35 takes. One file per phrase, named exactly by its ID.

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/fa/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/fa/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `s01-01` | `s01-01.m4a` | من دکتر هستم، چشم‌های شما را معاینه می‌کنم. | I'm the doctor, I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | لطفاً اینجا بنشینید. | Please sit here. |
| `s01-03` | `s01-03.m4a` | لطفاً عینک خود را بردارید. | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | درد دارید؟ کجا؟ اشاره کنید. | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | لطفاً عینک خود را بزنید. | Put your glasses on. |
| `s02-02` | `s02-02.m4a` | کوچک‌ترین خطی که می‌بینید بخوانید. | Please read the smallest line you can see. |
| `s02-03` | `s02-03.m4a` | چند انگشت؟ | How many fingers? |
| `s02-04` | `s02-04.m4a` | این را می‌بینید؟ | Can you see this? |
| `s02-05` | `s02-05.m4a` | اگر نور حرکت کرد به من بگویید. | Tell me if you see the light move. |
| `s02-06` | `s02-06.m4a` | به بینی من نگاه کنید. | Look at my nose. |
| `s02-07` | `s02-07.m4a` | آیا مرا دوتا می‌بینید؟ | Do you see two of me? |
| `s02-08` | `s02-08.m4a` | وقتی به این طرف نگاه می‌کنید بدتر است؟ | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | به انگشت من نگاه کنید. سرتان را تکان ندهید. | Look at my finger. Do not move your head. |
| `s03-02` | `s03-02.m4a` | به بالا نگاه کنید. | Look up. |
| `s03-03` | `s03-03.m4a` | به پایین نگاه کنید. | Look down. |
| `s03-04` | `s03-04.m4a` | به چپ نگاه کنید. | Look left. |
| `s03-05` | `s03-05.m4a` | به راست نگاه کنید. | Look right. |
| `s03-06` | `s03-06.m4a` | مستقیم به جلو نگاه کنید. | Look straight ahead. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | به دارویی حساسیت دارید؟ | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | در چشم شما قطره می‌ریزم. | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | لطفاً به بالا نگاه کنید. | Please look up. |
| `s04-04` | `s04-04.m4a` | این قطره بی‌حسی چشم است. ممکن است چند ثانیه بسوزد. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | این قطره مردمک را گشاد می‌کند. | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | دید شما حدود شش ساعت تار خواهد بود. | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | لطفاً چشمانتان را ببندید. | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | چشمانتان را نمالید. | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | چانه را اینجا بگذارید و پیشانی را به این میله تکیه دهید. | Chin on the rest, forehead against the bar. |
| `s05-02` | `s05-02.m4a` | چشمانتان را باز کنید. | Open your eyes. |
| `s05-03` | `s05-03.m4a` | سرتان را عقب نکشید. | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | نور تند است. کمی تحمل کنید. | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | به گوش من نگاه کنید. | Look at my ear. |
| `s05-06` | `s05-06.m4a` | پلک شما را لمس می‌کنم. | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | تقریباً تمام شد. | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | معاینه تمام شد. متشکرم. | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | برای توضیح نتایج از مترجم استفاده می‌کنیم. | We will use an interpreter to explain the results. |

---

**35 takes total.** Roughly 20 minutes of recording including retakes.
