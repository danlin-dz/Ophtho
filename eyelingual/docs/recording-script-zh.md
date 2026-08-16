# Recording script — Mandarin

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
| `intro-doctor` | `intro-doctor.m4a` | 我是您的眼科医生。 | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | 请坐这里。 | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | 痛吗？哪里痛？请指一下。 | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | 您家里有人得过青光眼吗？ | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | 请把眼镜戴上。 | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | 请遮住左眼。 | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | 请遮住右眼。 | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | 您的视力像哪一个？请指最接近的。 | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | 请念您能看到的最小的一行。 | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | 请透过小孔看，可能会更清楚。 | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | 几根手指？ | How many fingers? |
| `vis-see-this` | `vis-see-this.m4a` | 看得见吗？ | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | 看到光移动请告诉我。 | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | 请看我的鼻子。 | Look at my nose. |
| `vis-double` | `vis-double.m4a` | 您看到两个我吗？ | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | 看这个方向更严重吗？ | Is it worse looking this way? |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | 我要用灯照您的眼睛，请看我身后的墙。 | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | 不要看灯，一直看远处。 | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | 两只眼睛都睁开。 | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-finger` | `mot-finger.m4a` | 请看我的手指，头不要动。 | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | 往上看。 | Look up. |
| `mot-down` | `mot-down.m4a` | 往下看。 | Look down. |
| `mot-left` | `mot-left.m4a` | 往左看。 | Look left. |
| `mot-right` | `mot-right.m4a` | 往右看。 | Look right. |
| `mot-straight` | `mot-straight.m4a` | 请看正前方。 | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | 我要测量您的眼压。 | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | 这不会痛，您会感觉眼睛被轻轻碰到。 | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | 请看正前方，不要动，尽量不要眨眼。 | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | 一直看着我的鼻子，不要看我的手。 | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | 看到我的手指请举手。 | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | 现在看到几根手指？ | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | 您对药物过敏吗？ | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | 我要给您点眼药水。 | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | 请往上看。 | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | 这是眼睛的麻药，可能会刺痛几秒钟。 | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | 这是散瞳药水。 | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | 您的视力会模糊大约六个小时。 | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | 请闭上眼睛。 | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | 不要揉眼睛。 | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | 下巴放在这里，额头靠着这里。 | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | 请把眼睛睁大。 | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | 头不要往后退。 | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | 灯会很亮，请忍一下。 | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | 请看我的耳朵。 | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | 我要碰一下您的眼皮。 | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | 快好了。 | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | 检查完了，谢谢您。 | The exam is finished. Thank you. |
| `close-interpreter` | `close-interpreter.m4a` | 我们会用翻译跟您解释检查结果。 | We will use an interpreter to explain the results. |

---

**48 takes total.** Roughly 20 minutes of recording including retakes.
