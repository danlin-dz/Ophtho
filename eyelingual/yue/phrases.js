/* Eyelingual — Cantonese phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/yue/s02-04.m4a).
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
      {id:"s01-01", en:"I am your eye doctor.", x:"我係你嘅眼科醫生。", p:"ngaw high nay geh ngahn-faw yee-sahng"},
      {id:"s01-02", en:"Please sit here.", x:"請坐喺呢度。", p:"ching chaw high nee-doh"},
      {id:"s01-03", en:"Please take off your glasses.", x:"請除低眼鏡。", p:"ching choy-dye ngahn-geng"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"痛唔痛？邊度痛？指俾我睇。", p:"tung mm tung? bin-doh tung? jee bay ngaw tye"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"請戴返眼鏡。", p:"ching dye-fahn ngahn-geng"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"請讀你睇到最細嗰行。", p:"ching duke nay tye-doh joy sye gaw hong"},
      {id:"s02-03", en:"How many fingers?", x:"幾多隻手指？", p:"gay-daw jek sow-jee?"},
      {id:"s02-04", en:"Can you see this?", x:"睇唔睇到？", p:"tye mm tye-doh?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"見到光郁請話我知。", p:"gin-doh gwong yuke ching wah ngaw jee"},
      {id:"s02-06", en:"Look at my nose.", x:"望住我個鼻。", p:"mong-jyu ngaw gaw bay"},
      {id:"s02-07", en:"Do you see two of me?", x:"你係咪見到兩個我？", p:"nay high-my gin-doh leung gaw ngaw?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"望呢邊會唔會嚴重啲？", p:"mong nee-bin wooi mm wooi yim-jung dee?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"望住我隻手指，唔好郁個頭。", p:"mong-jyu ngaw jek sow-jee, mm-hoe yuke gaw tow"},
      {id:"s03-02", en:"Look up.", x:"望上。", p:"mong seung"},
      {id:"s03-03", en:"Look down.", x:"望落。", p:"mong lok"},
      {id:"s03-04", en:"Look left.", x:"望左。", p:"mong jaw"},
      {id:"s03-05", en:"Look right.", x:"望右。", p:"mong yow"},
      {id:"s03-06", en:"Look straight ahead.", x:"望正前面。", p:"mong jeng chin-min"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"你有冇藥物敏感？", p:"nay yow-moe yeuk-mat mun-gum?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"我要幫你滴眼藥水。", p:"ngaw yiu bong nay dick ngahn-yeuk-soy"},
      {id:"s04-03", en:"Please look up.", x:"請望上。", p:"ching mong seung"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"呢啲係眼嘅麻藥，可能會刺痛幾秒。", p:"nee-dee high ngahn geh mah-yeuk, haw-nahng wooi chee-tung gay miu"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"呢啲係散瞳藥水。", p:"nee-dee high sahn-tung yeuk-soy"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"你嘅視力會矇大概六個鐘。", p:"nay geh see-lick wooi mung dye-hoy luke gaw jung"},
      {id:"s04-07", en:"Please close your eyes.", x:"請閉埋眼。", p:"ching bye-my ngahn"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"唔好捽眼。", p:"mm-hoe jut ngahn"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"下巴放喺呢度，額頭貼住呢度。", p:"hah-bah fong high nee-doh, ngahk-tow tip-jyu nee-doh"},
      {id:"s05-02", en:"Open your eyes.", x:"請擘大對眼。", p:"ching mahk dye doy ngahn"},
      {id:"s05-03", en:"Don't pull your head back.", x:"個頭唔好向後退。", p:"gaw tow mm-hoe heung how toy"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"個燈好光，請忍一忍。", p:"gaw dahng hoe gwong, ching yun yat yun"},
      {id:"s05-05", en:"Look at my ear.", x:"望住我隻耳仔。", p:"mong-jyu ngaw jek yee-jye"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"我要掂一掂你嘅眼皮。", p:"ngaw yiu dim yat dim nay geh ngahn-pay"},
      {id:"s05-07", en:"Almost done.", x:"就快好喇。", p:"jow fye hoe lah"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"檢查完喇，多謝。", p:"gim-chah yune lah, daw-jeh"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"我哋會搵翻譯同你解釋結果。", p:"ngaw-day wooi wun fahn-yick tung nay guy-sick git-gwaw"}
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
  x:"如果見到兩個，係點樣排？指俾我睇。",
  p:"yu-gwaw gin-doh leung gaw, high dim-yeung pye? jee bay ngaw tye",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"一個", p:"yat gaw", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"左右", p:"jaw yow", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"上下", p:"seung hah", lab:"One above"}
  ]
};
