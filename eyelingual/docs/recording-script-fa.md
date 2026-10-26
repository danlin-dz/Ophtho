# Recording script — Farsi

53 takes. One file per phrase, named exactly by its ID.

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
| `intro-doctor` | `intro-doctor.m4a` | من چشم‌پزشک شما هستم. | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | لطفاً اینجا بنشینید. | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | درد دارید؟ کجا؟ اشاره کنید. | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | در خانواده شما کسی آب سیاه (گلوکوم) داشته؟ | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | لطفاً عینک خود را بزنید. | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | چشم چپ خود را بپوشانید. | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | چشم راست خود را بپوشانید. | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | دید شما شبیه کدام است؟ به نزدیک‌ترین اشاره کنید. | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | کوچک‌ترین خطی که می‌بینید بخوانید. | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | از سوراخ کوچک نگاه کنید، شاید واضح‌تر شود. | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | چند انگشت؟ | How many fingers? |
| `vis-hand-motion` | `vis-hand-motion.m4a` | حرکت دست من را می‌بینید؟ | Do you see my hand moving? |
| `vis-see-this` | `vis-see-this.m4a` | این را می‌بینید؟ | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | اگر نور حرکت کرد به من بگویید. | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | به بینی من نگاه کنید. | Look at my nose. |
| `vis-double` | `vis-double.m4a` | آیا مرا دوتا می‌بینید؟ | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | وقتی به این طرف نگاه می‌کنید بدتر است؟ | Is it worse looking this way? |
| `dip-ask` | `dip-ask.m4a` | اگر دوتا می‌بینید، چگونه قرار دارند؟ اشاره کنید. | If you see two — how are they arranged? Point. |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | با چراغ به چشمانتان نور می‌تابانم. به دیوار پشت سر من نگاه کنید. | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | به نور نگاه نکنید، به دور نگاه کنید. | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | هر دو چشم را باز نگه دارید. | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-look-here` | `mot-look-here.m4a` | اینجا را نگاه کنید. | Look here. |
| `mot-finger` | `mot-finger.m4a` | به انگشت من نگاه کنید. سرتان را تکان ندهید. | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | به بالا نگاه کنید. | Look up. |
| `mot-down` | `mot-down.m4a` | به پایین نگاه کنید. | Look down. |
| `mot-left` | `mot-left.m4a` | به چپ نگاه کنید. | Look left. |
| `mot-right` | `mot-right.m4a` | به راست نگاه کنید. | Look right. |
| `mot-straight` | `mot-straight.m4a` | مستقیم به جلو نگاه کنید. | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | فشار چشم شما را اندازه می‌گیرم. | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | درد ندارد. تماس ملایمی روی چشم حس می‌کنید. | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | مستقیم به جلو نگاه کنید، تکان نخورید و پلک نزنید. | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | به بینی من نگاه کنید، نه به دست من. | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | وقتی انگشتانم را دیدید دست بلند کنید. | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | حالا چند انگشت می‌بینید؟ | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | به دارویی حساسیت دارید؟ | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | در چشم شما قطره می‌ریزم. | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | لطفاً به بالا نگاه کنید. | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | این قطره بی‌حسی چشم است. ممکن است چند ثانیه بسوزد. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | این قطره مردمک را گشاد می‌کند. | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | دید شما حدود شش ساعت تار خواهد بود. | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | لطفاً چشمانتان را ببندید. | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | چشمانتان را نمالید. | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | چانه را اینجا بگذارید و پیشانی را به این میله تکیه دهید. | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | چشمانتان را کاملاً باز کنید. | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | سرتان را عقب نکشید. | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | نور تند است. کمی تحمل کنید. | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | به گوش من نگاه کنید. | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | پلک شما را لمس می‌کنم. | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | تقریباً تمام شد. | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | معاینه تمام شد. متشکرم. | The exam is finished. Thank you. |
| `close-healthy` | `close-healthy.m4a` | چشمان شما سالم است. | Your eyes are healthy. |
| `close-consult` | `close-consult.m4a` | باید درباره چشمان شما با پزشک دیگری صحبت کنم. زود برمی‌گردم. | I will have to speak to another doctor about your eyes. I will be back. |
| `close-interpreter` | `close-interpreter.m4a` | برای توضیح نتایج از مترجم استفاده می‌کنیم. | We will use an interpreter to explain the results. |

---

**53 takes total.** Roughly 20 minutes of recording including retakes.
