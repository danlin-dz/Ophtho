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
      {id:"s01-01", en:"I am your eye doctor.", x:"저는 안과 의사입니다.", p:"juh-nun an-gwa ee-sa-im-ni-da"},
      {id:"s01-02", en:"Please sit here.", x:"여기 앉으세요.", p:"yuh-gee an-ju-say-yo"},
      {id:"s01-03", en:"Please take off your glasses.", x:"안경을 벗어 주세요.", p:"an-gyung-ul buh-suh ju-say-yo"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"아프세요? 어디가 아픈지 가리켜 주세요.", p:"ah-pu-say-yo? uh-dee-ga ah-pun-jee ga-ree-kyuh ju-say-yo"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"안경을 쓰세요.", p:"an-gyung-ul ssu-say-yo"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"보이는 가장 작은 줄을 읽어 주세요.", p:"boh-ee-nun ga-jang ja-gun ju-rul il-guh ju-say-yo"},
      {id:"s02-03", en:"How many fingers?", x:"손가락 몇 개예요?", p:"son-ga-rak myut gae-yay-yo?"},
      {id:"s02-04", en:"Can you see this?", x:"이게 보이세요?", p:"ee-gay boh-ee-say-yo?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"빛이 움직이면 말씀해 주세요.", p:"bee-chee um-jee-gee-myun mal-ssum-hae ju-say-yo"},
      {id:"s02-06", en:"Look at my nose.", x:"제 코를 보세요.", p:"jay koh-rul boh-say-yo"},
      {id:"s02-07", en:"Do you see two of me?", x:"제가 두 명으로 보이세요?", p:"jay-ga doo myung-u-roh boh-ee-say-yo?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"이쪽을 볼 때 더 심한가요?", p:"ee-jjoh-gul bol ttae duh sim-han-ga-yo?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"제 손가락을 보세요. 고개를 움직이지 마세요.", p:"jay son-ga-ra-gul boh-say-yo. goh-gae-rul um-jee-gee-jee ma-say-yo"},
      {id:"s03-02", en:"Look up.", x:"위를 보세요.", p:"wee-rul boh-say-yo"},
      {id:"s03-03", en:"Look down.", x:"아래를 보세요.", p:"ah-rae-rul boh-say-yo"},
      {id:"s03-04", en:"Look left.", x:"왼쪽을 보세요.", p:"wen-jjoh-gul boh-say-yo"},
      {id:"s03-05", en:"Look right.", x:"오른쪽을 보세요.", p:"oh-run-jjoh-gul boh-say-yo"},
      {id:"s03-06", en:"Look straight ahead.", x:"정면을 보세요.", p:"jung-myun-ul boh-say-yo"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"약물 알레르기가 있으세요?", p:"yang-mul al-le-ru-gee-ga ee-ssu-say-yo?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"눈에 안약을 넣겠습니다.", p:"nu-nay an-ya-gul nuh-ke-ssum-ni-da"},
      {id:"s04-03", en:"Please look up.", x:"위를 봐 주세요.", p:"wee-rul bwah ju-say-yo"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"눈 마취약입니다. 몇 초 동안 따끔할 수 있습니다.", p:"nun ma-chwee-ya-gim-ni-da. myut choh dong-an tta-kkum-hal su it-ssum-ni-da"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"이 안약은 동공을 확장시킵니다.", p:"ee an-ya-gun dong-gong-ul hwak-jang-shi-kim-ni-da"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"약 6시간 동안 시야가 흐려집니다.", p:"yak yook-shee-gan dong-an shee-ya-ga hu-ryuh-jim-ni-da"},
      {id:"s04-07", en:"Please close your eyes.", x:"눈을 감아 주세요.", p:"nu-nul ga-ma ju-say-yo"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"눈을 비비지 마세요.", p:"nu-nul bee-bee-jee ma-say-yo"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"턱을 여기에 대고 이마를 여기에 붙이세요.", p:"tuh-gul yuh-gee-ay dae-goh ee-ma-rul yuh-gee-ay boo-chee-say-yo"},
      {id:"s05-02", en:"Open your eyes.", x:"눈을 뜨세요.", p:"nu-nul ttu-say-yo"},
      {id:"s05-03", en:"Don't pull your head back.", x:"머리를 뒤로 빼지 마세요.", p:"muh-ree-rul dwee-roh ppae-jee ma-say-yo"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"빛이 밝습니다. 조금만 참아 주세요.", p:"bee-chee bak-ssum-ni-da. joh-gum-man cha-ma ju-say-yo"},
      {id:"s05-05", en:"Look at my ear.", x:"제 귀를 보세요.", p:"jay gwee-rul boh-say-yo"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"눈꺼풀을 만지겠습니다.", p:"nun-kkuh-pu-rul man-jee-ge-ssum-ni-da"},
      {id:"s05-07", en:"Almost done.", x:"거의 다 됐습니다.", p:"guh-ee da dwae-ssum-ni-da"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"검사가 끝났습니다. 감사합니다.", p:"gum-sa-ga kkun-nat-ssum-ni-da. gam-sa-ham-ni-da"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"통역사를 통해 결과를 설명해 드리겠습니다.", p:"tong-yuk-sa-rul tong-hae gyul-gwa-rul sul-myung-hae du-ree-ge-ssum-ni-da"}
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
  x:"두 개로 보이면 어떻게 보이나요? 가리켜 주세요.",
  p:"doo gae-roh boh-ee-myun uh-ttuh-kay boh-ee-na-yo? ga-ree-kyuh ju-say-yo",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"하나", p:"ha-na", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"좌우", p:"jwa-oo", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"위아래", p:"wee-ah-rae", lab:"One above"}
  ]
};
