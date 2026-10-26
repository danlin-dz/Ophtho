# Recording script — Vietnamese

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
| `intro-doctor` | `intro-doctor.m4a` | Tôi là bác sĩ mắt của ông/bà. | I am your eye doctor. |
| `intro-sit` | `intro-sit.m4a` | Xin mời ngồi đây. | Please sit here. |
| `intro-pain` | `intro-pain.m4a` | Có đau không? Xin chỉ chỗ đau. | Does it hurt? Point to where. |
| `intro-fam-glaucoma` | `intro-fam-glaucoma.m4a` | Trong gia đình có ai bị tăng nhãn áp (cườm nước) không? | Do you have a family history of glaucoma? |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `vis-glasses-on` | `vis-glasses-on.m4a` | Xin đeo kính vào. | Put your glasses on. |
| `vis-cover-left` | `vis-cover-left.m4a` | Xin che mắt trái lại. | Cover your left eye. |
| `vis-cover-right` | `vis-cover-right.m4a` | Xin che mắt phải lại. | Cover your right eye. |
| `sym-ask` | `sym-ask.m4a` | Mắt ông/bà giống hình nào? Xin chỉ hình giống nhất. | Does your vision look like any of these? Point to the closest one. |
| `vis-read-line` | `vis-read-line.m4a` | Xin đọc dòng nhỏ nhất mà ông/bà nhìn thấy. | Please read the smallest line you can see. |
| `vis-pinhole` | `vis-pinhole.m4a` | Xin nhìn qua lỗ nhỏ, có thể rõ hơn. | Try to look through the tiny hole. It may make your vision clearer. |
| `vis-fingers` | `vis-fingers.m4a` | Mấy ngón tay? | How many fingers? |
| `vis-hand-motion` | `vis-hand-motion.m4a` | Ông/bà có thấy tay tôi đang di chuyển không? | Do you see my hand moving? |
| `vis-see-this` | `vis-see-this.m4a` | Ông/bà có thấy cái này không? | Can you see this? |
| `vis-light-move` | `vis-light-move.m4a` | Nếu thấy ánh sáng di chuyển, xin cho tôi biết. | Tell me if you see the light move. |
| `vis-look-nose` | `vis-look-nose.m4a` | Xin nhìn vào mũi tôi. | Look at my nose. |
| `vis-double` | `vis-double.m4a` | Ông/bà có thấy hai người tôi không? | Do you see two of me? |
| `vis-worse-direction` | `vis-worse-direction.m4a` | Nhìn về hướng này có nặng hơn không? | Is it worse looking this way? |
| `dip-ask` | `dip-ask.m4a` | Nếu thấy hai hình, chúng nằm thế nào? Xin chỉ. | If you see two — how are they arranged? Point. |

## 03 · Pupils

| ID | File | Say this | English |
|---|---|---|---|
| `pup-shine` | `pup-shine.m4a` | Tôi sẽ chiếu đèn vào mắt. Xin nhìn vào bức tường sau lưng tôi. | I am going to shine a light in your eyes. Please look at the wall behind me. |
| `pup-dont-look-light` | `pup-dont-look-light.m4a` | Đừng nhìn đèn, xin nhìn ra xa. | Do not look at the light. Keep looking far away. |
| `pup-both-open` | `pup-both-open.m4a` | Xin mở cả hai mắt. | Keep both eyes open. |

## 04 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `mot-look-here` | `mot-look-here.m4a` | Nhìn vào đây. | Look here. |
| `mot-finger` | `mot-finger.m4a` | Xin nhìn ngón tay tôi. Đừng quay đầu. | Look at my finger. Do not move your head. |
| `mot-up` | `mot-up.m4a` | Nhìn lên. | Look up. |
| `mot-down` | `mot-down.m4a` | Nhìn xuống. | Look down. |
| `mot-left` | `mot-left.m4a` | Nhìn sang trái. | Look left. |
| `mot-right` | `mot-right.m4a` | Nhìn sang phải. | Look right. |
| `mot-straight` | `mot-straight.m4a` | Nhìn thẳng phía trước. | Look straight ahead. |

## 05 · Eye pressure

| ID | File | Say this | English |
|---|---|---|---|
| `iop-check` | `iop-check.m4a` | Tôi sẽ đo áp suất mắt. | I am going to check the pressure in your eye. |
| `iop-no-hurt` | `iop-no-hurt.m4a` | Việc này không đau. Ông/bà sẽ thấy chạm nhẹ vào mắt. | This does not hurt. You will feel a light touch on your eye. |
| `iop-still` | `iop-still.m4a` | Xin nhìn thẳng, giữ yên và đừng chớp mắt. | Please look straight ahead and hold still. Try not to blink. |

## 06 · Visual fields

| ID | File | Say this | English |
|---|---|---|---|
| `vf-fix` | `vf-fix.m4a` | Xin nhìn mũi tôi, đừng nhìn tay tôi. | Keep looking at my nose, not at my hand. |
| `vf-raise` | `vf-raise.m4a` | Khi thấy ngón tay tôi, xin giơ tay lên. | Raise your hand when you see my fingers. |
| `vf-count` | `vf-count.m4a` | Bây giờ thấy mấy ngón tay? | How many fingers do you see now? |

## 07 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `drp-allergy` | `drp-allergy.m4a` | Ông/bà có dị ứng thuốc nào không? | Are you allergic to any medications? |
| `drp-putting` | `drp-putting.m4a` | Tôi sẽ nhỏ thuốc vào mắt. | I'm going to put drops in your eye. |
| `drp-look-up` | `drp-look-up.m4a` | Xin nhìn lên. | Please look up. |
| `drp-anaesthetic` | `drp-anaesthetic.m4a` | Đây là thuốc tê mắt. Có thể xót vài giây. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `drp-dilate` | `drp-dilate.m4a` | Thuốc này sẽ làm giãn đồng tử. | This drop will dilate your pupils. |
| `drp-blurry` | `drp-blurry.m4a` | Mắt sẽ mờ khoảng sáu tiếng. | Your vision will be blurry for about 6 hours. |
| `drp-close` | `drp-close.m4a` | Xin nhắm mắt lại. | Please close your eyes. |
| `drp-no-rub` | `drp-no-rub.m4a` | Đừng dụi mắt. | Don't rub your eyes. |

## 08 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `slit-chin` | `slit-chin.m4a` | Đặt cằm vào đây và áp trán vào thanh này. | Chin on the rest, forehead against the bar. |
| `slit-open` | `slit-open.m4a` | Xin mở mắt thật to. | Open your eyes wide. |
| `slit-no-pull-back` | `slit-no-pull-back.m4a` | Đừng ngả đầu ra sau. | Don't pull your head back. |
| `slit-bright` | `slit-bright.m4a` | Đèn rất sáng. Xin chịu khó một chút. | The light is bright. Please bear with it. |
| `slit-ear` | `slit-ear.m4a` | Xin nhìn vào tai tôi. | Look at my ear. |
| `slit-touch-lid` | `slit-touch-lid.m4a` | Tôi sẽ chạm vào mí mắt. | I'm going to touch your eyelid. |
| `slit-almost` | `slit-almost.m4a` | Sắp xong rồi. | Almost done. |

## 09 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `close-finished` | `close-finished.m4a` | Khám xong rồi. Cảm ơn ông/bà. | The exam is finished. Thank you. |
| `close-healthy` | `close-healthy.m4a` | Mắt của ông/bà khỏe mạnh. | Your eyes are healthy. |
| `close-consult` | `close-consult.m4a` | Tôi cần trao đổi với bác sĩ khác về mắt của ông/bà. Tôi sẽ quay lại. | I will have to speak to another doctor about your eyes. I will be back. |
| `close-interpreter` | `close-interpreter.m4a` | Chúng tôi sẽ nhờ thông dịch viên giải thích kết quả. | We will use an interpreter to explain the results. |

---

**53 takes total.** Roughly 20 minutes of recording including retakes.
