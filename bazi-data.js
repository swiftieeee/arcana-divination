// ============================================================
// ARCANA BaZi + 三世书 knowledge base.
// Stems, branches, hidden stems, day master profiles, elements,
// ten gods, nayin, zodiac, and the Book of Three Lives tables.
// No em dashes anywhere. English primary, hanzi included.
// ============================================================

const STEMS = [
  { cn: "甲", pinyin: "Jia", element: "wood", yinyang: "yang" },
  { cn: "乙", pinyin: "Yi", element: "wood", yinyang: "yin" },
  { cn: "丙", pinyin: "Bing", element: "fire", yinyang: "yang" },
  { cn: "丁", pinyin: "Ding", element: "fire", yinyang: "yin" },
  { cn: "戊", pinyin: "Wu", element: "earth", yinyang: "yang" },
  { cn: "己", pinyin: "Ji", element: "earth", yinyang: "yin" },
  { cn: "庚", pinyin: "Geng", element: "metal", yinyang: "yang" },
  { cn: "辛", pinyin: "Xin", element: "metal", yinyang: "yin" },
  { cn: "壬", pinyin: "Ren", element: "water", yinyang: "yang" },
  { cn: "癸", pinyin: "Gui", element: "water", yinyang: "yin" }
];

const BRANCHES = [
  { cn: "子", pinyin: "Zi", zodiacEn: "Rat", zodiacCn: "鼠", element: "water", hidden: [9] },
  { cn: "丑", pinyin: "Chou", zodiacEn: "Ox", zodiacCn: "牛", element: "earth", hidden: [5, 9, 7] },
  { cn: "寅", pinyin: "Yin", zodiacEn: "Tiger", zodiacCn: "虎", element: "wood", hidden: [0, 2, 4] },
  { cn: "卯", pinyin: "Mao", zodiacEn: "Rabbit", zodiacCn: "兔", element: "wood", hidden: [1] },
  { cn: "辰", pinyin: "Chen", zodiacEn: "Dragon", zodiacCn: "龙", element: "earth", hidden: [4, 1, 9] },
  { cn: "巳", pinyin: "Si", zodiacEn: "Snake", zodiacCn: "蛇", element: "fire", hidden: [2, 6, 4] },
  { cn: "午", pinyin: "Wu", zodiacEn: "Horse", zodiacCn: "马", element: "fire", hidden: [3, 5] },
  { cn: "未", pinyin: "Wei", zodiacEn: "Goat", zodiacCn: "羊", element: "earth", hidden: [5, 3, 1] },
  { cn: "申", pinyin: "Shen", zodiacEn: "Monkey", zodiacCn: "猴", element: "metal", hidden: [6, 8, 4] },
  { cn: "酉", pinyin: "You", zodiacEn: "Rooster", zodiacCn: "鸡", element: "metal", hidden: [7] },
  { cn: "戌", pinyin: "Xu", zodiacEn: "Dog", zodiacCn: "狗", element: "earth", hidden: [4, 7, 3] },
  { cn: "亥", pinyin: "Hai", zodiacEn: "Pig", zodiacCn: "猪", element: "water", hidden: [8, 0] }
];

const ELEMENTS = {
  wood:  { cn: "木", en: "Wood",  color: "#6faa5e", season: "Spring",
    nature: "Wood is the energy of growth, expansion and vision: the tree that pushes upward and outward, bends without breaking, and always reaches for light.",
    strengths: "planning, vision, kindness, growth, creativity, flexibility",
    industries: "education, publishing, design, forestry, fashion, culture, healthcare, botany, startups in growth phase",
    directions: "East", colors: "green, teal",
    deficient: "With Wood low in your chart, the qualities of growth, long term vision and flexible planning do not come automatically; you may notice a tendency to live short term, to abandon plans early, or to feel directionless when routines break. The classical remedy is to deliberately borrow Wood: surround yourself with living plants and greenery, spend time in forests and parks, favor the color green, work near the East side of a space, and consciously practice starting small things and letting them grow. People with strong Wood, often planners and mentors, are good allies for you.",
    excess: "With Wood dominant in your chart, growth energy runs hot: many plans, many beginnings, restlessness when life feels static, and sometimes stubborn over-extension, taking on more branches than the trunk can feed. Your work is pruning: fewer projects tended more deeply, and a willingness to let some ambitions go so the strongest can actually bear fruit. Metal energy, structure, editing and decisiveness, is your natural pruning shear." },
  fire:  { cn: "火", en: "Fire",  color: "#d0654e", season: "Summer",
    nature: "Fire is the energy of radiance, passion and connection: the flame that lights, warms, transforms and draws every eye in the room.",
    strengths: "charisma, warmth, expressiveness, courage, inspiration, joy",
    industries: "entertainment, media, marketing, hospitality, energy, restaurants, public speaking, performance, beauty",
    directions: "South", colors: "red, orange, purple",
    deficient: "With Fire low in your chart, warmth, visibility and self-expression take deliberate effort; you may undersell yourself, avoid the spotlight, or feel your enthusiasm bank runs low in dark months. Borrow Fire consciously: seek sunlight daily, favor warm colors in your clothing and space, gather regularly with lively people, and practice being seen, speaking up once in every meeting, sharing work before it feels ready. South facing rooms and bright environments genuinely lift this chart.",
    excess: "With Fire dominant, you burn bright and risk burning out or scorching: enthusiasm that overwhelms, moods that flare, energy spent in bursts followed by ash. The discipline is banking the flame: regular rest before exhaustion, pauses before reacting, and Water energy, reflection, quiet and depth, as your counterweight. Managed well, dominant Fire is magnetic leadership; unmanaged, it is a series of brilliant flare-ups." },
  earth: { cn: "土", en: "Earth", color: "#c2a25b", season: "Late Summer",
    nature: "Earth is the energy of stability, nourishment and trust: the ground that holds, the harvest that feeds, the center that everything else turns around.",
    strengths: "reliability, patience, honesty, care, endurance, practicality",
    industries: "real estate, construction, agriculture, insurance, human resources, logistics, food, ceramics, land and property",
    directions: "Center, Southwest, Northeast", colors: "yellow, brown, beige",
    deficient: "With Earth low in your chart, groundedness and steadiness are not your defaults; commitments, routines and staying put can feel confining, and others may find you hard to pin down. Borrow Earth deliberately: keep a stable home base, eat regular meals, build small unbreakable routines, spend time on real ground, gardening, hiking, pottery, and honor your promises even in small things, because each kept promise literally builds your Earth.",
    excess: "With Earth dominant, stability can thicken into inertia: slow to move, hard to change, loyal past the point of usefulness, and prone to carrying everyone's weight. Your work is circulation: Wood energy, fresh plans and deliberate change, keeps your ground fertile instead of packed hard. Schedule change on purpose, one new thing each season, so that life does not have to break something to move you." },
  metal: { cn: "金", en: "Metal", color: "#b8b6c9", season: "Autumn",
    nature: "Metal is the energy of structure, precision and righteousness: the blade that cuts away the inessential, the bell that rings clear, the standard that does not bend.",
    strengths: "discipline, clarity, justice, organization, courage of conviction, refinement",
    industries: "finance, law, engineering, technology, medicine, military and police, jewelry, machinery, quality control",
    directions: "West", colors: "white, gold, silver, metallic tones",
    deficient: "With Metal low in your chart, structure, boundaries and follow-through require conscious effort; you may start strong and finish soft, avoid confrontation, or let standards slide to keep the peace. Borrow Metal deliberately: keep your word precisely, tidy and declutter your spaces often, practice saying no cleanly, favor white and metallic tones, and put important agreements in writing. Routines with hard edges, fixed times, checklists, deadlines, are not a cage for you; they are a skeleton.",
    excess: "With Metal dominant, precision can sharpen into rigidity: high standards that cut people, rules kept past their reason, and a tendency to prefer being right over being close. Your work is warmth and water: Fire energy softens the blade and Water carries it, meaning deliberately practiced warmth, flexibility about the unimportant, and letting some flaws pass unremarked. A blade is most valuable in a hand that knows when not to use it." },
  water: { cn: "水", en: "Water", color: "#5e88b8", season: "Winter",
    nature: "Water is the energy of wisdom, flow and depth: the river that finds a way around every rock, the well that holds what the surface never shows.",
    strengths: "intelligence, intuition, adaptability, communication, strategy, depth",
    industries: "trade, transport, tourism, communication, philosophy, research, fishing and marine work, beverages, cleaning, media flow",
    directions: "North", colors: "black, blue, deep tones",
    deficient: "With Water low in your chart, flow, reflection and ease do not come automatically; you may push where you could flow, decide before you have felt, and run dry socially and creatively without noticing. Borrow Water deliberately: keep real rest and real silence in the schedule, live or holiday near water when you can, favor blues and blacks, journal or talk things through before big decisions, and drink more water than you think you need. Depth is built in your chart, not given; guard the time that builds it.",
    excess: "With Water dominant, depth can become drift: many currents of thought, feeling and possibility, and difficulty choosing a single channel and holding it. Fear and overthinking are the flood forms of this element. Your work is containment: Earth energy, concrete commitments, deadlines, physical routine, gives your river banks. Choose fewer directions and let the current build force; a river with banks turns mills, a flood just spreads." }
};

// Element cycles
const GENERATES = { wood: "fire", fire: "earth", earth: "metal", metal: "water", water: "wood" };  // 生
const CONTROLS  = { wood: "earth", earth: "water", water: "fire", fire: "metal", metal: "wood" };  // 克

// ------------------------------------------------------------
// Day Master profiles (日主): the core personality reading
// ------------------------------------------------------------
const DAY_MASTERS = [
  { // 甲 yang wood
    title: "The Tall Tree (阳木)",
    text: "A Jia Wood (甲木) Day Master is the great tree: upright, principled, visibly growing, and quietly proud of it. You are built to be a pillar, the person others lean on, plant things near, and measure the weather by. You grow steadily rather than suddenly, prefer the long game, and once rooted in a place, a person or a cause you do not transplant easily. Your strengths are integrity, endurance and genuine leadership without theatrics: people trust you because you are the same tree in every season. Your challenges are flexibility and pride: tall trees resist bending, so criticism, sudden change and being managed by lesser planners can grate on you, and you may stay too long in soil that no longer feeds you. In work you thrive where growth is structural: building organizations, mentoring, long projects with visible progress. In love you are loyal and protective, though you must remember that a partner wants your attention, not just your shade. Your life lesson is learning when to bend, because the tree that never bends is the one the storm takes." },
  { // 乙 yin wood
    title: "The Climbing Vine (阴木)",
    text: "A Yi Wood (乙木) Day Master is the vine, the orchid, the flowering grass: alive, graceful, and far more resilient than anyone expects. Where the great tree resists the storm, you bend, wrap, redirect and survive, and this is your genius: adaptability that looks like softness and works like strategy. You read people and rooms quickly, grow best in networks and partnerships, and can flourish in conditions that would break sturdier types, provided you have something or someone solid to climb with. Your strengths are diplomacy, charm, flexibility and quiet persistence: you rarely win the argument in the room, and often win the outcome a month later. Your challenges are dependence and indirection: a vine needs a trellis, and you can over-attach to strong personalities, or bend so gracefully that no one, sometimes including you, knows where you actually stand. In work you thrive in collaboration, negotiation, aesthetics and any field where influence beats force. In love you are attentive and adaptive, though you must guard against losing your own shape in the winding. Your life lesson is to grow your own woody stem: flexibility in the branches, firmness at the root." },
  { // 丙 yang fire
    title: "The Sun (阳火)",
    text: "A Bing Fire (丙火) Day Master is the sun itself: radiant, generous, impossible to ignore and genuinely life-giving to the people in your orbit. You warm rooms by entering them. Optimism, openness and big-heartedness are your natural weather, and like the sun you shine on everyone without keeping accounts, which is both your nobility and, occasionally, your blind spot. Your strengths are charisma, honesty in broad daylight, the gift of making others feel seen, and an enthusiasm that gets stalled things moving. Your challenges are constancy and subtlety: the sun does not do small, so details, discretion and slow-burn patience can bore you, and when clouded, by disrespect, confinement or invisibility, your mood can darken a whole household. You may also burn out from shining for too many people at once. In work you thrive front of house: leadership, teaching, performing, anything where presence is the product. In love you are warm, demonstrative and loyal in your fashion, though your partner must be secure enough not to compete with the sky for your attention. Your life lesson is that even the sun sets daily: rest, privacy and letting others shine are not eclipses of you, they are how you rise again." },
  { // 丁 yin fire
    title: "The Lantern Flame (阴火)",
    text: "A Ding Fire (丁火) Day Master is the candle, the lantern, the hearth: focused warmth rather than blazing sky. Where the sun lights the world indiscriminately, you illuminate what you choose, and your fire does its finest work close up: one conversation, one student, one craft, one beloved. You are perceptive in the dark, seeing what others miss, sensing moods before they are spoken, and you carry an inner life far larger than what you display. Your strengths are insight, devotion, refinement and a quiet magnetism that people discover rather than notice. Your challenges are flicker and fuel: your flame responds to its environment, so draining people and chaotic settings genuinely cost you, moods can gutter with the wind, and you need regular replenishment, solitude, meaning, appreciation, or you dim. Doubt is your particular shadow: a lantern rarely knows how far its light reaches. In work you thrive in depth roles: research, medicine, counseling, artistry, spiritual and cultural work, anywhere focused illumination beats floodlights. In love you are tender, attentive and surprisingly passionate once safety is established. Your life lesson is to protect the flame without hiding it: choose your winds, keep your oil, and let more people see the light you are certain, in your best moments, that you carry." },
  { // 戊 yang earth
    title: "The Mountain (阳土)",
    text: "A Wu Earth (戊土) Day Master is the mountain: massive, steady, weather-tested and quietly protective of everything that lives on its slopes. You are the person people build on. Reliability is not a virtue you practice; it is what you are made of, and in crisis, when others scatter, you become the fixed point the group reorganizes around. Your strengths are stability, honesty, endurance, and a broad practical wisdom that comes from watching many storms pass. You keep confidences like the mountain keeps ore. Your challenges are motion and expression: mountains move slowly if at all, so change, spontaneity and other people's urgency can feel like erosion, and your feelings, deep as mineral veins, rarely surface in words, which partners and colleagues can misread as indifference. Stubbornness is your shadow: sometimes the immovable object is simply wrong. In work you thrive as the foundation: operations, property, management, finance, any long-horizon field where trust is the currency. In love you are constant and protective, expressing devotion through provision and presence rather than poetry; learn to say some of it aloud. Your life lesson is that even mountains are moved, by water, by seasons, by time: choosing your own changes, occasionally and deliberately, keeps life from having to quarry you." },
  { // 己 yin earth
    title: "The Garden Soil (阴土)",
    text: "A Ji Earth (己土) Day Master is the field, the garden, the fertile soil: modest to look at and quietly responsible for everything that grows. Yours is the most nurturing of the ten stems. People, projects and communities planted in your care flourish, often without recognizing how much of the flourishing is you, because good soil is invisible in the photograph of the harvest. Your strengths are tolerance, patience, practical care, and an absorbent understanding of people: like soil, you take in whatever is poured and turn a surprising amount of it into nourishment. Your challenges are boundaries and self-assertion: absorbing everything includes toxins, and you can quietly accumulate others' burdens, run yourself barren from over-cultivation, and be overlooked in the crediting because you never push forward. Resentment in a Ji Earth is slow and deep. In work you thrive where cultivation is the craft: teaching, healthcare, HR, agriculture, community building, service done excellently. In love you are giving, steady and deeply loyal, though you must let yourself be tended too, or the garden feeds everyone but the gardener. Your life lesson is crop rotation: rest your fields, choose what you will and will not grow, and remember that lying fallow for a season is how soil stays alive." },
  { // 庚 yang metal
    title: "The Sword (阳金)",
    text: "A Geng Metal (庚金) Day Master is raw ore and forged blade: strong, decisive, unsentimental about what must be done, and at your best genuinely heroic. You are built for the hard calls, the clean cuts, the standards no one else will enforce, and you would rather be respected than liked, though you secretly hope for both. Your strengths are courage, willpower, loyalty of the deed rather than the word, and a justice instinct that makes you the natural defender of the wronged. Life's hammering does not weaken you; you are one of the few stems that is actually improved by hardship, tempered rather than cracked. Your challenges are edge management: bluntness that wounds allies, black-and-white judgments in a grey world, and a competitive streak that can turn collaborators into opponents. Unforged, this energy is heaviness and harshness; forged, it is precision. In work you thrive where decisiveness is the job: engineering, law enforcement, surgery, finance, sport, the military, turnarounds and hard negotiations. In love you are protective and steadfast, though tenderness must be practiced like a skill, because your care naturally speaks in actions and armor. Your life lesson is the difference between a weapon and a tool: the same steel, distinguished only by what it serves." },
  { // 辛 yin metal
    title: "The Jewel (阴金)",
    text: "A Xin Metal (辛金) Day Master is refined metal: the jewel, the needle, the fine blade, the polished mirror. You are precision embodied, with an instinct for quality that touches everything, your work, your words, your appearance, your standards for people, and a sensitivity beneath the polish that most only discover when they scratch it. Your strengths are discernment, elegance, articulate intelligence and a diamond-grade resilience: you appear delicate and endure extraordinary pressure, which is exactly how gems are made. Your challenges are pride and the wound-memory of a fine surface: criticism cuts you deeper than you show, slights are catalogued with jeweler's accuracy, and perfectionism can freeze you before unfinished, imperfect, necessary work. You can also mistake presentation for substance in others, and be mistaken the same way. In work you thrive where refinement is the value: design, luxury, medicine's fine specialties, writing, analysis, curation, quality anything. In love you are subtle, devoted and more romantic than your composure admits; you need a partner who handles precious things attentively without treating you as fragile. Your life lesson is that a jewel's worth is intrinsic: it does not depend on the setting, the admirer, or the light of any particular room." },
  { // 壬 yang water
    title: "The River (阳水)",
    text: "A Ren Water (壬水) Day Master is the great river, the tide, the open sea: powerful, intelligent, always moving, and larger than any container offered. You think in currents that others experience as leaps, learn omnivorously, adapt to any terrain, and carry an ambition that, like water, is patient and absolutely persistent: given time, you go around, over, under or through. Your strengths are strategic intelligence, resourcefulness, breadth of vision, and a sociable fluidity that lets you move between worlds and classes of people that never otherwise meet. Your challenges are containment and constancy: rivers flood, and your energy can overrun commitments, relationships and your own plans when momentum takes over; you may also resist every bank, reading structure as confinement when some of it is actually direction. Depth unexpressed becomes turbulence in you. In work you thrive in motion: trade, strategy, media, travel, logistics, entrepreneurship, any field rewarding fast intelligence over fixed position. In love you are engaging and generous but need a partner who accepts current and flow, and you must learn that choosing one channel is not the death of the sea, it is how the sea reaches inland. Your life lesson is banks: the river with direction powers cities; the same water without them is weather." },
  { // 癸 yin water
    title: "The Spring Rain (阴水)",
    text: "A Gui Water (癸水) Day Master is the morning dew, the spring rain, the underground stream: the gentlest stem in the calendar and quietly one of the most penetrating. You reach places force never touches. Your intelligence is intuitive and absorbent, your empathy nearly osmotic, and your influence works like water works on stone: soft, patient, and ultimately shaping everything around it. Your strengths are imagination, sensitivity, healing presence and a private depth that makes you the keeper of other people's truths; you often know things you were never told. Your challenges are visibility and volatility of mood: subtle energy is easily overlooked and easily saturated, so you can be underestimated professionally while inwardly flooded, by feelings, atmospheres, and other people's unprocessed weather. Escapism, into fantasy, avoidance or moodiness, is your shadow when the world stays too loud too long. In work you thrive in the depth trades: psychology, research, art, spiritual work, writing, medicine, anywhere quiet perception outperforms loud certainty. In love you are tender, romantic and idealistic, needing gentleness returned and privacy respected. Your life lesson is emergence: the underground stream must surface somewhere to be drunk from, and the world genuinely needs what you keep hidden." }
];

// ------------------------------------------------------------
// Ten Gods (十神)
// ------------------------------------------------------------
const TEN_GODS = {
  "比肩": { en: "Friend", text: "Peer energy: siblings, colleagues, equals shoulder to shoulder. Strong Friend presence marks a life rich in peers and alliances, self-reliance, and strength through solidarity; in excess it brings rivalry over shared resources and difficulty accepting help that comes with strings." },
  "劫财": { en: "Rob Wealth", text: "Competitive peer energy: charisma, boldness, the drive to win what others also want. It gives social daring and crisis courage; in excess it warns of money leaking through friends, partnerships and impulsive generosity, so guard the wallet where the heart is warmest." },
  "食神": { en: "Eating God", text: "The gourmet star: creativity, enjoyment, expression that flows without strain. It blesses cooking, art, performance and easy charm, and traditionally protects health and longevity; in excess it drifts into indulgence and comfortable underachievement." },
  "伤官": { en: "Hurting Officer", text: "The brilliant rebel: talent that must express itself and cannot abide dull authority. It gives wit, artistry, innovation and star quality; unmanaged it becomes the sharp tongue that offends superiors and the restlessness that quits too soon. Best aimed at craft, not combat." },
  "偏财": { en: "Indirect Wealth", text: "Windfall wealth: opportunities, side income, generosity and money that moves. Strong Indirect Wealth marks the natural dealmaker and the popular spender; its lesson is retention, because money that comes on the wind can leave on it." },
  "正财": { en: "Direct Wealth", text: "Earned wealth: salary, savings, prudence, the fruit of steady labor. It marks diligence, reliability and a stable material life, and in traditional reading also signifies the wife or committed partner in a man's chart; in excess it becomes overwork and counting coins while life passes." },
  "七杀": { en: "Seven Killings", text: "Raw power and pressure: the general's star. It brings drive, authority, decisiveness under threat and careers in command, competition or crisis; unmanaged it is harshness, danger-seeking and living permanently at war. Discipline converts this from threat to throne." },
  "正官": { en: "Direct Officer", text: "Order and honor: rank, reputation, law, the respect of the community. Strong Direct Officer marks natural correctness, career advancement in structures, and in a woman's traditional chart the husband star; in excess it becomes rule-bound caution and living for the approval of institutions." },
  "偏印": { en: "Indirect Resource", text: "The unusual mind: intuition, alternative knowledge, solitary study, spiritual and technical gifts. It marks original thinkers, healers and specialists; its shadow is isolation, suspicion and appetite loss for ordinary life. Feed it depth on purpose or it feeds on you." },
  "正印": { en: "Direct Resource", text: "The mother star: learning, protection, kindness, reputation for virtue. It blesses education, credentials, supportive elders and a cushioned life; in excess it becomes dependence, procrastination under protection, and thinking about living instead of living." }
};

// ------------------------------------------------------------
// NaYin (纳音) 60 cycle names, indexed by Math.floor(cycleIndex/2)
// ------------------------------------------------------------
const NAYIN = [
  ["海中金", "Gold in the Sea"], ["炉中火", "Fire in the Furnace"], ["大林木", "Wood of the Great Forest"],
  ["路旁土", "Earth by the Roadside"], ["剑锋金", "Sword-Edge Metal"], ["山头火", "Fire on the Mountain Top"],
  ["涧下水", "Water of the Ravine"], ["城头土", "Earth on the City Wall"], ["白蜡金", "White Wax Metal"],
  ["杨柳木", "Willow Wood"], ["泉中水", "Spring Water"], ["屋上土", "Earth on the Roof"],
  ["霹雳火", "Thunderbolt Fire"], ["松柏木", "Pine and Cypress Wood"], ["长流水", "Long Flowing Water"],
  ["砂石金", "Gold in the Sand"], ["山下火", "Fire below the Mountain"], ["平地木", "Wood of the Plain"],
  ["壁上土", "Earth on the Wall"], ["金箔金", "Gold Leaf Metal"], ["覆灯火", "Lamp Flame Fire"],
  ["天河水", "Water of the Milky Way"], ["大驿土", "Earth of the Great Post Road"], ["钗钏金", "Hairpin Metal"],
  ["桑柘木", "Mulberry Wood"], ["大溪水", "Water of the Great Stream"], ["沙中土", "Earth in the Sand"],
  ["天上火", "Fire of the Heavens"], ["石榴木", "Pomegranate Wood"], ["大海水", "Water of the Great Sea"]
];

// ------------------------------------------------------------
// Zodiac year-animal notes (生肖)
// ------------------------------------------------------------
const ZODIAC_NOTES = {
  Rat: "Quick, resourceful and socially intelligent, the Rat survives every winter and usually arrives at spring with savings.",
  Ox: "Patient, dependable and immensely strong-willed, the Ox builds slowly and keeps what it builds.",
  Tiger: "Bold, magnetic and born for the decisive moment, the Tiger would rather risk greatly than wait politely.",
  Rabbit: "Gentle, diplomatic and quietly shrewd, the Rabbit wins by grace, timing and knowing every exit.",
  Dragon: "Charismatic, ambitious and a little mythical to others, the Dragon is happiest with a great cause to carry.",
  Snake: "Wise, private and elegantly strategic, the Snake senses what is hidden and strikes only when certain.",
  Horse: "Free-spirited, energetic and openhearted, the Horse needs open road and withers when corralled.",
  Goat: "Kind, artistic and communal, the Goat flourishes in gentle company and makes beauty wherever it grazes.",
  Monkey: "Brilliant, playful and endlessly inventive, the Monkey solves the puzzle and then improves the puzzle.",
  Rooster: "Precise, proud and hardworking, the Rooster announces the dawn it also worked all night to prepare.",
  Dog: "Loyal, honest and instinctively just, the Dog guards what it loves and is loved for its guarding.",
  Pig: "Sincere, generous and pleasure-wise, the Pig enjoys life's harvest and shares the table freely."
};

// ------------------------------------------------------------
// 三世书 Book of Three Lives
// Wealth table: rows keyed by year last digit, columns lunar months 1-12.
// Categories cycle per the classical table (verified against published sources).
// ------------------------------------------------------------
const SANSHI_TABLE = {
  1: ["病","正","逐","背","耗","困","天","向","煞","才","旺","暗"],
  2: ["暗","病","正","逐","背","耗","困","天","向","煞","才","旺"],
  3: ["旺","暗","病","正","逐","背","耗","困","天","向","煞","才"],
  4: ["向","煞","才","旺","暗","病","正","逐","背","耗","困","天"],
  5: ["天","向","煞","才","旺","暗","病","正","逐","背","耗","困"],
  6: ["困","天","向","煞","才","旺","暗","病","正","逐","背","耗"],
  7: ["耗","困","天","向","煞","才","旺","暗","病","正","逐","背"],
  8: ["背","耗","困","天","向","煞","才","旺","暗","病","正","逐"],
  9: ["逐","背","耗","困","天","向","煞","才","旺","暗","病","正"],
  0: ["正","逐","背","耗","困","天","向","煞","才","旺","暗","病"]
};

const SANSHI_CATEGORIES = {
  "天": { cn: "天禄", en: "Heavenly Fortune", theme: "祖荫丰厚 · Born under a full granary",
    past: "The Book reads this fortune as the harvest of an unusually generous former life: kindness done quietly, wealth shared without being asked, debts of gratitude left uncollected. What was given then returns now as the smoothest of the twelve paths.",
    present: "In this life you are held by inheritance in its widest sense: family resources, family standing, doors opened by name and upbringing, the golden key at birth. Money tends to find you through what already exists rather than what you must build from nothing. The Book's warning is specific: this fortune rewards the keeper, not the gambler. Preserve and steward what came down to you and comfort follows you to old age; chase aggressive multiplication of it and the granary can empty in one generation. Your prosperity work is gratitude, maintenance and wise succession, not conquest.",
    next: "The account that funds this life was opened by generosity. The Book's counsel for the life to come is to keep depositing: share opportunity as freely as you inherited it, fund beginnings for those with no granary, and leave every trust you manage fuller than you found it." },
  "向": { cn: "向禄", en: "Facing Fortune", theme: "超级巨富 · The grand wealth path",
    past: "Tradition ranks this as the strongest of the twelve, earned across former lives of both effort and merit: the Book pictures a soul that labored, prospered and still kept its hands open, returning now with wealth affinity woven into the destiny itself.",
    present: "In this life both kinds of money incline toward you: the earned and the unexpected, salary and windfall, 正财 and 横财 together. You have a lifelong affinity with money itself; ventures suit you, and even in employment you tend toward the envied positions. The realistic shape of this fortune: opportunities recur throughout life, so a failure is never final for you, and the ceiling is genuinely high, business ownership, serious wealth, the 'super rich' grade in the old texts. The warning is proportion: with money this responsive, greed and overreach are your only real enemies. Structure, ethics and patient compounding turn high fortune into lasting fortune.",
    next: "Great capacity carries great account-keeping. The Book counsels that wealth handled justly in this life opens an even wider road in the next; wealth handled ruthlessly closes it. Build things that outlive you, pay everyone fairly, and let some of the fortune become other people's foundations." },
  "煞": { cn: "煞禄", en: "Obstructed Fortune", theme: "奔波劳碌 · The hesitation tax",
    past: "The Book reads here a former life of chances declined: gifts half-used, decisions deferred until the season passed. Nothing wicked, simply timid, and the pattern returned as this life's particular lesson.",
    present: "In this life the obstacle is not luck but hesitation: half a lifetime can go to running about, wanting to act without quite daring, then deciding exactly when the window shuts. Young opportunities are missed this way, and money in youth tends to scatter. The Book's remedy is concrete: master one skill until it cannot be taken from you, 一技傍身, because craft converts your caution into precision instead of paralysis. Middle age onward, this fortune stabilizes markedly, and the late years of a 煞禄 life are commonly secure and respected. Decide faster on small things to train the muscle for large ones.",
    next: "The lesson being drilled in this life is decisiveness, and the Book counsels carrying it forward: a soul that learns to say yes in season is promised smoother roads. Practice courage now; it is the tuition for the next enrollment." },
  "才": { cn: "才禄", en: "Talent Fortune", theme: "亲力亲为 · Paid in proportion to craft",
    past: "The Book pictures a former life of skill honored and honestly traded: the craftsman, the healer, the scholar who charged fairly and delivered fully. The talent returned with you; the requirement of personal effort returned too.",
    present: "In this life money answers effort with unusual fidelity: what you put in is what you draw out, no more, but reliably no less. This is the professional's fortune, thriving in fields where the person is the product: medicine, law, teaching, arts, consulting, skilled trades. Delegation and passive schemes pay you poorly; presence and craft pay you well. Fortune strengthens with reputation, so the second half of life outearns the first, and old age under this star is comfortable and self-made. The Book's warning is body-budgeting: a fortune drawn through personal effort must maintain the person. Guard health like capital, because here it literally is.",
    next: "Skill is the one asset the Book says crosses lives. Deepen the craft, teach it generously, and the next life opens with the hands already knowing. Meanness with knowledge, hoarding what you mastered, is the one debt this path warns against." },
  "旺": { cn: "旺禄", en: "Flourishing Fortune", theme: "大富大贵 · Wealth through people",
    past: "The Book reads a former life rich in kept promises: alliances honored, credit shared, help given at cost to oneself. Those bonds return in this life as your defining asset, the benefactor network.",
    present: "In this life your wealth arrives through people: mentors who open doors, partners who bring deals, friends of friends who become fortunes. 贵人 (benefactors) recur at every major turn, and expansion of your circle is literally expansion of your net worth. Steady accumulation suits you; risky solo ventures do not, because your luck is relational, not speculative. Ranked beside 向禄 in richness, this fortune's texture is different: theirs is affinity with money, yours is affinity with the people money follows. The warning: networks are gardens, neglect them and this fortune quietly wilts. Invest in relationships with the seriousness others reserve for portfolios.",
    next: "What you owe forward is what funded you: be someone's 贵人 deliberately and often. The Book counsels that doors opened for others in this life become your own doors in the next." },
  "暗": { cn: "暗禄", en: "Hidden Fortune", theme: "先苦后甜 · Bitter first, sweet after",
    past: "The Book reads an unsettled former account, often around family and obligation: care owed and not fully given, or given and not received. It returns as this life's early difficulty and late redemption.",
    present: "In this life the shape is unmistakable: the first act is harder than most, family harmony does not come free, early money is effortful, and support seems to arrive from friends more readily than from kin. But this fortune's name is Hidden for a reason: your resources accumulate out of sight, through trustworthy partners, through skills quietly compounding, through friends who become the family that circumstance edited. Choose collaborators by character above all, because partnership is your wealth channel. The later chapters reverse the early ones: 晚境安稳, the late years are settled, warm and financially secure. Endure the front half with strategy rather than bitterness; the back half is the payout.",
    next: "The mending done in this life, of family bonds, of trust, of your own resentments, is the Book's assignment. Complete it and the next account opens clean; carry the bitterness forward and it compounds instead." },
  "病": { cn: "病禄", en: "Ailing Fortune", theme: "好食懒做 · Ability taxed by ease",
    past: "The Book pictures a comfortable former life that grew too comfortable: gifts left half-used, days pleasant and unproductive. The ability returned intact; the appetite for ease returned with it.",
    present: "The Book is blunt about this one, and its bluntness is a gift: you do not lack ability, you lack urgency, and opportunities slip past while comfort holds the chair. Named 'ailing', this fortune also counsels genuine attention to health and vitality, because a strong body is your competitive edge and a neglected one your handicap. The redemption is entirely real and entirely conditional: 病禄 charts that adopt discipline, exercise, schedules, deadlines, accountable commitments, convert into solid prosperity, because the underlying talent was never the problem. Treat energy as your primary asset: build it, budget it, and spend it on effort before entertainment, and this fortune's curse clause simply never triggers.",
    next: "The assignment is vigor: a soul that reclaims its diligence, the Book says, is reborn without this tax. Every disciplined season in this life is advance payment on an easier next one." },
  "正": { cn: "正禄", en: "Upright Fortune", theme: "勤俭成富 · Wealth built by hand",
    past: "The Book reads a former life of little inheritance and honest labor, a soul that took nothing it did not earn. It returns with empty starting capital and an exceptional earner's instinct.",
    present: "In this life the ancestral cushion is thin: every coin is personally earned, and no one is coming with a granary. But this fortune's secret is that your financial instinct is excellent: diligence and thrift genuinely become wealth in your hands, opportunities are seldom missed, and savings compound because you respect them. Self-made is not your consolation prize; it is your title. The traditional note of caution touches romance rather than money: relationships ask extra patience under this star, and choosing a partner who honors your carefulness rather than draining it matters doubly. Old age under 正禄, built brick by brick, is commonly more secure than the flashier fortunes manage.",
    next: "The Book honors this path: what is built by hand is credited in full. Its counsel for the road ahead is to add generosity to diligence, because thrift that learns giving graduates into the higher fortunes next time." },
  "逐": { cn: "逐禄", en: "Pursuing Fortune", theme: "孤寒敛财 · Enough, held tightly",
    past: "The Book pictures a former life acquainted with want: scarcity survived, then never forgotten. The survival skill returned as this life's tight grip.",
    present: "In this life money is sufficient: not super-rich, the Book says plainly, but never truly short, 不愁钱花. You earn steadily and keep effectively. The named flaw is the grip itself: pursuing profit relentlessly while spending nothing on life, 孤寒, the miser's chill, earning much and living little. The correction is not extravagance but circulation: money spent on experience, health, and the people who love you is not leakage, it is the interest your sufficiency was for. Loosen the grip by budgeted, deliberate degrees, a fixed percentage for living and giving, and this fortune becomes one of the calmest and most contented of the twelve.",
    next: "The assignment is trust: the scarcity that taught the grip is over, and the Book counsels proving it to yourself through open-handed practice. What is circulated returns; what is clutched merely stays the same size, in this life and by tradition into the next." },
  "背": { cn: "背禄", en: "Departing Fortune", theme: "离乡别井 · Wealth waits away from home",
    past: "The Book reads a former life rooted too firmly: horizons declined, the far road not taken. The untraveled distance returns in this life as exactly where your fortune waits.",
    present: "In this life the money is not buried under the birthplace: it waits abroad, in the next city, in the wider market, along the road. 离乡别井, leaving the home well, was once hardship; in the modern world it is simply the trader's flight path, and the old texts note that whoever earns while moving holds a noble pattern, 四方财. Expect your breakthroughs to correlate with relocations, travel, foreign connections, distant clients and cross-border ventures. Staying put is the one strategy that starves this fortune. Build a life that travels well: portable skills, light commitments where possible, and a home defined by people rather than coordinates.",
    next: "The horizon is the teacher. The Book counsels completing the lesson: go far, and bring the gains home open-handedly, because wealth carried back and shared roots the wandering soul for a settled next chapter." },
  "耗": { cn: "耗禄", en: "Draining Fortune", theme: "快来快去 · Money moves through",
    past: "The Book pictures a former life of easy come and easier go: wealth handled carelessly because it was never scarce. The carelessness returned as this life's leak.",
    present: "In this life large sums genuinely pass through your hands, several times, the Book promises, and that is the trap dressed as the gift: money arrives readily and departs faster, 快来快去. Without deliberate structure the final act is the classical warning, 千金散尽, a fortune's worth scattered and a lean old age. The correction is mechanical, not moral: automate saving before spending, lock a portion of every windfall beyond easy reach, prefer boring assets to exciting ones, and put a trusted, cooler head between you and large decisions. Do this and 耗禄 becomes one of the better fortunes, because the inflow was never the problem. You do not need more money; you need better plumbing.",
    next: "Stewardship is the syllabus. The Book counsels that a soul that learns to hold, not hoard but hold, graduates from the leak entirely. Every sum retained and directed well in this life is the practice the next one is built on." },
  "困": { cn: "困禄", en: "Contented Fortune", theme: "知足常乐 · Modest and unusually blessed",
    past: "The Book reads a former life of plain dealing and few debts in either direction: little owed, little owing. It returns as a modest but remarkably unencumbered path.",
    present: "In this life wealth is modest and pressure is light: 平平, ordinary, says the Book, and then adds the twist the name hides: those under this star suffer least, want least, and are granted the rarest privilege of the twelve, 知足常乐, contentment as a stable condition rather than a mood. Late life under 困禄 is specifically blessed: the texts say fortune increases with age, 越老越有钱, and the elder years are the richest. Your wealth strategy is patience and low overhead: avoid envy-driven purchases and comparison-driven careers, let savings grow at their unhurried pace, and invest in the health and relationships that make a long, improving old age worth arriving at.",
    next: "Contentment is mastery, not consolation. The Book ranks the soul that wants rightly above the soul that has amply, and counsels carrying the skill forward: desire calibrated in this life is the wealth you are born already holding in the next." }
};

// 三世因果经 anchor couplet, used in the reading frame
const SANSHI_COUPLET = {
  cn: "欲知前世因，今生受者是；欲知来世果，今生作者是。",
  en: "To know the causes laid in your past life, look at what this life receives. To know the fruit of your next life, look at what this life is doing."
};
