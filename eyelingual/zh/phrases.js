/* Eyelingual — Mandarin phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/zh/s02-04.m4a).
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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"我是医生，我来检查您的眼睛。", t:"我是醫生，我來檢查您的眼睛。", p:"Wǒ shì yīshēng, wǒ lái jiǎnchá nín de yǎnjīng."},
      {id:"s01-02", en:"Please sit here.", x:"请坐这里。", t:"請坐這裡。", p:"Qǐng zuò zhèlǐ."},
      {id:"s01-03", en:"Please take off your glasses.", x:"请把眼镜摘下来。", t:"請把眼鏡摘下來。", p:"Qǐng bǎ yǎnjìng zhāi xiàlái."},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"痛吗？哪里痛？请指一下。", t:"痛嗎？哪裡痛？請指一下。", p:"Tòng ma? Nǎlǐ tòng? Qǐng zhǐ yíxià."}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"请念您能看到的最小的一行。", t:"請念您能看到的最小的一行。", p:"Qǐng niàn nín néng kàndào de zuì xiǎo de yì háng."},
      {id:"s02-02", en:"How many fingers?", x:"几根手指？", t:"幾根手指？", p:"Jǐ gēn shǒuzhǐ?"},
      {id:"s02-03", en:"Can you see this?", x:"看得见吗？", t:"看得見嗎？", p:"Kàn de jiàn ma?"},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"看到光移动请告诉我。", t:"看到光移動請告訴我。", p:"Kàndào guāng yídòng qǐng gàosu wǒ."},
      {id:"s02-05", en:"Look at my nose.", x:"请看我的鼻子。", t:"請看我的鼻子。", p:"Qǐng kàn wǒ de bízi."},
      {id:"s02-06", en:"Do you see two of me?", x:"您看到两个我吗？", t:"您看到兩個我嗎？", p:"Nín kàndào liǎng ge wǒ ma?"},
      {id:"s02-07", en:"Is it worse looking this way?", x:"看这个方向更严重吗？", t:"看這個方向更嚴重嗎？", p:"Kàn zhège fāngxiàng gèng yánzhòng ma?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"请看我的手指，头不要动。", t:"請看我的手指，頭不要動。", p:"Qǐng kàn wǒ de shǒuzhǐ, tóu búyào dòng."},
      {id:"s03-02", en:"Look up.", x:"往上看。", t:"往上看。", p:"Wǎng shàng kàn."},
      {id:"s03-03", en:"Look down.", x:"往下看。", t:"往下看。", p:"Wǎng xià kàn."},
      {id:"s03-04", en:"Look left.", x:"往左看。", t:"往左看。", p:"Wǎng zuǒ kàn."},
      {id:"s03-05", en:"Look right.", x:"往右看。", t:"往右看。", p:"Wǎng yòu kàn."},
      {id:"s03-06", en:"Look far away.", x:"看远处。", t:"看遠處。", p:"Kàn yuǎnchù."}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"您对药物过敏吗？", t:"您對藥物過敏嗎？", p:"Nín duì yàowù guòmǐn ma?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"我要给您点眼药水。", t:"我要給您點眼藥水。", p:"Wǒ yào gěi nín diǎn yǎnyàoshuǐ."},
      {id:"s04-03", en:"Please look up.", x:"请往上看。", t:"請往上看。", p:"Qǐng wǎng shàng kàn."},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"这是眼睛的麻药，可能会刺痛几秒钟。", t:"這是眼睛的麻藥，可能會刺痛幾秒鐘。", p:"Zhè shì yǎnjīng de máyào, kěnéng huì cìtòng jǐ miǎozhōng."},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"这是散瞳药水。", t:"這是散瞳藥水。", p:"Zhè shì sàntóng yàoshuǐ."},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"您的视力会模糊大约六个小时。", t:"您的視力會模糊大約六個小時。", p:"Nín de shìlì huì móhu dàyuē liù ge xiǎoshí."},
      {id:"s04-07", en:"Please close your eyes.", x:"请闭上眼睛。", t:"請閉上眼睛。", p:"Qǐng bì shàng yǎnjīng."},
      {id:"s04-08", en:"Don't rub your eyes.", x:"不要揉眼睛。", t:"不要揉眼睛。", p:"Búyào róu yǎnjīng."}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"下巴放在这里。", t:"下巴放在這裡。", p:"Xiàba fàng zài zhèlǐ."},
      {id:"s05-02", en:"Forehead against the bar.", x:"额头靠着这里。", t:"額頭靠著這裡。", p:"Étóu kàozhe zhèlǐ."},
      {id:"s05-03", en:"Don't pull your head back.", x:"头不要往后退。", t:"頭不要往後退。", p:"Tóu búyào wǎng hòu tuì."},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"灯会很亮，请忍一下。", t:"燈會很亮，請忍一下。", p:"Dēng huì hěn liàng, qǐng rěn yíxià."},
      {id:"s05-05", en:"Look at my ear.", x:"请看我的耳朵。", t:"請看我的耳朵。", p:"Qǐng kàn wǒ de ěrduo."},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"我要碰一下您的眼皮。", t:"我要碰一下您的眼皮。", p:"Wǒ yào pèng yíxià nín de yǎnpí."},
      {id:"s05-07", en:"Almost done.", x:"快好了。", t:"快好了。", p:"Kuài hǎo le."}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"检查完了，谢谢您。", t:"檢查完了，謝謝您。", p:"Jiǎnchá wán le, xièxie nín."},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"我们会用翻译跟您解释检查结果。", t:"我們會用翻譯跟您解釋檢查結果。", p:"Wǒmen huì yòng fānyì gēn nín jiěshì jiǎnchá jiéguǒ."}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"如果看到两个，是怎么排的？请指一下。",
  t:"如果看到兩個，是怎麼排的？請指一下。",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"一个", t:"一個", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"左右", t:"左右", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"上下", t:"上下", lab:"One above"}
  ]
};
