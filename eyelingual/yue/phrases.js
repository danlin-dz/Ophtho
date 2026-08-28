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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"我係你嘅眼科醫生。", p:"ngaw high nay geh ngahn-faw yee-sahng"},
      {id:"intro-sit", en:"Please sit here.", x:"請坐喺呢度。", p:"ching chaw high nee-doh"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"痛唔痛？邊度痛？指俾我睇。", p:"tung mm tung? bin-doh tung? jee bay ngaw tye"},
      {id:"intro-fam-glaucoma", en:"Do you have a family history of glaucoma?", x:"你家人有冇人生過青光眼？", p:"nay gah-yun yow-moe yun sahng gaw ching-gwong-ngahn?"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"請戴返眼鏡。", p:"ching dye-fahn ngahn-geng", icon:"glasses"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"請遮住左眼。", p:"ching jeh-jyu jaw ngahn"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"請遮住右眼。", p:"ching jeh-jyu yow ngahn"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"你嘅視力似邊個？請指最接近嗰個。", p:"nay geh see-lick chee bin-gaw? ching jee joy jip-gun gaw-gaw"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"請讀你睇到最細嗰行。", p:"ching duke nay tye-doh joy sye gaw hong"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"請透過個細窿望，可能會清楚啲。", p:"ching tow-gwaw gaw sai-lung mong, haw-nahng wooi ching-chaw dee"},
      {id:"vis-fingers", en:"How many fingers?", x:"幾多隻手指？", p:"gay-daw jek sow-jee?"},
      {id:"vis-hand-motion", en:"Do you see my hand moving?", x:"你見唔見到我隻手郁？", p:"nay gin mm gin-doh ngaw jek sow yuke?"},
      {id:"vis-see-this", en:"Can you see this?", x:"睇唔睇到？", p:"tye mm tye-doh?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"見到光郁請話我知。", p:"gin-doh gwong yuke ching wah ngaw jee"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"望住我個鼻。", p:"mong-jyu ngaw gaw bay"},
      {id:"vis-double", en:"Do you see two of me?", x:"你係咪見到兩個我？", p:"nay high-my gin-doh leung gaw ngaw?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"望呢邊會唔會嚴重啲？", p:"mong nee-bin wooi mm wooi yim-jung dee?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"我要用燈照你對眼，請望我後面嘅牆。", p:"ngaw yiu yong dahng jiu nay doy ngahn, ching mong ngaw how-min geh cheung"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"唔好望住個燈，一直望遠啲。", p:"mm-hoe mong-jyu gaw dahng, yat-jick mong yune dee"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"兩隻眼都要擘大。", p:"leung jek ngahn doe yiu mahk dye", icon:"eye-open"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-look-here", en:"Look here.", x:"望呢度。", p:"mong nee-doh"},
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"望住我隻手指，唔好郁個頭。", p:"mong-jyu ngaw jek sow-jee, mm-hoe yuke gaw tow"},
      {id:"mot-up", en:"Look up.", x:"望上。", p:"mong seung", icon:"up"},
      {id:"mot-down", en:"Look down.", x:"望落。", p:"mong lok", icon:"down"},
      {id:"mot-left", en:"Look left.", x:"望左。", p:"mong jaw", icon:"left"},
      {id:"mot-right", en:"Look right.", x:"望右。", p:"mong yow", icon:"right"},
      {id:"mot-straight", en:"Look straight ahead.", x:"望正前面。", p:"mong jeng chin-min"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"我要度你嘅眼壓。", p:"ngaw yiu dok nay geh ngahn-ahp"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"呢個唔會痛，你會覺得對眼俾人輕輕掂到。", p:"nee-gaw mm-wooi tung, nay wooi gok-duk doy ngahn bay yun ching-ching dim-doe"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"請望正前面，唔好郁，盡量唔好眨眼。", p:"ching mong jeng chin-min, mm-hoe yuke, jun-leung mm-hoe jaam ngahn"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"一直望住我個鼻，唔好望我隻手。", p:"yat-jick mong-jyu ngaw gaw bay, mm-hoe mong ngaw jek sow"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"見到我隻手指就舉手。", p:"gin-doh ngaw jek sow-jee jow gui sow"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"而家見到幾多隻手指？", p:"yee-gah gin-doh gay-daw jek sow-jee?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"你有冇藥物敏感？", p:"nay yow-moe yeuk-mat mun-gum?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"我要幫你滴眼藥水。", p:"ngaw yiu bong nay dick ngahn-yeuk-soy", icon:"dropper"},
      {id:"drp-look-up", en:"Please look up.", x:"請望上。", p:"ching mong seung", icon:"up"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"呢啲係眼嘅麻藥，可能會刺痛幾秒。", p:"nee-dee high ngahn geh mah-yeuk, haw-nahng wooi chee-tung gay miu"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"呢啲係散瞳藥水。", p:"nee-dee high sahn-tung yeuk-soy"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"你嘅視力會矇大概六個鐘。", p:"nay geh see-lick wooi mung dye-hoy luke gaw jung"},
      {id:"drp-close", en:"Please close your eyes.", x:"請閉埋眼。", p:"ching bye-my ngahn", icon:"eye-shut"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"唔好捽眼。", p:"mm-hoe jut ngahn"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"下巴放喺呢度，額頭貼住呢度。", p:"hah-bah fong high nee-doh, ngahk-tow tip-jyu nee-doh"},
      {id:"slit-open", en:"Open your eyes wide.", x:"請擘大對眼。", p:"ching mahk dye doy ngahn", icon:"eye-open"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"個頭唔好向後退。", p:"gaw tow mm-hoe heung how toy"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"個燈好光，請忍一忍。", p:"gaw dahng hoe gwong, ching yun yat yun"},
      {id:"slit-ear", en:"Look at my ear.", x:"望住我隻耳仔。", p:"mong-jyu ngaw jek yee-jye", icon:"ear"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"我要掂一掂你嘅眼皮。", p:"ngaw yiu dim yat dim nay geh ngahn-pay"},
      {id:"slit-almost", en:"Almost done.", x:"就快好喇。", p:"jow fye hoe lah"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"檢查完喇，多謝。", p:"gim-chah yune lah, daw-jeh"},
      {id:"close-healthy", en:"Your eyes are healthy.", x:"你對眼好健康。", p:"nay doy ngahn hoe gin-hong", icon:"check"},
      {id:"close-consult", en:"I will have to speak to another doctor about your eyes. I will be back.", x:"我要同另一位醫生傾下你對眼，我一陣返嚟。", p:"ngaw yiu tung ling-yat-wai yee-sahng king-hah nay doy ngahn, ngaw yat-jun fahn-lay"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"我哋會搵翻譯同你解釋結果。", p:"ngaw-day wooi wun fahn-yick tung nay guy-sick git-gwaw"}
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
  {img:"blur", en:"Blurry", x:"矇"},
  {img:"distort", en:"Wavy or bent", x:"扭曲彎曲"},
  {img:"faded", en:"Faded", x:"灰白暗淡"},
  {img:"central", en:"Dark in the middle", x:"中間黑咗"},
  {img:"curtain", en:"Curtain across", x:"有簾遮住"},
  {img:"floaters", en:"Specks or cobwebs", x:"黑點或蜘蛛網"},
  {img:"flashes", en:"Flashes of light", x:"閃光"},
  {img:"zigzag", en:"Zigzag lines", x:"鋸齒亮線"},
  {img:"halo", en:"Halo around lights", x:"燈光有光暈"},
  {img:"patch", en:"Patch missing", x:"有一嚿睇唔到"},
  {img:"tunnel", en:"Only the middle", x:"淨係剩中間"},
  {img:"half", en:"Half missing", x:"少咗一半"},
  {img:"quadrant", en:"Corner missing", x:"少咗一角"},
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
  x:"如果見到兩個，係點樣排？指俾我睇。",
  p:"yu-gwaw gin-doh leung gaw, high dim-yeung pye? jee bay ngaw tye",
  opts:[
    {img:"dip-single", x:"一個", p:"yat gaw", lab:"Single"},
    {img:"dip-h", x:"左右", p:"jaw yow", lab:"Side by side"},
    {img:"dip-v", x:"上下", p:"seung hah", lab:"One above"}
  ]
};
