# Recording script — Cantonese

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/yue/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/yue/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `intro-doctor` | `intro-doctor.m4a` | 我係你嘅眼科醫生。 | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | 請坐喺呢度。 | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | 痛唔痛？邊度痛？指俾我睇。 | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | 你家人有冇人生過青光眼？ | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | 請戴返眼鏡。 | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | 請遮住左眼。 | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | 請遮住右眼。 | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | 你嘅視力似邊個？請指最接近嗰個。 | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | 請讀你睇到最細嗰行。 | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | 請透過個細窿望，可能會清楚啲。 | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | 幾多隻手指？ | How many fingers? |
| `vis-hand-motion` | `vis-hand-motion.m4a` | 你見唔見到我隻手郁？ | Do you see my hand moving? |
| `vis-see-this` | `vis-see-this.m4a` | 睇唔睇到？ | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | 見到光郁請話我知。 | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | 望住我個鼻。 | Look at my nose. |
| `vis-double` | `vis-double.m4a` | 你係咪見到兩個我？ | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | 望呢邊會唔會嚴重啲？ | Is it worse looking this way? |
| `dip-ask` | `dip-ask.m4a` | 如果見到兩個，係點樣排？指俾我睇。 | If you see two — how are they arranged? Point. |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | 我要用燈照你對眼，請望我後面嘅牆。 | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | 唔好望住個燈，一直望遠啲。 | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | 兩隻眼都要擘大。 | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-look-here` | `mot-look-here.m4a` | 望呢度。 | Look here. |
| `mot-finger` | `mot-finger.m4a` | 望住我隻手指，唔好郁個頭。 | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | 望上。 | Look up. |
| `mot-down` | `mot-down.m4a` | 望落。 | Look down. |
| `mot-left` | `mot-left.m4a` | 望左。 | Look left. |
| `mot-right` | `mot-right.m4a` | 望右。 | Look right. |
| `mot-straight` | `mot-straight.m4a` | 望正前面。 | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | 我要度你嘅眼壓。 | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | 呢個唔會痛，你會覺得對眼俾人輕輕掂到。 | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | 請望正前面，唔好郁，盡量唔好眨眼。 | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | 一直望住我個鼻，唔好望我隻手。 | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | 見到我隻手指就舉手。 | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | 而家見到幾多隻手指？ | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | 你有冇藥物敏感？ | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | 我要幫你滴眼藥水。 | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | 請望上。 | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | 呢啲係眼嘅麻藥，可能會刺痛幾秒。 | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | 呢啲係散瞳藥水。 | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | 你嘅視力會矇大概六個鐘。 | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | 請閉埋眼。 | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | 唔好捽眼。 | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | 下巴放喺呢度，額頭貼住呢度。 | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | 請擘大對眼。 | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | 個頭唔好向後退。 | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | 個燈好光，請忍一忍。 | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | 望住我隻耳仔。 | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | 我要掂一掂你嘅眼皮。 | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | 就快好喇。 | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | 檢查完喇，多謝。 | The exam is finished. Thank you. |
| `close-healthy` | `close-healthy.m4a` | 你對眼好健康。 | Your eyes are healthy. |
| `close-consult` | `close-consult.m4a` | 我要同另一位醫生傾下你對眼，我一陣返嚟。 | I will have to speak to another doctor about your eyes. I will be back. |
| `close-interpreter` | `close-interpreter.m4a` | 我哋會搵翻譯同你解釋結果。 | We will use an interpreter to explain the results. |

---

**53 takes total.** Roughly 20 minutes of recording including retakes.
