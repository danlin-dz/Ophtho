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
      {id:"s01-01", en:"I am your eye doctor.", x:"眼科医です。", p:"gan-ka-ee dess"},
      {id:"s01-02", en:"Please sit here.", x:"ここに座ってください。", p:"koh-koh nee soo-wat-tay koo-da-sigh"},
      {id:"s01-03", en:"Please take off your glasses.", x:"眼鏡を外してください。", p:"meh-ga-nay oh ha-zoo-shee-tay koo-da-sigh"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"痛みますか？どこか指さしてください。", p:"ee-ta-mee-mass ka? doh-koh ka yoo-bee-sa-shee-tay koo-da-sigh"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"眼鏡をかけてください。", p:"meh-ga-nay oh ka-kay-tay koo-da-sigh"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"見える一番小さい行を読んでください。", p:"mee-eh-roo ee-chee-ban chee-sigh gyoh oh yon-day koo-da-sigh"},
      {id:"s02-03", en:"How many fingers?", x:"指は何本ですか？", p:"yoo-bee wa nan-bon dess ka?"},
      {id:"s02-04", en:"Can you see this?", x:"これが見えますか？", p:"koh-ray ga mee-eh-mass ka?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"光が動いたら教えてください。", p:"hee-ka-ree ga oo-goy-ta-ra oh-shee-eh-tay koo-da-sigh"},
      {id:"s02-06", en:"Look at my nose.", x:"私の鼻を見てください。", p:"wa-ta-shee no ha-na oh mee-tay koo-da-sigh"},
      {id:"s02-07", en:"Do you see two of me?", x:"私が二人に見えますか？", p:"wa-ta-shee ga foo-ta-ree nee mee-eh-mass ka?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"こちらを見るとひどくなりますか？", p:"koh-chee-ra oh mee-roo toh hee-doh-koo na-ree-mass ka?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"私の指を見てください。頭は動かさないでください。", p:"wa-ta-shee no yoo-bee oh mee-tay koo-da-sigh. ah-ta-ma wa oo-goh-ka-sa-nigh-day koo-da-sigh"},
      {id:"s03-02", en:"Look up.", x:"上を見てください。", p:"oo-eh oh mee-tay koo-da-sigh"},
      {id:"s03-03", en:"Look down.", x:"下を見てください。", p:"shta oh mee-tay koo-da-sigh"},
      {id:"s03-04", en:"Look left.", x:"左を見てください。", p:"hee-da-ree oh mee-tay koo-da-sigh"},
      {id:"s03-05", en:"Look right.", x:"右を見てください。", p:"mee-ghee oh mee-tay koo-da-sigh"},
      {id:"s03-06", en:"Look straight ahead.", x:"まっすぐ前を見てください。", p:"mahs-soo-goo mah-eh oh mee-tay koo-da-sigh"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"薬のアレルギーはありますか？", p:"koo-soo-ree no ah-ray-roo-ghee wa ah-ree-mass ka?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"目薬をさします。", p:"meh-goo-soo-ree oh sa-shee-mass"},
      {id:"s04-03", en:"Please look up.", x:"上を見てください。", p:"oo-eh oh mee-tay koo-da-sigh"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"目の麻酔薬です。数秒しみることがあります。", p:"may no ma-soo-ee-ya-koo dess. soo-byoh shee-mee-roo koh-toh ga ah-ree-mass"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"この目薬は瞳孔を広げます。", p:"koh-no meh-goo-soo-ree wa doh-koh oh hee-roh-gay-mass"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"約6時間、見えにくくなります。", p:"ya-koo roh-koo-jee-kan, mee-eh-nee-koo-koo na-ree-mass"},
      {id:"s04-07", en:"Please close your eyes.", x:"目を閉じてください。", p:"may oh toh-jee-tay koo-da-sigh"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"目をこすらないでください。", p:"may oh koh-soo-ra-nigh-day koo-da-sigh"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"顎をここに乗せ、額をここにつけてください。", p:"ah-goh oh koh-koh nee no-say, hee-tigh oh koh-koh nee tsoo-kay-tay koo-da-sigh"},
      {id:"s05-02", en:"Open your eyes.", x:"目を開けてください。", p:"may oh ah-kay-tay koo-da-sigh"},
      {id:"s05-03", en:"Don't pull your head back.", x:"頭を後ろに引かないでください。", p:"ah-ta-ma oh oo-shee-roh nee hee-ka-nigh-day koo-da-sigh"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"光が眩しいです。少し我慢してください。", p:"hee-ka-ree ga ma-boo-shee dess. skoh-shee ga-man shtay koo-da-sigh"},
      {id:"s05-05", en:"Look at my ear.", x:"私の耳を見てください。", p:"wa-ta-shee no mee-mee oh mee-tay koo-da-sigh"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"まぶたに触ります。", p:"ma-boo-ta nee sa-wa-ree-mass"},
      {id:"s05-07", en:"Almost done.", x:"もうすぐ終わります。", p:"moh-soo-goo oh-wa-ree-mass"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"診察は終わりです。ありがとうございました。", p:"shin-sa-tsu wa oh-wa-ree dess. ah-ree-ga-toh goh-zigh-ma-shta"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"結果は通訳を通して説明します。", p:"kek-ka wa tsoo-ya-koo oh toh-shtay set-soo-may shee-mass"}
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
  x:"二つ見える場合、どのように並んでいますか？指さしてください。",
  p:"foo-ta-tsu mee-eh-roo bye, doh-no yoh nee na-ran-day ee-mass ka? yoo-bee-sa-shee-tay koo-da-sigh",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"一つ", p:"hee-toh-tsu", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"左右", p:"sa-yoo", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"上下", p:"joh-gay", lab:"One above"}
  ]
};
