# Recording script — Mandarin

52 takes. One file per phrase, named exactly by its ID.

## For the speaker

Read each line the way you would say it to a patient in their seventies who is
anxious and cannot see well: unhurried, warm, fully articulated. Not a
newsreader, not a robot. Slightly slower than conversational pace.

- Record the **simplified column** unless you were asked otherwise. The two
  columns differ in writing only; they are pronounced identically.
- One take per file. Leave about 0.3 s of silence at the start and end.
- Quiet room, phone or laptop mic is fine held a hand's width away, no music.
- If you would phrase something differently as a clinician, say so — the wording
  is not fixed and you are the check on it.

## For whoever processes the files

Mono, 32–48 kbps AAC in .m4a. From any source format:

    for f in raw/*.wav; do
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/zh/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/zh/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 00 · Before anything

| ID | File | Say this | English |
|---|---|---|---|
| `s00-01` | `s00-01.m4a` | 您需要翻译吗？ | Do you need an interpreter? |
| `s00-02` | `s00-02.m4a` | 我现在帮您叫翻译。 | I will call an interpreter now. |
| `s00-03` | `s00-03.m4a` | 您说普通话还是广东话？ | Do you speak Mandarin or Cantonese? |

## 01 · Approach

| ID | File | Say this | English |
|---|---|---|---|
| `s01-01` | `s01-01.m4a` | 我是医生，我来检查您的眼睛。 | I am the doctor. I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | 请坐这里。 | Please sit here. |
| `s01-03` | `s01-03.m4a` | 请把眼镜摘下来。 | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | 痛吗？哪里痛？请指一下。 | Does it hurt? Point to where. |
| `s01-05` | `s01-05.m4a` | 什么时候开始的？ | When did this start? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | 请遮住这只眼睛。 | Please cover this eye. |
| `s02-02` | `s02-02.m4a` | 不要压到眼睛。 | Don't press on your eye. |
| `s02-03` | `s02-03.m4a` | 请念您能看到的最小的一行。 | Please read the smallest line you can see. |
| `s02-04` | `s02-04.m4a` | 这是几？ | What number is this? |
| `s02-05` | `s02-05.m4a` | 几根手指？ | How many fingers? |
| `s02-06` | `s02-06.m4a` | 看得见吗？ | Can you see this? |
| `s02-07` | `s02-07.m4a` | 清楚还是模糊？ | Is it clear, or blurry? |
| `s02-08` | `s02-08.m4a` | 哪个清楚？第一个还是第二个？ | Which is better — one, or two? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | 请看我的手指，头不要动。 | Look at my finger. Don't move your head. |
| `s03-02` | `s03-02.m4a` | 请看我的鼻子。 | Look at my nose. |
| `s03-03` | `s03-03.m4a` | 往上看。 | Look up. |
| `s03-04` | `s03-04.m4a` | 往下看。 | Look down. |
| `s03-05` | `s03-05.m4a` | 往左看。 | Look left. |
| `s03-06` | `s03-06.m4a` | 往右看。 | Look right. |
| `s03-07` | `s03-07.m4a` | 看远处。 | Look far away. |
| `s03-08` | `s03-08.m4a` | 有没有看到两个？ | Do you see two of them? |
| `s03-09` | `s03-09.m4a` | 看这个方向更严重吗？ | Is it worse looking this way? |
| `s03-10` | `s03-10.m4a` | 看到光移动请告诉我。 | Tell me if you see the light move. |

## 04 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | 下巴放在这里。 | Chin on the rest. |
| `s04-02` | `s04-02.m4a` | 额头靠着这里。 | Forehead against the bar. |
| `s04-03` | `s04-03.m4a` | 头不要往后退。 | Don't pull your head back. |
| `s04-04` | `s04-04.m4a` | 眼睛睁大。 | Open your eyes wide. |
| `s04-05` | `s04-05.m4a` | 尽量不要眨眼。 | Try not to blink. |
| `s04-06` | `s04-06.m4a` | 灯会很亮，请忍一下。 | The light is bright. Please bear with it. |
| `s04-07` | `s04-07.m4a` | 请看我的耳朵。 | Look at my ear. |
| `s04-08` | `s04-08.m4a` | 我要碰一下您的眼皮。 | I'm going to touch your eyelid. |
| `s04-09` | `s04-09.m4a` | 快好了。 | Almost done. |

## 05 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | 我要给您点眼药水。 | I'm going to put drops in your eye. |
| `s05-02` | `s05-02.m4a` | 请往上看。 | Please look up. |
| `s05-03` | `s05-03.m4a` | 这是麻药，会有点凉。 | This is anaesthetic. It will feel cold. |
| `s05-04` | `s05-04.m4a` | 会刺痛几秒钟。 | It will sting for a few seconds. |
| `s05-05` | `s05-05.m4a` | 请闭上眼睛。 | Please close your eyes. |
| `s05-06` | `s05-06.m4a` | 不要揉眼睛。 | Don't rub your eyes. |
| `s05-07` | `s05-07.m4a` | 您对药物过敏吗？ | Are you allergic to any medication? |

## 06 · Dilating drops — safety

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | 这是散瞳药水。 | This drop will dilate your pupils. |
| `s06-02` | `s06-02.m4a` | 您的视力会模糊四到六个小时。 | Your vision will be blurry for 4 to 6 hours. |
| `s06-03` | `s06-03.m4a` | 您会很怕光。 | You will be very sensitive to light. |
| `s06-04` | `s06-04.m4a` | 今天请不要开车。 | Please do not drive today. |
| `s06-05` | `s06-05.m4a` | 有人可以送您回家吗？ | Is someone able to take you home? |
| `s06-06` | `s06-06.m4a` | 戴太阳镜会舒服一些。 | Sunglasses will help. |

## 07 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s07-01` | `s07-01.m4a` | 检查完了，谢谢您。 | The exam is finished. Thank you. |
| `s07-02` | `s07-02.m4a` | 请在外面稍等一下。 | Please wait outside for a moment. |
| `s07-03` | `s07-03.m4a` | 我们会用翻译跟您解释检查结果。 | We will use an interpreter to explain the results. |
| `s07-04` | `s07-04.m4a` | 您有什么问题吗？ | Do you have any questions? |

---

**52 takes total.** Roughly 25 minutes of recording including retakes.
