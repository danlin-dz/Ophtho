/* Eyelingual — Tagalog phrase set for the ophthalmic examination.
 *
 * id  — permanent. Audio files are named after it (audio/tl/s02-04.m4a).
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
      {id:"intro-doctor", en:"I am your eye doctor.", x:"Ako po ang inyong doktor sa mata.", p:"ah-ko po ang in-yong dok-tor sa ma-ta"},
      {id:"intro-sit", en:"Please sit here.", x:"Maupo po kayo rito.", p:"ma-oo-po po ka-yo ree-to"},
      {id:"intro-pain", en:"Does it hurt? Point to where.", x:"Masakit po ba? Ituro po ninyo kung saan.", p:"ma-sa-kit po ba? ee-too-ro po nin-yo koong sa-an"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"vis-double",
    symptomsAfter:"sym-ask",
    items:[
      {id:"vis-glasses-on", en:"Put your glasses on.", x:"Isuot po ninyo ang inyong salamin.", p:"ee-soo-ot po nin-yo ang in-yong sa-la-min"},
      {id:"vis-cover-left", en:"Cover your left eye.", x:"Takpan po ninyo ang kaliwang mata.", p:"tak-pan po nin-yo ang ka-lee-wang ma-ta"},
      {id:"vis-cover-right", en:"Cover your right eye.", x:"Takpan po ninyo ang kanang mata.", p:"tak-pan po nin-yo ang ka-nang ma-ta"},
      {id:"sym-ask", en:"Does your vision look like any of these? Point to the closest one.", x:"Alin po ang pinakamalapit sa nakikita ninyo? Ituro po ninyo.", p:"ah-lin po ang pee-na-ka-ma-la-pit sa na-kee-kee-ta nin-yo? ee-too-ro po nin-yo"},
      {id:"vis-read-line", en:"Please read the smallest line you can see.", x:"Pakibasa po ang pinakamaliit na linyang nakikita ninyo.", p:"pa-kee-ba-sa po ang pee-na-ka-ma-lee-eet na lin-yang na-kee-kee-ta nin-yo"},
      {id:"vis-pinhole", en:"Try to look through the tiny hole. It may make your vision clearer.", x:"Tingnan po ninyo sa maliit na butas, baka mas linaw.", p:"ting-nan po nin-yo sa ma-lee-eet na boo-tas, ba-ka mas lee-now"},
      {id:"vis-fingers", en:"How many fingers?", x:"Ilang daliri po?", p:"ee-lang da-lee-ree po?"},
      {id:"vis-see-this", en:"Can you see this?", x:"Nakikita po ba ninyo ito?", p:"na-kee-kee-ta po ba nin-yo ee-to?"},
      {id:"vis-light-move", en:"Tell me if you see the light move.", x:"Sabihin po ninyo kung gumagalaw ang ilaw.", p:"sa-bee-hin po nin-yo koong goo-ma-ga-low ang ee-low"},
      {id:"vis-look-nose", en:"Look at my nose.", x:"Tingnan po ninyo ang ilong ko.", p:"ting-nan po nin-yo ang ee-long ko"},
      {id:"vis-double", en:"Do you see two of me?", x:"Nakikita po ba ninyo akong dalawa?", p:"na-kee-kee-ta po ba nin-yo ah-kong da-la-wa?"},
      {id:"vis-worse-direction", en:"Is it worse looking this way?", x:"Mas malala po ba kapag tumitingin sa ganitong direksyon?", p:"mas ma-la-la po ba ka-pag too-mee-ting-in sa ga-nee-tong dee-rek-shon?"}
    ]
  },
  {
    id:"pupils", num:"03", title:"Pupils",
    note:"Before any dilating drop goes in.",
    items:[
      {id:"pup-shine", en:"I am going to shine a light in your eyes. Please look at the wall behind me.", x:"Tatapatan ko po ng ilaw ang mga mata ninyo. Tingnan po ninyo ang pader sa likod ko.", p:"ta-ta-pa-tan ko po nang ee-low ang ma-nga ma-ta nin-yo. ting-nan po nin-yo ang pa-der sa lee-kod ko"},
      {id:"pup-dont-look-light", en:"Do not look at the light. Keep looking far away.", x:"Huwag po tingnan ang ilaw, tumingin po sa malayo.", p:"hoo-wag po ting-nan ang ee-low, too-ming-in po sa ma-la-yo"},
      {id:"pup-both-open", en:"Keep both eyes open.", x:"Imulat po ninyo ang dalawang mata.", p:"ee-moo-lat po nin-yo ang da-la-wang ma-ta"}
    ]
  },
  {
    id:"motility", num:"04", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"mot-finger", en:"Look at my finger. Do not move your head.", x:"Tingnan po ninyo ang daliri ko. Huwag pong igalaw ang ulo.", p:"ting-nan po nin-yo ang da-lee-ree ko. hoo-wag pong ee-ga-low ang oo-lo"},
      {id:"mot-up", en:"Look up.", x:"Tumingin po sa itaas.", p:"too-ming-in po sa ee-ta-as"},
      {id:"mot-down", en:"Look down.", x:"Tumingin po sa ibaba.", p:"too-ming-in po sa ee-ba-ba"},
      {id:"mot-left", en:"Look left.", x:"Tumingin po sa kaliwa.", p:"too-ming-in po sa ka-lee-wa"},
      {id:"mot-right", en:"Look right.", x:"Tumingin po sa kanan.", p:"too-ming-in po sa ka-nan"},
      {id:"mot-straight", en:"Look straight ahead.", x:"Tumingin po sa harap.", p:"too-ming-in po sa ha-rap"}
    ]
  },
  {
    id:"pressure", num:"05", title:"Eye pressure",
    note:"Also before dilation.",
    items:[
      {id:"iop-check", en:"I am going to check the pressure in your eye.", x:"Susukatin ko po ang presyon ng mata ninyo.", p:"soo-soo-ka-tin ko po ang pres-yon nang ma-ta nin-yo"},
      {id:"iop-no-hurt", en:"This does not hurt. You will feel a light touch on your eye.", x:"Hindi po ito masakit. Makakaramdam po kayo ng bahagyang dampi sa mata.", p:"hin-dee po ee-to ma-sa-kit. ma-ka-ka-ram-dam po ka-yo nang ba-hag-yang dam-pee sa ma-ta"},
      {id:"iop-still", en:"Please look straight ahead and hold still. Try not to blink.", x:"Tumingin po sa harap, huwag pong gumalaw, at huwag pong kumurap.", p:"too-ming-in po sa ha-rap, hoo-wag pong goo-ma-low, at hoo-wag pong koo-moo-rap"}
    ]
  },
  {
    id:"fields", num:"06", title:"Visual fields",
    items:[
      {id:"vf-fix", en:"Keep looking at my nose, not at my hand.", x:"Tingnan po ninyo ang ilong ko, huwag ang kamay ko.", p:"ting-nan po nin-yo ang ee-long ko, hoo-wag ang ka-my ko"},
      {id:"vf-raise", en:"Raise your hand when you see my fingers.", x:"Itaas po ninyo ang kamay kapag nakita ang daliri ko.", p:"ee-ta-as po nin-yo ang ka-my ka-pag na-kee-ta ang da-lee-ree ko"},
      {id:"vf-count", en:"How many fingers do you see now?", x:"Ilang daliri po ang nakikita ninyo ngayon?", p:"ee-lang da-lee-ree po ang na-kee-kee-ta nin-yo nga-yon?"}
    ]
  },
  {
    id:"drops", num:"07", title:"Drops",
    items:[
      {id:"drp-allergy", en:"Are you allergic to any medications?", x:"May allergy po ba kayo sa kahit anong gamot?", p:"my a-ler-jee po ba ka-yo sa ka-hit ah-nong ga-mot?"},
      {id:"drp-putting", en:"I'm going to put drops in your eye.", x:"Lalagyan ko po ng patak ang mata ninyo.", p:"la-lag-yan ko po nang pa-tak ang ma-ta nin-yo"},
      {id:"drp-look-up", en:"Please look up.", x:"Tumingin po sa itaas.", p:"too-ming-in po sa ee-ta-as"},
      {id:"drp-anaesthetic", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"Pampamanhid po ito sa mata. Maaaring humapdi ng ilang segundo.", p:"pam-pa-man-hid po ee-to sa ma-ta. ma-ah-ring hoo-map-dee nang ee-lang se-goon-do"},
      {id:"drp-dilate", en:"This drop will dilate your pupils.", x:"Palalakihin po nito ang balintataw ninyo.", p:"pa-la-la-kee-hin po nee-to ang ba-lin-ta-tow nin-yo"},
      {id:"drp-blurry", en:"Your vision will be blurry for about 6 hours.", x:"Malalabo po ang paningin ninyo nang humigit-kumulang anim na oras.", p:"ma-la-la-bo po ang pa-ning-in nin-yo nang hoo-mee-git-koo-moo-lang ah-nim na o-ras"},
      {id:"drp-close", en:"Please close your eyes.", x:"Ipikit po ninyo ang mga mata.", p:"ee-pee-kit po nin-yo ang ma-nga ma-ta"},
      {id:"drp-no-rub", en:"Don't rub your eyes.", x:"Huwag pong kuskusin ang mata.", p:"hoo-wag pong koos-koo-sin ang ma-ta"}
    ]
  },
  {
    id:"slitlamp", num:"08", title:"Slit lamp",
    items:[
      {id:"slit-chin", en:"Chin on the rest, forehead against the bar.", x:"Ipatong po ang baba dito at idikit ang noo sa bar.", p:"ee-pa-tong po ang ba-ba dee-to at ee-dee-kit ang no-o sa bar"},
      {id:"slit-open", en:"Open your eyes wide.", x:"Imulat po ninyo nang maluwang ang mga mata.", p:"ee-moo-lat po nin-yo nang ma-loo-wang ang ma-nga ma-ta"},
      {id:"slit-no-pull-back", en:"Don't pull your head back.", x:"Huwag pong iurong ang ulo.", p:"hoo-wag pong ee-oo-rong ang oo-lo"},
      {id:"slit-bright", en:"The light is bright. Please bear with it.", x:"Maliwanag po ang ilaw. Pasensya po sandali.", p:"ma-lee-wa-nag po ang ee-low. pa-sen-sha po san-da-lee"},
      {id:"slit-ear", en:"Look at my ear.", x:"Tingnan po ninyo ang tainga ko.", p:"ting-nan po nin-yo ang ta-ing-a ko"},
      {id:"slit-touch-lid", en:"I'm going to touch your eyelid.", x:"Hahawakan ko po ang talukap ng mata ninyo.", p:"ha-ha-wa-kan ko po ang ta-loo-kap nang ma-ta nin-yo"},
      {id:"slit-almost", en:"Almost done.", x:"Malapit na pong tapos.", p:"ma-la-pit na pong ta-pos"}
    ]
  },
  {
    id:"closing", num:"09", title:"Closing",
    items:[
      {id:"close-finished", en:"The exam is finished. Thank you.", x:"Tapos na po ang pagsusuri. Salamat po.", p:"ta-pos na po ang pag-soo-soo-ree. sa-la-mat po"},
      {id:"close-interpreter", en:"We will use an interpreter to explain the results.", x:"Gagamit po tayo ng interpreter para ipaliwanag ang resulta.", p:"ga-ga-mit po ta-yo nang in-ter-pre-ter pa-ra ee-pa-lee-wa-nag ang re-sool-ta"}
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
  {img:"normal", en:"Normal", x:"Normal"},
  {img:"blur", en:"Blurry", x:"Malabo"},
  {img:"distort", en:"Wavy or bent", x:"Baluktot"},
  {img:"faded", en:"Faded", x:"Kupas"},
  {img:"central", en:"Dark in the middle", x:"Madilim sa gitna"},
  {img:"curtain", en:"Curtain across", x:"May kurtina"},
  {img:"floaters", en:"Specks or cobwebs", x:"Batik o sapot"},
  {img:"flashes", en:"Flashes of light", x:"Kislap ng ilaw"},
  {img:"zigzag", en:"Zigzag lines", x:"Zigzag na linya"},
  {img:"halo", en:"Halo around lights", x:"May singsing sa ilaw"},
  {img:"patch", en:"Patch missing", x:"May bahaging nawawala"},
  {img:"tunnel", en:"Only the middle", x:"Gitna lang"},
  {img:"half", en:"Half missing", x:"Kalahating nawawala"},
  {img:"quadrant", en:"Corner missing", x:"Sulok na nawawala"},
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
  x:"Kung nakikita ninyong dalawa, paano po nakaayos? Ituro po ninyo.",
  p:"koong na-kee-kee-ta nin-yong da-la-wa, pa-ah-no po na-ka-ah-yos? ee-too-ro po nin-yo",
  opts:[
    {img:"dip-single", x:"Isa", p:"ee-sa", lab:"Single"},
    {img:"dip-h", x:"Magkatabi", p:"mag-ka-ta-bee", lab:"Side by side"},
    {img:"dip-v", x:"Magkapatong", p:"mag-ka-pa-tong", lab:"One above"}
  ]
};
