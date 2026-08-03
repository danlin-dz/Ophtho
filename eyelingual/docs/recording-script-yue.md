# Recording script — Cantonese

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
| `s01-01` | `s01-01.m4a` | 我係醫生，我幫你檢查對眼。 | I'm the doctor, I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | 請坐喺呢度。 | Please sit here. |
| `s01-03` | `s01-03.m4a` | 請除低眼鏡。 | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | 痛唔痛？邊度痛？指俾我睇。 | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | 請戴返眼鏡。 | Put your glasses on. |
| `s02-02` | `s02-02.m4a` | 請讀你睇到最細嗰行。 | Please read the smallest line you can see. |
| `s02-03` | `s02-03.m4a` | 幾多隻手指？ | How many fingers? |
| `s02-04` | `s02-04.m4a` | 睇唔睇到？ | Can you see this? |
| `s02-05` | `s02-05.m4a` | 見到光郁請話我知。 | Tell me if you see the light move. |
| `s02-06` | `s02-06.m4a` | 望住我個鼻。 | Look at my nose. |
| `s02-07` | `s02-07.m4a` | 你係咪見到兩個我？ | Do you see two of me? |
| `s02-08` | `s02-08.m4a` | 望呢邊會唔會嚴重啲？ | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | 望住我隻手指，唔好郁個頭。 | Look at my finger. Do not move your head. |
| `s03-02` | `s03-02.m4a` | 望上。 | Look up. |
| `s03-03` | `s03-03.m4a` | 望落。 | Look down. |
| `s03-04` | `s03-04.m4a` | 望左。 | Look left. |
| `s03-05` | `s03-05.m4a` | 望右。 | Look right. |
| `s03-06` | `s03-06.m4a` | 望正前面。 | Look straight ahead. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | 你有冇藥物敏感？ | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | 我要幫你滴眼藥水。 | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | 請望上。 | Please look up. |
| `s04-04` | `s04-04.m4a` | 呢啲係眼嘅麻藥，可能會刺痛幾秒。 | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | 呢啲係散瞳藥水。 | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | 你嘅視力會矇大概六個鐘。 | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | 請閉埋眼。 | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | 唔好捽眼。 | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | 下巴放喺呢度，額頭貼住呢度。 | Chin on the rest, forehead against the bar. |
| `s05-02` | `s05-02.m4a` | 請擘大對眼。 | Open your eyes. |
| `s05-03` | `s05-03.m4a` | 個頭唔好向後退。 | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | 個燈好光，請忍一忍。 | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | 望住我隻耳仔。 | Look at my ear. |
| `s05-06` | `s05-06.m4a` | 我要掂一掂你嘅眼皮。 | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | 就快好喇。 | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | 檢查完喇，多謝。 | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | 我哋會搵翻譯同你解釋結果。 | We will use an interpreter to explain the results. |

---

**35 takes total.** Roughly 20 minutes of recording including retakes.
