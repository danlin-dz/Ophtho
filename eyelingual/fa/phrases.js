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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"من دکتر هستم، چشم‌های شما را معاینه می‌کنم.", p:"mun dok-tor hass-tam, chesh-mah-yeh show-mah rah moh-eye-eh-neh mee-koh-nam"},
      {id:"s01-02", en:"Please sit here.", x:"لطفاً اینجا بنشینید.", p:"lot-fan een-jah beh-neh-shee-need"},
      {id:"s01-03", en:"Please take off your glasses.", x:"لطفاً عینک خود را بردارید.", p:"lot-fan ay-nak-eh khod rah bar-dah-reed"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"درد دارید؟ کجا؟ اشاره کنید.", p:"dard dah-reed? koh-jah? eh-shah-reh koh-need"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"لطفاً عینک خود را بزنید.", p:"lot-fan ay-nak-eh khod rah beh-zah-need"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"کوچک‌ترین خطی که می‌بینید بخوانید.", p:"koo-chak-tah-reen khat-tee keh mee-bee-need beh-khah-need"},
      {id:"s02-03", en:"How many fingers?", x:"چند انگشت؟", p:"chand an-gosht?"},
      {id:"s02-04", en:"Can you see this?", x:"این را می‌بینید؟", p:"een rah mee-bee-need?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"اگر نور حرکت کرد به من بگویید.", p:"ah-gar noor hah-reh-kat kard beh mun beh-goo-yeed"},
      {id:"s02-06", en:"Look at my nose.", x:"به بینی من نگاه کنید.", p:"beh bee-nee-yeh mun neh-gah koh-need"},
      {id:"s02-07", en:"Do you see two of me?", x:"آیا مرا دوتا می‌بینید؟", p:"ah-yah mah-rah doe tah mee-bee-need?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"وقتی به این طرف نگاه می‌کنید بدتر است؟", p:"vagh-tee beh een tah-raf neh-gah mee-koh-need bad-tar ast?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"به انگشت من نگاه کنید. سرتان را تکان ندهید.", p:"beh an-gosht-eh mun neh-gah koh-need. sah-reh-tahn rah teh-kahn nah-dah-heed"},
      {id:"s03-02", en:"Look up.", x:"به بالا نگاه کنید.", p:"beh bah-lah neh-gah koh-need"},
      {id:"s03-03", en:"Look down.", x:"به پایین نگاه کنید.", p:"beh pah-een neh-gah koh-need"},
      {id:"s03-04", en:"Look left.", x:"به چپ نگاه کنید.", p:"beh chap neh-gah koh-need"},
      {id:"s03-05", en:"Look right.", x:"به راست نگاه کنید.", p:"beh rahst neh-gah koh-need"},
      {id:"s03-06", en:"Look straight ahead.", x:"مستقیم به جلو نگاه کنید.", p:"moss-tah-gheem beh jeh-loh neh-gah koh-need"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"به دارویی حساسیت دارید؟", p:"beh dah-roo-yee hass-sah-see-yat dah-reed?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"در چشم شما قطره می‌ریزم.", p:"dar chesh-meh show-mah ghat-reh mee-ree-zam"},
      {id:"s04-03", en:"Please look up.", x:"لطفاً به بالا نگاه کنید.", p:"lot-fan beh bah-lah neh-gah koh-need"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"این قطره بی‌حسی چشم است. ممکن است چند ثانیه بسوزد.", p:"een ghat-reh bee-hess-see-yeh cheshm ast. mom-ken ast chand sah-nee-yeh beh-soo-zad"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"این قطره مردمک را گشاد می‌کند.", p:"een ghat-reh mar-doh-mak rah goh-shahd mee-koh-nad"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"دید شما حدود شش ساعت تار خواهد بود.", p:"dee-deh show-mah hoh-doo-deh shesh sah-at tar khah-had bood"},
      {id:"s04-07", en:"Please close your eyes.", x:"لطفاً چشمانتان را ببندید.", p:"lot-fan chesh-mah-neh-tahn rah beh-ban-deed"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"چشمانتان را نمالید.", p:"chesh-mah-neh-tahn rah nah-mah-leed"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"چانه را اینجا بگذارید و پیشانی را به این میله تکیه دهید.", p:"chah-neh rah een-jah bog-zah-reed va pee-shah-nee rah beh een mee-leh tek-yeh dah-heed"},
      {id:"s05-02", en:"Open your eyes.", x:"چشمانتان را باز کنید.", p:"chesh-mah-neh-tahn rah bahz koh-need"},
      {id:"s05-03", en:"Don't pull your head back.", x:"سرتان را عقب نکشید.", p:"sah-reh-tahn rah ah-ghab nah-keh-sheed"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"نور تند است. کمی تحمل کنید.", p:"noor tond ast. kah-mee tah-ham-mol koh-need"},
      {id:"s05-05", en:"Look at my ear.", x:"به گوش من نگاه کنید.", p:"beh goo-sheh mun neh-gah koh-need"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"پلک شما را لمس می‌کنم.", p:"pel-keh show-mah rah lams mee-koh-nam"},
      {id:"s05-07", en:"Almost done.", x:"تقریباً تمام شد.", p:"tagh-ree-ban tah-mahm shod"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"معاینه تمام شد. متشکرم.", p:"moh-eye-eh-neh tah-mahm shod. moh-teh-shak-keh-ram"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"برای توضیح نتایج از مترجم استفاده می‌کنیم.", p:"bah-rah-yeh tow-zee-heh nah-tah-yej az moh-tar-jem es-teh-fah-deh mee-koh-neem"}
    ]
  }
];

/* The eleven phrases that come up most, surfaced in a panel at the top of
   the card so they are reachable without scrolling. These are references, not
   copies: same ids, same audio, same wording as the stage they belong to. */
const QUICK = ["s03-06", "s02-06", "s02-03", "s03-01", "s02-07", "s03-02", "s03-04", "s03-05", "s03-03", "s05-02", "s04-07"];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"اگر دوتا می‌بینید، چگونه قرار دارند؟ اشاره کنید.",
  p:"ah-gar doe tah mee-bee-need, cheh-goo-neh gha-rar dah-rand? eh-shah-reh koh-need",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"یکی", p:"yeh-kee", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"کنار هم", p:"keh-nah-reh hum", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"بالا و پایین", p:"bah-lah oh pah-een", lab:"One above"}
  ]
};
