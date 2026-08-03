/* Eyelingual — Vietnamese phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/vi/s02-04.m4a).
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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"Tôi là bác sĩ, tôi sẽ khám mắt cho ông/bà.", p:"toy lah bahk see, toy seh khahm maht chaw ohng/bah"},
      {id:"s01-02", en:"Please sit here.", x:"Xin mời ngồi đây.", p:"sin muh-ee ngoy day"},
      {id:"s01-03", en:"Please take off your glasses.", x:"Xin tháo kính ra.", p:"sin tao king rah"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"Có đau không? Xin chỉ chỗ đau.", p:"kaw dow khohng? sin chee choh dow"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"Xin đeo kính vào.", p:"sin day-oh king vow"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"Xin đọc dòng nhỏ nhất mà ông/bà nhìn thấy.", p:"sin dawk yawng nyaw nyut mah ohng/bah nyin thay"},
      {id:"s02-03", en:"How many fingers?", x:"Mấy ngón tay?", p:"may ngawn tie?"},
      {id:"s02-04", en:"Can you see this?", x:"Ông/bà có thấy cái này không?", p:"ohng/bah kaw thay kai nay khohng?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"Nếu thấy ánh sáng di chuyển, xin cho tôi biết.", p:"nay-oo thay ang sahng yee chwee-en, sin chaw toy bee-et"},
      {id:"s02-06", en:"Look at my nose.", x:"Xin nhìn vào mũi tôi.", p:"sin nyin vow moo-ee toy"},
      {id:"s02-07", en:"Do you see two of me?", x:"Ông/bà có thấy hai người tôi không?", p:"ohng/bah kaw thay high ngoo-ee toy khohng?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"Nhìn về hướng này có nặng hơn không?", p:"nyin veh hoong nay kaw nahng huhn khohng?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"Xin nhìn ngón tay tôi. Đừng quay đầu.", p:"sin nyin ngawn tie toy. dung kway dow"},
      {id:"s03-02", en:"Look up.", x:"Nhìn lên.", p:"nyin len"},
      {id:"s03-03", en:"Look down.", x:"Nhìn xuống.", p:"nyin soo-ong"},
      {id:"s03-04", en:"Look left.", x:"Nhìn sang trái.", p:"nyin sahng chai"},
      {id:"s03-05", en:"Look right.", x:"Nhìn sang phải.", p:"nyin sahng fai"},
      {id:"s03-06", en:"Look straight ahead.", x:"Nhìn thẳng phía trước.", p:"nyin thahng fee-a chuke"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"Ông/bà có dị ứng thuốc nào không?", p:"ohng/bah kaw yee ung too-ok now khohng?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"Tôi sẽ nhỏ thuốc vào mắt.", p:"toy seh nyaw too-ok vow maht"},
      {id:"s04-03", en:"Please look up.", x:"Xin nhìn lên.", p:"sin nyin len"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"Đây là thuốc tê mắt. Có thể xót vài giây.", p:"day lah too-ok tay maht. kaw theh sawt vai yay"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"Thuốc này sẽ làm giãn đồng tử.", p:"too-ok nay seh lahm yahn dohng tu"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"Mắt sẽ mờ khoảng sáu tiếng.", p:"maht seh muh khwahng sow tee-eng"},
      {id:"s04-07", en:"Please close your eyes.", x:"Xin nhắm mắt lại.", p:"sin nyam maht lai"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"Đừng dụi mắt.", p:"dung yoo-ee maht"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"Đặt cằm vào đây và áp trán vào thanh này.", p:"daht kahm vow day vah ahp chahn vow tahn nay"},
      {id:"s05-02", en:"Open your eyes.", x:"Xin mở mắt ra.", p:"sin muh maht rah"},
      {id:"s05-03", en:"Don't pull your head back.", x:"Đừng ngả đầu ra sau.", p:"dung ngah dow rah sow"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"Đèn rất sáng. Xin chịu khó một chút.", p:"den rut sahng. sin chee-oo khaw moht choot"},
      {id:"s05-05", en:"Look at my ear.", x:"Xin nhìn vào tai tôi.", p:"sin nyin vow tie toy"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"Tôi sẽ chạm vào mí mắt.", p:"toy seh chahm vow mee maht"},
      {id:"s05-07", en:"Almost done.", x:"Sắp xong rồi.", p:"sahp sawng roy"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"Khám xong rồi. Cảm ơn ông/bà.", p:"khahm sawng roy. kahm uhn ohng/bah"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"Chúng tôi sẽ nhờ thông dịch viên giải thích kết quả.", p:"choong toy seh nyuh thohng yik vee-en yai thik ket kwah"}
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
  x:"Nếu thấy hai hình, chúng nằm thế nào? Xin chỉ.",
  p:"nay-oo thay high hin, choong nahm theh now? sin chee",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"Một", p:"moht", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"Cạnh nhau", p:"kahn nyow", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"Trên dưới", p:"chen yoo-ee", lab:"One above"}
  ]
};
