/* Eyelingual — Japanese phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/ja/s02-04.m4a).
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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"眼科医です。", p:"gan-ka-ee dess"},
      {id:"intro-sit", en:"Please sit here.", x:"ここに座ってください。", p:"koh-koh nee soo-wat-tay koo-da-sigh"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"痛みますか？どこか指さしてください。", p:"ee-ta-mee-mass ka? doh-koh ka yoo-bee-sa-shee-tay koo-da-sigh"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"眼鏡をかけてください。", p:"meh-ga-nay oh ka-kay-tay koo-da-sigh"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"左目を隠してください。", p:"hee-da-ree-may oh ka-koo-shee-tay koo-da-sigh"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"右目を隠してください。", p:"mee-ghee-may oh ka-koo-shee-tay koo-da-sigh"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"どれに近いですか？一番近いものを指さしてください。", p:"doh-ray nee chee-kigh dess ka? ee-chee-ban chee-kigh moh-no oh yoo-bee-sa-shee-tay koo-da-sigh"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"見える一番小さい行を読んでください。", p:"mee-eh-roo ee-chee-ban chee-sigh gyoh oh yon-day koo-da-sigh"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"小さな穴から見てください。よく見えるかもしれません。", p:"chee-sa-na ah-na ka-ra mee-tay koo-da-sigh. yoh-koo mee-eh-roo ka-moh shee-ray-ma-sen"},
      {id:"vis-fingers", en:"How many fingers?", x:"指は何本ですか？", p:"yoo-bee wa nan-bon dess ka?"},
      {id:"vis-see-this", en:"Can you see this?", x:"これが見えますか？", p:"koh-ray ga mee-eh-mass ka?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"光が動いたら教えてください。", p:"hee-ka-ree ga oo-goy-ta-ra oh-shee-eh-tay koo-da-sigh"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"私の鼻を見てください。", p:"wa-ta-shee no ha-na oh mee-tay koo-da-sigh"},
      {id:"vis-double", en:"Do you see two of me?", x:"私が二人に見えますか？", p:"wa-ta-shee ga foo-ta-ree nee mee-eh-mass ka?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"こちらを見るとひどくなりますか？", p:"koh-chee-ra oh mee-roo toh hee-doh-koo na-ree-mass ka?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"目に光を当てます。私の後ろの壁を見てください。", p:"may nee hee-ka-ree oh ah-tay-mass. wa-ta-shee no oo-shee-roh no ka-bay oh mee-tay koo-da-sigh"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"光を見ないで、遠くを見ていてください。", p:"hee-ka-ree oh mee-nigh-day, toh-koo oh mee-tay ee-tay koo-da-sigh"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"両目を開けたままにしてください。", p:"ryoh-may oh ah-kay-ta ma-ma nee shee-tay koo-da-sigh"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"私の指を見てください。頭は動かさないでください。", p:"wa-ta-shee no yoo-bee oh mee-tay koo-da-sigh. ah-ta-ma wa oo-goh-ka-sa-nigh-day koo-da-sigh"},
      {id:"mot-up", en:"Look up.", x:"上を見てください。", p:"oo-eh oh mee-tay koo-da-sigh"},
      {id:"mot-down", en:"Look down.", x:"下を見てください。", p:"shta oh mee-tay koo-da-sigh"},
      {id:"mot-left", en:"Look left.", x:"左を見てください。", p:"hee-da-ree oh mee-tay koo-da-sigh"},
      {id:"mot-right", en:"Look right.", x:"右を見てください。", p:"mee-ghee oh mee-tay koo-da-sigh"},
      {id:"mot-straight", en:"Look straight ahead.", x:"まっすぐ前を見てください。", p:"mahs-soo-goo mah-eh oh mee-tay koo-da-sigh"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"眼圧を測ります。", p:"gan-ats-oo oh ha-ka-ree-mass"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"痛くありません。目に軽く触れる感じがします。", p:"ee-ta-koo ah-ree-ma-sen. may nee ka-roo-koo foo-ray-roo kan-jee ga shee-mass"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"まっすぐ前を見て、動かないでください。まばたきもしないでください。", p:"mahs-soo-goo mah-eh oh mee-tay, oo-goh-ka-nigh-day koo-da-sigh. ma-ba-ta-kee moh shee-nigh-day koo-da-sigh"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"私の鼻を見続けてください。手を見ないでください。", p:"wa-ta-shee no ha-na oh mee-tsoo-zoo-kay-tay koo-da-sigh. tay oh mee-nigh-day koo-da-sigh"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"指が見えたら手を上げてください。", p:"yoo-bee ga mee-eh-ta-ra tay oh ah-gay-tay koo-da-sigh"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"今、指は何本見えますか？", p:"ee-ma, yoo-bee wa nan-bon mee-eh-mass ka?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"薬のアレルギーはありますか？", p:"koo-soo-ree no ah-ray-roo-ghee wa ah-ree-mass ka?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"目薬をさします。", p:"meh-goo-soo-ree oh sa-shee-mass"},
      {id:"drp-look-up", en:"Please look up.", x:"上を見てください。", p:"oo-eh oh mee-tay koo-da-sigh"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"目の麻酔薬です。数秒しみることがあります。", p:"may no ma-soo-ee-ya-koo dess. soo-byoh shee-mee-roo koh-toh ga ah-ree-mass"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"この目薬は瞳孔を広げます。", p:"koh-no meh-goo-soo-ree wa doh-koh oh hee-roh-gay-mass"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"約6時間、見えにくくなります。", p:"ya-koo roh-koo-jee-kan, mee-eh-nee-koo-koo na-ree-mass"},
      {id:"drp-close", en:"Please close your eyes.", x:"目を閉じてください。", p:"may oh toh-jee-tay koo-da-sigh"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"目をこすらないでください。", p:"may oh koh-soo-ra-nigh-day koo-da-sigh"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"顎をここに乗せ、額をここにつけてください。", p:"ah-goh oh koh-koh nee no-say, hee-tigh oh koh-koh nee tsoo-kay-tay koo-da-sigh"},
      {id:"slit-open", en:"Open your eyes wide.", x:"目を大きく開けてください。", p:"may oh oh-kee-koo ah-kay-tay koo-da-sigh"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"頭を後ろに引かないでください。", p:"ah-ta-ma oh oo-shee-roh nee hee-ka-nigh-day koo-da-sigh"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"光が眩しいです。少し我慢してください。", p:"hee-ka-ree ga ma-boo-shee dess. skoh-shee ga-man shtay koo-da-sigh"},
      {id:"slit-ear", en:"Look at my ear.", x:"私の耳を見てください。", p:"wa-ta-shee no mee-mee oh mee-tay koo-da-sigh"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"まぶたに触ります。", p:"ma-boo-ta nee sa-wa-ree-mass"},
      {id:"slit-almost", en:"Almost done.", x:"もうすぐ終わります。", p:"moh-soo-goo oh-wa-ree-mass"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"診察は終わりです。ありがとうございました。", p:"shin-sa-tsu wa oh-wa-ree dess. ah-ree-ga-toh goh-zigh-ma-shta"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"結果は通訳を通して説明します。", p:"kek-ka wa tsoo-ya-koo oh toh-shtay set-soo-may shee-mass"}
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
  {img:"normal", en:"Normal", x:"正常"},
  {img:"blur", en:"Blurry", x:"ぼやける"},
  {img:"distort", en:"Wavy or bent", x:"曲がって見える"},
  {img:"faded", en:"Faded", x:"色あせる"},
  {img:"central", en:"Dark in the middle", x:"中心が暗い"},
  {img:"curtain", en:"Curtain across", x:"カーテンがかかる"},
  {img:"floaters", en:"Specks or cobwebs", x:"点や糸くず"},
  {img:"flashes", en:"Flashes of light", x:"光がちらつく"},
  {img:"zigzag", en:"Zigzag lines", x:"ギザギザの線"},
  {img:"halo", en:"Halo around lights", x:"光の周りに輪"},
  {img:"patch", en:"Patch missing", x:"一部が見えない"},
  {img:"tunnel", en:"Only the middle", x:"中心だけ見える"},
  {img:"half", en:"Half missing", x:"半分見えない"},
  {img:"quadrant", en:"Corner missing", x:"角が見えない"},
];

/* Reachable from the Most used panel but not part of any exam stage. */
const EXTRAS = [
  {id:"close-thanks", en:"Thank you.", x:"ありがとうございました。", p:"ah-ree-ga-toh goh-zigh-ma-shta"},
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
  x:"二つ見える場合、どのように並んでいますか？指さしてください。",
  p:"foo-ta-tsu mee-eh-roo bye, doh-no yoh nee na-ran-day ee-mass ka? yoo-bee-sa-shee-tay koo-da-sigh",
  opts:[
    {img:"dip-single", x:"一つ", p:"hee-toh-tsu", lab:"Single"},
    {img:"dip-h", x:"左右", p:"sa-yoo", lab:"Side by side"},
    {img:"dip-v", x:"上下", p:"joh-gay", lab:"One above"}
  ]
};
