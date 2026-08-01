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
      {id:"s01-01", en:"I'm the doctor, I'm going to check your eyes.", x:"Doktor po ako, titingnan ko ang inyong mga mata.", p:""},
      {id:"s01-02", en:"Please sit here.", x:"Maupo po kayo rito.", p:""},
      {id:"s01-03", en:"Please take off your glasses.", x:"Pakitanggal po ang inyong salamin.", p:""},
      {id:"s01-04", en:"Does it hurt? Point to where.", x:"Masakit po ba? Ituro po ninyo kung saan.", p:""}
    ]
  },
  {
    id:"acuity", num:"02", title:"Vision",
    diplopiaAfter:"s02-06",
    items:[
      {id:"s02-01", en:"Please read the smallest line you can see.", x:"Pakibasa po ang pinakamaliit na linyang nakikita ninyo.", p:""},
      {id:"s02-02", en:"How many fingers?", x:"Ilang daliri po?", p:""},
      {id:"s02-03", en:"Can you see this?", x:"Nakikita po ba ninyo ito?", p:""},
      {id:"s02-04", en:"Tell me if you see the light move.", x:"Sabihin po ninyo kung gumagalaw ang ilaw.", p:""},
      {id:"s02-05", en:"Look at my nose.", x:"Tingnan po ninyo ang ilong ko.", p:""},
      {id:"s02-06", en:"Do you see two of me?", x:"Nakikita po ba ninyo akong dalawa?", p:""},
      {id:"s02-07", en:"Is it worse looking this way?", x:"Mas malala po ba kapag tumitingin sa ganitong direksyon?", p:""}
    ]
  },
  {
    id:"motility", num:"03", title:"Eye movements",
    note:"Demonstrate and the patient will mirror you.",
    items:[
      {id:"s03-01", en:"Look at my finger. Don't move your head.", x:"Tingnan po ninyo ang daliri ko. Huwag pong igalaw ang ulo.", p:""},
      {id:"s03-02", en:"Look up.", x:"Tumingin po sa itaas.", p:""},
      {id:"s03-03", en:"Look down.", x:"Tumingin po sa ibaba.", p:""},
      {id:"s03-04", en:"Look left.", x:"Tumingin po sa kaliwa.", p:""},
      {id:"s03-05", en:"Look right.", x:"Tumingin po sa kanan.", p:""},
      {id:"s03-06", en:"Look far away.", x:"Tumingin po sa malayo.", p:""}
    ]
  },
  {
    id:"drops", num:"04", title:"Drops",
    items:[
      {id:"s04-01", en:"Are you allergic to any medications?", x:"May allergy po ba kayo sa kahit anong gamot?", p:""},
      {id:"s04-02", en:"I'm going to put drops in your eye.", x:"Lalagyan ko po ng patak ang mata ninyo.", p:""},
      {id:"s04-03", en:"Please look up.", x:"Tumingin po sa itaas.", p:""},
      {id:"s04-04", en:"This is an analgesic for your eyes. It may sting for a few seconds.", x:"Pampamanhid po ito sa mata. Maaaring humapdi ng ilang segundo.", p:""},
      {id:"s04-05", en:"This drop will dilate your pupils.", x:"Palalakihin po nito ang balintataw ninyo.", p:""},
      {id:"s04-06", en:"Your vision will be blurry for about 6 hours.", x:"Malalabo po ang paningin ninyo nang humigit-kumulang anim na oras.", p:""},
      {id:"s04-07", en:"Please close your eyes.", x:"Ipikit po ninyo ang mga mata.", p:""},
      {id:"s04-08", en:"Don't rub your eyes.", x:"Huwag pong kuskusin ang mata.", p:""}
    ]
  },
  {
    id:"slitlamp", num:"05", title:"Slit lamp",
    items:[
      {id:"s05-01", en:"Chin on the rest.", x:"Ipatong po ang baba dito.", p:""},
      {id:"s05-02", en:"Forehead against the bar.", x:"Idikit po ang noo sa bar na ito.", p:""},
      {id:"s05-03", en:"Don't pull your head back.", x:"Huwag pong iurong ang ulo.", p:""},
      {id:"s05-04", en:"The light is bright. Please bear with it.", x:"Maliwanag po ang ilaw. Pasensya po sandali.", p:""},
      {id:"s05-05", en:"Look at my ear.", x:"Tingnan po ninyo ang tainga ko.", p:""},
      {id:"s05-06", en:"I'm going to touch your eyelid.", x:"Hahawakan ko po ang talukap ng mata ninyo.", p:""},
      {id:"s05-07", en:"Almost done.", x:"Malapit na pong tapos.", p:""}
    ]
  },
  {
    id:"closing", num:"06", title:"Closing",
    items:[
      {id:"s06-01", en:"The exam is finished. Thank you.", x:"Tapos na po ang pagsusuri. Salamat po.", p:""},
      {id:"s06-02", en:"We will use an interpreter to explain the results.", x:"Gagamit po tayo ng interpreter para ipaliwanag ang resulta.", p:""}
    ]
  }
];

/* The one pictogram on the card. Diplopia geometry is a perceptual judgement
   with no gesture equivalent and clumsy phrasing in any language, so a picture
   genuinely outperforms a sentence here. Anchored by diplopiaAfter. */
const DIP = {
  en:"If you see two — how are they arranged? Point.",
  x:"Kung nakikita ninyong dalawa, paano po nakaayos? Ituro po ninyo.",
  opts:[
    {svg:'<circle cx="50" cy="28" r="9"/>', x:"Isa", lab:"Single"},
    {svg:'<circle cx="34" cy="28" r="9"/><circle cx="66" cy="28" r="9"/>', x:"Magkatabi", lab:"Side by side"},
    {svg:'<circle cx="50" cy="15" r="9"/><circle cx="50" cy="41" r="9"/>', x:"Magkapatong", lab:"One above"}
  ]
};
