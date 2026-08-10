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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"من چشم‌پزشک شما هستم.", p:"mun chesh-peh-zeshk-eh show-mah hass-tam"},
      {id:"intro-sit", en:"Please sit here.", x:"لطفاً اینجا بنشینید.", p:"lot-fan een-jah beh-neh-shee-need"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"درد دارید؟ کجا؟ اشاره کنید.", p:"dard dah-reed? koh-jah? eh-shah-reh koh-need"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"لطفاً عینک خود را بزنید.", p:"lot-fan ay-nak-eh khod rah beh-zah-need"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"چشم چپ خود را بپوشانید.", p:"chesh-meh chap-eh khod rah beh-poo-shah-need"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"چشم راست خود را بپوشانید.", p:"chesh-meh rahst-eh khod rah beh-poo-shah-need"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"دید شما شبیه کدام است؟ به نزدیک‌ترین اشاره کنید.", p:"dee-deh show-mah sheh-bee-heh koh-dahm ast? beh naz-deek-tah-reen eh-shah-reh koh-need"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"کوچک‌ترین خطی که می‌بینید بخوانید.", p:"koo-chak-tah-reen khat-tee keh mee-bee-need beh-khah-need"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"از سوراخ کوچک نگاه کنید، شاید واضح‌تر شود.", p:"az soo-rahkh koo-chak neh-gah koh-need, shy-ad vah-zeh-tar shah-vad"},
      {id:"vis-fingers", en:"How many fingers?", x:"چند انگشت؟", p:"chand an-gosht?"},
      {id:"vis-see-this", en:"Can you see this?", x:"این را می‌بینید؟", p:"een rah mee-bee-need?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"اگر نور حرکت کرد به من بگویید.", p:"ah-gar noor hah-reh-kat kard beh mun beh-goo-yeed"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"به بینی من نگاه کنید.", p:"beh bee-nee-yeh mun neh-gah koh-need"},
      {id:"vis-double", en:"Do you see two of me?", x:"آیا مرا دوتا می‌بینید؟", p:"ah-yah mah-rah doe tah mee-bee-need?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"وقتی به این طرف نگاه می‌کنید بدتر است؟", p:"vagh-tee beh een tah-raf neh-gah mee-koh-need bad-tar ast?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"با چراغ به چشمانتان نور می‌تابانم. به دیوار پشت سر من نگاه کنید.", p:"bah cheh-rahgh beh chesh-mah-neh-tahn noor mee-tah-bah-nam. beh dee-vahr posht-eh sar-eh mun neh-gah koh-need"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"به نور نگاه نکنید، به دور نگاه کنید.", p:"beh noor neh-gah nah-koh-need, beh door neh-gah koh-need"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"هر دو چشم را باز نگه دارید.", p:"har doe chesh-m rah bahz neh-geh dah-reed"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"به انگشت من نگاه کنید. سرتان را تکان ندهید.", p:"beh an-gosht-eh mun neh-gah koh-need. sah-reh-tahn rah teh-kahn nah-dah-heed"},
      {id:"mot-up", en:"Look up.", x:"به بالا نگاه کنید.", p:"beh bah-lah neh-gah koh-need"},
      {id:"mot-down", en:"Look down.", x:"به پایین نگاه کنید.", p:"beh pah-een neh-gah koh-need"},
      {id:"mot-left", en:"Look left.", x:"به چپ نگاه کنید.", p:"beh chap neh-gah koh-need"},
      {id:"mot-right", en:"Look right.", x:"به راست نگاه کنید.", p:"beh rahst neh-gah koh-need"},
      {id:"mot-straight", en:"Look straight ahead.", x:"مستقیم به جلو نگاه کنید.", p:"moss-tah-gheem beh jeh-loh neh-gah koh-need"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"فشار چشم شما را اندازه می‌گیرم.", p:"feh-shahr-eh chesh-meh show-mah rah an-dah-zeh mee-ghee-ram"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"درد ندارد. تماس ملایمی روی چشم حس می‌کنید.", p:"dard nah-dah-rad. tah-mahs-eh mah-lah-yeh-mee roo-yeh chesh-m hess mee-koh-need"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"مستقیم به جلو نگاه کنید، تکان نخورید و پلک نزنید.", p:"moss-tah-gheem beh jeh-loh neh-gah koh-need, teh-kahn nah-khoh-reed va pelk nah-zah-need"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"به بینی من نگاه کنید، نه به دست من.", p:"beh bee-nee-yeh mun neh-gah koh-need, nah beh dast-eh mun"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"وقتی انگشتانم را دیدید دست بلند کنید.", p:"vagh-tee an-gosh-tah-nam rah dee-deed dast bo-land koh-need"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"حالا چند انگشت می‌بینید؟", p:"hah-lah chand an-gosht mee-bee-need?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"به دارویی حساسیت دارید؟", p:"beh dah-roo-yee hass-sah-see-yat dah-reed?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"در چشم شما قطره می‌ریزم.", p:"dar chesh-meh show-mah ghat-reh mee-ree-zam"},
      {id:"drp-look-up", en:"Please look up.", x:"لطفاً به بالا نگاه کنید.", p:"lot-fan beh bah-lah neh-gah koh-need"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"این قطره بی‌حسی چشم است. ممکن است چند ثانیه بسوزد.", p:"een ghat-reh bee-hess-see-yeh cheshm ast. mom-ken ast chand sah-nee-yeh beh-soo-zad"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"این قطره مردمک را گشاد می‌کند.", p:"een ghat-reh mar-doh-mak rah goh-shahd mee-koh-nad"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"دید شما حدود شش ساعت تار خواهد بود.", p:"dee-deh show-mah hoh-doo-deh shesh sah-at tar khah-had bood"},
      {id:"drp-close", en:"Please close your eyes.", x:"لطفاً چشمانتان را ببندید.", p:"lot-fan chesh-mah-neh-tahn rah beh-ban-deed"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"چشمانتان را نمالید.", p:"chesh-mah-neh-tahn rah nah-mah-leed"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"چانه را اینجا بگذارید و پیشانی را به این میله تکیه دهید.", p:"chah-neh rah een-jah bog-zah-reed va pee-shah-nee rah beh een mee-leh tek-yeh dah-heed"},
      {id:"slit-open", en:"Open your eyes wide.", x:"چشمانتان را کاملاً باز کنید.", p:"chesh-mah-neh-tahn rah kah-meh-lan bahz koh-need"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"سرتان را عقب نکشید.", p:"sah-reh-tahn rah ah-ghab nah-keh-sheed"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"نور تند است. کمی تحمل کنید.", p:"noor tond ast. kah-mee tah-ham-mol koh-need"},
      {id:"slit-ear", en:"Look at my ear.", x:"به گوش من نگاه کنید.", p:"beh goo-sheh mun neh-gah koh-need"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"پلک شما را لمس می‌کنم.", p:"pel-keh show-mah rah lams mee-koh-nam"},
      {id:"slit-almost", en:"Almost done.", x:"تقریباً تمام شد.", p:"tagh-ree-ban tah-mahm shod"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"معاینه تمام شد. متشکرم.", p:"moh-eye-eh-neh tah-mahm shod. moh-teh-shak-keh-ram"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"برای توضیح نتایج از مترجم استفاده می‌کنیم.", p:"bah-rah-yeh tow-zee-heh nah-tah-yej az moh-tar-jem es-teh-fah-deh mee-koh-neem"}
    ]
  }
];

/* The symptom picker. Perceptual experience has no gesture equivalent and
   is clumsy to describe in any language, so a picture asks it better.

   Field loss renders BLURRED, not black and not white. Crabb et al,
   Ophthalmology 2013: of fifty glaucoma patients shown six renderings of
   their own loss, none chose a black tunnel or black patches; 54% chose
   blurred patches. The usual black-tunnel picture is not merely stylised,
   it is wrong in a way that makes patients doubt their diagnosis.
   A detachment curtain does render dark, because that is the word
   patients use. */
const SYMPTOMS = [
  {img:"normal", en:"Normal", x:"طبیعی"},
  {img:"blur", en:"Blurry", x:"تار"},
  {img:"distort", en:"Wavy or bent", x:"کج و موج‌دار"},
  {img:"faded", en:"Faded", x:"کم‌رنگ"},
  {img:"central", en:"Dark in the middle", x:"تاریکی در مرکز"},
  {img:"curtain", en:"Curtain across", x:"پرده"},
  {img:"floaters", en:"Specks or cobwebs", x:"لکه یا تار عنکبوت"},
  {img:"flashes", en:"Flashes of light", x:"جرقه نور"},
  {img:"zigzag", en:"Zigzag lines", x:"خطوط زیگزاگ"},
  {img:"halo", en:"Halo around lights", x:"هاله دور نور"},
  {img:"patch", en:"Patch missing", x:"لکه‌ای دیده نمی‌شود"},
  {img:"tunnel", en:"Only the middle", x:"فقط وسط"},
  {img:"half", en:"Half missing", x:"نیمی نیست"},
  {img:"quadrant", en:"Corner missing", x:"گوشه نیست"},
];

/* The eleven phrases that come up most, surfaced in a panel at the top of
   the card so they are reachable without scrolling. These are references, not
   copies: same ids, same audio, same wording as the stage they belong to. */
const QUICK = ["mot-up", "mot-down", "mot-left", "mot-right", "mot-straight", "slit-open", "drp-close"];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"اگر دوتا می‌بینید، چگونه قرار دارند؟ اشاره کنید.",
  p:"ah-gar doe tah mee-bee-need, cheh-goo-neh gha-rar dah-rand? eh-shah-reh koh-need",
  opts:[
    {img:"dip-single", x:"یکی", p:"yeh-kee", lab:"Single"},
    {img:"dip-h", x:"کنار هم", p:"keh-nah-reh hum", lab:"Side by side"},
    {img:"dip-v", x:"بالا و پایین", p:"bah-lah oh pah-een", lab:"One above"}
  ]
};
