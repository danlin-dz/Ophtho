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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"أنا الطبيب، سأفحص عينيك.", p:"Anâ at-tabîb, sa-afhas 'aynayk."},
      {id:"s01-02", en:"Please sit here.", x:"من فضلك اجلس هنا.", p:"Min fadlik ijlis hunâ."},
      {id:"s01-03", en:"Please take off your glasses.", x:"من فضلك اخلع نظارتك.", p:"Min fadlik ikhla' nazzâratak."},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"هل تشعر بألم؟ أشر إلى مكانه.", p:"Hal tash'ur bi-alam? Ashir ilâ makânih."}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"اقرأ أصغر سطر تراه.", p:"Iqra' asghar satr tarâh."},
      {id:"s02-02", en:"How many fingers?", x:"كم إصبعاً؟", p:"Kam isba'an?"},
      {id:"s02-03", en:"Can you see this?", x:"هل ترى هذا؟", p:"Hal tarâ hâdhâ?"},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"أخبرني إذا رأيت الضوء يتحرك.", p:"Akhbirnî idhâ ra'ayta ad-daw' yataharrak."},
      {id:"s02-05", en:"Look at my nose.", x:"انظر إلى أنفي.", p:"Unzur ilâ anfî."},
      {id:"s02-06", en:"Do you see two of me?", x:"هل ترانِي اثنين؟", p:"Hal tarânî ithnayn?"},
      {id:"s02-07", en:"Is it worse looking this way?", x:"هل يزداد سوءاً عند النظر هكذا؟", p:"Hal yazdâd sû'an 'inda an-nazar hâkadhâ?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"انظر إلى إصبعي. لا تحرك رأسك.", p:"Unzur ilâ isba'î. Lâ tuharrik ra'sak."},
      {id:"s03-02", en:"Look up.", x:"انظر إلى الأعلى.", p:"Unzur ilâ al-a'lâ."},
      {id:"s03-03", en:"Look down.", x:"انظر إلى الأسفل.", p:"Unzur ilâ al-asfal."},
      {id:"s03-04", en:"Look left.", x:"انظر إلى اليسار.", p:"Unzur ilâ al-yasâr."},
      {id:"s03-05", en:"Look right.", x:"انظر إلى اليمين.", p:"Unzur ilâ al-yamîn."},
      {id:"s03-06", en:"Look far away.", x:"انظر إلى البعيد.", p:"Unzur ilâ al-ba'îd."}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"هل لديك حساسية من أي دواء؟", p:"Hal ladayk hassâsiya min ayy dawâ'?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"سأضع قطرة في عينك.", p:"Sa-ada' qatra fî 'aynak."},
      {id:"s04-03", en:"Please look up.", x:"من فضلك انظر إلى الأعلى.", p:"Min fadlik unzur ilâ al-a'lâ."},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"هذه قطرة مخدرة للعين. قد تسبب وخزاً لبضع ثوانٍ.", p:"Hâdhihi qatra mukhaddira lil-'ayn. Qad tusabbib wakhzan li-bid' thawân."},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"هذه القطرة توسع حدقة العين.", p:"Hâdhihi al-qatra tuwassi' hadaqat al-'ayn."},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"ستكون رؤيتك ضبابية نحو ست ساعات.", p:"Satakûn ru'yatak dabâbiya nahwa sitt sâ'ât."},
      {id:"s04-07", en:"Please close your eyes.", x:"من فضلك أغمض عينيك.", p:"Min fadlik aghmid 'aynayk."},
      {id:"s04-08", en:"Don't rub your eyes.", x:"لا تفرك عينيك.", p:"Lâ tafruk 'aynayk."}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"ضع ذقنك هنا.", p:"Da' dhaqnak hunâ."},
      {id:"s05-02", en:"Forehead against the bar.", x:"ألصق جبهتك بهذا الشريط.", p:"Alsiq jabhatak bi-hâdhâ ash-sharît."},
      {id:"s05-03", en:"Don't pull your head back.", x:"لا تسحب رأسك للخلف.", p:"Lâ tashab ra'sak lil-khalf."},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"الضوء ساطع. تحمل قليلاً.", p:"Ad-daw' sâti'. Tahammal qalîlan."},
      {id:"s05-05", en:"Look at my ear.", x:"انظر إلى أذني.", p:"Unzur ilâ udhnî."},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"سألمس جفنك.", p:"Sa-almus jafnak."},
      {id:"s05-07", en:"Almost done.", x:"أوشكنا على الانتهاء.", p:"Awshaknâ 'alâ al-intihâ'."}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"انتهى الفحص. شكراً لك.", p:"Intahâ al-fahs. Shukran lak."},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"سنستعين بمترجم لشرح النتائج.", p:"Sanasta'în bi-mutarjim li-sharh an-natâ'ij."}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"إذا رأيت اثنين، كيف يظهران؟ أشر.",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"واحد", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"جنباً إلى جنب", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"واحد فوق الآخر", lab:"One above"}
  ]
};
