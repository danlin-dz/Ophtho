# Recording script — Korean

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/ko/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/ko/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `s01-01` | `s01-01.m4a` | 저는 의사입니다. 눈을 검사하겠습니다. | I'm the doctor, I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | 여기 앉으세요. | Please sit here. |
| `s01-03` | `s01-03.m4a` | 안경을 벗어 주세요. | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | 아프세요? 어디가 아픈지 가리켜 주세요. | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | 안경을 쓰세요. | Put your glasses on. |
| `s02-02` | `s02-02.m4a` | 보이는 가장 작은 줄을 읽어 주세요. | Please read the smallest line you can see. |
| `s02-03` | `s02-03.m4a` | 손가락 몇 개예요? | How many fingers? |
| `s02-04` | `s02-04.m4a` | 이게 보이세요? | Can you see this? |
| `s02-05` | `s02-05.m4a` | 빛이 움직이면 말씀해 주세요. | Tell me if you see the light move. |
| `s02-06` | `s02-06.m4a` | 제 코를 보세요. | Look at my nose. |
| `s02-07` | `s02-07.m4a` | 제가 두 명으로 보이세요? | Do you see two of me? |
| `s02-08` | `s02-08.m4a` | 이쪽을 볼 때 더 심한가요? | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | 제 손가락을 보세요. 고개를 움직이지 마세요. | Look at my finger. Do not move your head. |
| `s03-02` | `s03-02.m4a` | 위를 보세요. | Look up. |
| `s03-03` | `s03-03.m4a` | 아래를 보세요. | Look down. |
| `s03-04` | `s03-04.m4a` | 왼쪽을 보세요. | Look left. |
| `s03-05` | `s03-05.m4a` | 오른쪽을 보세요. | Look right. |
| `s03-06` | `s03-06.m4a` | 정면을 보세요. | Look straight ahead. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | 약물 알레르기가 있으세요? | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | 눈에 안약을 넣겠습니다. | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | 위를 봐 주세요. | Please look up. |
| `s04-04` | `s04-04.m4a` | 눈 마취약입니다. 몇 초 동안 따끔할 수 있습니다. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | 이 안약은 동공을 확장시킵니다. | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | 약 6시간 동안 시야가 흐려집니다. | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | 눈을 감아 주세요. | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | 눈을 비비지 마세요. | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | 턱을 여기에 대고 이마를 여기에 붙이세요. | Chin on the rest, forehead against the bar. |
| `s05-02` | `s05-02.m4a` | 눈을 뜨세요. | Open your eyes. |
| `s05-03` | `s05-03.m4a` | 머리를 뒤로 빼지 마세요. | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | 빛이 밝습니다. 조금만 참아 주세요. | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | 제 귀를 보세요. | Look at my ear. |
| `s05-06` | `s05-06.m4a` | 눈꺼풀을 만지겠습니다. | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | 거의 다 됐습니다. | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | 검사가 끝났습니다. 감사합니다. | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | 통역사를 통해 결과를 설명해 드리겠습니다. | We will use an interpreter to explain the results. |

---

**35 takes total.** Roughly 20 minutes of recording including retakes.
