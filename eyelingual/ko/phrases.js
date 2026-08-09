/* Eyelingual — Korean phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/ko/s02-04.m4a).
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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"저는 안과 의사입니다.", p:"juh-nun an-gwa ee-sa-im-ni-da"},
      {id:"intro-sit", en:"Please sit here.", x:"여기 앉으세요.", p:"yuh-gee an-ju-say-yo"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"아프세요? 어디가 아픈지 가리켜 주세요.", p:"ah-pu-say-yo? uh-dee-ga ah-pun-jee ga-ree-kyuh ju-say-yo"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"안경을 쓰세요.", p:"an-gyung-ul ssu-say-yo"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"왼쪽 눈을 가리세요.", p:"wen-jjok nu-nul ga-ree-say-yo"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"오른쪽 눈을 가리세요.", p:"oh-run-jjok nu-nul ga-ree-say-yo"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"어느 것과 비슷하게 보이세요? 가장 비슷한 것을 가리켜 주세요.", p:"uh-nu gut-gwa bee-su-ta-gay boh-ee-say-yo? ga-jang bee-su-tan gu-sul ga-ree-kyuh ju-say-yo"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"보이는 가장 작은 줄을 읽어 주세요.", p:"boh-ee-nun ga-jang ja-gun ju-rul il-guh ju-say-yo"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"작은 구멍으로 보세요. 더 잘 보일 수 있습니다.", p:"ja-gun goo-mung-u-roh boh-say-yo. duh jal boh-eel su it-ssum-ni-da"},
      {id:"vis-fingers", en:"How many fingers?", x:"손가락 몇 개예요?", p:"son-ga-rak myut gae-yay-yo?"},
      {id:"vis-see-this", en:"Can you see this?", x:"이게 보이세요?", p:"ee-gay boh-ee-say-yo?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"빛이 움직이면 말씀해 주세요.", p:"bee-chee um-jee-gee-myun mal-ssum-hae ju-say-yo"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"제 코를 보세요.", p:"jay koh-rul boh-say-yo"},
      {id:"vis-double", en:"Do you see two of me?", x:"제가 두 명으로 보이세요?", p:"jay-ga doo myung-u-roh boh-ee-say-yo?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"이쪽을 볼 때 더 심한가요?", p:"ee-jjoh-gul bol ttae duh sim-han-ga-yo?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"눈에 빛을 비추겠습니다. 제 뒤의 벽을 보세요.", p:"nu-nay bee-chul bee-choo-ge-ssum-ni-da. jay dwee-ay byuh-gul boh-say-yo"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"빛을 보지 마시고 멀리 보세요.", p:"bee-chul boh-jee ma-shee-goh mull-lee boh-say-yo"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"두 눈을 모두 뜨고 계세요.", p:"doo nu-nul moh-doo ttu-goh gay-say-yo"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"제 손가락을 보세요. 고개를 움직이지 마세요.", p:"jay son-ga-ra-gul boh-say-yo. goh-gae-rul um-jee-gee-jee ma-say-yo"},
      {id:"mot-up", en:"Look up.", x:"위를 보세요.", p:"wee-rul boh-say-yo"},
      {id:"mot-down", en:"Look down.", x:"아래를 보세요.", p:"ah-rae-rul boh-say-yo"},
      {id:"mot-left", en:"Look left.", x:"왼쪽을 보세요.", p:"wen-jjoh-gul boh-say-yo"},
      {id:"mot-right", en:"Look right.", x:"오른쪽을 보세요.", p:"oh-run-jjoh-gul boh-say-yo"},
      {id:"mot-straight", en:"Look straight ahead.", x:"정면을 보세요.", p:"jung-myun-ul boh-say-yo"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"안압을 측정하겠습니다.", p:"ah-nap-ul chuk-jung-ha-ge-ssum-ni-da"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"아프지 않습니다. 눈에 살짝 닿는 느낌이 있습니다.", p:"ah-pu-jee an-ssum-ni-da. nu-nay sal-jjak dan-nun nu-kkee-mee it-ssum-ni-da"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"정면을 보고 움직이지 마세요. 눈을 깜빡이지 마세요.", p:"jung-myun-ul boh-goh um-jee-gee-jee ma-say-yo. nu-nul kkam-ppa-gee-jee ma-say-yo"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"제 코를 계속 보세요. 손을 보지 마세요.", p:"jay koh-rul gay-sok boh-say-yo. soh-nul boh-jee ma-say-yo"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"손가락이 보이면 손을 드세요.", p:"son-ga-ra-gee boh-ee-myun soh-nul du-say-yo"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"지금 손가락 몇 개 보이세요?", p:"jee-gum son-ga-rak myut gae boh-ee-say-yo?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"약물 알레르기가 있으세요?", p:"yang-mul al-le-ru-gee-ga ee-ssu-say-yo?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"눈에 안약을 넣겠습니다.", p:"nu-nay an-ya-gul nuh-ke-ssum-ni-da"},
      {id:"drp-look-up", en:"Please look up.", x:"위를 봐 주세요.", p:"wee-rul bwah ju-say-yo"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"눈 마취약입니다. 몇 초 동안 따끔할 수 있습니다.", p:"nun ma-chwee-ya-gim-ni-da. myut choh dong-an tta-kkum-hal su it-ssum-ni-da"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"이 안약은 동공을 확장시킵니다.", p:"ee an-ya-gun dong-gong-ul hwak-jang-shi-kim-ni-da"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"약 6시간 동안 시야가 흐려집니다.", p:"yak yook-shee-gan dong-an shee-ya-ga hu-ryuh-jim-ni-da"},
      {id:"drp-close", en:"Please close your eyes.", x:"눈을 감아 주세요.", p:"nu-nul ga-ma ju-say-yo"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"눈을 비비지 마세요.", p:"nu-nul bee-bee-jee ma-say-yo"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"턱을 여기에 대고 이마를 여기에 붙이세요.", p:"tuh-gul yuh-gee-ay dae-goh ee-ma-rul yuh-gee-ay boo-chee-say-yo"},
      {id:"slit-open", en:"Open your eyes wide.", x:"눈을 크게 뜨세요.", p:"nu-nul ku-gay ttu-say-yo"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"머리를 뒤로 빼지 마세요.", p:"muh-ree-rul dwee-roh ppae-jee ma-say-yo"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"빛이 밝습니다. 조금만 참아 주세요.", p:"bee-chee bak-ssum-ni-da. joh-gum-man cha-ma ju-say-yo"},
      {id:"slit-ear", en:"Look at my ear.", x:"제 귀를 보세요.", p:"jay gwee-rul boh-say-yo"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"눈꺼풀을 만지겠습니다.", p:"nun-kkuh-pu-rul man-jee-ge-ssum-ni-da"},
      {id:"slit-almost", en:"Almost done.", x:"거의 다 됐습니다.", p:"guh-ee da dwae-ssum-ni-da"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"검사가 끝났습니다. 감사합니다.", p:"gum-sa-ga kkun-nat-ssum-ni-da. gam-sa-ham-ni-da"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"통역사를 통해 결과를 설명해 드리겠습니다.", p:"tong-yuk-sa-rul tong-hae gyul-gwa-rul sul-myung-hae du-ree-ge-ssum-ni-da"}
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
  {img:"normal", en:"Normal", x:"정상"},
  {img:"blur", en:"Blurry", x:"흐림"},
  {img:"distort", en:"Wavy or bent", x:"휘어 보임"},
  {img:"faded", en:"Faded", x:"색이 바램"},
  {img:"central", en:"Dark in the middle", x:"가운데가 어두움"},
  {img:"curtain", en:"Curtain across", x:"커튼처럼 가림"},
  {img:"floaters", en:"Specks or cobwebs", x:"점이나 거미줄"},
  {img:"flashes", en:"Flashes of light", x:"번쩍임"},
  {img:"zigzag", en:"Zigzag lines", x:"지그재그 선"},
  {img:"halo", en:"Halo around lights", x:"불빛 주위 무리"},
  {img:"patch", en:"Patch missing", x:"한 부분이 안 보임"},
  {img:"tunnel", en:"Only the middle", x:"가운데만 보임"},
  {img:"half", en:"Half missing", x:"반쪽이 안 보임"},
  {img:"quadrant", en:"Corner missing", x:"모서리가 안 보임"},
];

/* Reachable from the Most used panel but not part of any exam stage. */
const EXTRAS = [
  {id:"close-thanks", en:"Thank you.", x:"감사합니다.", p:"gam-sa-ham-ni-da"},
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
  x:"두 개로 보이면 어떻게 보이나요? 가리켜 주세요.",
  p:"doo gae-roh boh-ee-myun uh-ttuh-kay boh-ee-na-yo? ga-ree-kyuh ju-say-yo",
  opts:[
    {img:"dip-single", x:"하나", p:"ha-na", lab:"Single"},
    {img:"dip-h", x:"좌우", p:"jwa-oo", lab:"Side by side"},
    {img:"dip-v", x:"위아래", p:"wee-ah-rae", lab:"One above"}
  ]
};
