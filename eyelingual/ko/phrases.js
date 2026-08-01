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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"저는 의사입니다. 눈을 검사하겠습니다.", p:"Jeoneun uisaimnida. Nuneul geomsahagesseumnida."},
      {id:"s01-02", en:"Please sit here.", x:"여기 앉으세요.", p:"Yeogi anjeuseyo."},
      {id:"s01-03", en:"Please take off your glasses.", x:"안경을 벗어 주세요.", p:"Angyeongeul beoseo juseyo."},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"아프세요? 어디가 아픈지 가리켜 주세요.", p:"Apeuseyo? Eodiga apeunji garikyeo juseyo."}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"보이는 가장 작은 줄을 읽어 주세요.", p:"Boineun gajang jageun jureul ilgeo juseyo."},
      {id:"s02-02", en:"How many fingers?", x:"손가락 몇 개예요?", p:"Songarak myeot gaeyeyo?"},
      {id:"s02-03", en:"Can you see this?", x:"이게 보이세요?", p:"Ige boiseyo?"},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"빛이 움직이면 말씀해 주세요.", p:"Bichi umjigimyeon malsseumhae juseyo."},
      {id:"s02-05", en:"Look at my nose.", x:"제 코를 보세요.", p:"Je koreul boseyo."},
      {id:"s02-06", en:"Do you see two of me?", x:"제가 두 명으로 보이세요?", p:"Jega du myeongeuro boiseyo?"},
      {id:"s02-07", en:"Is it worse looking this way?", x:"이쪽을 볼 때 더 심한가요?", p:"Ijjogeul bol ttae deo simhangayo?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"제 손가락을 보세요. 고개를 움직이지 마세요.", p:"Je songarageul boseyo. Gogaereul umjigiji maseyo."},
      {id:"s03-02", en:"Look up.", x:"위를 보세요.", p:"Wireul boseyo."},
      {id:"s03-03", en:"Look down.", x:"아래를 보세요.", p:"Araereul boseyo."},
      {id:"s03-04", en:"Look left.", x:"왼쪽을 보세요.", p:"Oenjjogeul boseyo."},
      {id:"s03-05", en:"Look right.", x:"오른쪽을 보세요.", p:"Oreunjjogeul boseyo."},
      {id:"s03-06", en:"Look far away.", x:"멀리 보세요.", p:"Meolli boseyo."}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"약물 알레르기가 있으세요?", p:"Yangmul allereugiga isseuseyo?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"눈에 안약을 넣겠습니다.", p:"Nune anyageul neokgesseumnida."},
      {id:"s04-03", en:"Please look up.", x:"위를 봐 주세요.", p:"Wireul bwa juseyo."},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"눈 마취약입니다. 몇 초 동안 따끔할 수 있습니다.", p:"Nun machwiyagimnida. Myeot cho dongan ttakkeumhal su itseumnida."},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"이 안약은 동공을 확장시킵니다.", p:"I anyageun donggongeul hwakjangsikimnida."},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"약 6시간 동안 시야가 흐려집니다.", p:"Yak yuksigan dongan siyaga heuryeojimnida."},
      {id:"s04-07", en:"Please close your eyes.", x:"눈을 감아 주세요.", p:"Nuneul gama juseyo."},
      {id:"s04-08", en:"Don't rub your eyes.", x:"눈을 비비지 마세요.", p:"Nuneul bibiji maseyo."}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"턱을 여기에 대세요.", p:"Teogeul yeogie daeseyo."},
      {id:"s05-02", en:"Forehead against the bar.", x:"이마를 여기에 대세요.", p:"Imareul yeogie daeseyo."},
      {id:"s05-03", en:"Don't pull your head back.", x:"머리를 뒤로 빼지 마세요.", p:"Meorireul dwiro ppaeji maseyo."},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"빛이 밝습니다. 조금만 참아 주세요.", p:"Bichi balkseumnida. Jogeumman chama juseyo."},
      {id:"s05-05", en:"Look at my ear.", x:"제 귀를 보세요.", p:"Je gwireul boseyo."},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"눈꺼풀을 만지겠습니다.", p:"Nunkkeopureul manjigesseumnida."},
      {id:"s05-07", en:"Almost done.", x:"거의 다 됐습니다.", p:"Geoui da dwaesseumnida."}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"검사가 끝났습니다. 감사합니다.", p:"Geomsaga kkeutnatseumnida. Gamsahamnida."},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"통역사를 통해 결과를 설명해 드리겠습니다.", p:"Tongyeoksareul tonghae gyeolgwareul seolmyeonghae deurigesseumnida."}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"두 개로 보이면 어떻게 보이나요? 가리켜 주세요.",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"하나", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"좌우", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"위아래", lab:"One above"}
  ]
};
