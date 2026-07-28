/* Builds the take list handed to whoever records the audio, straight from
 * phrases.js so the two can never drift apart.
 *
 *   node tools/make-recording-script.js
 *
 * Writes docs/recording-script-zh.md and docs/recording-script-zh.csv
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(ROOT, "phrases.js"), "utf8");
const sandbox = {};
new Function("g", src + "\ng.STAGES=STAGES; g.DIP=DIP;")(sandbox);
const { STAGES } = sandbox;

const total = STAGES.reduce((n, s) => n + s.items.length, 0);

let md = `# Recording script — Mandarin

${total} takes. One file per phrase, named exactly by its ID.

## For the speaker

Read each line the way you would say it to a patient in their seventies who is
anxious and cannot see well: unhurried, warm, fully articulated. Not a
newsreader, not a robot. Slightly slower than conversational pace.

- Record the **simplified column** unless you were asked otherwise. The two
  columns differ in writing only; they are pronounced identically.
- One take per file. Leave about 0.3 s of silence at the start and end.
- Quiet room, phone or laptop mic is fine held a hand's width away, no music.
- If you would phrase something differently as a clinician, say so — the wording
  is not fixed and you are the check on it.

## For whoever processes the files

Mono, 32–48 kbps AAC in .m4a. From any source format:

    for f in raw/*.wav; do
      ffmpeg -i "$f" -ac 1 -c:a aac -b:a 40k "audio/zh/$(basename "\${f%.*}").m4a"
    done

Then add every recorded ID to the \`recorded\` array in \`audio/zh/index.json\`,
set \`voice\`, \`reviewedBy\` and \`reviewedOn\`, and bump \`CACHE\` in \`sw.js\`.
Any ID left out of that array falls back to the device voice, so partial
recording sets are fine to ship.

---

`;

let csv = "id,file,stage,english,simplified,traditional,pinyin\n";
const q = v => `"${String(v).replace(/"/g, '""')}"`;

for (const st of STAGES) {
  md += `\n## ${st.num} · ${st.title}\n\n`;
  md += `| ID | File | Say this | English |\n|---|---|---|---|\n`;
  for (const it of st.items) {
    md += `| \`${it.id}\` | \`${it.id}.m4a\` | ${it.s} | ${it.en} |\n`;
    csv += [it.id, it.id + ".m4a", st.title, it.en, it.s, it.t, it.p].map(q).join(",") + "\n";
  }
}

md += `\n---\n\n**${total} takes total.** Roughly 25 minutes of recording including retakes.\n`;

fs.mkdirSync(path.join(ROOT, "docs"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "docs", "recording-script-zh.md"), md);
fs.writeFileSync(path.join(ROOT, "docs", "recording-script-zh.csv"), csv);
console.log(`Wrote docs/recording-script-zh.md and .csv — ${total} takes`);
