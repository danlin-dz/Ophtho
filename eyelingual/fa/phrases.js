/* Eyelingual — Farsi phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/fa/s02-04.m4a).
 *       Never renumber an id once recording has started: a file would silently
 *       detach from its phrase.
 * en  — clinician-facing label, also what the search matches on
 * x   — what the patient reads
 * p   — romanisation for the clinician (empty for Latin-script languages)
 *
 * Ids are identical across all nine languages: s01-01 here is the same
 * sentence as s01-01 on every other card.
 *
 * Selection rule: every phrase is either a command the patient can act on, or
 * a question answerable by nodding, shaking, or pointing.
 */

const STAGES = [
  {
    id:"intro", num:"01", title:"Intro",
    items:[
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"من دکتر هستم، چشم‌های شما را معاینه می‌کنم.", p:"Man doktor hastam, cheshm-hâye shomâ râ mo'âyene mikonam."},
      {id:"s01-02", en:"Please sit here.", x:"لطفاً اینجا بنشینید.", p:"Lotfan injâ beneshinid."},
      {id:"s01-03", en:"Please take off your glasses.", x:"لطفاً عینک خود را بردارید.", p:"Lotfan eynak-e khod râ bardârid."},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"درد دارید؟ کجا؟ اشاره کنید.", p:"Dard dârid? Kojâ? Eshâre konid."}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"کوچک‌ترین خطی که می‌بینید بخوانید.", p:"Kuchaktarin khatti ke mibinid bekhânid."},
      {id:"s02-02", en:"How many fingers?", x:"چند انگشت؟", p:"Chand angosht?"},
      {id:"s02-03", en:"Can you see this?", x:"این را می‌بینید؟", p:"In râ mibinid?"},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"اگر نور حرکت کرد به من بگویید.", p:"Agar nur harekat kard be man beguyid."},
      {id:"s02-05", en:"Look at my nose.", x:"به بینی من نگاه کنید.", p:"Be bini-ye man negâh konid."},
      {id:"s02-06", en:"Do you see two of me?", x:"آیا مرا دوتا می‌بینید؟", p:"Âyâ marâ do tâ mibinid?"},
      {id:"s02-07", en:"Is it worse looking this way?", x:"وقتی به این طرف نگاه می‌کنید بدتر است؟", p:"Vaqti be in taraf negâh mikonid badtar ast?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"به انگشت من نگاه کنید. سرتان را تکان ندهید.", p:"Be angosht-e man negâh konid. Saretân râ tekân nadahid."},
      {id:"s03-02", en:"Look up.", x:"به بالا نگاه کنید.", p:"Be bâlâ negâh konid."},
      {id:"s03-03", en:"Look down.", x:"به پایین نگاه کنید.", p:"Be pâin negâh konid."},
      {id:"s03-04", en:"Look left.", x:"به چپ نگاه کنید.", p:"Be chap negâh konid."},
      {id:"s03-05", en:"Look right.", x:"به راست نگاه کنید.", p:"Be râst negâh konid."},
      {id:"s03-06", en:"Look far away.", x:"به دور نگاه کنید.", p:"Be dur negâh konid."}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"به دارویی حساسیت دارید؟", p:"Be dâruyi hassâsiyat dârid?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"در چشم شما قطره می‌ریزم.", p:"Dar cheshm-e shomâ qatre mirizam."},
      {id:"s04-03", en:"Please look up.", x:"لطفاً به بالا نگاه کنید.", p:"Lotfan be bâlâ negâh konid."},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"این قطره بی‌حسی چشم است. ممکن است چند ثانیه بسوزد.", p:"In qatre bihessi-ye cheshm ast. Momken ast chand sâniye besuzad."},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"این قطره مردمک را گشاد می‌کند.", p:"In qatre mardomak râ goshâd mikonad."},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"دید شما حدود شش ساعت تار خواهد بود.", p:"Did-e shomâ hodud-e shesh sâ'at târ khâhad bud."},
      {id:"s04-07", en:"Please close your eyes.", x:"لطفاً چشمانتان را ببندید.", p:"Lotfan cheshmânetân râ bebandid."},
      {id:"s04-08", en:"Don't rub your eyes.", x:"چشمانتان را نمالید.", p:"Cheshmânetân râ namâlid."}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"چانه را اینجا بگذارید.", p:"Châne râ injâ bogzârid."},
      {id:"s05-02", en:"Forehead against the bar.", x:"پیشانی را به این میله تکیه دهید.", p:"Pishâni râ be in mile tekye dahid."},
      {id:"s05-03", en:"Don't pull your head back.", x:"سرتان را عقب نکشید.", p:"Saretân râ aqab nakeshid."},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"نور تند است. کمی تحمل کنید.", p:"Nur tond ast. Kami tahammol konid."},
      {id:"s05-05", en:"Look at my ear.", x:"به گوش من نگاه کنید.", p:"Be gush-e man negâh konid."},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"پلک شما را لمس می‌کنم.", p:"Pelk-e shomâ râ lams mikonam."},
      {id:"s05-07", en:"Almost done.", x:"تقریباً تمام شد.", p:"Taqriban tamâm shod."}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"معاینه تمام شد. متشکرم.", p:"Mo'âyene tamâm shod. Moteshakkeram."},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"برای توضیح نتایج از مترجم استفاده می‌کنیم.", p:"Barâye towzih-e natâyej az motarjem estefâde mikonim."}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"اگر دوتا می‌بینید، چگونه قرار دارند؟ اشاره کنید.",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"یکی", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"کنار هم", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"بالا و پایین", lab:"One above"}
  ]
};
