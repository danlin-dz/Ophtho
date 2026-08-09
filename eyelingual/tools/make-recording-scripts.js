/* Builds the take list handed to whoever records each language, straight from
 * that language's phrases.js so the two can never drift apart.
 *
 *   node tools/make-recording-scripts.js          all languages
 *   node tools/make-recording-scripts.js ko ja    just those
 *
 * Writes docs/recording-script-<code>.md and .csv
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const NAMES = { zh:"Mandarin", yue:"Cantonese", pa:"Punjabi", fa:"Farsi", ar:"Arabic",
                ko:"Korean", ja:"Japanese", vi:"Vietnamese", tl:"Tagalog" };

const codes = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(NAMES);

for (const code of codes) {
  const src = fs.readFileSync(path.join(ROOT, code, "phrases.js"), "utf8");
  const box = {};
  new Function("g", src + "\ng.STAGES=STAGES; g.DIP=DIP;")(box);
  const { STAGES } = box;
  const total = STAGES.reduce((n, s) => n + s.items.length, 0);
  const name = NAMES[code];

  let md = `# Recording script — ${name}

${total} takes. One file per phrase, named exactly by its ID.

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
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/${code}/$(basename "\${f%.*}").m4a"
    done

Then add every recorded ID to the \`recorded\` array in \`audio/${code}/index.json\`,
set \`voice\`, \`reviewedBy\` and \`reviewedOn\`, and bump \`CACHE\` in \`sw.js\`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---

`;

  let csv = "id,file,stage,english,target,romanisation\n";
  const q = v => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;

  for (const st of STAGES) {
    md += `\n## ${st.num} · ${st.title}\n\n| ID | File | Say this | English |\n|---|---|---|---|\n`;
    for (const it of st.items) {
      md += `| \`${it.id}\` | \`${it.id}.m4a\` | ${it.x} | ${it.en} |\n`;
      csv += [it.id, it.id + ".m4a", st.title, it.en, it.x, it.p].map(q).join(",") + "\n";
    }
  }
  md += `\n---\n\n**${total} takes total.** Roughly 20 minutes of recording including retakes.\n`;

  fs.mkdirSync(path.join(ROOT, "docs"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "docs", `recording-script-${code}.md`), md);
  fs.writeFileSync(path.join(ROOT, "docs", `recording-script-${code}.csv`), csv);
  console.log(`  ${name.padEnd(11)} ${total} takes  ->  docs/recording-script-${code}.{md,csv}`);
}
