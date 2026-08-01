# Recording script — Vietnamese

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/vi/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/vi/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `s01-01` | `s01-01.m4a` | Tôi là bác sĩ, tôi sẽ khám mắt cho ông/bà. | I'm the doctor, I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | Xin mời ngồi đây. | Please sit here. |
| `s01-03` | `s01-03.m4a` | Xin tháo kính ra. | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | Có đau không? Xin chỉ chỗ đau. | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | Xin đọc dòng nhỏ nhất mà ông/bà nhìn thấy. | Please read the smallest line you can see. |
| `s02-02` | `s02-02.m4a` | Mấy ngón tay? | How many fingers? |
| `s02-03` | `s02-03.m4a` | Ông/bà có thấy cái này không? | Can you see this? |
| `s02-04` | `s02-04.m4a` | Nếu thấy ánh sáng di chuyển, xin cho tôi biết. | Tell me if you see the light move. |
| `s02-05` | `s02-05.m4a` | Xin nhìn vào mũi tôi. | Look at my nose. |
| `s02-06` | `s02-06.m4a` | Ông/bà có thấy hai người tôi không? | Do you see two of me? |
| `s02-07` | `s02-07.m4a` | Nhìn về hướng này có nặng hơn không? | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | Xin nhìn ngón tay tôi. Đừng quay đầu. | Look at my finger. Don't move your head. |
| `s03-02` | `s03-02.m4a` | Nhìn lên. | Look up. |
| `s03-03` | `s03-03.m4a` | Nhìn xuống. | Look down. |
| `s03-04` | `s03-04.m4a` | Nhìn sang trái. | Look left. |
| `s03-05` | `s03-05.m4a` | Nhìn sang phải. | Look right. |
| `s03-06` | `s03-06.m4a` | Nhìn ra xa. | Look far away. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | Ông/bà có dị ứng thuốc nào không? | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | Tôi sẽ nhỏ thuốc vào mắt. | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | Xin nhìn lên. | Please look up. |
| `s04-04` | `s04-04.m4a` | Đây là thuốc tê mắt. Có thể xót vài giây. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | Thuốc này sẽ làm giãn đồng tử. | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | Mắt sẽ mờ khoảng sáu tiếng. | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | Xin nhắm mắt lại. | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | Đừng dụi mắt. | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | Đặt cằm vào đây. | Chin on the rest. |
| `s05-02` | `s05-02.m4a` | Áp trán vào thanh này. | Forehead against the bar. |
| `s05-03` | `s05-03.m4a` | Đừng ngả đầu ra sau. | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | Đèn rất sáng. Xin chịu khó một chút. | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | Xin nhìn vào tai tôi. | Look at my ear. |
| `s05-06` | `s05-06.m4a` | Tôi sẽ chạm vào mí mắt. | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | Sắp xong rồi. | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | Khám xong rồi. Cảm ơn ông/bà. | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | Chúng tôi sẽ nhờ thông dịch viên giải thích kết quả. | We will use an interpreter to explain the results. |

---

**34 takes total.** Roughly 20 minutes of recording including retakes.
