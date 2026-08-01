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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"我係醫生，我幫你檢查對眼。", p:"Ngo5 hai6 ji1sang1, ngo5 bong1 nei5 gim2caa4 deoi3 ngaan5."},
      {id:"s01-02", en:"Please sit here.", x:"請坐喺呢度。", p:"Cing2 co5 hai2 ni1dou6."},
      {id:"s01-03", en:"Please take off your glasses.", x:"請除低眼鏡。", p:"Cing2 ceoi4dai1 ngaan5geng2."},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"痛唔痛？邊度痛？指俾我睇。", p:"Tung3 m4 tung3? Bin1dou6 tung3? Zi2 bei2 ngo5 tai2."}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"請讀你睇到最細嗰行。", p:"Cing2 duk6 nei5 tai2dou2 zeoi3 sai3 go2 hong4."},
      {id:"s02-02", en:"How many fingers?", x:"幾多隻手指？", p:"Gei2do1 zek3 sau2zi2?"},
      {id:"s02-03", en:"Can you see this?", x:"睇唔睇到？", p:"Tai2 m4 tai2dou2?"},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"見到光郁請話我知。", p:"Gin3dou2 gwong1 juk1 cing2 waa6 ngo5 zi1."},
      {id:"s02-05", en:"Look at my nose.", x:"望住我個鼻。", p:"Mong6zyu6 ngo5 go3 bei6."},
      {id:"s02-06", en:"Do you see two of me?", x:"你係咪見到兩個我？", p:"Nei5 hai6mai6 gin3dou2 loeng5 go3 ngo5?"},
      {id:"s02-07", en:"Is it worse looking this way?", x:"望呢邊會唔會嚴重啲？", p:"Mong6 ni1bin1 wui5 m4 wui5 jim4zung6 di1?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"望住我隻手指，唔好郁個頭。", p:"Mong6zyu6 ngo5 zek3 sau2zi2, m4hou2 juk1 go3 tau4."},
      {id:"s03-02", en:"Look up.", x:"望上。", p:"Mong6 soeng6."},
      {id:"s03-03", en:"Look down.", x:"望落。", p:"Mong6 lok6."},
      {id:"s03-04", en:"Look left.", x:"望左。", p:"Mong6 zo2."},
      {id:"s03-05", en:"Look right.", x:"望右。", p:"Mong6 jau6."},
      {id:"s03-06", en:"Look far away.", x:"望遠啲。", p:"Mong6 jyun5 di1."}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"你有冇藥物敏感？", p:"Nei5 jau5mou5 joek6mat6 man5gam2?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"我要幫你滴眼藥水。", p:"Ngo5 jiu3 bong1 nei5 dik6 ngaan5joek6seoi2."},
      {id:"s04-03", en:"Please look up.", x:"請望上。", p:"Cing2 mong6 soeng6."},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"呢啲係眼嘅麻藥，可能會刺痛幾秒。", p:"Ni1di1 hai6 ngaan5 ge3 maa4joek6, ho2nang4 wui5 ci3tung3 gei2 miu5."},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"呢啲係散瞳藥水。", p:"Ni1di1 hai6 saan3tung4 joek6seoi2."},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"你嘅視力會矇大概六個鐘。", p:"Nei5 ge3 si6lik6 wui5 mung4 daai6koi3 luk6 go3 zung1."},
      {id:"s04-07", en:"Please close your eyes.", x:"請閉埋眼。", p:"Cing2 bai3maai4 ngaan5."},
      {id:"s04-08", en:"Don't rub your eyes.", x:"唔好捽眼。", p:"M4hou2 zeot1 ngaan5."}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"下巴放喺呢度。", p:"Haa6baa1 fong3 hai2 ni1dou6."},
      {id:"s05-02", en:"Forehead against the bar.", x:"額頭貼住呢度。", p:"Ngaak6tau4 tip3zyu6 ni1dou6."},
      {id:"s05-03", en:"Don't pull your head back.", x:"個頭唔好向後退。", p:"Go3 tau4 m4hou2 hoeng3 hau6 teoi3."},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"個燈好光，請忍一忍。", p:"Go3 dang1 hou2 gwong1, cing2 jan2 jat1 jan2."},
      {id:"s05-05", en:"Look at my ear.", x:"望住我隻耳仔。", p:"Mong6zyu6 ngo5 zek3 ji5zai2."},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"我要掂一掂你嘅眼皮。", p:"Ngo5 jiu3 dim6 jat1 dim6 nei5 ge3 ngaan5pei4."},
      {id:"s05-07", en:"Almost done.", x:"就快好喇。", p:"Zau6 faai3 hou2 laa3."}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"檢查完喇，多謝。", p:"Gim2caa4 jyun4 laa3, do1ze6."},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"我哋會搵翻譯同你解釋結果。", p:"Ngo5dei6 wui5 wan2 faan1jik6 tung4 nei5 gaai2sik1 git3gwo2."}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"如果見到兩個，係點樣排？指俾我睇。",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"一個", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"左右", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"上下", lab:"One above"}
  ]
};
