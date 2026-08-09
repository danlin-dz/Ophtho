# Recording script — Korean

47 takes. One file per phrase, named exactly by its ID.

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
| `intro-doctor` | `intro-doctor.m4a` | 저는 안과 의사입니다. | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | 여기 앉으세요. | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | 아프세요? 어디가 아픈지 가리켜 주세요. | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | 안경을 쓰세요. | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | 왼쪽 눈을 가리세요. | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | 오른쪽 눈을 가리세요. | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | 어느 것과 비슷하게 보이세요? 가장 비슷한 것을 가리켜 주세요. | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | 보이는 가장 작은 줄을 읽어 주세요. | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | 작은 구멍으로 보세요. 더 잘 보일 수 있습니다. | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | 손가락 몇 개예요? | How many fingers? |
| `vis-see-this` | `vis-see-this.m4a` | 이게 보이세요? | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | 빛이 움직이면 말씀해 주세요. | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | 제 코를 보세요. | Look at my nose. |
| `vis-double` | `vis-double.m4a` | 제가 두 명으로 보이세요? | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | 이쪽을 볼 때 더 심한가요? | Is it worse looking this way? |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | 눈에 빛을 비추겠습니다. 제 뒤의 벽을 보세요. | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | 빛을 보지 마시고 멀리 보세요. | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | 두 눈을 모두 뜨고 계세요. | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-finger` | `mot-finger.m4a` | 제 손가락을 보세요. 고개를 움직이지 마세요. | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | 위를 보세요. | Look up. |
| `mot-down` | `mot-down.m4a` | 아래를 보세요. | Look down. |
| `mot-left` | `mot-left.m4a` | 왼쪽을 보세요. | Look left. |
| `mot-right` | `mot-right.m4a` | 오른쪽을 보세요. | Look right. |
| `mot-straight` | `mot-straight.m4a` | 정면을 보세요. | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | 안압을 측정하겠습니다. | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | 아프지 않습니다. 눈에 살짝 닿는 느낌이 있습니다. | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | 정면을 보고 움직이지 마세요. 눈을 깜빡이지 마세요. | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | 제 코를 계속 보세요. 손을 보지 마세요. | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | 손가락이 보이면 손을 드세요. | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | 지금 손가락 몇 개 보이세요? | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | 약물 알레르기가 있으세요? | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | 눈에 안약을 넣겠습니다. | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | 위를 봐 주세요. | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | 눈 마취약입니다. 몇 초 동안 따끔할 수 있습니다. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | 이 안약은 동공을 확장시킵니다. | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | 약 6시간 동안 시야가 흐려집니다. | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | 눈을 감아 주세요. | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | 눈을 비비지 마세요. | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | 턱을 여기에 대고 이마를 여기에 붙이세요. | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | 눈을 크게 뜨세요. | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | 머리를 뒤로 빼지 마세요. | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | 빛이 밝습니다. 조금만 참아 주세요. | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | 제 귀를 보세요. | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | 눈꺼풀을 만지겠습니다. | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | 거의 다 됐습니다. | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | 검사가 끝났습니다. 감사합니다. | The exam is finished. Thank you. |
| `close-interpreter` | `close-interpreter.m4a` | 통역사를 통해 결과를 설명해 드리겠습니다. | We will use an interpreter to explain the results. |

---

**47 takes total.** Roughly 20 minutes of recording including retakes.
