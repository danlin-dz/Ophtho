/* Eyelingual — Arabic phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/ar/s02-04.m4a).
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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"أنا طبيب العيون.", p:"ah-nah ta-beeb al-oo-yoon"},
      {id:"intro-sit", en:"Please sit here.", x:"من فضلك اجلس هنا.", p:"min fad-lik ij-lis hoo-nah"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"هل تشعر بألم؟ أشر إلى مكانه.", p:"hal tash-oor bee-ah-lam? ah-sheer ee-lah mah-kah-nih"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"من فضلك ضع نظارتك.", p:"min fad-lik dah naz-zah-rah-tak"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"غطِّ عينك اليسرى.", p:"ghat-tee ay-nak al-yus-rah"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"غطِّ عينك اليمنى.", p:"ghat-tee ay-nak al-yum-nah"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"هل ترى مثل إحدى هذه؟ أشر إلى الأقرب.", p:"hal ta-rah mith-la ih-dah hah-thih? ah-sheer ee-lah al-ak-rab"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"اقرأ أصغر سطر تراه.", p:"ik-rah as-ghar satr tah-rah"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"انظر من الثقب الصغير، قد ترى أوضح.", p:"oon-zur min ath-thukb as-sa-gheer, kad ta-rah aw-dah"},
      {id:"vis-fingers", en:"How many fingers?", x:"كم إصبعاً؟", p:"kam is-bah-an?"},
      {id:"vis-see-this", en:"Can you see this?", x:"هل ترى هذا؟", p:"hal tah-rah hah-thah?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"أخبرني إذا رأيت الضوء يتحرك.", p:"akh-bir-nee ee-thah rah-ay-ta ad-dow ya-ta-har-rak"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"انظر إلى أنفي.", p:"oon-zur ee-lah an-fee"},
      {id:"vis-double", en:"Do you see two of me?", x:"هل ترانِي اثنين؟", p:"hal tah-rah-nee ith-nayn?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"هل يزداد سوءاً عند النظر هكذا؟", p:"hal yaz-dad soo-an in-da an-na-zar hah-kah-thah?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"سأسلط ضوءاً على عينيك. انظر إلى الحائط خلفي.", p:"sa-oo-sal-lit dow-an ah-lah ay-nayk. oon-zur ee-lah al-hah-it khal-fee"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"لا تنظر إلى الضوء، انظر إلى البعيد.", p:"lah tan-zur ee-lah ad-dow, oon-zur ee-lah al-bah-eed"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"أبقِ كلتا عينيك مفتوحتين.", p:"ab-kee kil-tah ay-nayk maf-too-ha-tayn"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"انظر إلى إصبعي. لا تحرك رأسك.", p:"oon-zur ee-lah is-bah-ee. lah too-har-rik rah-sak"},
      {id:"mot-up", en:"Look up.", x:"انظر إلى الأعلى.", p:"oon-zur ee-lah al-ah-lah"},
      {id:"mot-down", en:"Look down.", x:"انظر إلى الأسفل.", p:"oon-zur ee-lah al-as-fal"},
      {id:"mot-left", en:"Look left.", x:"انظر إلى اليسار.", p:"oon-zur ee-lah al-ya-sar"},
      {id:"mot-right", en:"Look right.", x:"انظر إلى اليمين.", p:"oon-zur ee-lah al-ya-meen"},
      {id:"mot-straight", en:"Look straight ahead.", x:"انظر إلى الأمام مباشرة.", p:"oon-zur ee-lah al-ah-mahm mu-bah-sha-ra"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"سأقيس ضغط عينك.", p:"sa-ah-kees dagh-t ay-nak"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"هذا لا يؤلم. ستشعر بلمسة خفيفة على عينك.", p:"hah-thah lah yoo-lim. sa-tash-oor bee-lam-sa kha-fee-fa ah-lah ay-nak"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"انظر إلى الأمام، لا تتحرك، وحاول ألا ترمش.", p:"oon-zur ee-lah al-ah-mahm, lah ta-ta-har-rak, wa-hah-wil al-lah tar-mish"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"انظر إلى أنفي، لا إلى يدي.", p:"oon-zur ee-lah an-fee, lah ee-lah ya-dee"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"ارفع يدك عندما ترى أصابعي.", p:"ir-fah ya-dak in-da-mah ta-rah a-sah-bi-ee"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"كم إصبعاً ترى الآن؟", p:"kam is-bah-an ta-rah al-aan?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"هل لديك حساسية من أي دواء؟", p:"hal la-dayk has-sah-see-ya min ayy da-wah?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"سأضع قطرة في عينك.", p:"sa-ah-dah kat-ra fee ay-nak"},
      {id:"drp-look-up", en:"Please look up.", x:"من فضلك انظر إلى الأعلى.", p:"min fad-lik oon-zur ee-lah al-ah-lah"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"هذه قطرة مخدرة للعين. قد تسبب وخزاً لبضع ثوانٍ.", p:"hah-thi-hi kat-ra mu-khad-di-ra lil-ayn. kad tu-sab-bib wakh-zan li-bid thah-wan"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"هذه القطرة توسع حدقة العين.", p:"hah-thi-hi al-kat-ra tu-was-see ha-da-kat al-ayn"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"ستكون رؤيتك ضبابية نحو ست ساعات.", p:"sa-ta-koon roo-ya-tak da-bah-bee-ya nah-wa sitt sah-aht"},
      {id:"drp-close", en:"Please close your eyes.", x:"من فضلك أغمض عينيك.", p:"min fad-lik agh-mid ay-nayk"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"لا تفرك عينيك.", p:"lah taf-ruk ay-nayk"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"ضع ذقنك هنا وألصق جبهتك بهذا الشريط.", p:"dah thak-nak hoo-nah wa-al-sik jab-ha-tak bee-hah-thah ash-sha-reet"},
      {id:"slit-open", en:"Open your eyes wide.", x:"افتح عينيك جيداً.", p:"if-tah ay-nayk jay-yi-dan"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"لا تسحب رأسك للخلف.", p:"lah tas-hab rah-sak lil-khalf"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"الضوء ساطع. تحمل قليلاً.", p:"ad-dow sah-tee. ta-ham-mal ka-lee-lan"},
      {id:"slit-ear", en:"Look at my ear.", x:"انظر إلى أذني.", p:"oon-zur ee-lah uth-nee"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"سألمس جفنك.", p:"sa-al-mus jaf-nak"},
      {id:"slit-almost", en:"Almost done.", x:"أوشكنا على الانتهاء.", p:"aw-shak-nah ah-lah al-in-ti-hah"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"انتهى الفحص. شكراً لك.", p:"in-ta-hah al-fahs. shook-ran lak"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"سنستعين بمترجم لشرح النتائج.", p:"sa-nas-ta-een bee-mu-tar-jim li-sharh an-na-tah-ij"}
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
  {img:"normal", en:"Normal", x:"طبيعي"},
  {img:"blur", en:"Blurry", x:"ضبابي"},
  {img:"distort", en:"Wavy or bent", x:"متموج أو معوج"},
  {img:"faded", en:"Faded", x:"باهت"},
  {img:"central", en:"Dark in the middle", x:"عتمة في الوسط"},
  {img:"curtain", en:"Curtain across", x:"ستارة"},
  {img:"floaters", en:"Specks or cobwebs", x:"نقاط أو خيوط"},
  {img:"flashes", en:"Flashes of light", x:"ومضات ضوء"},
  {img:"zigzag", en:"Zigzag lines", x:"خطوط متعرجة"},
  {img:"halo", en:"Halo around lights", x:"هالة حول الضوء"},
  {img:"patch", en:"Patch missing", x:"بقعة مفقودة"},
  {img:"tunnel", en:"Only the middle", x:"الوسط فقط"},
  {img:"half", en:"Half missing", x:"نصف مفقود"},
  {img:"quadrant", en:"Corner missing", x:"زاوية مفقودة"},
];

/* Reachable from the Most used panel but not part of any exam stage. */
const EXTRAS = [
  {id:"close-thanks", en:"Thank you.", x:"شكراً لك.", p:"shook-ran lak"},
];

/* The eleven phrases that come up most, surfaced in a panel at the top of
   the card so they are reachable without scrolling. These are references, not
   copies: same ids, same audio, same wording as the stage they belong to. */
const QUICK = ["vis-cover-left", "vis-cover-right", "vis-fingers", "vis-pinhole", "vis-look-nose", "vis-double", "mot-finger", "mot-up", "mot-left", "mot-right", "mot-down", "mot-straight", "slit-open", "drp-close", "close-thanks"];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"إذا رأيت اثنين، كيف يظهران؟ أشر.",
  p:"ee-thah rah-ay-ta ith-nayn, kay-fa yaz-ha-ran? ah-sheer",
  opts:[
    {img:"dip-single", x:"واحد", p:"wah-hid", lab:"Single"},
    {img:"dip-h", x:"جنباً إلى جنب", p:"jan-ban ee-lah janb", lab:"Side by side"},
    {img:"dip-v", x:"واحد فوق الآخر", p:"wah-hid fowk al-ah-khar", lab:"One above"}
  ]
};
