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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"ਮੈਂ ਤੁਹਾਡਾ ਅੱਖਾਂ ਦਾ ਡਾਕਟਰ ਹਾਂ।", p:"mane tu-hah-da uh-khan da dahk-tar haan"},
      {id:"intro-sit", en:"Please sit here.", x:"ਕਿਰਪਾ ਕਰਕੇ ਇੱਥੇ ਬੈਠੋ।", p:"kir-pa kar-kay ih-thay bay-toe"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"ਦਰਦ ਹੈ? ਕਿੱਥੇ? ਇਸ਼ਾਰਾ ਕਰੋ।", p:"dard hay? kih-thay? ih-shah-ra kuh-roe"},
      {id:"intro-fam-glaucoma", en:"Do you have a family history of glaucoma?", x:"ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਵਿੱਚ ਕਿਸੇ ਨੂੰ ਕਾਲਾ ਮੋਤੀਆ ਹੋਇਆ ਹੈ?", p:"tu-hah-day pa-ree-vaar vich kih-say noo kah-la moe-tee-ah hoe-ee-ah hay?"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"ਕਿਰਪਾ ਕਰਕੇ ਐਨਕ ਲਗਾਓ।", p:"kir-pa kar-kay eye-nak lug-ah-oh", icon:"glasses"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"ਖੱਬੀ ਅੱਖ ਢੱਕੋ।", p:"khub-bee ukh dhuk-koe"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"ਸੱਜੀ ਅੱਖ ਢੱਕੋ।", p:"suj-jee ukh dhuk-koe"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"ਤੁਹਾਡੀ ਨਜ਼ਰ ਕਿਹੜੀ ਵਰਗੀ ਹੈ? ਸਭ ਤੋਂ ਨੇੜੇ ਵਾਲੀ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰੋ।", p:"tu-hah-dee nuh-zar keh-ree var-gee hay? sub tone nay-ray vah-lee vull ih-shah-ra kuh-roe"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"ਜੋ ਸਭ ਤੋਂ ਛੋਟੀ ਲਾਈਨ ਦਿਸਦੀ ਹੈ ਉਹ ਪੜ੍ਹੋ।", p:"joe sub tone choh-tee line dis-dee hay oh puh-roe"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"ਛੋਟੀ ਮੋਰੀ ਵਿੱਚੋਂ ਦੇਖੋ, ਸ਼ਾਇਦ ਸਾਫ਼ ਦਿਸੇ।", p:"choh-tee moh-ree vich-ohn day-koe, shy-ad saaf dis-say"},
      {id:"vis-fingers", en:"How many fingers?", x:"ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ?", p:"kin-nee-yan oong-lan?"},
      {id:"vis-hand-motion", en:"Do you see my hand moving?", x:"ਕੀ ਤੁਹਾਨੂੰ ਮੇਰਾ ਹੱਥ ਹਿੱਲਦਾ ਦਿਸਦਾ ਹੈ?", p:"kee tu-hah-noo may-ra hutth hil-da dis-da hay?"},
      {id:"vis-see-this", en:"Can you see this?", x:"ਕੀ ਇਹ ਦਿਸਦਾ ਹੈ?", p:"kee ih dis-dah hay?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"ਜੇ ਰੌਸ਼ਨੀ ਹਿਲਦੀ ਦਿਸੇ ਤਾਂ ਦੱਸੋ।", p:"jay rowsh-nee hil-dee dis-say tahn dus-so"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖੋ।", p:"may-ray nuck vull day-koe"},
      {id:"vis-double", en:"Do you see two of me?", x:"ਕੀ ਤੁਹਾਨੂੰ ਦੋ ਦਿਸਦੇ ਹਨ?", p:"kee tu-hah-noo doe dis-day hun?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"ਇਸ ਪਾਸੇ ਦੇਖਣ ਤੇ ਵੱਧ ਹੁੰਦਾ ਹੈ?", p:"iss pah-say day-khan tay vudh hoon-da hay?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"ਹੁਣ ਅੱਖਾਂ ਵਿੱਚ ਰੌਸ਼ਨੀ ਪਾਉਣੀ ਹੈ। ਮੇਰੇ ਪਿੱਛੇ ਕੰਧ ਵੱਲ ਦੇਖੋ।", p:"hun uh-khan vich rowsh-nee pow-nee hay. may-ray pih-chay kundh vull day-koe"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"ਰੌਸ਼ਨੀ ਵੱਲ ਨਾ ਦੇਖੋ, ਦੂਰ ਦੇਖਦੇ ਰਹੋ।", p:"rowsh-nee vull na day-koe, door day-kh-day ruh-hoe"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"ਦੋਵੇਂ ਅੱਖਾਂ ਖੁੱਲ੍ਹੀਆਂ ਰੱਖੋ।", p:"doe-ven uh-khan khul-lee-yan ruh-koe", icon:"eye-open"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-look-here", en:"Look here.", x:"ਇੱਥੇ ਦੇਖੋ।", p:"ih-thay day-koe"},
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"ਮੇਰੀ ਉਂਗਲ ਵੱਲ ਦੇਖੋ। ਸਿਰ ਨਾ ਹਿਲਾਓ।", p:"may-ree oon-gal vull day-koe. sir na hih-lah-oh"},
      {id:"mot-up", en:"Look up.", x:"ਉੱਪਰ ਦੇਖੋ।", p:"oop-par day-koe", icon:"up"},
      {id:"mot-down", en:"Look down.", x:"ਹੇਠਾਂ ਦੇਖੋ।", p:"hay-thaan day-koe", icon:"down"},
      {id:"mot-left", en:"Look left.", x:"ਖੱਬੇ ਦੇਖੋ।", p:"khub-bay day-koe", icon:"left"},
      {id:"mot-right", en:"Look right.", x:"ਸੱਜੇ ਦੇਖੋ।", p:"suj-jay day-koe", icon:"right"},
      {id:"mot-straight", en:"Look straight ahead.", x:"ਸਿੱਧਾ ਸਾਹਮਣੇ ਦੇਖੋ।", p:"sid-dha saah-muh-nay day-koe"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"ਹੁਣ ਅੱਖ ਦਾ ਦਬਾਅ ਜਾਂਚਣਾ ਹੈ।", p:"hun ukh da duh-bah jaan-chuh-na hay"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"ਇਸ ਵਿੱਚ ਦਰਦ ਨਹੀਂ ਹੁੰਦਾ। ਅੱਖ ਉੱਤੇ ਹਲਕਾ ਜਿਹਾ ਛੋਹ ਮਹਿਸੂਸ ਹੋਵੇਗਾ।", p:"iss vich dard nuh-heen hoon-da. ukh oo-tay hul-ka jih-ha choh muh-soos hoe-vay-ga"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"ਸਿੱਧਾ ਸਾਹਮਣੇ ਦੇਖੋ, ਹਿੱਲੋ ਨਾ, ਅਤੇ ਪਲਕ ਨਾ ਝਪਕੋ।", p:"sid-dha saah-muh-nay day-koe, hil-loe na, uh-tay puh-luck na jhup-koe"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"ਮੇਰੇ ਨੱਕ ਵੱਲ ਦੇਖਦੇ ਰਹੋ, ਮੇਰੇ ਹੱਥ ਵੱਲ ਨਾ ਦੇਖੋ।", p:"may-ray nuck vull day-kh-day ruh-hoe, may-ray hath vull na day-koe"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"ਮੇਰੀਆਂ ਉਂਗਲਾਂ ਦਿਸਣ ਤੇ ਹੱਥ ਚੁੱਕੋ।", p:"may-ree-yan oong-lan dis-san tay hath chuk-koe"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"ਹੁਣ ਕਿੰਨੀਆਂ ਉਂਗਲਾਂ ਦਿਸਦੀਆਂ ਹਨ?", p:"hun kin-nee-yan oong-lan dis-dee-yan hun?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"ਕੀ ਤੁਹਾਨੂੰ ਕਿਸੇ ਦਵਾਈ ਤੋਂ ਐਲਰਜੀ ਹੈ?", p:"kee tu-hah-noo kih-say duh-vye tone al-ler-jee hay?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"ਹੁਣ ਤੁਹਾਡੀ ਅੱਖ ਵਿੱਚ ਬੂੰਦਾਂ ਪਾਉਣੀਆਂ ਹਨ।", p:"hun tu-hah-dee ukh vich boon-daan pow-nee-yan hun", icon:"dropper"},
      {id:"drp-look-up", en:"Please look up.", x:"ਕਿਰਪਾ ਕਰਕੇ ਉੱਪਰ ਦੇਖੋ।", p:"kir-pa kar-kay oop-par day-koe", icon:"up"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"ਇਹ ਅੱਖ ਸੁੰਨ ਕਰਨ ਵਾਲੀ ਦਵਾਈ ਹੈ। ਕੁਝ ਸਕਿੰਟ ਚੁਭ ਸਕਦੀ ਹੈ।", p:"ih ukh soon kuh-ran vah-lee duh-vye hay. kuj sa-kint chubh suk-dee hay"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"ਇਹ ਬੂੰਦ ਪੁਤਲੀ ਖੋਲ੍ਹ ਦੇਵੇਗੀ।", p:"ih boond poot-lee kohl day-vay-gee"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"ਨਜ਼ਰ ਲਗਭਗ ਛੇ ਘੰਟੇ ਧੁੰਦਲੀ ਰਹੇਗੀ।", p:"nuh-zar lug-bhug chay ghun-tay dhoond-lee ruh-hay-gee"},
      {id:"drp-close", en:"Please close your eyes.", x:"ਕਿਰਪਾ ਕਰਕੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ।", p:"kir-pa kar-kay uh-khan bund kuh-roe", icon:"eye-shut"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"ਅੱਖਾਂ ਨਾ ਮਲੋ।", p:"uh-khan na mah-loe"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"ਠੋਡੀ ਇੱਥੇ ਰੱਖੋ, ਮੱਥਾ ਇਸ ਪੱਟੀ ਨਾਲ ਲਗਾਓ।", p:"toe-dee ih-thay ruh-koe, mut-tha iss put-tee null lug-ah-oh"},
      {id:"slit-open", en:"Open your eyes wide.", x:"ਅੱਖਾਂ ਪੂਰੀਆਂ ਖੋਲ੍ਹੋ।", p:"uh-khan poo-ree-yan koh-loe", icon:"eye-open"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"ਸਿਰ ਪਿੱਛੇ ਨਾ ਕਰੋ।", p:"sir pih-chay na kuh-roe"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"ਰੌਸ਼ਨੀ ਤੇਜ਼ ਹੈ। ਥੋੜ੍ਹਾ ਬਰਦਾਸ਼ਤ ਕਰੋ।", p:"rowsh-nee tayz hay. tore-ha bar-dasht kuh-roe"},
      {id:"slit-ear", en:"Look at my ear.", x:"ਮੇਰੇ ਕੰਨ ਵੱਲ ਦੇਖੋ।", p:"may-ray kunn vull day-koe", icon:"ear"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"ਹੁਣ ਤੁਹਾਡੀ ਪਲਕ ਨੂੰ ਛੂਹਣਾ ਹੈ।", p:"hun tu-hah-dee puh-luck noo chooh-na hay"},
      {id:"slit-almost", en:"Almost done.", x:"ਲਗਭਗ ਹੋ ਗਿਆ।", p:"lug-bhug hoe gee-ah"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"ਜਾਂਚ ਪੂਰੀ ਹੋ ਗਈ। ਧੰਨਵਾਦ।", p:"jaanch poo-ree hoe guy. dhun-vaad"},
      {id:"close-healthy", en:"Your eyes are healthy.", x:"ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ ਠੀਕ ਹਨ।", p:"tu-hah-dee-yan uh-khan teek hun", icon:"check"},
      {id:"close-consult", en:"I will have to speak to another doctor about your eyes. I will be back.", x:"ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ ਬਾਰੇ ਦੂਜੇ ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰਨੀ ਹੈ। ਥੋੜ੍ਹੀ ਦੇਰ ਬਾਅਦ ਵਾਪਸ ਆਉਣਾ ਹੈ।", p:"tu-hah-dee-yan uh-khan bah-ray doo-jay dahk-tar naal gull kar-nee hay. tore-hee dare baad vah-pas ow-na hay"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"ਨਤੀਜੇ ਸਮਝਾਉਣ ਲਈ ਦੁਭਾਸ਼ੀਏ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਵੇਗੀ।", p:"nuh-tee-jay sum-jhown lye du-bhah-shee-yay dee var-tone kee-tee jah-vay-gee"}
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
  {img:"normal", en:"Normal", x:"ਆਮ"},
  {img:"blur", en:"Blurry", x:"ਧੁੰਦਲਾ"},
  {img:"distort", en:"Wavy or bent", x:"ਟੇਢਾ"},
  {img:"faded", en:"Faded", x:"ਫਿੱਕਾ"},
  {img:"central", en:"Dark in the middle", x:"ਵਿਚਕਾਰ ਕਾਲਾ"},
  {img:"curtain", en:"Curtain across", x:"ਪਰਦਾ"},
  {img:"floaters", en:"Specks or cobwebs", x:"ਕਾਲੇ ਧੱਬੇ"},
  {img:"flashes", en:"Flashes of light", x:"ਲਿਸ਼ਕਾਂ"},
  {img:"zigzag", en:"Zigzag lines", x:"ਟੇਢੀਆਂ ਲਕੀਰਾਂ"},
  {img:"halo", en:"Halo around lights", x:"ਰੌਸ਼ਨੀ ਦੁਆਲੇ ਗੋਲਾ"},
  {img:"patch", en:"Patch missing", x:"ਇੱਕ ਹਿੱਸਾ ਗਾਇਬ"},
  {img:"tunnel", en:"Only the middle", x:"ਸਿਰਫ਼ ਵਿਚਕਾਰ"},
  {img:"half", en:"Half missing", x:"ਅੱਧਾ ਗਾਇਬ"},
  {img:"quadrant", en:"Corner missing", x:"ਕੋਨਾ ਗਾਇਬ"},
];

/* The eleven phrases that come up most, surfaced in a panel at the top of
   the card so they are reachable without scrolling. These are references, not
   copies: same ids, same audio, same wording as the stage they belong to. */
const QUICK = ["mot-look-here", "mot-up", "mot-down", "mot-left", "mot-right", "mot-straight", "slit-open", "drp-close"];

const QUICKNAV = [{stage:"acuity", icon:"glasses"}, {stage:"drops", icon:"dropper"}, {stage:"slitlamp", icon:"lamp"}];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"ਜੇ ਦੋ ਦਿਸਦੇ ਹਨ, ਕਿਵੇਂ ਹਨ? ਇਸ਼ਾਰਾ ਕਰੋ।",
  p:"jay doe dis-day hun, kih-ven hun? ih-shah-ra kuh-roe",
  opts:[
    {img:"dip-single", x:"ਇੱਕ", p:"ick", lab:"Single"},
    {img:"dip-h", x:"ਨਾਲ-ਨਾਲ", p:"naal-naal", lab:"Side by side"},
    {img:"dip-v", x:"ਉੱਪਰ-ਹੇਠਾਂ", p:"oop-par hay-thaan", lab:"One above"}
  ]
};
