# Recording script — Tagalog

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/tl/$(basename "${f%.*}").m4a"
    done

Then add every recorded ID to the `recorded` array in `audio/tl/index.json`,
set `voice`, `reviewedBy` and `reviewedOn`, and bump `CACHE` in `sw.js`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---


## 01 · Intro

| ID | File | Say this | English |
|---|---|---|---|
| `s01-01` | `s01-01.m4a` | Ako po ang inyong doktor sa mata. | I am your eye doctor. |
| `s01-02` | `s01-02.m4a` | Maupo po kayo rito. | Please sit here. |
| `s01-03` | `s01-03.m4a` | Pakitanggal po ang inyong salamin. | Please take off your glasses. |
| `s01-04` | `s01-04.m4a` | Masakit po ba? Ituro po ninyo kung saan. | Does it hurt? Point to where. |

## 02 · Vision

| ID | File | Say this | English |
|---|---|---|---|
| `s02-01` | `s02-01.m4a` | Isuot po ninyo ang inyong salamin. | Put your glasses on. |
| `s02-02` | `s02-02.m4a` | Pakibasa po ang pinakamaliit na linyang nakikita ninyo. | Please read the smallest line you can see. |
| `s02-03` | `s02-03.m4a` | Ilang daliri po? | How many fingers? |
| `s02-04` | `s02-04.m4a` | Nakikita po ba ninyo ito? | Can you see this? |
| `s02-05` | `s02-05.m4a` | Sabihin po ninyo kung gumagalaw ang ilaw. | Tell me if you see the light move. |
| `s02-06` | `s02-06.m4a` | Tingnan po ninyo ang ilong ko. | Look at my nose. |
| `s02-07` | `s02-07.m4a` | Nakikita po ba ninyo akong dalawa? | Do you see two of me? |
| `s02-08` | `s02-08.m4a` | Mas malala po ba kapag tumitingin sa ganitong direksyon? | Is it worse looking this way? |

## 03 · Eye movements

| ID | File | Say this | English |
|---|---|---|---|
| `s03-01` | `s03-01.m4a` | Tingnan po ninyo ang daliri ko. Huwag pong igalaw ang ulo. | Look at my finger. Do not move your head. |
| `s03-02` | `s03-02.m4a` | Tumingin po sa itaas. | Look up. |
| `s03-03` | `s03-03.m4a` | Tumingin po sa ibaba. | Look down. |
| `s03-04` | `s03-04.m4a` | Tumingin po sa kaliwa. | Look left. |
| `s03-05` | `s03-05.m4a` | Tumingin po sa kanan. | Look right. |
| `s03-06` | `s03-06.m4a` | Tumingin po sa harap. | Look straight ahead. |

## 04 · Drops

| ID | File | Say this | English |
|---|---|---|---|
| `s04-01` | `s04-01.m4a` | May allergy po ba kayo sa kahit anong gamot? | Are you allergic to any medications? |
| `s04-02` | `s04-02.m4a` | Lalagyan ko po ng patak ang mata ninyo. | I'm going to put drops in your eye. |
| `s04-03` | `s04-03.m4a` | Tumingin po sa itaas. | Please look up. |
| `s04-04` | `s04-04.m4a` | Pampamanhid po ito sa mata. Maaaring humapdi ng ilang segundo. | This is an analgesic for your eyes. It may sting for a few seconds. |
| `s04-05` | `s04-05.m4a` | Palalakihin po nito ang balintataw ninyo. | This drop will dilate your pupils. |
| `s04-06` | `s04-06.m4a` | Malalabo po ang paningin ninyo nang humigit-kumulang anim na oras. | Your vision will be blurry for about 6 hours. |
| `s04-07` | `s04-07.m4a` | Ipikit po ninyo ang mga mata. | Please close your eyes. |
| `s04-08` | `s04-08.m4a` | Huwag pong kuskusin ang mata. | Don't rub your eyes. |

## 05 · Slit lamp

| ID | File | Say this | English |
|---|---|---|---|
| `s05-01` | `s05-01.m4a` | Ipatong po ang baba dito at idikit ang noo sa bar. | Chin on the rest, forehead against the bar. |
| `s05-02` | `s05-02.m4a` | Imulat po ninyo ang mga mata. | Open your eyes. |
| `s05-03` | `s05-03.m4a` | Huwag pong iurong ang ulo. | Don't pull your head back. |
| `s05-04` | `s05-04.m4a` | Maliwanag po ang ilaw. Pasensya po sandali. | The light is bright. Please bear with it. |
| `s05-05` | `s05-05.m4a` | Tingnan po ninyo ang tainga ko. | Look at my ear. |
| `s05-06` | `s05-06.m4a` | Hahawakan ko po ang talukap ng mata ninyo. | I'm going to touch your eyelid. |
| `s05-07` | `s05-07.m4a` | Malapit na pong tapos. | Almost done. |

## 06 · Closing

| ID | File | Say this | English |
|---|---|---|---|
| `s06-01` | `s06-01.m4a` | Tapos na po ang pagsusuri. Salamat po. | The exam is finished. Thank you. |
| `s06-02` | `s06-02.m4a` | Gagamit po tayo ng interpreter para ipaliwanag ang resulta. | We will use an interpreter to explain the results. |

---

**35 takes total.** Roughly 20 minutes of recording including retakes.
