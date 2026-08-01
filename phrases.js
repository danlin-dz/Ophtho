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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"医師です。目を診察します。", p:"Ishi desu. Me o shinsatsu shimasu."},
      {id:"s01-02", en:"Please sit here.", x:"ここに座ってください。", p:"Koko ni suwatte kudasai."},
      {id:"s01-03", en:"Please take off your glasses.", x:"眼鏡を外してください。", p:"Megane o hazushite kudasai."},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"痛みますか？どこか指さしてください。", p:"Itamimasu ka? Doko ka yubisashite kudasai."}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"見える一番小さい行を読んでください。", p:"Mieru ichiban chiisai gyō o yonde kudasai."},
      {id:"s02-02", en:"How many fingers?", x:"指は何本ですか？", p:"Yubi wa nanbon desu ka?"},
      {id:"s02-03", en:"Can you see this?", x:"これが見えますか？", p:"Kore ga miemasu ka?"},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"光が動いたら教えてください。", p:"Hikari ga ugoitara oshiete kudasai."},
      {id:"s02-05", en:"Look at my nose.", x:"私の鼻を見てください。", p:"Watashi no hana o mite kudasai."},
      {id:"s02-06", en:"Do you see two of me?", x:"私が二人に見えますか？", p:"Watashi ga futari ni miemasu ka?"},
      {id:"s02-07", en:"Is it worse looking this way?", x:"こちらを見るとひどくなりますか？", p:"Kochira o miru to hidoku narimasu ka?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"私の指を見てください。頭は動かさないでください。", p:"Watashi no yubi o mite kudasai. Atama wa ugokasanaide kudasai."},
      {id:"s03-02", en:"Look up.", x:"上を見てください。", p:"Ue o mite kudasai."},
      {id:"s03-03", en:"Look down.", x:"下を見てください。", p:"Shita o mite kudasai."},
      {id:"s03-04", en:"Look left.", x:"左を見てください。", p:"Hidari o mite kudasai."},
      {id:"s03-05", en:"Look right.", x:"右を見てください。", p:"Migi o mite kudasai."},
      {id:"s03-06", en:"Look far away.", x:"遠くを見てください。", p:"Tōku o mite kudasai."}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"薬のアレルギーはありますか？", p:"Kusuri no arerugī wa arimasu ka?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"目薬をさします。", p:"Megusuri o sashimasu."},
      {id:"s04-03", en:"Please look up.", x:"上を見てください。", p:"Ue o mite kudasai."},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"目の麻酔薬です。数秒しみることがあります。", p:"Me no masuiyaku desu. Sūbyō shimiru koto ga arimasu."},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"この目薬は瞳孔を広げます。", p:"Kono megusuri wa dōkō o hirogemasu."},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"約6時間、見えにくくなります。", p:"Yaku rokujikan, mienikuku narimasu."},
      {id:"s04-07", en:"Please close your eyes.", x:"目を閉じてください。", p:"Me o tojite kudasai."},
      {id:"s04-08", en:"Don't rub your eyes.", x:"目をこすらないでください。", p:"Me o kosuranaide kudasai."}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"顎をここに乗せてください。", p:"Ago o koko ni nosete kudasai."},
      {id:"s05-02", en:"Forehead against the bar.", x:"額をここにつけてください。", p:"Hitai o koko ni tsukete kudasai."},
      {id:"s05-03", en:"Don't pull your head back.", x:"頭を後ろに引かないでください。", p:"Atama o ushiro ni hikanaide kudasai."},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"光が眩しいです。少し我慢してください。", p:"Hikari ga mabushii desu. Sukoshi gaman shite kudasai."},
      {id:"s05-05", en:"Look at my ear.", x:"私の耳を見てください。", p:"Watashi no mimi o mite kudasai."},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"まぶたに触ります。", p:"Mabuta ni sawarimasu."},
      {id:"s05-07", en:"Almost done.", x:"もうすぐ終わります。", p:"Mōsugu owarimasu."}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"診察は終わりです。ありがとうございました。", p:"Shinsatsu wa owari desu. Arigatō gozaimashita."},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"結果は通訳を通して説明します。", p:"Kekka wa tsūyaku o tōshite setsumei shimasu."}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"二つ見える場合、どのように並んでいますか？指さしてください。",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"一つ", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"左右", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"上下", lab:"One above"}
  ]
};
