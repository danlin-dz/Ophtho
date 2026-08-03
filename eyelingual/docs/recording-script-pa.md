# Recording script — Punjabi

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/pa/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/pa/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `s01-01` | `s01-01.m4a` | ਮੈਂ ਡਾਕਟਰ ਹਾਂ, ਮੈਂ ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ ਦੀ ਜਾਂਚ ਕਰਾਂਗਾ। | I'm the doctor, I'm going to check your eyes. |
| `s01-02` | `s01-02.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਇੱਥੇ ਬੈਠੋ। | Please sit here. |
| `s01-03` | `s01-03.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਉਤਾਰੋ। | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | ਦਰਦ ਹੈ? ਕਿੱਥੇ? ਇਸ਼ਾਰਾ ਕਰੋ। | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਲਗਾਓ। | Put your glasses on. |
| `s02-02` | `s02-02.m4a` | ਜੋ ਸਭ ਤੋਂ ਛੋਟੀ ਲਾਈਨ ਦਿਸਦੀ ਹੈ ਉਹ ਪੜ੍ਹੋ। | Please read the smallest line you can see. |
| `s02-03` | `s02-03.m4a` | ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ? | How many fingers? |
| `s02-04` | `s02-04.m4a` | ਕੀ ਇਹ ਦਿਸਦਾ ਹੈ? | Can you see this? |
| `s02-05` | `s02-05.m4a` | ਜੇ ਰੌਸ਼ਨੀ ਹਿਲਦੀ ਦਿਸੇ ਤਾਂ ਦੱਸੋ। | Tell me if you see the light move. |
| `s02-06` | `s02-06.m4a` | ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖੋ। | Look at my nose. |
| `s02-07` | `s02-07.m4a` | ਕੀ ਤੁਹਾਨੂੰ ਮੈਂ ਦੋ ਦਿਸਦਾ ਹਾਂ? | Do you see two of me? |
| `s02-08` | `s02-08.m4a` | ਇਸ ਪਾਸੇ ਦੇਖਣ ਤੇ ਵੱਧ ਹੁੰਦਾ ਹੈ? | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | ਮੇਰੀ ਉਂਗਲ ਵੱਲ ਦੇਖੋ। ਸਿਰ ਨਾ ਹਿਲਾਓ। | Look at my finger. Do not move your head. |
| `s03-02` | `s03-02.m4a` | ਉੱਪਰ ਦੇਖੋ। | Look up. |
| `s03-03` | `s03-03.m4a` | ਹੇਠਾਂ ਦੇਖੋ। | Look down. |
| `s03-04` | `s03-04.m4a` | ਖੱਬੇ ਦੇਖੋ। | Look left. |
| `s03-05` | `s03-05.m4a` | ਸੱਜੇ ਦੇਖੋ। | Look right. |
| `s03-06` | `s03-06.m4a` | ਸਿੱਧਾ ਸਾਹਮਣੇ ਦੇਖੋ। | Look straight ahead. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | ਕੀ ਤੁਹਾਨੂੰ ਕਿਸੇ ਦਵਾਈ ਤੋਂ ਐਲਰਜੀ ਹੈ? | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | ਮੈਂ ਤੁਹਾਡੀ ਅੱਖ ਵਿੱਚ ਬੂੰਦਾਂ ਪਾਵਾਂਗਾ। | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਉੱਪਰ ਦੇਖੋ। | Please look up. |
| `s04-04` | `s04-04.m4a` | ਇਹ ਅੱਖ ਸੁੰਨ ਕਰਨ ਵਾਲੀ ਦਵਾਈ ਹੈ। ਕੁਝ ਸਕਿੰਟ ਚੁਭ ਸਕਦੀ ਹੈ। | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | ਇਹ ਬੂੰਦ ਪੁਤਲੀ ਖੋਲ੍ਹ ਦੇਵੇਗੀ। | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | ਨਜ਼ਰ ਲਗਭਗ ਛੇ ਘੰਟੇ ਧੁੰਦਲੀ ਰਹੇਗੀ। | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | ਕਿਰਪਾ ਕਰਕੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ। | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | ਅੱਖਾਂ ਨਾ ਮਲੋ। | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | ਠੋਡੀ ਇੱਥੇ ਰੱਖੋ, ਮੱਥਾ ਇਸ ਪੱਟੀ ਨਾਲ ਲਗਾਓ। | Chin on the rest, forehead against the bar. |
| `s05-02` | `s05-02.m4a` | ਅੱਖਾਂ ਖੋਲ੍ਹੋ। | Open your eyes. |
| `s05-03` | `s05-03.m4a` | ਸਿਰ ਪਿੱਛੇ ਨਾ ਕਰੋ। | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | ਰੌਸ਼ਨੀ ਤੇਜ਼ ਹੈ। ਥੋੜ੍ਹਾ ਬਰਦਾਸ਼ਤ ਕਰੋ। | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | ਮੇਰੇ ਕੰਨ ਵੱਲ ਦੇਖੋ। | Look at my ear. |
| `s05-06` | `s05-06.m4a` | ਮੈਂ ਤੁਹਾਡੀ ਪਲਕ ਨੂੰ ਛੂਹਾਂਗਾ। | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | ਲਗਭਗ ਹੋ ਗਿਆ। | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | ਜਾਂਚ ਪੂਰੀ ਹੋ ਗਈ। ਧੰਨਵਾਦ। | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | ਅਸੀਂ ਨਤੀਜੇ ਸਮਝਾਉਣ ਲਈ ਦੁਭਾਸ਼ੀਏ ਦੀ ਵਰਤੋਂ ਕਰਾਂਗੇ। | We will use an interpreter to explain the results. |

---

**35 takes total.** Roughly 20 minutes of recording including retakes.
