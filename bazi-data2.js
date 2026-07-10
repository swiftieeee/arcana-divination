// ============================================================
// ARCANA 三世书 deep tables, part 2.
// 受生债 (per 灵宝天尊说禄库受生经), 皇帝身命, 袁天罡称骨,
// 流年太岁 relations, deity and ritual guidance.
// ============================================================

// ------------------------------------------------------------
// 受生债: the debt owed to the celestial treasury at rebirth.
// Canonical 12 branch table, verbatim from the scripture.
// ------------------------------------------------------------
const SHOUSHENG_DEBT = [
  { qian: "一万三千贯", qianEn: "13,000 strings of cash", ku: "第一库", surname: "李" },  // 子
  { qian: "二十八万贯", qianEn: "280,000 strings of cash", ku: "第二库", surname: "田" },  // 丑
  { qian: "八万贯", qianEn: "80,000 strings of cash", ku: "第三库", surname: "雷" },      // 寅
  { qian: "八万贯", qianEn: "80,000 strings of cash", ku: "第四库", surname: "柳" },      // 卯
  { qian: "五万贯", qianEn: "50,000 strings of cash", ku: "第五库", surname: "袁" },      // 辰
  { qian: "七万贯", qianEn: "70,000 strings of cash", ku: "第六库", surname: "纪" },      // 巳
  { qian: "二十六万贯", qianEn: "260,000 strings of cash", ku: "第七库", surname: "许" }, // 午
  { qian: "十万贯", qianEn: "100,000 strings of cash", ku: "第八库", surname: "朱" },     // 未
  { qian: "四万贯", qianEn: "40,000 strings of cash", ku: "第九库", surname: "车" },      // 申
  { qian: "五万贯", qianEn: "50,000 strings of cash", ku: "第十库", surname: "郑" },      // 酉
  { qian: "二万五千贯", qianEn: "25,000 strings of cash", ku: "第十一库", surname: "成" },// 戌
  { qian: "九千贯", qianEn: "9,000 strings of cash", ku: "第十二库", surname: "亢" }      // 亥
];
// Hour born adds its own smaller debt: 子时一千贯 rising to 亥时一万二千贯
const SHOUSHENG_HOUR = ["一千贯","两千贯","三千贯","四千贯","五千贯","六千贯","七千贯","八千贯","九千贯","一万贯","一万一千贯","一万二千贯"];

const SHOUSHENG_EXPLAIN = {
  what: "In the Daoist scripture 灵宝天尊说禄库受生经, every soul that takes rebirth borrows from the treasury of the underworld (禄库) to fund its incarnation: the flesh, the breath, the allotment of luck it arrives with. This borrowed sum is the 受生债, the Debt of Receiving Life. It is not owed to any person you wronged; it is owed to the treasury itself, administered by one of twelve 曹官 (treasury officials), and the scripture teaches that an unrepaid debt quietly drags on this life's finances, luck and peace of mind, while a repaid one, in the scripture's own words, brings 见世获福: blessings visible in this very lifetime, and a next life free of hardship.",
  how: "How repayment is traditionally done: the classical way is a 还受生债 (also called 还阴债) observance, ideally performed at a Daoist temple where priests recite the 受生经, declare your name and birth details to your treasury's 曹官, and burn spirit money (金银纸/受生钱) dedicated to your specific 库, in the amount owed. Auspicious times are the 初一 and 十五 of lunar months, your birthday, or the temple's 受生 festival days. If a temple observance is out of reach, tradition accepts installments of sincerity: recite or read the scripture yourself, burn dedicated spirit money respectfully in smaller amounts across several occasions, and, in the view of most modern practitioners, convert part of the debt into living merit: verified charity, releasing life (放生), care for elders, and quiet good deeds done in your own name. The scripture's deeper point is constant across all versions: the debt is settled by sincerity and merit, not by the paper alone."
};

// ------------------------------------------------------------
// 皇帝身命: which part of the Emperor's body you were born on.
// Season (by solar terms, matching the BaZi month) crossed with birth hour.
// ------------------------------------------------------------
// Seasons: spring 寅卯辰, summer 巳午未, autumn 申酉戌, winter 亥子丑 (month branch)
const EMPEROR_TABLE = {
  spring: { 0:"head", 3:"shoulder", 9:"shoulder", 1:"belly", 11:"belly", 6:"waist", 5:"hand", 7:"hand", 4:"knee", 10:"knee", 2:"foot", 8:"foot" },
  summer: { 6:"head", 3:"shoulder", 9:"shoulder", 7:"belly", 11:"belly", 0:"waist", 1:"hand", 5:"hand", 4:"knee", 10:"knee", 2:"foot", 8:"foot" },
  autumn: { 11:"head", 0:"shoulder", 6:"shoulder", 3:"belly", 7:"belly", 8:"waist", 1:"hand", 5:"hand", 2:"knee", 9:"knee", 4:"foot", 10:"foot" },
  winter: { 5:"head", 3:"shoulder", 9:"shoulder", 2:"belly", 8:"belly", 0:"waist", 6:"hand", 11:"hand", 1:"knee", 7:"knee", 4:"foot", 10:"foot" }
};

const EMPEROR_PARTS = {
  head: { cn: "皇帝头", en: "The Emperor's Head",
    text: "To be born on the Emperor's head is the highest seat in this system: the placement of one born into shelter. The classical reading says your original family provides real ground under your feet, childhood through youth passes with food, clothing and dignity secured, and doors tend to open for you through name, upbringing and bearing rather than struggle. People instinctively give you face. The head's obligation is judgment: because so much is given, the classical texts warn that the head must think for the whole body. Complacency and entitlement are the only true enemies of this placement; gratitude, study and stewardship of what you inherited turn a favored start into a favored whole life." },
  shoulder: { cn: "皇帝肩", en: "The Emperor's Shoulders",
    text: "To be born on the Emperor's shoulders is to be born a carrier: the early decades genuinely carry weight, running about, shouldering family or work burdens that were never entirely yours, and feeling that effort outruns reward. The tradition is emphatic about the turn: crossing into middle age, the fortune of this placement improves sharply and visibly. What was carried becomes capability, the network built through all that running starts paying, and later life stands on ground the early years quietly laid. The counsel is to pace the body and not to envy faster starters; shoulder people finish stronger than they begin, almost as a law of the placement." },
  hand: { cn: "皇帝手", en: "The Emperor's Hands",
    text: "To be born on the Emperor's hands is the placement of the earner: money moves through your hands all your life, and skill with people moves it in your direction. The classical reading calls this the natural dealmaker and the born professional of relationships: persuasive, practical, quick to grasp and quick to deliver, with wealth arriving in proportion to activity. Hands are diligent by destiny; idleness actively harms this placement, while every craft learned multiplies it. The one warning is grip: money that comes through the hands can leave through them, so the tradition counsels building vaults, not just flows: property, savings, assets that cannot be spent in an evening." },
  waist: { cn: "皇帝腰", en: "The Emperor's Waist",
    text: "To be born on the Emperor's waist is to be born beloved: the placement of the favored child. The tradition reads it as a life gathered into the center of affection, doted on by elders, supported by seniors and superiors, cushioned by help that arrives before it is requested. Resources and opportunities are handed forward across your whole life to a degree that others quietly envy. The waist's task is to develop a spine of its own: favor is weather, not architecture, and those who convert being loved into being capable enjoy this placement's blessings to the end, while those who only lean on it feel the chill when a patron departs. Loved, and therefore responsible for becoming worthy of it: that is the waist." },
  belly: { cn: "皇帝腹", en: "The Emperor's Belly",
    text: "To be born on the Emperor's belly is the placement of the full mind: 满腹才华, a belly full of talent, as the phrase goes. The classical reading marks you as quick-brained, tasteful and inwardly rich, one who succeeds through intelligence, learning and refined judgment rather than raw force. Work that uses the mind, culture, planning, analysis, artistry, ripens naturally into recognition, and this placement shines earlier than most once it finds its field. The belly's shadow is appetite and rumination: overthinking, over-consuming, digesting grievances for years. Feed the mind deliberately and it feeds you back; let it churn idle and it consumes its own luck." },
  knee: { cn: "皇帝膝", en: "The Emperor's Knees",
    text: "To be born on the Emperor's knees is the placement of the toiler, and the tradition does not sugarcoat it: this life carries labor, bending, effort repeated daily, often for others' benefit before your own. But the same texts are equally clear about the redemption written into it: knees are what the whole body relies on to rise, and those born here possess endurance, humility and practical strength that softer placements never develop. The fortune of the knee improves with age precisely because persistence compounds; the late years of a knee life, built on decades of real work, are commonly more solid and more respected than flashier destinies manage. Guard the body, save relentlessly, and let time do what it demonstrably does for this placement." },
  foot: { cn: "皇帝足", en: "The Emperor's Feet",
    text: "To be born on the Emperor's feet is the placement of the traveler: the feet carry the whole body, and your fortune, the tradition says plainly, is not buried under your birthplace. Success for this placement correlates with movement: leaving home, crossing regions or borders, earning where you were not born, building where nobody knows your childhood name. Staying put is the one strategy that starves it. Expect your significant breaks to arrive away from home, through journeys, relocations and far connections, and expect restlessness whenever life becomes too settled; that restlessness is the placement speaking. Build a portable life, keep home in people rather than coordinates, and walk: the road is where your table is set." }
};

// ------------------------------------------------------------
// 袁天罡称骨: bone weight destiny. Weights are in 钱 (10钱 = 1两).
// ------------------------------------------------------------
// Year weight by ganzhi cycle. Keys assembled from the classical table.
const CHENGGU_YEAR = (() => {
  const w = {};
  const rows = [
    ["甲子",12],["丙子",16],["戊子",15],["庚子",7],["壬子",5],
    ["乙丑",9],["丁丑",8],["己丑",7],["辛丑",7],["癸丑",7],
    ["丙寅",6],["戊寅",8],["庚寅",9],["壬寅",9],["甲寅",12],
    ["丁卯",7],["己卯",19],["辛卯",12],["癸卯",12],["乙卯",8],
    ["戊辰",12],["庚辰",12],["壬辰",10],["甲辰",8],["丙辰",8],
    ["己巳",5],["辛巳",6],["癸巳",7],["乙巳",7],["丁巳",6],
    ["庚午",9],["壬午",8],["甲午",15],["丙午",13],["戊午",19],
    ["辛未",8],["癸未",7],["乙未",6],["丁未",5],["己未",6],
    ["壬申",7],["甲申",5],["丙申",5],["戊申",14],["庚申",8],
    ["癸酉",8],["乙酉",15],["丁酉",14],["己酉",5],["辛酉",16],
    ["甲戌",15],["丙戌",6],["戊戌",14],["庚戌",9],["壬戌",10],
    ["乙亥",9],["丁亥",16],["己亥",9],["辛亥",17],["癸亥",6]
  ];
  for (const [gz, weight] of rows) w[gz] = weight;
  return w;
})();
const CHENGGU_MONTH = [6,7,18,9,5,16,9,15,18,8,9,5]; // 正月..十二月
const CHENGGU_DAY = [5,10,8,15,16,15,8,16,8,16,9,17,8,17,10,8,9,18,5,15,10,9,8,9,15,18,7,8,16,6]; // 初一..三十
const CHENGGU_HOUR = [16,6,7,10,9,16,10,8,8,9,6,6]; // 子..亥

// The 51 classical verses, weight in 钱 (21 = 二两一).
const CHENGGU_VERSES = {
  21:"短命非业谓大凶，平生灾难事重重，凶祸频临限逆境，终世困苦事不成。",
  22:"身寒骨冷苦伶仃，此命推来行乞人，劳劳碌碌无度日，中年打拱过平生。",
  23:"此命推来骨轻轻，求谋做事事难成，妻儿兄弟应难许，别处他乡作散人。",
  24:"此命推来福禄无，门庭困苦总难荣，六亲骨肉皆无靠，流到他乡作老人。",
  25:"此命推来祖业微，门庭营度似希奇，六亲骨肉如水炭，一世勤劳自把持。",
  26:"平生一路苦中求，独自营谋事不休，离祖出门宜早计，晚来衣禄自无忧。",
  27:"一生做事少商量，难靠祖宗作主张，独马单枪空作去，早年晚岁总无长。",
  28:"一生作事似飘蓬，祖宗产业在梦中，若不过房并改姓，也当移徒二三通。",
  29:"初年运限未曾亨，纵有功名在后成，须过四旬方可上，移居改姓使为良。",
  30:"劳劳碌碌苦中求，东走西奔何日休，若能终身勤与俭，老来稍可免忧愁。",
  31:"忙忙碌碌苦中求，何日云开见日头，难得祖基家可立，中年衣食渐无忧。",
  32:"初年运错事难谋，渐有财源如水流，到的中年衣食旺，那时名利一齐来。",
  33:"早年做事事难成，百计徒劳枉费心，半世自如流水去，后来运到始得金。",
  34:"此命福气果如何，僧道门中衣禄多，离祖出家方得妙，终朝拜佛念弥陀。",
  35:"生平福量不周全，祖业根基觉少传，营事生涯宜守旧，时来衣食胜从前。",
  36:"不须劳碌过平生，独自成家福不轻，早有福星常照命，任君行去百般成。",
  37:"此命般般事不成，弟兄少力自孤成，虽然祖业须微有，来的明时去的暗。",
  38:"一生骨肉最清高，早入学门姓名标，待看年将三十六，蓝衣脱去换红袍。",
  39:"此命终身运不通，劳劳做事尽皆空，苦心竭力成家计，到得那时在梦中。",
  40:"平生衣禄是绵长，件件心中自主张，前面风霜都受过，从来必定享安泰。",
  41:"此命推来事不同，为人能干异凡庸，中年还有逍遥福，不比前年云未通。",
  42:"得宽怀处且宽怀，何用双眉总不开，若使中年命运济，那时名利一齐来。",
  43:"为人心性最聪明，做事轩昂近贵人，衣禄一生天数定，不须劳碌是丰亨。",
  44:"来事由天莫苦求，须知福禄胜前途，当年财帛难如意，晚景欣然便不忧。",
  45:"福中取贵格求真，明敏才华志自伸，福禄寿全家道吉，桂兰毓秀晚荣臻。",
  46:"东西南北尽皆通，出姓移名更觉隆，衣禄无亏天数定，中年晚景一般同。",
  47:"此命推来旺末年，妻荣子贵自怡然，平生原有滔滔福，可有财源如水流。",
  48:"幼年运道未曾享，苦是蹉跎再不兴，兄弟六亲皆无靠，一身事业晚年成。",
  49:"此命推来福不轻，自立自成显门庭，从来富贵人亲近，使婢差奴过一生。",
  50:"为利为名终日劳，中年福禄也多遭，老来是有财星照，不比前番目下高。",
  51:"一世荣华事事通，不须劳碌自亨通，兄弟叔侄皆如意，家业成时福禄宏。",
  52:"一世亨通事事能，不须劳思自然能，宗施欣然心皆好，家业丰亨自称心。",
  53:"此格推来气象真，兴家发达在其中，一生福禄安排定，却是人间一富翁。",
  54:"此命推来厚且清，诗书满腹看功成，丰衣足食自然稳，正是人间有福人。",
  55:"走马扬鞭争名利，少年做事废筹论，一朝福禄源源至，富贵荣华显六亲。",
  56:"此格推来礼仪通，一生福禄用无穷，甜酸苦辣皆尝过，财源滚滚稳且丰。",
  57:"福禄盈盈万事全，一生荣耀显双亲，名扬威震人钦敬，处世逍遥似遇春。",
  58:"平生福禄自然来，名利兼全福禄偕，雁塔提名为贵客，紫袍金带走金鞋。",
  59:"细推此格妙且清，必定才高礼仪通，甲第之中应有分，扬鞭走马显威荣。",
  60:"一朝金榜快题名，显祖荣宗立大功，衣食定然原欲足，田园财帛更丰盈。",
  61:"不做朝中金榜客，定为世上一财翁，聪明天赋经书熟，名显高克自是荣。",
  62:"此名生来福不穷，读书必定显亲荣，紫衣金带为卿相，富贵荣华皆可同。",
  63:"命主为官福禄长，得来富贵定非常，名题金塔传金榜，定中高科天下扬。",
  64:"此格权威不可当，紫袍金带坐高堂，荣华富贵谁能及，积玉堆金满储仓。",
  65:"细推此命福不轻，安国安邦极品人，文绣雕梁政富贵，威声照耀四方闻。",
  66:"此格人间一福人，堆金积玉满堂春，从来富贵由天定，正笏垂绅谒圣君。",
  67:"此名生来福自宏，田园家业最高隆，平生衣禄丰盈足，一世荣华万事通。",
  68:"富贵由天莫苦求，万金家计不须谋，十年不比前番事，祖业根基水上舟。",
  69:"君是人间衣禄星，一生福贵众人钦，纵然福禄由天定，安享荣华过一生。",
  70:"此命推来福不轻，不须愁虑苦劳心，一生天定衣与禄，富贵荣华过一生。",
  71:"此名生来大不同，公侯卿相在其中，一生自有逍遥福，富贵荣华极品隆。",
  72:"此格世界罕有生，十代积善产此人，天上紫微来照命，统治万民乐太平。"
};

// Band interpretations, including 晚景与归宿 (late years and how the story closes)
const CHENGGU_BANDS = [
  { min: 21, max: 26, grade: "A hard-forged destiny 苦中求之命",
    life: "The old verses for this weight class are blunt: little inheritance, kin as distant as water and charcoal, and a life where nothing worthwhile arrives without being personally wrung from the world. Read properly, this is not a curse but a terrain report: everything you will own, you will have built, and the tradition consistently notes that souls of light bone weight who leave their birthplace early, learn a durable trade and practice fierce thrift end far better than they began. Beware of waiting for rescue; none is written, and that is precisely why everything you build is unmistakably yours.",
    late: "On the late years: the verses of this class warn of a lonely old age only for those who never planted anything, and promise 晚来衣禄自无忧, comfort in the evening of life, to those who worked and saved. The traditional image of the close is a quiet one: a modest home earned by one's own hands, few but genuine mourners, and a departure in sleep after a long tiredness rather than after drama. Plant loyalty in a few people and coins in a deep jar, and the last chapter reads far warmer than the first." },
  { min: 27, max: 31, grade: "The self-made wanderer 离祖自立之命",
    life: "This weight class belongs to those who cannot lean on the family name: the verses speak of single horse and lone spear, of ancestral property existing only in dreams, and of fortunes that begin the day you leave home. Early decades run hard and often feel circular. The turning is real and dated: the texts repeatedly mark the years after forty as the opening, when accumulated skill and endurance finally convert into standing. Movement, relocation and even reinvention of identity are favored; staying where you started is the one reliably losing play.",
    late: "On the late years: this class earns its evening. The verses promise that whoever pairs lifelong diligence with lifelong thrift 老来稍可免忧愁, arrives at old age with worries dissolved, in a home distant from the birthplace but fully their own. The traditional close is 寿终于自置之业, ending one's days on property one bought oneself, respected by neighbors who never knew how little you started with. The danger to avoid is late speculation: what was built across forty years should not be gambled in the last ten." },
  { min: 32, max: 35, grade: "Late spring destiny 先难后甜之命",
    life: "The signature of this class is the delayed bloom: early efforts misfire not from lack of talent but from mistimed luck, and half a life can flow past like water before the current turns. The verses are specific about the compensation: 渐有财源如水流, wealth arriving in a widening stream from middle age onward, once the person stops forcing closed doors and consolidates on what demonstrably works. Keep-what-works conservatism (宜守旧) is this class's secret weapon: your gains, once made, stick, which is more than the flashy classes can say.",
    late: "On the late years: this is one of the kindest closes in the book. Having eaten bitterness early, the evening is sweet: 时来衣食胜从前, the table richer each decade, children or juniors established, and the elder seat of the household occupied with quiet authority. The traditional picture of the end is 安然而逝, a settled, unhurried departure in one's own bed with affairs in order, often after seeing one more good harvest than expected. Guard health through the transition years around fifty and the rest is written gently." },
  { min: 36, max: 41, grade: "The steady blessed 福星照命",
    life: "From this weight upward the verses change tone: a fortune star sits over the life (早有福星常照命), and things attempted tend, on the whole, to come through. This class marks the self-sufficient builder whose house rises without inherited scaffolding: respectable success in study or profession, recognition arriving in the thirties, and a name that stands on its own. It is not an effortless destiny, weathering is mentioned (前面风霜都受过), but the storms pass and the structure holds. The counsel is confidence: this weight class fails mainly by underasking.",
    late: "On the late years: 从来必定享安泰, the texts promise settled peace. The traditional evening of this class is the fullest of the middle weights: an established household, children launched, a reputation that opens doors it no longer needs, and health that holds long enough to enjoy all three. The classical close is 寿终正寝, the honored death: at home, in season, with the household gathered, affairs long since ordered. Its only classical caution is pride in the final decades; the blessed who stay humble die praised." },
  { min: 42, max: 47, grade: "Late wealth rising 晚景荣华之命",
    life: "This class carries a distinctive curve: capable beyond the ordinary (为人能干异凡庸), close to helpful patrons, and specifically promised that the末年, the late years, are the richest. Money early may slip and disappoint; money late arrives like a river (财源如水流). Careers here often crest after others have plateaued, and the verses add the family blessing: 妻荣子贵, a spouse honored and children who amount to something, which the tradition counts as wealth of the highest denomination.",
    late: "On the late years: this is the class the phrase 晚景欣然 was written for: an evening of life that actively outshines the afternoon. The traditional picture is prosperity that peaks in the sixties and seventies, a household of three generations under sound roofs, and an end that comes late, painlessly and in honor, mourned properly and remembered longer. The single caution the verses attach: do not let the early lean years teach you a stinginess you carry into the rich ones; the wealth is coming, and it is meant to be enjoyed and shared." },
  { min: 48, max: 53, grade: "The estate builder 富翁之命",
    life: "The verses of this class stop hedging: 却是人间一富翁, this is, plainly, a rich person's chart. Self-made or family-lifted, the trajectory bends toward ownership: businesses, property, staff, the standing of one who signs rather than asks. Effort is still real (为利为名终日劳) but it converts at a rate other classes only read about, and the social world responds accordingly: the wealthy and useful gravitate to you unprompted. The discipline this class needs is purpose: money answers you easily, so what you point it at becomes your actual biography.",
    late: "On the late years: 老来是有财星照, the wealth star stands directly overhead in old age. The traditional evening is the estate in full: assets consolidated, family provided for beyond one generation, and personal days spent in comfort chosen rather than imposed. The classical close is a wealthy person's good death: at home amid one's own things, succession settled in advance, with the texts adding one requirement for it to be truly good: generosity practiced while living, because the verses reserve their coldest lines for rich men mourned by accountants only." },
  { min: 54, max: 60, grade: "Eminence and honor 金榜题名之命",
    life: "This weight class belongs to public distinction: the verses speak of examinations topped, names on golden lists, robes and insignia, the scholar-official archetype that in modern terms reads as elite credentials, public reputation and leadership that honors one's parents (一生荣耀显双亲). Learning is this class's engine; every degree, qualification and mastered discipline multiplies a fortune that was already substantial. Setbacks occur, the verses mention tasting all of sweet, sour, bitter and hot, but they are tuition, not verdicts.",
    late: "On the late years: honor compounds. The traditional evening of this class is the respected elder in full: consulted by the young, quoted at gatherings, comfortable beyond need, with 福禄寿全, blessings, emolument and longevity all three intact. The classical close is the most ceremonious in the book: a long life ending in dignity, a well-attended funeral, and a name that outlives its owner in institutions, students or works. Its caution: eminence isolates; keep two or three friends who knew you before the robes." },
  { min: 61, max: 72, grade: "The rare great destiny 极品之命",
    life: "Above six liang the verses leave ordinary life altogether: ministers and magnates, 紫袍金带, gold heaped in storerooms, and at the very top the almost mythical 七两二: a chart the text attributes to ten generations of accumulated virtue, born under the Purple Star itself. In modern reading, this class marks extraordinary capacity and extraordinary scale: whatever field you commit to, the ceiling is regional, national or beyond, and resources, allies and openings arrive with uncanny timing. The tradition's warning is proportionate: destinies this large are load-bearing, and their failures, when they occur, are public and structural. Character is not optional equipment at this weight; it is the keel.",
    late: "On the late years: the verses promise 安享荣华过一生, honor enjoyed to the very end, wealth and standing that need no defending, and a passing that the old texts describe in the language reserved for the great: full of years, at peace, with the work complete and the succession sound. The one shadow the tradition names at this weight is legacy anxiety, the fear of unworthy heirs; it counsels building institutions rather than only fortunes, because institutions are the only heirs that never squander." }
];

const CHENGGU_NOTE = "A gentle note the old masters always added: the bone weight speaks of tendencies and terrain, never of appointments. Longevity verses are folklore's poetry, not medicine's prediction; every weight class contains lives that outran it in both directions. Read your verse as your grandmother's honest assessment of your starting cards, then play the hand better than she feared.";

// ------------------------------------------------------------
// 流年: annual luck against the natal chart. Branch relations to 太岁.
// ------------------------------------------------------------
const TAISUI_RELATIONS = {
  zhi: { cn: "值太岁", en: "Standing before Tai Sui (本命年)",
    mean: "This year's branch is your own birth branch: your 本命年. Tradition treats it as sitting directly in the year god's gaze, a year of turbulence, visibility and tests, when long-stable arrangements shake loose and life demands decisions.",
    good: "Years like this reward deliberate renewal: changes you choose (a planned move, role change, recommitment) go far better than changes that choose you. Recognition and promotion are genuinely possible because you are visible.",
    bad: "Volatility in whatever was coasting: health niggles, relationship friction, workplace shakeups. Small matters escalate faster than usual.",
    avoid: "Avoid launching high-risk ventures on impulse, avoid guaranteeing others' debts, avoid needless conflict with authority, and avoid major elective surgery or extreme sports scheduling in the inauspicious months without checking dates." },
  chong: { cn: "冲太岁", en: "Clashing with Tai Sui",
    mean: "Your birth branch directly opposes this year's branch (六冲). The classical reading is a year of movement and upheaval: things break loose, for better and worse, and standing still is the one option the year refuses to offer.",
    good: "Clash years excel at removals: leaving a stale job, ending a dead arrangement, relocating, big cleanouts. What you deliberately release this year tends to stay released.",
    bad: "Travel mishaps, sudden schedule upheavals, relationship strain from distance or change, and financial swings. What you cling to against the current strains hardest.",
    avoid: "Avoid clinging to the unsalvageable, avoid signing long rigid commitments mid-turbulence, drive and travel with extra margin, and avoid attending funerals or hospital visits when weak or ill if you observe the folk taboos." },
  xing: { cn: "刑太岁", en: "Offending Tai Sui",
    mean: "Your branch forms a 刑 (punishment) relation with the year. The classical flavor is friction from within: self-sabotage, entanglements, disputes, paperwork and words that turn on their speaker.",
    good: "A strong year for discipline projects: legal housekeeping, contracts reviewed, health checkups, quitting a vice. The 刑 energy, aimed at your own flaws, becomes a scalpel instead of a snare.",
    bad: "Quarrels, gossip, small legal or bureaucratic tangles, and injuries of carelessness. Trouble this year tends to be signed by your own hand.",
    avoid: "Avoid lawsuits you can settle, avoid loose talk and written complaints sent in anger, avoid lending your name or signature casually, and double-check documents before submitting." },
  hai: { cn: "害太岁", en: "Harming Tai Sui",
    mean: "Your branch and the year form a 害 (harm) pair. The classical reading is the year of the hidden hand: small people (小人), backbiting, quiet undermining, and help that arrives with hooks.",
    good: "Excellent year for quality over quantity in relationships: loyalty becomes visible, and alliances confirmed this year tend to be lifelong. Working quietly and letting results speak defeats every schemer.",
    bad: "Office politics, betrayal by the casually trusted, leaked words, partnerships souring over money.",
    avoid: "Avoid oversharing plans, avoid new partnerships sealed in haste, avoid gossip circles entirely, and keep receipts, records and agreements in writing all year." },
  po: { cn: "破太岁", en: "Breaking with Tai Sui",
    mean: "Your branch forms a 破 (break) relation with the year: the mildest affliction, a year of small breakages: plans that crack, objects that fail, arrangements that need re-gluing.",
    good: "Renovation, repair and renegotiation are all favored: the year's breaking energy, pointed at what you wanted changed anyway, works for you. Good year to restructure finances or renegotiate terms.",
    bad: "Leaks and cracks: budget overruns, gadget and vehicle failures, small health complaints, plans needing version two.",
    avoid: "Avoid running reserves to zero (breakages cost money this year), avoid skipping insurance and maintenance, and avoid treating small warning signs, in machines or the body, as ignorable." },
  he: { cn: "合太岁", en: "In harmony with Tai Sui",
    mean: "Your branch forms a 六合 or 三合 (harmony) with the year: the year god is, in effect, a friendly senior. Doors open with less pushing, helpful people appear on schedule, and efforts meet tailwinds.",
    good: "Favorable for the big asks: proposals, applications, launches, marriages, moves. Benefactor luck (贵人运) runs high; accept introductions and invitations.",
    bad: "The classical caution for harmony years is complacency and overcommitment: because everything says yes, you may say yes to too much.",
    avoid: "Avoid squandering a smooth year on autopilot, and avoid overextending into obligations that will outlast the tailwind." },
  none: { cn: "平太岁", en: "At peace with Tai Sui",
    mean: "Your branch forms no major relation with this year's branch: an ordinary year with the year god, neither favored nor afflicted. The year's character comes from your own chart's cycles rather than from the calendar's drama.",
    good: "Steady years are building years: skills, savings, health and relationships compound quietly without cosmic interference.",
    bad: "Nothing structural from the year itself; the year's texture comes from individual months and your own luck pillar instead.",
    avoid: "Avoid inventing drama out of boredom; the tradition considers an uneventful year with Tai Sui a quiet blessing to be spent deliberately." }
};

// Verified for the current cycle: 丙午 2026
const TAISUI_INFO = {
  "丙午": { general: "文哲大将军", lore: "The Tai Sui on duty in a 丙午 year is General Wen Zhe (文哲大将军), whose mortal incarnation is honored as the upright Ming dynasty official Wang Zhen (王缜), remembered for clean-handed integrity and courage in office. His year favors honest dealing and punishes shortcuts taken in the dark. The Tai Sui throne sits in the due South this year, with the clash palace (岁破) in the due North: tradition avoids breaking ground, drilling or major renovation on the due South sector of a home this year, and avoids sitting facing due North for important undertakings." }
};

// ------------------------------------------------------------
// Prayer, deity and ritual guidance
// ------------------------------------------------------------
const PRAYER_GUIDE = {
  taisui: { title: "拜太岁 · Honoring the Year General",
    text: "If your zodiac is afflicted this year (值/冲/刑/害/破), tradition prescribes 拜太岁: visit a temple with a Tai Sui hall (太岁殿) early in the lunar year, ideally between 初一 and 十五 of the first month. Bring simple offerings (fresh fruit in odd numbers, flowers, incense in threes), state your full name, birth date and address quietly to the presiding Tai Sui, ask for the year's protection, and if the temple provides it, have your name registered under the Tai Sui lamp (安太岁) for the year. Return between the twelfth month's 廿四 and the year's end to give thanks (还太岁), which tradition considers as important as the asking. If no temple is near, a sincere bow toward the year's Tai Sui direction on the first morning of the lunar year, with the same quiet declaration, is the accepted household form." },
  deities: { title: "Which deity for which matter",
    rows: [
      ["Wealth and business 财运", "财神 (God of Wealth, 赵公明 or 关公 for honor-bound business); offerings on 初一/十五, and especially 初五 of the first lunar month, the God of Wealth's day. Face the year's wealth direction when placing his image."],
      ["Career, exams and study 事业学业", "文昌帝君 (Wenchang, patron of scholars and careers of the pen). Students and professionals alike; offerings of fresh water, greens and a written statement of the goal placed under the incense holder."],
      ["Love and marriage 姻缘", "月老 (the Old Man under the Moon, keeper of the red threads). Visit with a red string, state your sincere wish (person unspecified works better than named, tradition says), and tie the string where the temple provides."],
      ["Health and protection 健康平安", "观音菩萨 (Guanyin, the Compassionate) for general protection and family health; 药师佛 (Medicine Buddha) specifically for illness and recovery. Guanyin's days are the 十九 of the second, sixth and ninth lunar months."],
      ["Past life debts and karmic knots 因果业债", "地藏王菩萨 (Kṣitigarbha, lord of the underworld's mercy) for ancestral and karmic matters, alongside the 受生债 repayment described above. Merit dedicated through him is traditionally held to reach the debts fastest."]
    ] },
  ritual: { title: "A simple household practice 家常祈福",
    text: "For any of the above without a temple trip: choose a clean morning on a 初一 or 十五, wash hands and face, light one or three sticks of incense (never two or four), face the appropriate direction (South for this year's Tai Sui, East for family health, your personal favorable direction for wealth), state your name and birth date, speak the matter plainly and without bargaining, bow three times, and let the incense burn out undisturbed. Follow within the week with one concrete good deed done quietly in the same cause: the tradition is unanimous that heaven audits the deed, not the incense. Do this consistently rather than dramatically; the calendar's rhythm (初一 and 十五, monthly) matters more than any single grand gesture." }
};

// ------------------------------------------------------------
// 本命佛: the eight zodiac guardian deities. Indexed by year branch.
// This is the authentic Chinese Buddhist patron system: every person
// has ONE lifelong guardian determined by their zodiac.
// ------------------------------------------------------------
const BENMING_FO = [
  { cn: "千手观音菩萨", en: "Thousand-Armed Guanyin", zodiac: "Rat 鼠",
    text: "Your lifelong guardian is Thousand-Armed Guanyin, the form of the Compassionate One with a hand for every kind of trouble. Rats are quick, resourceful and often carry more quiet anxiety than they show; this guardian's specialty is exactly that: help arriving through many channels at once, and calm restored to a busy mind. Pray to her when scattered, overloaded or facing troubles on several fronts at the same time." },
  { cn: "虚空藏菩萨", en: "Akasagarbha Bodhisattva", zodiac: "Ox 牛",
    text: "Your lifelong guardian is Akasagarbha, keeper of the treasury of empty space, whose wealth is boundless because it is stored in the void itself. Oxen build slowly and worry about scarcity; this guardian's gift is the opposite lesson: memory, wisdom and resources that do not run out. Pray to him before study, exams, and any long undertaking that needs endurance funded by faith." },
  { cn: "虚空藏菩萨", en: "Akasagarbha Bodhisattva", zodiac: "Tiger 虎",
    text: "Your lifelong guardian is Akasagarbha, keeper of the treasury of empty space. Tigers leap first and count the cost midair; this guardian holds the inexhaustible reserves that make bold lives sustainable: wisdom before the leap, resources after it. Pray to him before major risks and new ventures, and when courage needs a floor under it." },
  { cn: "文殊菩萨", en: "Manjusri Bodhisattva", zodiac: "Rabbit 兔",
    text: "Your lifelong guardian is Manjusri, the Bodhisattva of Great Wisdom, who rides a lion and carries the sword that cuts through confusion. Rabbits are gentle, perceptive and prone to overthinking in the dark; Manjusri's sword is for precisely those tangles. Pray to him before decisions, studies and examinations, and whenever the mind circles a problem without landing." },
  { cn: "普贤菩萨", en: "Samantabhadra Bodhisattva", zodiac: "Dragon 龙",
    text: "Your lifelong guardian is Samantabhadra, the Bodhisattva of Great Action, who turns vows into deeds on the back of a six-tusked elephant. Dragons dream at scale; this guardian's whole teaching is that greatness is finished, not just envisioned. Pray to him when a plan needs to become a schedule, and when the distance between your ambition and your progress starts to ache." },
  { cn: "普贤菩萨", en: "Samantabhadra Bodhisattva", zodiac: "Snake 蛇",
    text: "Your lifelong guardian is Samantabhadra, the Bodhisattva of Great Action. Snakes are strategists who can plan in the dark for years; this guardian blesses the moment strategy must surface and act. Pray to him when it is time to move from knowing to doing, and for steadiness in long undertakings whose results ripen slowly." },
  { cn: "大势至菩萨", en: "Mahasthamaprapta Bodhisattva", zodiac: "Horse 马",
    text: "Your lifelong guardian is Mahasthamaprapta, the Bodhisattva of Great Strength, whose light gives beings the power to keep going. Horses run on passion and risk running dry; this guardian's specialty is stamina of the spirit: strength that arrives quietly, exactly when yours runs out. Pray to him when enthusiasm fades mid-course, and for protection on journeys and in years of heavy movement." },
  { cn: "大日如来", en: "Vairocana Buddha", zodiac: "Goat 羊",
    text: "Your lifelong guardian is Vairocana, the Great Sun Buddha, the light at the center from which all directions radiate. Goats are gentle and easily dimmed by harsh company; this guardian restores the inner daylight: clarity, warmth and the confidence of being seen. Pray to him when confidence thins, when the path forward is unclear, and at every genuine new beginning." },
  { cn: "大日如来", en: "Vairocana Buddha", zodiac: "Monkey 猴",
    text: "Your lifelong guardian is Vairocana, the Great Sun Buddha, the still light at the center of all movement. Monkeys are brilliant and everywhere at once; this guardian is the center that keeps brilliance from scattering. Pray to him for focus, for integrity under temptation, and whenever cleverness needs to ripen into wisdom." },
  { cn: "不动尊菩萨", en: "Acala, the Immovable One", zodiac: "Rooster 鸡",
    text: "Your lifelong guardian is Acala, the Immovable Wisdom King, wreathed in flame, unshakeable in the face of every obstacle. Roosters hold high standards in a world that keeps missing them; Acala's gift is resolve that does not crack and anger that converts to resolve instead of corrosion. Pray to him when opposition mounts, when discipline falters, and when you must hold a line others keep testing." },
  { cn: "阿弥陀佛", en: "Amitabha Buddha", zodiac: "Dog 狗",
    text: "Your lifelong guardian is Amitabha, Buddha of Infinite Light and Infinite Life, lord of the Pure Land. Dogs give loyalty in a world that does not always return it; Amitabha's vow is the ultimate returned loyalty: no sincere call to him goes unanswered. Pray to him for peace of heart, for the wellbeing of those you love and have lost, and in any season of grief or worry." },
  { cn: "阿弥陀佛", en: "Amitabha Buddha", zodiac: "Pig 猪",
    text: "Your lifelong guardian is Amitabha, Buddha of Infinite Light and Infinite Life. Pigs are openhearted and sometimes wounded by their own generosity; Amitabha receives every sincere heart exactly as it is. Pray to him for serenity, for protection of your good nature in rough company, and for the long peace of your household." }
];

// Matter deities, selected per chart rather than listed wholesale
const MATTER_DEITIES = {
  wealth: { deity: "财神 (God of Wealth)", how: "Offer on 初一 and 十五, and especially on the fifth day of the first lunar month, his festival. State the venture plainly; he is traditionally said to favor requests tied to honest, named endeavors over vague wishes for riches." },
  career: { deity: "文昌帝君 (Wenchang, patron of careers and study)", how: "Offer fresh water and greens, and place a written, dated statement of the goal under the incense holder. Best on mornings before decisive workdays, applications or examinations." },
  love: { deity: "月老 (the Matchmaker under the Moon)", how: "Visit with a red string and speak the sincere wish; tradition holds that describing the kind of bond works better than naming a person. Tie the string where the temple provides." },
  health: { deity: "药师佛 (Medicine Buddha)", how: "Offer clean water and light, and speak the health matter plainly, whether yours or a family member's. His practice pairs prayer with actually following the treatment; the tradition is unsentimental about that." },
  travel: { deity: "妈祖 (Mazu, protector of travelers)", how: "The patroness of those whose fortune lies away from home. Pray before departures, relocations and ventures abroad; keep a small token of her from a temple visit with your travel documents." },
  karma: { deity: "地藏王菩萨 (Kṣitigarbha)", how: "Lord of the underworld's mercy, the fastest route for merit dedicated to past-life debts and ancestors. Offer on 初一/十五, dedicate one concrete good deed to the debt each month, and pair with the 受生债 repayment above." },
  peace: { deity: "观音菩萨 (Guanyin)", how: "The all-purpose compassionate ear. Offer on her festival days, the nineteenth of the second, sixth and ninth lunar months, and whenever the household needs settling. Plain words, spoken quietly, are her preferred offering." }
};

// Which matter each 三世书 category most needs prayed over
const SANSHI_CONCERN = {
  "天": ["peace", "karma"], "向": ["wealth", "career"], "煞": ["career", "peace"],
  "才": ["career", "health"], "旺": ["wealth", "peace"], "暗": ["peace", "love"],
  "病": ["health", "career"], "正": ["wealth", "love"], "逐": ["peace", "karma"],
  "背": ["travel", "wealth"], "耗": ["wealth", "karma"], "困": ["peace", "health"]
};
