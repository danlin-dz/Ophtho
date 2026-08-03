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
      {id:"s01-01", en:"I am your eye doctor.", x:"أنا طبيب العيون.", p:"ah-nah ta-beeb al-oo-yoon"},
      {id:"s01-02", en:"Please sit here.", x:"من فضلك اجلس هنا.", p:"min fad-lik ij-lis hoo-nah"},
      {id:"s01-03", en:"Please take off your glasses.", x:"من فضلك اخلع نظارتك.", p:"min fad-lik ikh-lah naz-zah-rah-tak"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"هل تشعر بألم؟ أشر إلى مكانه.", p:"hal tash-oor bee-ah-lam? ah-sheer ee-lah mah-kah-nih"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"من فضلك ضع نظارتك.", p:"min fad-lik dah naz-zah-rah-tak"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"اقرأ أصغر سطر تراه.", p:"ik-rah as-ghar satr tah-rah"},
      {id:"s02-03", en:"How many fingers?", x:"كم إصبعاً؟", p:"kam is-bah-an?"},
      {id:"s02-04", en:"Can you see this?", x:"هل ترى هذا؟", p:"hal tah-rah hah-thah?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"أخبرني إذا رأيت الضوء يتحرك.", p:"akh-bir-nee ee-thah rah-ay-ta ad-dow ya-ta-har-rak"},
      {id:"s02-06", en:"Look at my nose.", x:"انظر إلى أنفي.", p:"oon-zur ee-lah an-fee"},
      {id:"s02-07", en:"Do you see two of me?", x:"هل ترانِي اثنين؟", p:"hal tah-rah-nee ith-nayn?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"هل يزداد سوءاً عند النظر هكذا؟", p:"hal yaz-dad soo-an in-da an-na-zar hah-kah-thah?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"انظر إلى إصبعي. لا تحرك رأسك.", p:"oon-zur ee-lah is-bah-ee. lah too-har-rik rah-sak"},
      {id:"s03-02", en:"Look up.", x:"انظر إلى الأعلى.", p:"oon-zur ee-lah al-ah-lah"},
      {id:"s03-03", en:"Look down.", x:"انظر إلى الأسفل.", p:"oon-zur ee-lah al-as-fal"},
      {id:"s03-04", en:"Look left.", x:"انظر إلى اليسار.", p:"oon-zur ee-lah al-ya-sar"},
      {id:"s03-05", en:"Look right.", x:"انظر إلى اليمين.", p:"oon-zur ee-lah al-ya-meen"},
      {id:"s03-06", en:"Look straight ahead.", x:"انظر إلى الأمام مباشرة.", p:"oon-zur ee-lah al-ah-mahm mu-bah-sha-ra"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"هل لديك حساسية من أي دواء؟", p:"hal la-dayk has-sah-see-ya min ayy da-wah?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"سأضع قطرة في عينك.", p:"sa-ah-dah kat-ra fee ay-nak"},
      {id:"s04-03", en:"Please look up.", x:"من فضلك انظر إلى الأعلى.", p:"min fad-lik oon-zur ee-lah al-ah-lah"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"هذه قطرة مخدرة للعين. قد تسبب وخزاً لبضع ثوانٍ.", p:"hah-thi-hi kat-ra mu-khad-di-ra lil-ayn. kad tu-sab-bib wakh-zan li-bid thah-wan"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"هذه القطرة توسع حدقة العين.", p:"hah-thi-hi al-kat-ra tu-was-see ha-da-kat al-ayn"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"ستكون رؤيتك ضبابية نحو ست ساعات.", p:"sa-ta-koon roo-ya-tak da-bah-bee-ya nah-wa sitt sah-aht"},
      {id:"s04-07", en:"Please close your eyes.", x:"من فضلك أغمض عينيك.", p:"min fad-lik agh-mid ay-nayk"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"لا تفرك عينيك.", p:"lah taf-ruk ay-nayk"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"ضع ذقنك هنا وألصق جبهتك بهذا الشريط.", p:"dah thak-nak hoo-nah wa-al-sik jab-ha-tak bee-hah-thah ash-sha-reet"},
      {id:"s05-02", en:"Open your eyes.", x:"افتح عينيك.", p:"if-tah ay-nayk"},
      {id:"s05-03", en:"Don't pull your head back.", x:"لا تسحب رأسك للخلف.", p:"lah tas-hab rah-sak lil-khalf"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"الضوء ساطع. تحمل قليلاً.", p:"ad-dow sah-tee. ta-ham-mal ka-lee-lan"},
      {id:"s05-05", en:"Look at my ear.", x:"انظر إلى أذني.", p:"oon-zur ee-lah uth-nee"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"سألمس جفنك.", p:"sa-al-mus jaf-nak"},
      {id:"s05-07", en:"Almost done.", x:"أوشكنا على الانتهاء.", p:"aw-shak-nah ah-lah al-in-ti-hah"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"انتهى الفحص. شكراً لك.", p:"in-ta-hah al-fahs. shook-ran lak"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"سنستعين بمترجم لشرح النتائج.", p:"sa-nas-ta-een bee-mu-tar-jim li-sharh an-na-tah-ij"}
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
  x:"إذا رأيت اثنين، كيف يظهران؟ أشر.",
  p:"ee-thah rah-ay-ta ith-nayn, kay-fa yaz-ha-ran? ah-sheer",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"واحد", p:"wah-hid", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"جنباً إلى جنب", p:"jan-ban ee-lah janb", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"واحد فوق الآخر", p:"wah-hid fowk al-ah-khar", lab:"One above"}
  ]
};
