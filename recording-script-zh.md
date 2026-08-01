# Recording script — Mandarin

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/zh/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/zh/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `s01-01` | `s01-01.m4a` | 我是医生，我来检查您的眼睛。 | I'm the doctor, I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | 请坐这里。 | Please sit here. |
| `s01-03` | `s01-03.m4a` | 请把眼镜摘下来。 | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | 痛吗？哪里痛？请指一下。 | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | 请念您能看到的最小的一行。 | Please read the smallest line you can see. |
| `s02-02` | `s02-02.m4a` | 几根手指？ | How many fingers? |
| `s02-03` | `s02-03.m4a` | 看得见吗？ | Can you see this? |
| `s02-04` | `s02-04.m4a` | 看到光移动请告诉我。 | Tell me if you see the light move. |
| `s02-05` | `s02-05.m4a` | 请看我的鼻子。 | Look at my nose. |
| `s02-06` | `s02-06.m4a` | 您看到两个我吗？ | Do you see two of me? |
| `s02-07` | `s02-07.m4a` | 看这个方向更严重吗？ | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | 请看我的手指，头不要动。 | Look at my finger. Don't move your head. |
| `s03-02` | `s03-02.m4a` | 往上看。 | Look up. |
| `s03-03` | `s03-03.m4a` | 往下看。 | Look down. |
| `s03-04` | `s03-04.m4a` | 往左看。 | Look left. |
| `s03-05` | `s03-05.m4a` | 往右看。 | Look right. |
| `s03-06` | `s03-06.m4a` | 看远处。 | Look far away. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | 您对药物过敏吗？ | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | 我要给您点眼药水。 | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | 请往上看。 | Please look up. |
| `s04-04` | `s04-04.m4a` | 这是眼睛的麻药，可能会刺痛几秒钟。 | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | 这是散瞳药水。 | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | 您的视力会模糊大约六个小时。 | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | 请闭上眼睛。 | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | 不要揉眼睛。 | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | 下巴放在这里。 | Chin on the rest. |
| `s05-02` | `s05-02.m4a` | 额头靠着这里。 | Forehead against the bar. |
| `s05-03` | `s05-03.m4a` | 头不要往后退。 | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | 灯会很亮，请忍一下。 | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | 请看我的耳朵。 | Look at my ear. |
| `s05-06` | `s05-06.m4a` | 我要碰一下您的眼皮。 | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | 快好了。 | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | 检查完了，谢谢您。 | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | 我们会用翻译跟您解释检查结果。 | We will use an interpreter to explain the results. |

---

**34 takes total.** Roughly 20 minutes of recording including retakes.
