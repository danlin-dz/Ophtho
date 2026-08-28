# Recording script — Japanese

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/ja/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/ja/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `intro-doctor` | `intro-doctor.m4a` | 眼科医です。 | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | ここに座ってください。 | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | 痛みますか？どこか指さしてください。 | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | ご家族に緑内障の方はいますか？ | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | 眼鏡をかけてください。 | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | 左目を隠してください。 | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | 右目を隠してください。 | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | どれに近いですか？一番近いものを指さしてください。 | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | 見える一番小さい行を読んでください。 | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | 小さな穴から見てください。よく見えるかもしれません。 | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | 指は何本ですか？ | How many fingers? |
| `vis-hand-motion` | `vis-hand-motion.m4a` | 手が動いているのが見えますか？ | Do you see my hand moving? |
| `vis-see-this` | `vis-see-this.m4a` | これが見えますか？ | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | 光が動いたら教えてください。 | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | 私の鼻を見てください。 | Look at my nose. |
| `vis-double` | `vis-double.m4a` | 私が二人に見えますか？ | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | こちらを見るとひどくなりますか？ | Is it worse looking this way? |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | 目に光を当てます。私の後ろの壁を見てください。 | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | 光を見ないで、遠くを見ていてください。 | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | 両目を開けたままにしてください。 | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-look-here` | `mot-look-here.m4a` | ここを見てください。 | Look here. |
| `mot-finger` | `mot-finger.m4a` | 私の指を見てください。頭は動かさないでください。 | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | 上を見てください。 | Look up. |
| `mot-down` | `mot-down.m4a` | 下を見てください。 | Look down. |
| `mot-left` | `mot-left.m4a` | 左を見てください。 | Look left. |
| `mot-right` | `mot-right.m4a` | 右を見てください。 | Look right. |
| `mot-straight` | `mot-straight.m4a` | まっすぐ前を見てください。 | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | 眼圧を測ります。 | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | 痛くありません。目に軽く触れる感じがします。 | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | まっすぐ前を見て、動かないでください。まばたきもしないでください。 | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | 私の鼻を見続けてください。手を見ないでください。 | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | 指が見えたら手を上げてください。 | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | 今、指は何本見えますか？ | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | 薬のアレルギーはありますか？ | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | 目薬をさします。 | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | 上を見てください。 | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | 目の麻酔薬です。数秒しみることがあります。 | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | この目薬は瞳孔を広げます。 | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | 約6時間、見えにくくなります。 | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | 目を閉じてください。 | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | 目をこすらないでください。 | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | 顎をここに乗せ、額をここにつけてください。 | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | 目を大きく開けてください。 | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | 頭を後ろに引かないでください。 | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | 光が眩しいです。少し我慢してください。 | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | 私の耳を見てください。 | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | まぶたに触ります。 | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | もうすぐ終わります。 | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | 診察は終わりです。ありがとうございました。 | The exam is finished. Thank you. |
| `close-healthy` | `close-healthy.m4a` | 目は健康です。 | Your eyes are healthy. |
| `close-consult` | `close-consult.m4a` | 目のことを別の医師と相談します。すぐ戻ります。 | I will have to speak to another doctor about your eyes. I will be back. |
| `close-interpreter` | `close-interpreter.m4a` | 結果は通訳を通して説明します。 | We will use an interpreter to explain the results. |

---

**52 takes total.** Roughly 20 minutes of recording including retakes.
