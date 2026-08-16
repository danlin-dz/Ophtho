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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"Tôi là bác sĩ mắt của ông/bà.", p:"toy lah bahk see maht kwah ohng/bah"},
      {id:"intro-sit", en:"Please sit here.", x:"Xin mời ngồi đây.", p:"sin muh-ee ngoy day"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"Có đau không? Xin chỉ chỗ đau.", p:"kaw dow khohng? sin chee choh dow"},
      {id:"intro-fam-glaucoma", en:"Do you have a family history of glaucoma?", x:"Trong gia đình có ai bị tăng nhãn áp (cườm nước) không?", p:"chong yah din kaw eye bee tahng nyahn ahp (kuhm nook) khohng?"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"Xin đeo kính vào.", p:"sin day-oh king vow"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"Xin che mắt trái lại.", p:"sin cheh maht chai lai"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"Xin che mắt phải lại.", p:"sin cheh maht fai lai"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"Mắt ông/bà giống hình nào? Xin chỉ hình giống nhất.", p:"maht ohng/bah yohng hin now? sin chee hin yohng nyut"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"Xin đọc dòng nhỏ nhất mà ông/bà nhìn thấy.", p:"sin dawk yawng nyaw nyut mah ohng/bah nyin thay"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"Xin nhìn qua lỗ nhỏ, có thể rõ hơn.", p:"sin nyin kwah loh nyaw, kaw theh raw huhn"},
      {id:"vis-fingers", en:"How many fingers?", x:"Mấy ngón tay?", p:"may ngawn tie?"},
      {id:"vis-see-this", en:"Can you see this?", x:"Ông/bà có thấy cái này không?", p:"ohng/bah kaw thay kai nay khohng?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"Nếu thấy ánh sáng di chuyển, xin cho tôi biết.", p:"nay-oo thay ang sahng yee chwee-en, sin chaw toy bee-et"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"Xin nhìn vào mũi tôi.", p:"sin nyin vow moo-ee toy"},
      {id:"vis-double", en:"Do you see two of me?", x:"Ông/bà có thấy hai người tôi không?", p:"ohng/bah kaw thay high ngoo-ee toy khohng?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"Nhìn về hướng này có nặng hơn không?", p:"nyin veh hoong nay kaw nahng huhn khohng?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"Tôi sẽ chiếu đèn vào mắt. Xin nhìn vào bức tường sau lưng tôi.", p:"toy seh chee-oo den vow maht. sin nyin vow buke tuong sow lung toy"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"Đừng nhìn đèn, xin nhìn ra xa.", p:"dung nyin den, sin nyin rah sah"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"Xin mở cả hai mắt.", p:"sin muh kah high maht"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"Xin nhìn ngón tay tôi. Đừng quay đầu.", p:"sin nyin ngawn tie toy. dung kway dow"},
      {id:"mot-up", en:"Look up.", x:"Nhìn lên.", p:"nyin len"},
      {id:"mot-down", en:"Look down.", x:"Nhìn xuống.", p:"nyin soo-ong"},
      {id:"mot-left", en:"Look left.", x:"Nhìn sang trái.", p:"nyin sahng chai"},
      {id:"mot-right", en:"Look right.", x:"Nhìn sang phải.", p:"nyin sahng fai"},
      {id:"mot-straight", en:"Look straight ahead.", x:"Nhìn thẳng phía trước.", p:"nyin thahng fee-a chuke"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"Tôi sẽ đo áp suất mắt.", p:"toy seh daw ahp swut maht"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"Việc này không đau. Ông/bà sẽ thấy chạm nhẹ vào mắt.", p:"vee-ek nay khohng dow. ohng/bah seh thay chahm nyeh vow maht"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"Xin nhìn thẳng, giữ yên và đừng chớp mắt.", p:"sin nyin thahng, yu een vah dung chuhp maht"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"Xin nhìn mũi tôi, đừng nhìn tay tôi.", p:"sin nyin moo-ee toy, dung nyin tie toy"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"Khi thấy ngón tay tôi, xin giơ tay lên.", p:"khee thay ngawn tie toy, sin yuh tie len"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"Bây giờ thấy mấy ngón tay?", p:"bay yuh thay may ngawn tie?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"Ông/bà có dị ứng thuốc nào không?", p:"ohng/bah kaw yee ung too-ok now khohng?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"Tôi sẽ nhỏ thuốc vào mắt.", p:"toy seh nyaw too-ok vow maht"},
      {id:"drp-look-up", en:"Please look up.", x:"Xin nhìn lên.", p:"sin nyin len"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"Đây là thuốc tê mắt. Có thể xót vài giây.", p:"day lah too-ok tay maht. kaw theh sawt vai yay"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"Thuốc này sẽ làm giãn đồng tử.", p:"too-ok nay seh lahm yahn dohng tu"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"Mắt sẽ mờ khoảng sáu tiếng.", p:"maht seh muh khwahng sow tee-eng"},
      {id:"drp-close", en:"Please close your eyes.", x:"Xin nhắm mắt lại.", p:"sin nyam maht lai"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"Đừng dụi mắt.", p:"dung yoo-ee maht"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"Đặt cằm vào đây và áp trán vào thanh này.", p:"daht kahm vow day vah ahp chahn vow tahn nay"},
      {id:"slit-open", en:"Open your eyes wide.", x:"Xin mở mắt thật to.", p:"sin muh maht thut taw"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"Đừng ngả đầu ra sau.", p:"dung ngah dow rah sow"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"Đèn rất sáng. Xin chịu khó một chút.", p:"den rut sahng. sin chee-oo khaw moht choot"},
      {id:"slit-ear", en:"Look at my ear.", x:"Xin nhìn vào tai tôi.", p:"sin nyin vow tie toy"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"Tôi sẽ chạm vào mí mắt.", p:"toy seh chahm vow mee maht"},
      {id:"slit-almost", en:"Almost done.", x:"Sắp xong rồi.", p:"sahp sawng roy"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"Khám xong rồi. Cảm ơn ông/bà.", p:"khahm sawng roy. kahm uhn ohng/bah"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"Chúng tôi sẽ nhờ thông dịch viên giải thích kết quả.", p:"choong toy seh nyuh thohng yik vee-en yai thik ket kwah"}
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
  {img:"normal", en:"Normal", x:"Bình thường"},
  {img:"blur", en:"Blurry", x:"Mờ"},
  {img:"distort", en:"Wavy or bent", x:"Cong vênh"},
  {img:"faded", en:"Faded", x:"Nhạt màu"},
  {img:"central", en:"Dark in the middle", x:"Tối ở giữa"},
  {img:"curtain", en:"Curtain across", x:"Màn che"},
  {img:"floaters", en:"Specks or cobwebs", x:"Đốm hoặc mạng nhện"},
  {img:"flashes", en:"Flashes of light", x:"Chớp sáng"},
  {img:"zigzag", en:"Zigzag lines", x:"Đường zigzag"},
  {img:"halo", en:"Halo around lights", x:"Quầng sáng quanh đèn"},
  {img:"patch", en:"Patch missing", x:"Mất một mảng"},
  {img:"tunnel", en:"Only the middle", x:"Chỉ thấy ở giữa"},
  {img:"half", en:"Half missing", x:"Mất một nửa"},
  {img:"quadrant", en:"Corner missing", x:"Mất một góc"},
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
  x:"Nếu thấy hai hình, chúng nằm thế nào? Xin chỉ.",
  p:"nay-oo thay high hin, choong nahm theh now? sin chee",
  opts:[
    {img:"dip-single", x:"Một", p:"moht", lab:"Single"},
    {img:"dip-h", x:"Cạnh nhau", p:"kahn nyow", lab:"Side by side"},
    {img:"dip-v", x:"Trên dưới", p:"chen yoo-ee", lab:"One above"}
  ]
};
