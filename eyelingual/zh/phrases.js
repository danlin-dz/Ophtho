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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"我是您的眼科医生。", t:"我是您的眼科醫生。", p:"waw shr nin duh yen-kuh yee-shung"},
      {id:"intro-sit", en:"Please sit here.", x:"请坐这里。", t:"請坐這裡。", p:"ching dzwaw jur-lee"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"痛吗？哪里痛？请指一下。", t:"痛嗎？哪裡痛？請指一下。", p:"tong mah? nah-lee tong? ching jr yee-shyah"},
      {id:"intro-fam-glaucoma", en:"Do you have a family history of glaucoma?", x:"您家里有人得过青光眼吗？", t:"您家裡有人得過青光眼嗎？", p:"nin jyah-lee yoe run duh gwaw ching-gwahng-yen mah?"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"请把眼镜戴上。", t:"請把眼鏡戴上。", p:"ching bah yen-jing dye shahng"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"请遮住左眼。", t:"請遮住左眼。", p:"ching juh-joo dzwaw yen"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"请遮住右眼。", t:"請遮住右眼。", p:"ching juh-joo yoe yen"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"您的视力像哪一个？请指最接近的。", t:"您的視力像哪一個？請指最接近的。", p:"nin duh shr-lee shyahng nah yee-guh? ching jr dzway jyeh-jin duh"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"请念您能看到的最小的一行。", t:"請念您能看到的最小的一行。", p:"ching nyen nin nung kahn-dow duh dzway shyow duh ee hahng"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"请透过小孔看，可能会更清楚。", t:"請透過小孔看，可能會更清楚。", p:"ching toe-gwaw shyow-kong kahn, kuh-nung hway gung ching-choo"},
      {id:"vis-fingers", en:"How many fingers?", x:"几根手指？", t:"幾根手指？", p:"jee gun show-jr?"},
      {id:"vis-see-this", en:"Can you see this?", x:"看得见吗？", t:"看得見嗎？", p:"kahn duh jyen mah?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"看到光移动请告诉我。", t:"看到光移動請告訴我。", p:"kahn-dow gwahng yee-dong ching gow-soo waw"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"请看我的鼻子。", t:"請看我的鼻子。", p:"ching kahn waw duh bee-dzuh"},
      {id:"vis-double", en:"Do you see two of me?", x:"您看到两个我吗？", t:"您看到兩個我嗎？", p:"nin kahn-dow lyahng guh waw mah?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"看这个方向更严重吗？", t:"看這個方向更嚴重嗎？", p:"kahn juh-guh fahng-shyahng gung yen-jong mah?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"我要用灯照您的眼睛，请看我身后的墙。", t:"我要用燈照您的眼睛，請看我身後的牆。", p:"waw yow yong dung jow nin duh yen-jing, ching kahn waw shun-hoe duh chyahng"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"不要看灯，一直看远处。", t:"不要看燈，一直看遠處。", p:"boo-yow kahn dung, yee-jr kahn ywen-choo"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"两只眼睛都睁开。", t:"兩隻眼睛都睜開。", p:"lyahng jr yen-jing doe jung-kye"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"请看我的手指，头不要动。", t:"請看我的手指，頭不要動。", p:"ching kahn waw duh show-jr, toe boo-yow dong"},
      {id:"mot-up", en:"Look up.", x:"往上看。", t:"往上看。", p:"wahng shahng kahn"},
      {id:"mot-down", en:"Look down.", x:"往下看。", t:"往下看。", p:"wahng shyah kahn"},
      {id:"mot-left", en:"Look left.", x:"往左看。", t:"往左看。", p:"wahng dzwaw kahn"},
      {id:"mot-right", en:"Look right.", x:"往右看。", t:"往右看。", p:"wahng yoe kahn"},
      {id:"mot-straight", en:"Look straight ahead.", x:"请看正前方。", t:"請看正前方。", p:"ching kahn jung chyen-fahng"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"我要测量您的眼压。", t:"我要測量您的眼壓。", p:"waw yow tsuh-lyahng nin duh yen-yah"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"这不会痛，您会感觉眼睛被轻轻碰到。", t:"這不會痛，您會感覺眼睛被輕輕碰到。", p:"juh boo-hway tong, nin hway gahn-jyweh yen-jing bay ching-ching pung-dow"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"请看正前方，不要动，尽量不要眨眼。", t:"請看正前方，不要動，盡量不要眨眼。", p:"ching kahn jung chyen-fahng, boo-yow dong, jin-lyahng boo-yow jah-yen"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"一直看着我的鼻子，不要看我的手。", t:"一直看著我的鼻子，不要看我的手。", p:"yee-jr kahn-juh waw duh bee-dzuh, boo-yow kahn waw duh show"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"看到我的手指请举手。", t:"看到我的手指請舉手。", p:"kahn-dow waw duh show-jr ching jyu show"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"现在看到几根手指？", t:"現在看到幾根手指？", p:"shyen-dzye kahn-dow jee gun show-jr?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"您对药物过敏吗？", t:"您對藥物過敏嗎？", p:"nin dway yow-woo gwaw-min mah?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"我要给您点眼药水。", t:"我要給您點眼藥水。", p:"waw yow gay nin dyen yen-yow-shway"},
      {id:"drp-look-up", en:"Please look up.", x:"请往上看。", t:"請往上看。", p:"ching wahng shahng kahn"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"这是眼睛的麻药，可能会刺痛几秒钟。", t:"這是眼睛的麻藥，可能會刺痛幾秒鐘。", p:"juh shr yen-jing duh mah-yow, kuh-nung hway tsz-tong jee myow-jong"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"这是散瞳药水。", t:"這是散瞳藥水。", p:"juh shr sahn-tong yow-shway"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"您的视力会模糊大约六个小时。", t:"您的視力會模糊大約六個小時。", p:"nin duh shr-lee hway maw-hoo dah-yweh lyo guh shyow-shr"},
      {id:"drp-close", en:"Please close your eyes.", x:"请闭上眼睛。", t:"請閉上眼睛。", p:"ching bee shahng yen-jing"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"不要揉眼睛。", t:"不要揉眼睛。", p:"boo-yow roe yen-jing"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"下巴放在这里，额头靠着这里。", t:"下巴放在這裡，額頭靠著這裡。", p:"shyah-bah fahng dzye jur-lee, uh-toe kow-juh jur-lee"},
      {id:"slit-open", en:"Open your eyes wide.", x:"请把眼睛睁大。", t:"請把眼睛睜大。", p:"ching bah yen-jing jung dah"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"头不要往后退。", t:"頭不要往後退。", p:"toe boo-yow wahng hoe tway"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"灯会很亮，请忍一下。", t:"燈會很亮，請忍一下。", p:"dung hway hun lyahng, ching run yee-shyah"},
      {id:"slit-ear", en:"Look at my ear.", x:"请看我的耳朵。", t:"請看我的耳朵。", p:"ching kahn waw duh are-dwaw"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"我要碰一下您的眼皮。", t:"我要碰一下您的眼皮。", p:"waw yow pung yee-shyah nin duh yen-pee"},
      {id:"slit-almost", en:"Almost done.", x:"快好了。", t:"快好了。", p:"kwye how luh"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"检查完了，谢谢您。", t:"檢查完了，謝謝您。", p:"jyen-chah wahn luh, shyeh-shyeh nin"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"我们会用翻译跟您解释检查结果。", t:"我們會用翻譯跟您解釋檢查結果。", p:"waw-mun hway yong fahn-ee gun nin jyeh-shr jyen-chah jyeh-gwaw"}
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
  {img:"normal", en:"Normal", x:"正常", t:"正常"},
  {img:"blur", en:"Blurry", x:"模糊", t:"模糊"},
  {img:"distort", en:"Wavy or bent", x:"扭曲弯曲", t:"扭曲彎曲"},
  {img:"faded", en:"Faded", x:"发白暗淡", t:"發白暗淡"},
  {img:"central", en:"Dark in the middle", x:"中间发黑", t:"中間發黑"},
  {img:"curtain", en:"Curtain across", x:"有帘子遮住", t:"有簾子遮住"},
  {img:"floaters", en:"Specks or cobwebs", x:"黑点或蛛网", t:"黑點或蛛網"},
  {img:"flashes", en:"Flashes of light", x:"闪光", t:"閃光"},
  {img:"zigzag", en:"Zigzag lines", x:"锯齿状亮线", t:"鋸齒狀亮線"},
  {img:"halo", en:"Halo around lights", x:"灯光有光晕", t:"燈光有光暈"},
  {img:"patch", en:"Patch missing", x:"有一块看不见", t:"有一塊看不見"},
  {img:"tunnel", en:"Only the middle", x:"只剩中间", t:"只剩中間"},
  {img:"half", en:"Half missing", x:"少一半", t:"少一半"},
  {img:"quadrant", en:"Corner missing", x:"少一角", t:"少一角"},
];

/* The eleven phrases that come up most, surfaced in a panel at the top of
   the card so they are reachable without scrolling. These are references, not
   copies: same ids, same audio, same wording as the stage they belong to. */
const QUICK = ["mot-up", "mot-down", "mot-left", "mot-right", "mot-straight", "slit-open", "drp-close"];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"如果看到两个，是怎么排的？请指一下。",
  t:"如果看到兩個，是怎麼排的？請指一下。",
  p:"roo-gwaw kahn-dow lyahng guh, shr dzun-muh pye duh? ching jr yee-shyah",
  opts:[
    {img:"dip-single", x:"一个", t:"一個", p:"ee guh", lab:"Single"},
    {img:"dip-h", x:"左右", t:"左右", p:"dzwaw-yoe", lab:"Side by side"},
    {img:"dip-v", x:"上下", t:"上下", p:"shahng-shyah", lab:"One above"}
  ]
};
