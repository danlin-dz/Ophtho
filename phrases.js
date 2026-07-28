/* Mandarin phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/zh/s02-04.m4a).
 *       Never renumber an id: a recording would silently detach from its phrase.
 *       Retiring a phrase means dropping the entry and leaving the id unused.
 * en  — clinician-facing label, also what the search matches on
 * s/t — simplified / traditional
 * p   — pinyin with tone marks, for the clinician
 *
 * Scope is deliberately narrow: instructions and closed questions that happen
 * during the exam itself. Anything that carries clinical meaning — history,
 * consent, findings, plan — belongs with a professional interpreter, not here.
 */

const STAGES = [
  {
    id:"interpreter", num:"00", title:"Before anything",
    note:"Offer first. If the answer is yes, stop here and call — this card is not a substitute.",
    items:[
      {id:"s00-01", en:"Do you need an interpreter?", s:"您需要翻译吗？", t:"您需要翻譯嗎？", p:"Nín xūyào fānyì ma?"},
      {id:"s00-02", en:"I will call an interpreter now.", s:"我现在帮您叫翻译。", t:"我現在幫您叫翻譯。", p:"Wǒ xiànzài bāng nín jiào fānyì."},
      {id:"s00-03", en:"Do you speak Mandarin or Cantonese?", s:"您说普通话还是广东话？", t:"您說普通話還是廣東話？", p:"Nín shuō pǔtōnghuà háishì guǎngdōnghuà?"}
    ]
  },
  {
    id:"setup", num:"01", title:"Approach",
    items:[
      {id:"s01-01", en:"I am the doctor. I'm going to check your eyes.", s:"我是医生，我来检查您的眼睛。", t:"我是醫生，我來檢查您的眼睛。", p:"Wǒ shì yīshēng, wǒ lái jiǎnchá nín de yǎnjīng."},
      {id:"s01-02", en:"Please sit here.", s:"请坐这里。", t:"請坐這裡。", p:"Qǐng zuò zhèlǐ."},
      {id:"s01-03", en:"Please take off your glasses.", s:"请把眼镜摘下来。", t:"請把眼鏡摘下來。", p:"Qǐng bǎ yǎnjìng zhāi xiàlái."},
      {id:"s01-04", en:"Does it hurt? Point to where.", s:"痛吗？哪里痛？请指一下。", t:"痛嗎？哪裡痛？請指一下。", p:"Tòng ma? Nǎlǐ tòng? Qǐng zhǐ yíxià."},
      {id:"s01-05", en:"When did this start?", s:"什么时候开始的？", t:"什麼時候開始的？", p:"Shénme shíhou kāishǐ de?"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    note:"Most of this runs on gesture. The two that need words are the blur question and the smallest-line instruction.",
    items:[
      {id:"s02-01", en:"Please cover this eye.", s:"请遮住这只眼睛。", t:"請遮住這隻眼睛。", p:"Qǐng zhē zhù zhè zhī yǎnjīng."},
      {id:"s02-02", en:"Don't press on your eye.", s:"不要压到眼睛。", t:"不要壓到眼睛。", p:"Búyào yā dào yǎnjīng."},
      {id:"s02-03", en:"Please read the smallest line you can see.", s:"请念您能看到的最小的一行。", t:"請念您能看到的最小的一行。", p:"Qǐng niàn nín néng kàndào de zuì xiǎo de yì háng."},
      {id:"s02-04", en:"What number is this?", s:"这是几？", t:"這是幾？", p:"Zhè shì jǐ?"},
      {id:"s02-05", en:"How many fingers?", s:"几根手指？", t:"幾根手指？", p:"Jǐ gēn shǒuzhǐ?"},
      {id:"s02-06", en:"Can you see this?", s:"看得见吗？", t:"看得見嗎？", p:"Kàn de jiàn ma?"},
      {id:"s02-07", en:"Is it clear, or blurry?", s:"清楚还是模糊？", t:"清楚還是模糊？", p:"Qīngchu háishì móhu?"},
      {id:"s02-08", en:"Which is better — one, or two?", s:"哪个清楚？第一个还是第二个？", t:"哪個清楚？第一個還是第二個？", p:"Nǎge qīngchu? Dì-yī ge háishì dì-èr ge?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you — these are backup for when that fails.",
    diplopia:true,
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", s:"请看我的手指，头不要动。", t:"請看我的手指，頭不要動。", p:"Qǐng kàn wǒ de shǒuzhǐ, tóu búyào dòng."},
      {id:"s03-02", en:"Look at my nose.", s:"请看我的鼻子。", t:"請看我的鼻子。", p:"Qǐng kàn wǒ de bízi."},
      {id:"s03-03", en:"Look up.", s:"往上看。", t:"往上看。", p:"Wǎng shàng kàn."},
      {id:"s03-04", en:"Look down.", s:"往下看。", t:"往下看。", p:"Wǎng xià kàn."},
      {id:"s03-05", en:"Look left.", s:"往左看。", t:"往左看。", p:"Wǎng zuǒ kàn."},
      {id:"s03-06", en:"Look right.", s:"往右看。", t:"往右看。", p:"Wǎng yòu kàn."},
      {id:"s03-07", en:"Look far away.", s:"看远处。", t:"看遠處。", p:"Kàn yuǎnchù."},
      {id:"s03-08", en:"Do you see two of them?", s:"有没有看到两个？", t:"有沒有看到兩個？", p:"Yǒu méiyǒu kàndào liǎng ge?"},
      {id:"s03-09", en:"Is it worse looking this way?", s:"看这个方向更严重吗？", t:"看這個方向更嚴重嗎？", p:"Kàn zhège fāngxiàng gèng yánzhòng ma?"},
      {id:"s03-10", en:"Tell me if you see the light move.", s:"看到光移动请告诉我。", t:"看到光移動請告訴我。", p:"Kàndào guāng yídòng qǐng gàosu wǒ."}
    ]
  },
  {
    id:"slitlamp", num:"04", title:"Slit lamp",
    note:"Positioning is where the exam actually stalls. These five lines fix most of it.",
    items:[
      {id:"s04-01", en:"Chin on the rest.", s:"下巴放在这里。", t:"下巴放在這裡。", p:"Xiàba fàng zài zhèlǐ."},
      {id:"s04-02", en:"Forehead against the bar.", s:"额头靠着这里。", t:"額頭靠著這裡。", p:"Étóu kàozhe zhèlǐ."},
      {id:"s04-03", en:"Don't pull your head back.", s:"头不要往后退。", t:"頭不要往後退。", p:"Tóu búyào wǎng hòu tuì."},
      {id:"s04-04", en:"Open your eyes wide.", s:"眼睛睁大。", t:"眼睛睜大。", p:"Yǎnjīng zhēng dà."},
      {id:"s04-05", en:"Try not to blink.", s:"尽量不要眨眼。", t:"盡量不要眨眼。", p:"Jǐnliàng búyào zhǎ yǎn."},
      {id:"s04-06", en:"The light is bright. Please bear with it.", s:"灯会很亮，请忍一下。", t:"燈會很亮，請忍一下。", p:"Dēng huì hěn liàng, qǐng rěn yíxià."},
      {id:"s04-07", en:"Look at my ear.", s:"请看我的耳朵。", t:"請看我的耳朵。", p:"Qǐng kàn wǒ de ěrduo."},
      {id:"s04-08", en:"I'm going to touch your eyelid.", s:"我要碰一下您的眼皮。", t:"我要碰一下您的眼皮。", p:"Wǒ yào pèng yíxià nín de yǎnpí."},
      {id:"s04-09", en:"Almost done.", s:"快好了。", t:"快好了。", p:"Kuài hǎo le."}
    ]
  },
  {
    id:"drops", num:"05", title:"Drops",
    items:[
      {id:"s05-01", en:"I'm going to put drops in your eye.", s:"我要给您点眼药水。", t:"我要給您點眼藥水。", p:"Wǒ yào gěi nín diǎn yǎnyàoshuǐ."},
      {id:"s05-02", en:"Please look up.", s:"请往上看。", t:"請往上看。", p:"Qǐng wǎng shàng kàn."},
      {id:"s05-03", en:"This is anaesthetic. It will feel cold.", s:"这是麻药，会有点凉。", t:"這是麻藥，會有點涼。", p:"Zhè shì máyào, huì yǒudiǎn liáng."},
      {id:"s05-04", en:"It will sting for a few seconds.", s:"会刺痛几秒钟。", t:"會刺痛幾秒鐘。", p:"Huì cìtòng jǐ miǎozhōng."},
      {id:"s05-05", en:"Please close your eyes.", s:"请闭上眼睛。", t:"請閉上眼睛。", p:"Qǐng bì shàng yǎnjīng."},
      {id:"s05-06", en:"Don't rub your eyes.", s:"不要揉眼睛。", t:"不要揉眼睛。", p:"Búyào róu yǎnjīng."},
      {id:"s05-07", en:"Are you allergic to any medication?", s:"您对药物过敏吗？", t:"您對藥物過敏嗎？", p:"Nín duì yàowù guòmǐn ma?"}
    ]
  },
  {
    id:"dilation", num:"06", title:"Dilating drops — safety", alert:true,
    note:"The highest-value block on this card. Say all four before the drop goes in, not after.",
    items:[
      {id:"s06-01", en:"This drop will dilate your pupils.", s:"这是散瞳药水。", t:"這是散瞳藥水。", p:"Zhè shì sàntóng yàoshuǐ."},
      {id:"s06-02", en:"Your vision will be blurry for 4 to 6 hours.", s:"您的视力会模糊四到六个小时。", t:"您的視力會模糊四到六個小時。", p:"Nín de shìlì huì móhu sì dào liù ge xiǎoshí."},
      {id:"s06-03", en:"You will be very sensitive to light.", s:"您会很怕光。", t:"您會很怕光。", p:"Nín huì hěn pà guāng."},
      {id:"s06-04", en:"Please do not drive today.", s:"今天请不要开车。", t:"今天請不要開車。", p:"Jīntiān qǐng búyào kāichē."},
      {id:"s06-05", en:"Is someone able to take you home?", s:"有人可以送您回家吗？", t:"有人可以送您回家嗎？", p:"Yǒu rén kěyǐ sòng nín huíjiā ma?"},
      {id:"s06-06", en:"Sunglasses will help.", s:"戴太阳镜会舒服一些。", t:"戴太陽眼鏡會舒服一些。", p:"Dài tàiyángjìng huì shūfu yìxiē."}
    ]
  },
  {
    id:"closing", num:"07", title:"Closing",
    note:"Findings and plan do not belong on this card. Hand off to the interpreter line.",
    items:[
      {id:"s07-01", en:"The exam is finished. Thank you.", s:"检查完了，谢谢您。", t:"檢查完了，謝謝您。", p:"Jiǎnchá wán le, xièxie nín."},
      {id:"s07-02", en:"Please wait outside for a moment.", s:"请在外面稍等一下。", t:"請在外面稍等一下。", p:"Qǐng zài wàimiàn shāo děng yíxià."},
      {id:"s07-03", en:"We will use an interpreter to explain the results.", s:"我们会用翻译跟您解释检查结果。", t:"我們會用翻譯跟您解釋檢查結果。", p:"Wǒmen huì yòng fānyì gēn nín jiěshì jiǎnchá jiéguǒ."},
      {id:"s07-04", en:"Do you have any questions?", s:"您有什么问题吗？", t:"您有什麼問題嗎？", p:"Nín yǒu shénme wèntí ma?"}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  s:"如果看到两个，是怎么排的？请指一下。",
  t:"如果看到兩個，是怎麼排的？請指一下。",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>',                          s:"一个", t:"一個", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', s:"左右", t:"左右", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', s:"上下", t:"上下", lab:"One above"}
  ]
};
