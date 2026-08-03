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
      {id:"s01-01", en:"I am your eye doctor.", x:"ਮੈਂ ਤੁਹਾਡਾ ਅੱਖਾਂ ਦਾ ਡਾਕਟਰ ਹਾਂ।", p:"mane tu-hah-da uh-khan da dahk-tar haan"},
      {id:"s01-02", en:"Please sit here.", x:"ਕਿਰਪਾ ਕਰਕੇ ਇੱਥੇ ਬੈਠੋ।", p:"kir-pa kar-kay ih-thay bay-toe"},
      {id:"s01-03", en:"Please take off your glasses.", x:"ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਉਤਾਰੋ।", p:"kir-pa kar-kay eye-nak oo-tah-roe"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"ਦਰਦ ਹੈ? ਕਿੱਥੇ? ਇਸ਼ਾਰਾ ਕਰੋ।", p:"dard hay? kih-thay? ih-shah-ra kuh-roe"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਲਗਾਓ।", p:"kir-pa kar-kay eye-nak lug-ah-oh"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"ਜੋ ਸਭ ਤੋਂ ਛੋਟੀ ਲਾਈਨ ਦਿਸਦੀ ਹੈ ਉਹ ਪੜ੍ਹੋ।", p:"joe sub tone choh-tee line dis-dee hay oh puh-roe"},
      {id:"s02-03", en:"How many fingers?", x:"ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ?", p:"kin-nee-yan oong-lan?"},
      {id:"s02-04", en:"Can you see this?", x:"ਕੀ ਇਹ ਦਿਸਦਾ ਹੈ?", p:"kee ih dis-dah hay?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"ਜੇ ਰੌਸ਼ਨੀ ਹਿਲਦੀ ਦਿਸੇ ਤਾਂ ਦੱਸੋ।", p:"jay rowsh-nee hil-dee dis-say tahn dus-so"},
      {id:"s02-06", en:"Look at my nose.", x:"ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖੋ।", p:"may-ray nuck vull day-koe"},
      {id:"s02-07", en:"Do you see two of me?", x:"ਕੀ ਤੁਹਾਨੂੰ ਦੋ ਦਿਸਦੇ ਹਨ?", p:"kee tu-hah-noo doe dis-day hun?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"ਇਸ ਪਾਸੇ ਦੇਖਣ ਤੇ ਵੱਧ ਹੁੰਦਾ ਹੈ?", p:"iss pah-say day-khan tay vudh hoon-da hay?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"ਮੇਰੀ ਉਂਗਲ ਵੱਲ ਦੇਖੋ। ਸਿਰ ਨਾ ਹਿਲਾਓ।", p:"may-ree oon-gal vull day-koe. sir na hih-lah-oh"},
      {id:"s03-02", en:"Look up.", x:"ਉੱਪਰ ਦੇਖੋ।", p:"oop-par day-koe"},
      {id:"s03-03", en:"Look down.", x:"ਹੇਠਾਂ ਦੇਖੋ।", p:"hay-thaan day-koe"},
      {id:"s03-04", en:"Look left.", x:"ਖੱਬੇ ਦੇਖੋ।", p:"khub-bay day-koe"},
      {id:"s03-05", en:"Look right.", x:"ਸੱਜੇ ਦੇਖੋ।", p:"suj-jay day-koe"},
      {id:"s03-06", en:"Look straight ahead.", x:"ਸਿੱਧਾ ਸਾਹਮਣੇ ਦੇਖੋ।", p:"sid-dha saah-muh-nay day-koe"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"ਕੀ ਤੁਹਾਨੂੰ ਕਿਸੇ ਦਵਾਈ ਤੋਂ ਐਲਰਜੀ ਹੈ?", p:"kee tu-hah-noo kih-say duh-vye tone al-ler-jee hay?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"ਹੁਣ ਤੁਹਾਡੀ ਅੱਖ ਵਿੱਚ ਬੂੰਦਾਂ ਪਾਉਣੀਆਂ ਹਨ।", p:"hun tu-hah-dee ukh vich boon-daan pow-nee-yan hun"},
      {id:"s04-03", en:"Please look up.", x:"ਕਿਰਪਾ ਕਰਕੇ ਉੱਪਰ ਦੇਖੋ।", p:"kir-pa kar-kay oop-par day-koe"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"ਇਹ ਅੱਖ ਸੁੰਨ ਕਰਨ ਵਾਲੀ ਦਵਾਈ ਹੈ। ਕੁਝ ਸਕਿੰਟ ਚੁਭ ਸਕਦੀ ਹੈ।", p:"ih ukh soon kuh-ran vah-lee duh-vye hay. kuj sa-kint chubh suk-dee hay"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"ਇਹ ਬੂੰਦ ਪੁਤਲੀ ਖੋਲ੍ਹ ਦੇਵੇਗੀ।", p:"ih boond poot-lee kohl day-vay-gee"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"ਨਜ਼ਰ ਲਗਭਗ ਛੇ ਘੰਟੇ ਧੁੰਦਲੀ ਰਹੇਗੀ।", p:"nuh-zar lug-bhug chay ghun-tay dhoond-lee ruh-hay-gee"},
      {id:"s04-07", en:"Please close your eyes.", x:"ਕਿਰਪਾ ਕਰਕੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ।", p:"kir-pa kar-kay uh-khan bund kuh-roe"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"ਅੱਖਾਂ ਨਾ ਮਲੋ।", p:"uh-khan na mah-loe"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"ਠੋਡੀ ਇੱਥੇ ਰੱਖੋ, ਮੱਥਾ ਇਸ ਪੱਟੀ ਨਾਲ ਲਗਾਓ।", p:"toe-dee ih-thay ruh-koe, mut-tha iss put-tee null lug-ah-oh"},
      {id:"s05-02", en:"Open your eyes.", x:"ਅੱਖਾਂ ਖੋਲ੍ਹੋ।", p:"uh-khan koh-loe"},
      {id:"s05-03", en:"Don't pull your head back.", x:"ਸਿਰ ਪਿੱਛੇ ਨਾ ਕਰੋ।", p:"sir pih-chay na kuh-roe"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"ਰੌਸ਼ਨੀ ਤੇਜ਼ ਹੈ। ਥੋੜ੍ਹਾ ਬਰਦਾਸ਼ਤ ਕਰੋ।", p:"rowsh-nee tayz hay. tore-ha bar-dasht kuh-roe"},
      {id:"s05-05", en:"Look at my ear.", x:"ਮੇਰੇ ਕੰਨ ਵੱਲ ਦੇਖੋ।", p:"may-ray kunn vull day-koe"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"ਹੁਣ ਤੁਹਾਡੀ ਪਲਕ ਨੂੰ ਛੂਹਣਾ ਹੈ।", p:"hun tu-hah-dee puh-luck noo chooh-na hay"},
      {id:"s05-07", en:"Almost done.", x:"ਲਗਭਗ ਹੋ ਗਿਆ।", p:"lug-bhug hoe gee-ah"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"ਜਾਂਚ ਪੂਰੀ ਹੋ ਗਈ। ਧੰਨਵਾਦ।", p:"jaanch poo-ree hoe guy. dhun-vaad"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"ਨਤੀਜੇ ਸਮਝਾਉਣ ਲਈ ਦੁਭਾਸ਼ੀਏ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਵੇਗੀ।", p:"nuh-tee-jay sum-jhown lye du-bhah-shee-yay dee var-tone kee-tee jah-vay-gee"}
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
  x:"ਜੇ ਦੋ ਦਿਸਦੇ ਹਨ, ਕਿਵੇਂ ਹਨ? ਇਸ਼ਾਰਾ ਕਰੋ।",
  p:"jay doe dis-day hun, kih-ven hun? ih-shah-ra kuh-roe",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"ਇੱਕ", p:"ick", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"ਨਾਲ-ਨਾਲ", p:"naal-naal", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"ਉੱਪਰ-ਹੇਠਾਂ", p:"oop-par hay-thaan", lab:"One above"}
  ]
};
