/* Eyelingual — Punjabi phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/pa/s02-04.m4a).
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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"ਮੈਂ ਡਾਕਟਰ ਹਾਂ, ਮੈਂ ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ ਦੀ ਜਾਂਚ ਕਰਾਂਗਾ।", p:"Main daktar haan, main tuhadian akhan di janch karanga."},
      {id:"s01-02", en:"Please sit here.", x:"ਕਿਰਪਾ ਕਰਕੇ ਇੱਥੇ ਬੈਠੋ।", p:"Kirpa karke ithe baitho."},
      {id:"s01-03", en:"Please take off your glasses.", x:"ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਉਤਾਰੋ।", p:"Kirpa karke ainak utaro."},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"ਦਰਦ ਹੈ? ਕਿੱਥੇ? ਇਸ਼ਾਰਾ ਕਰੋ।", p:"Dard hai? Kithe? Ishara karo."}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"ਜੋ ਸਭ ਤੋਂ ਛੋਟੀ ਲਾਈਨ ਦਿਸਦੀ ਹੈ ਉਹ ਪੜ੍ਹੋ।", p:"Jo sabh ton chhoti line disdi hai oh parho."},
      {id:"s02-02", en:"How many fingers?", x:"ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ?", p:"Kinnian unglan?"},
      {id:"s02-03", en:"Can you see this?", x:"ਕੀ ਇਹ ਦਿਸਦਾ ਹੈ?", p:"Ki ih disda hai?"},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"ਜੇ ਰੌਸ਼ਨੀ ਹਿਲਦੀ ਦਿਸੇ ਤਾਂ ਦੱਸੋ।", p:"Je raushni hildi dise tan dasso."},
      {id:"s02-05", en:"Look at my nose.", x:"ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖੋ।", p:"Mere nakk vall dekho."},
      {id:"s02-06", en:"Do you see two of me?", x:"ਕੀ ਤੁਹਾਨੂੰ ਮੈਂ ਦੋ ਦਿਸਦਾ ਹਾਂ?", p:"Ki tuhanu main do disda haan?"},
      {id:"s02-07", en:"Is it worse looking this way?", x:"ਇਸ ਪਾਸੇ ਦੇਖਣ ਤੇ ਵੱਧ ਹੁੰਦਾ ਹੈ?", p:"Is pase dekhan te vadh hunda hai?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"ਮੇਰੀ ਉਂਗਲ ਵੱਲ ਦੇਖੋ। ਸਿਰ ਨਾ ਹਿਲਾਓ।", p:"Meri ungal vall dekho. Sir na hilao."},
      {id:"s03-02", en:"Look up.", x:"ਉੱਪਰ ਦੇਖੋ।", p:"Uppar dekho."},
      {id:"s03-03", en:"Look down.", x:"ਹੇਠਾਂ ਦੇਖੋ।", p:"Hethan dekho."},
      {id:"s03-04", en:"Look left.", x:"ਖੱਬੇ ਦੇਖੋ।", p:"Khabbe dekho."},
      {id:"s03-05", en:"Look right.", x:"ਸੱਜੇ ਦੇਖੋ।", p:"Sajje dekho."},
      {id:"s03-06", en:"Look far away.", x:"ਦੂਰ ਦੇਖੋ।", p:"Dur dekho."}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"ਕੀ ਤੁਹਾਨੂੰ ਕਿਸੇ ਦਵਾਈ ਤੋਂ ਐਲਰਜੀ ਹੈ?", p:"Ki tuhanu kise davai ton allergy hai?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"ਮੈਂ ਤੁਹਾਡੀ ਅੱਖ ਵਿੱਚ ਬੂੰਦਾਂ ਪਾਵਾਂਗਾ।", p:"Main tuhadi akh vich boondan pavanga."},
      {id:"s04-03", en:"Please look up.", x:"ਕਿਰਪਾ ਕਰਕੇ ਉੱਪਰ ਦੇਖੋ।", p:"Kirpa karke uppar dekho."},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"ਇਹ ਅੱਖ ਸੁੰਨ ਕਰਨ ਵਾਲੀ ਦਵਾਈ ਹੈ। ਕੁਝ ਸਕਿੰਟ ਚੁਭ ਸਕਦੀ ਹੈ।", p:"Ih akh sunn karan vali davai hai. Kujh sakint chubh sakdi hai."},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"ਇਹ ਬੂੰਦ ਪੁਤਲੀ ਖੋਲ੍ਹ ਦੇਵੇਗੀ।", p:"Ih boond putli kholh devegi."},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"ਨਜ਼ਰ ਲਗਭਗ ਛੇ ਘੰਟੇ ਧੁੰਦਲੀ ਰਹੇਗੀ।", p:"Nazar lagbhag chhe ghante dhundli rahegi."},
      {id:"s04-07", en:"Please close your eyes.", x:"ਕਿਰਪਾ ਕਰਕੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ।", p:"Kirpa karke akhan band karo."},
      {id:"s04-08", en:"Don't rub your eyes.", x:"ਅੱਖਾਂ ਨਾ ਮਲੋ।", p:"Akhan na malo."}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"ਠੋਡੀ ਇੱਥੇ ਰੱਖੋ।", p:"Thodi ithe rakho."},
      {id:"s05-02", en:"Forehead against the bar.", x:"ਮੱਥਾ ਇਸ ਪੱਟੀ ਨਾਲ ਲਗਾਓ।", p:"Mattha is patti nal lagao."},
      {id:"s05-03", en:"Don't pull your head back.", x:"ਸਿਰ ਪਿੱਛੇ ਨਾ ਕਰੋ।", p:"Sir pichhe na karo."},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"ਰੌਸ਼ਨੀ ਤੇਜ਼ ਹੈ। ਥੋੜ੍ਹਾ ਬਰਦਾਸ਼ਤ ਕਰੋ।", p:"Raushni tez hai. Thorha bardasht karo."},
      {id:"s05-05", en:"Look at my ear.", x:"ਮੇਰੇ ਕੰਨ ਵੱਲ ਦੇਖੋ।", p:"Mere kann vall dekho."},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"ਮੈਂ ਤੁਹਾਡੀ ਪਲਕ ਨੂੰ ਛੂਹਾਂਗਾ।", p:"Main tuhadi palak nu chhuhanga."},
      {id:"s05-07", en:"Almost done.", x:"ਲਗਭਗ ਹੋ ਗਿਆ।", p:"Lagbhag ho gia."}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"ਜਾਂਚ ਪੂਰੀ ਹੋ ਗਈ। ਧੰਨਵਾਦ।", p:"Janch puri ho gai. Dhanvaad."},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"ਅਸੀਂ ਨਤੀਜੇ ਸਮਝਾਉਣ ਲਈ ਦੁਭਾਸ਼ੀਏ ਦੀ ਵਰਤੋਂ ਕਰਾਂਗੇ।", p:"Asin natije samjhaun lai dubhashiye di varton karange."}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"ਜੇ ਦੋ ਦਿਸਦੇ ਹਨ, ਕਿਵੇਂ ਹਨ? ਇਸ਼ਾਰਾ ਕਰੋ।",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"ਇੱਕ", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"ਨਾਲ-ਨਾਲ", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"ਉੱਪਰ-ਹੇਠਾਂ", lab:"One above"}
  ]
};
