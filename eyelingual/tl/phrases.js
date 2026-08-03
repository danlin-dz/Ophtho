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
      {id:"s01-01", en:"I am your eye doctor.", x:"Ako po ang inyong doktor sa mata.", p:"ah-ko po ang in-yong dok-tor sa ma-ta"},
      {id:"s01-02", en:"Please sit here.", x:"Maupo po kayo rito.", p:"ma-oo-po po ka-yo ree-to"},
      {id:"s01-03", en:"Please take off your glasses.", x:"Pakitanggal po ang inyong salamin.", p:"pa-kee-tang-gal po ang in-yong sa-la-min"},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"Masakit po ba? Ituro po ninyo kung saan.", p:"ma-sa-kit po ba? ee-too-ro po nin-yo koong sa-an"}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-07",
    items:[
      {id:"s02-01", en:"Put your glasses on.", x:"Isuot po ninyo ang inyong salamin.", p:"ee-soo-ot po nin-yo ang in-yong sa-la-min"},
      {id:"s02-02", en:"Please read the smallest line you can see.", x:"Pakibasa po ang pinakamaliit na linyang nakikita ninyo.", p:"pa-kee-ba-sa po ang pee-na-ka-ma-lee-eet na lin-yang na-kee-kee-ta nin-yo"},
      {id:"s02-03", en:"How many fingers?", x:"Ilang daliri po?", p:"ee-lang da-lee-ree po?"},
      {id:"s02-04", en:"Can you see this?", x:"Nakikita po ba ninyo ito?", p:"na-kee-kee-ta po ba nin-yo ee-to?"},
      {id:"s02-05", en:"Tell me if you see the light move.", x:"Sabihin po ninyo kung gumagalaw ang ilaw.", p:"sa-bee-hin po nin-yo koong goo-ma-ga-low ang ee-low"},
      {id:"s02-06", en:"Look at my nose.", x:"Tingnan po ninyo ang ilong ko.", p:"ting-nan po nin-yo ang ee-long ko"},
      {id:"s02-07", en:"Do you see two of me?", x:"Nakikita po ba ninyo akong dalawa?", p:"na-kee-kee-ta po ba nin-yo ah-kong da-la-wa?"},
      {id:"s02-08", en:"Is it worse looking this way?", x:"Mas malala po ba kapag tumitingin sa ganitong direksyon?", p:"mas ma-la-la po ba ka-pag too-mee-ting-in sa ga-nee-tong dee-rek-shon?"}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Do not move your head.", x:"Tingnan po ninyo ang daliri ko. Huwag pong igalaw ang ulo.", p:"ting-nan po nin-yo ang da-lee-ree ko. hoo-wag pong ee-ga-low ang oo-lo"},
      {id:"s03-02", en:"Look up.", x:"Tumingin po sa itaas.", p:"too-ming-in po sa ee-ta-as"},
      {id:"s03-03", en:"Look down.", x:"Tumingin po sa ibaba.", p:"too-ming-in po sa ee-ba-ba"},
      {id:"s03-04", en:"Look left.", x:"Tumingin po sa kaliwa.", p:"too-ming-in po sa ka-lee-wa"},
      {id:"s03-05", en:"Look right.", x:"Tumingin po sa kanan.", p:"too-ming-in po sa ka-nan"},
      {id:"s03-06", en:"Look straight ahead.", x:"Tumingin po sa harap.", p:"too-ming-in po sa ha-rap"}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"May allergy po ba kayo sa kahit anong gamot?", p:"my a-ler-jee po ba ka-yo sa ka-hit ah-nong ga-mot?"},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"Lalagyan ko po ng patak ang mata ninyo.", p:"la-lag-yan ko po nang pa-tak ang ma-ta nin-yo"},
      {id:"s04-03", en:"Please look up.", x:"Tumingin po sa itaas.", p:"too-ming-in po sa ee-ta-as"},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"Pampamanhid po ito sa mata. Maaaring humapdi ng ilang segundo.", p:"pam-pa-man-hid po ee-to sa ma-ta. ma-ah-ring hoo-map-dee nang ee-lang se-goon-do"},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"Palalakihin po nito ang balintataw ninyo.", p:"pa-la-la-kee-hin po nee-to ang ba-lin-ta-tow nin-yo"},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"Malalabo po ang paningin ninyo nang humigit-kumulang anim na oras.", p:"ma-la-la-bo po ang pa-ning-in nin-yo nang hoo-mee-git-koo-moo-lang ah-nim na o-ras"},
      {id:"s04-07", en:"Please close your eyes.", x:"Ipikit po ninyo ang mga mata.", p:"ee-pee-kit po nin-yo ang ma-nga ma-ta"},
      {id:"s04-08", en:"Don't rub your eyes.", x:"Huwag pong kuskusin ang mata.", p:"hoo-wag pong koos-koo-sin ang ma-ta"}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest, forehead against the bar.", x:"Ipatong po ang baba dito at idikit ang noo sa bar.", p:"ee-pa-tong po ang ba-ba dee-to at ee-dee-kit ang no-o sa bar"},
      {id:"s05-02", en:"Open your eyes.", x:"Imulat po ninyo ang mga mata.", p:"ee-moo-lat po nin-yo ang ma-nga ma-ta"},
      {id:"s05-03", en:"Don't pull your head back.", x:"Huwag pong iurong ang ulo.", p:"hoo-wag pong ee-oo-rong ang oo-lo"},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"Maliwanag po ang ilaw. Pasensya po sandali.", p:"ma-lee-wa-nag po ang ee-low. pa-sen-sha po san-da-lee"},
      {id:"s05-05", en:"Look at my ear.", x:"Tingnan po ninyo ang tainga ko.", p:"ting-nan po nin-yo ang ta-ing-a ko"},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"Hahawakan ko po ang talukap ng mata ninyo.", p:"ha-ha-wa-kan ko po ang ta-loo-kap nang ma-ta nin-yo"},
      {id:"s05-07", en:"Almost done.", x:"Malapit na pong tapos.", p:"ma-la-pit na pong ta-pos"}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"Tapos na po ang pagsusuri. Salamat po.", p:"ta-pos na po ang pag-soo-soo-ree. sa-la-mat po"},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"Gagamit po tayo ng interpreter para ipaliwanag ang resulta.", p:"ga-ga-mit po ta-yo nang in-ter-pre-ter pa-ra ee-pa-lee-wa-nag ang re-sool-ta"}
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
  x:"Kung nakikita ninyong dalawa, paano po nakaayos? Ituro po ninyo.",
  p:"koong na-kee-kee-ta nin-yong da-la-wa, pa-ah-no po na-ka-ah-yos? ee-too-ro po nin-yo",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"Isa", p:"ee-sa", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"Magkatabi", p:"mag-ka-ta-bee", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"Magkapatong", p:"mag-ka-pa-tong", lab:"One above"}
  ]
};
