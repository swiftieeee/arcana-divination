// ============================================================
// ARCANA. Interpretation Engine
// Combines: question topic + spread position + card orientation
// + cross-card patterns (suits, majors, reversals, numbers,
// courts, polarity trajectory) into one synthesized reading.
// ============================================================

const TOPICS = {
  general:  { label: "General Guidance", noun: "your situation" },
  love:     { label: "Love & Relationships", noun: "your heart" },
  career:   { label: "Career & Work", noun: "your work life" },
  money:    { label: "Money & Finances", noun: "your finances" },
  health:   { label: "Health & Wellbeing", noun: "your wellbeing" },
  spiritual:{ label: "Spiritual Path", noun: "your inner life" }
};

const TOPIC_KEYWORDS = {
  love:     ["love","relationship","partner","boyfriend","girlfriend","husband","wife","crush","ex ","my ex","dating","date","marriage","marry","romance","romantic","breakup","break up","divorce","soulmate","feelings for","together","affair","commitment","lonely","single"],
  career:   ["job","career","work","boss","promotion","interview","business","company","colleague","coworker","project","startup","quit","resign","hired","fired","profession","studies","study","school","exam","degree","application"],
  money:    ["money","finance","financial","debt","loan","salary","raise","invest","investment","savings","save","rich","wealth","afford","buy a","purchase","rent","mortgage","bills","income","budget"],
  health:   ["health","healthy","sick","illness","body","weight","fitness","energy","tired","sleep","anxiety","anxious","stress","stressed","depression","depressed","healing","recover","recovery","pain","doctor","mental"],
  spiritual:["spiritual","spirit","soul","purpose","meaning","path","universe","god","faith","meditation","meditate","awakening","destiny","karma","energy work","intuition","calling","enlighten"]
};

function detectTopic(question) {
  const q = " " + (question || "").toLowerCase() + " ";
  let best = "general", bestScore = 0;
  for (const [topic, words] of Object.entries(TOPIC_KEYWORDS)) {
    let score = 0;
    for (const w of words) if (q.includes(w)) score++;
    if (score > bestScore) { bestScore = score; best = topic; }
  }
  return best;
}

function isYesNoQuestion(question) {
  const q = (question || "").trim().toLowerCase();
  return /^(will|should|is|are|does|do|can|could|would|am i|was|were|has|have|did)\b/.test(q) || q.includes("yes or no");
}

// ------------------------------------------------------------
// Spreads
// ------------------------------------------------------------
const SPREADS = {
  single: {
    key: "single", name: "One Card Insight", count: 1,
    tagline: "A single, focused answer. The heart of the matter.",
    best: "Quick clarity on a focused question.",
    positions: [
      { name: "The Heart of the Matter", lens: "core",
        frame: "This card goes straight to the center of what you asked." }
    ]
  },
  yesno: {
    key: "yesno", name: "Yes or No", count: 3,
    tagline: "Three cards weigh your question and lean toward an answer.",
    best: "Questions that begin with “Will…”, “Should…”, “Is…”.",
    positions: [
      { name: "The Case For", lens: "core", frame: "The first card speaks to the energies supporting a yes." },
      { name: "The Deciding Weight", lens: "core", frame: "The center card carries the most weight in the verdict." },
      { name: "The Case Against", lens: "core", frame: "The last card speaks to what resists or complicates a yes." }
    ]
  },
  ppf: {
    key: "ppf", name: "Past · Present · Future", count: 3,
    tagline: "The classic timeline, where this came from and where it's heading.",
    best: "Understanding how a situation is unfolding over time.",
    positions: [
      { name: "The Past", lens: "past", frame: "What shaped this situation. The roots beneath your question." },
      { name: "The Present", lens: "present", frame: "Where the energy stands right now." },
      { name: "The Future", lens: "future", frame: "Where this is heading if the current course holds." }
    ]
  },
  soa: {
    key: "soa", name: "Situation · Obstacle · Advice", count: 3,
    tagline: "A practical spread. What's happening, what's in the way, what to do.",
    best: "Decisions and problems that need a concrete way forward.",
    positions: [
      { name: "The Situation", lens: "present", frame: "The true nature of what you're dealing with." },
      { name: "The Obstacle", lens: "obstacle", frame: "The real barrier, which is not always the one you'd name." },
      { name: "The Advice", lens: "advice", frame: "The cards' counsel on how to move." }
    ]
  },
  crossroads: {
    key: "crossroads", name: "The Crossroads", count: 5,
    tagline: "Five cards for a decision or turning point, including what's hidden.",
    best: "Bigger questions with moving parts and unseen factors.",
    positions: [
      { name: "Where You Stand", lens: "present", frame: "Your true position at this crossroads." },
      { name: "The Challenge", lens: "obstacle", frame: "What genuinely stands in your way." },
      { name: "The Hidden Influence", lens: "hidden", frame: "What's operating beneath your awareness." },
      { name: "The Counsel", lens: "advice", frame: "The path the cards advise." },
      { name: "The Likely Outcome", lens: "future", frame: "Where this leads if you take the counsel." }
    ]
  },
  celtic: {
    key: "celtic", name: "Celtic Cross", count: 10,
    tagline: "The full classic reading. Ten cards, the complete picture.",
    best: "Deep, complex situations deserving a thorough reading.",
    positions: [
      { name: "The Heart of the Matter", lens: "present", frame: "The core of your situation." },
      { name: "What Crosses You", lens: "obstacle", frame: "The immediate force working with or against you." },
      { name: "The Foundation", lens: "past", frame: "The deep root of the matter, often further back than expected." },
      { name: "The Recent Past", lens: "past", frame: "What is just now passing out of influence." },
      { name: "The Crown: Best Outcome", lens: "future", frame: "What is possible here at its best." },
      { name: "The Near Future", lens: "future", frame: "What approaches in the coming weeks." },
      { name: "How You See Yourself", lens: "self", frame: "Your own stance and self-perception in this." },
      { name: "Your Environment", lens: "environment", frame: "How others and circumstances around you bear on this." },
      { name: "Hopes and Fears", lens: "hidden", frame: "The hope and the fear. In tarot they are often the same card." },
      { name: "The Outcome", lens: "outcome", frame: "Where all these currents are carrying you." }
    ]
  }
};

// ------------------------------------------------------------
// Card knowledge: generated "About this card" education
// ------------------------------------------------------------
const SUIT_LORE = {
  wands:     { element: "Fire", domain: "energy, passion, creativity, ambition and will" },
  cups:      { element: "Water", domain: "emotion, love, intuition and the bonds between people" },
  swords:    { element: "Air", domain: "the mind: thought, truth, conflict and communication" },
  pentacles: { element: "Earth", domain: "the material world: work, money, home and the body" }
};

const NUMBER_LORE = {
  1: "Aces are the seed of their suit, the purest and most concentrated form of its energy, offered to you as a beginning that has not yet taken shape.",
  2: "Twos speak of duality: choices, partnerships and balance points, the moment when two forces must find their arrangement with each other.",
  3: "Threes are the first fruit: early growth, collaboration, the point where a beginning proves it has life in it.",
  4: "Fours are structure and pause: stability achieved, and the deeper question of whether that stability is serving you or quietly confining you.",
  5: "Fives are the crisis point of every suit: friction, loss and challenge that test what was built and force real adaptation.",
  6: "Sixes are the recovery after the storm: harmony, generosity and forward movement regained after the suit's five shook things loose.",
  7: "Sevens are the long middle of the journey: assessment, patience and strategy, where honesty about what is working decides everything.",
  8: "Eights are power in motion: mastery, speed and concentrated effort drawing close to its goal.",
  9: "Nines are the next-to-last step: culmination, where the suit's whole journey shows its near-final result, for better or worse.",
  10: "Tens complete the suit's story: the full weight of its lesson arrives, an ending that already contains the next beginning."
};

const COURT_LORE = {
  11: "Pages are the students and messengers of the tarot court: curiosity, youthful energy and news. A Page often marks a learning phase opening in your life, or an actual person with this character standing near your situation.",
  12: "Knights are the court in motion: they chase their suit's energy with intensity and single focus. A Knight usually signals fast development in the matter, or a person who embodies this driven, forward-leaning character.",
  13: "Queens hold their suit's power inwardly: mastery expressed as presence, care and deep understanding rather than command. A Queen often points to a mature influence at work in the situation, in you or in someone close to it.",
  14: "Kings hold their suit's power outwardly: mastery expressed as leadership, decision and authority. A King often points to who is really steering events, whether that is you or someone else."
};

function cardAbout(card) {
  if (card.arcana === "major") {
    let stage;
    if (card.number <= 7) stage = "It belongs to the journey's first arc, the cards of the outer world, where we learn identity, will and power.";
    else if (card.number <= 14) stage = "It belongs to the journey's middle arc, the cards of the inner world, where life tests what we have learned and turns us inward.";
    else stage = "It belongs to the journey's final arc, the cards of transformation, where the old self is broken open, freed and completed.";
    return card.name + " is card " + card.display + " of the Major Arcana, the twenty-two card sequence readers call the Fool's Journey. " + stage +
      " Its core themes upright are " + card.keywords.up.join(", ") + "; reversed it speaks of " + card.keywords.rev.join(", ") +
      ". Because it is a Major Arcana card, it carries extra weight in a reading: it describes life chapters and lasting lessons, not passing moods.";
  }
  const lore = SUIT_LORE[card.arcana];
  const numLore = card.number <= 10 ? NUMBER_LORE[card.number] : COURT_LORE[card.number];
  return "The " + card.name + " belongs to the suit of " + card.arcana.charAt(0).toUpperCase() + card.arcana.slice(1) +
    ", ruled by " + lore.element + ", the element of " + lore.domain + ". " + numLore;
}

function orientationNote(card, orient) {
  if (orient === "up") {
    return "Your card arrived upright, which means its energy is flowing cleanly and can be taken at face value: " +
      card.keywords.up.join(", ") + " are genuinely active in this part of your life right now, and you can lean on them.";
  }
  return "Your card arrived reversed, and this matters. In tarot a reversal rarely flips a card into its opposite; it means the card's energy is present but blocked, delayed or turned inward. The strengths of " +
    card.name + ", which are " + card.keywords.up.join(", ") + ", are trying to reach you, but right now they are expressing as " +
    card.keywords.rev.join(", ") + ". The invitation is to find and clear whatever is blocking that energy, rather than to force an outcome while the channel is jammed.";
}

// ------------------------------------------------------------
// "For your question": ties each card back to what the user asked
// ------------------------------------------------------------
const LENS_APPLICATION = {
  past: "Read as the root of that question, this card asks you to notice which pieces of your history are still steering the situation. Before you decide anything new, name what this old influence taught you, what it cost you, and which of its habits you are still carrying without choosing to.",
  present: "Read against that question, this card describes where things truly stand right now, underneath how they may appear on the surface. Take it as an honest mirror: if it matches what you privately suspected, trust that suspicion; if it surprises you, sit with it before dismissing it.",
  future: "Read against that question, this card sketches the direction events are currently leaning. Treat it as a weather forecast rather than a verdict: it tells you what is likely if nothing changes, precisely so that you can pack differently, change course, or walk into it prepared.",
  obstacle: "Read against that question, this card names the thing most genuinely in your way, and it is worth noticing whether it matches the obstacle you would have named yourself. Most people fight the wrong barrier first. Deal with this one specifically and the rest of the reading becomes far easier to live out.",
  advice: "Read against that question, this is the deck's direct counsel to you. Of every card on the table, this is the one to act on first, and the one to return to when you wonder what to do next.",
  hidden: "Read against that question, this card points to what has been operating underneath your awareness. Expect its truth to feel surprising for a moment and then strangely familiar, because some part of you has known it all along. Bringing it into the open is most of the work.",
  self: "Read against that question, this card shows the posture you yourself are bringing into the situation. Compare it honestly with what the other cards say is actually happening; the gap between the two, if there is one, is where your power to change things lives.",
  environment: "Read against that question, this card describes the people and circumstances surrounding the matter: the mood of the room you are operating in. You do not control this weather, but knowing it lets you time your moves and choose your allies with open eyes.",
  outcome: "Read against that question, this card is where all the reading's currents are presently carrying you. Hold it together with the earlier positions: they showed you the levers, and this card shows what the levers are currently set to produce.",
  core: "This is the deck's most direct answer to it. A single position asks a card to carry the whole weight of a question, so read it broadly: as a description of the situation, as a mirror of your own part in it, and as counsel, all at once."
};

function forYouText(card, orient, lens, question) {
  const advice = orient === "up" ? card.advice.up : card.advice.rev;
  const opening = question
    ? "You asked: “" + question.trim() + "”. "
    : "You came to the deck without writing your question down, so let this card name what you already carry with you. ";
  const application = LENS_APPLICATION[lens] || LENS_APPLICATION.core;
  const practical = lens === "advice"
    ? " Carry its counsel as your marching orders for the days ahead: " + advice
    : " The practical counsel of " + card.name + " here: " + advice;
  return opening + application + practical;
}

// ------------------------------------------------------------
// Per-lens framing around the card's context meaning
// ------------------------------------------------------------
function lensText(lens, card, orient, topic) {
  const m = card.meanings[topic] || card.meanings.general;
  const meaning = orient === "up" ? m.up : m.rev;
  const advice = orient === "up" ? card.advice.up : card.advice.rev;
  const kw = (orient === "up" ? card.keywords.up : card.keywords.rev).slice(0, 3).join(", ");
  const pol = orient === "up" ? card.polarity.up : card.polarity.rev;

  switch (lens) {
    case "past":
      return meaning + " As a past influence, this energy is the soil your present grew from. Notice how its fingerprints are still on the current situation, even if the events themselves have passed.";
    case "present":
    case "core":
      return meaning;
    case "future":
      return meaning + (pol >= 1
        ? " As a forward-looking card this is a genuinely encouraging trajectory. But tarot shows the road, not a cage: keep doing what invites this energy."
        : pol <= -1
        ? " As a forward-looking card this is a warning, not a sentence: the future in tarot is a trajectory, and trajectories bend when you act on what the earlier cards showed."
        : " As a forward-looking card, this describes the direction of travel. How it lands depends on how you meet it.");
    case "obstacle":
      return pol >= 1
        ? "Here is the subtle part: as the obstacle, even this card's positive energy, " + kw + ", is what's in your way. " + meaning + " Something about this, in excess or misdirected, is blocking the path rather than clearing it."
        : meaning + " Naming this obstacle honestly is half of overcoming it. Most people fight a decoy instead.";
    case "advice":
      return advice + " " + meaning;
    case "hidden":
      return meaning + " Because this operates beneath your awareness, expect the discovery to feel both surprising and, a breath later, obvious. You already half-knew.";
    case "self":
      return meaning + " This is how you're carrying yourself into the situation. Worth comparing against how the other cards say the situation actually is.";
    case "environment":
      return meaning + " This is the weather around you: other people, circumstances, the room's mood. You don't control it, but you can dress for it.";
    case "outcome":
      return meaning + (pol >= 1
        ? " As the final card, this is where the currents are carrying you. A genuinely favorable landing if you stay the course the reading described."
        : pol <= -1
        ? " As the final card, this is where the current course leads. Take it as the cards' frankest warning, and remember the outcome position shows momentum, not fate. The earlier cards showed you the levers."
        : " As the final card, this outcome is still being written. The deciding pen is in the choices the earlier positions pointed to.");
    default:
      return meaning;
  }
}

// ------------------------------------------------------------
// Cross-card synthesis
// ------------------------------------------------------------
const SUIT_NOTES = {
  wands: "Wands are fire: energy, desire, will. The engine of this reading is passion and drive. Things want to move, and action, or the absence of it, is the deciding factor in how your question resolves.",
  cups: "Cups are water: emotion, relationships, intuition. Whatever the surface subject of your question, the real currents underneath it are feelings, and the real answers will come from the heart being honest with itself and spoken aloud.",
  swords: "Swords are air: thought, truth, conflict. This reading lives in the mind. Communication, decisions, and the stories being told or avoided are where everything in your situation actually hinges.",
  pentacles: "Pentacles are earth: the material world, work, money, the body. The cards are being intensely practical with you. Real-world structures, concrete steps and patient building matter more than sentiment right now."
};

function synthesize(drawn, spread, topic) {
  const notes = [];
  const n = drawn.length;
  if (n < 2) return notes;

  const majors = drawn.filter(d => d.card.arcana === "major").length;
  if (majors >= Math.ceil(n * 0.5)) {
    notes.push({ title: "Major forces at work",
      text: majors + " of your " + n + " cards are Major Arcana, an unusually heavy presence. The tarot is saying this is not a small or passing matter: larger life currents, lessons and turning points are involved, and events may feel like they have their own momentum. When the Majors dominate a spread, readers advise treating the situation as a chapter of your life rather than an episode: give it the seriousness, patience and attention that a chapter deserves." });
  } else if (majors === 0 && n >= 3) {
    notes.push({ title: "The power is in your hands",
      text: "Not a single Major Arcana card appeared. This situation, whatever its weight in your mind, is made of everyday, workable material: habits, conversations, choices, logistics. Nothing here is fated or beyond reach. It will go the way you and the people involved decide to take it, which is quietly the most empowering message a spread can send." });
  }

  const suitCounts = {};
  for (const d of drawn) if (d.card.arcana !== "major") suitCounts[d.card.arcana] = (suitCounts[d.card.arcana] || 0) + 1;
  for (const [suit, count] of Object.entries(suitCounts)) {
    if (count >= Math.max(2, Math.ceil(n * 0.45))) {
      notes.push({ title: "A dominant element: " + suit.charAt(0).toUpperCase() + suit.slice(1),
        text: count + " of your cards come from the Suit of " + suit.charAt(0).toUpperCase() + suit.slice(1) + ", which colors the whole reading. " + SUIT_NOTES[suit] });
    }
  }

  const revs = drawn.filter(d => d.orient === "rev").length;
  if (revs === 0 && n >= 3) {
    notes.push({ title: "Clear channels",
      text: "Every card fell upright. The energies in this reading are flowing freely and expressing themselves directly, with little hidden resistance or blocked energy around your question. Take the reading at face value: what the cards describe is genuinely what is happening, and actions taken now tend to land the way you intend them to." });
  } else if (revs >= Math.ceil(n * 0.6)) {
    notes.push({ title: "Blocked or inward energy",
      text: revs + " of your " + n + " cards fell reversed, and that is a strong signal in itself. The situation's energy is blocked, delayed, or turned inward, and the work in front of you is internal before it is external. Resistance, hesitation and unfinished inner business are shaping outcomes more than outside events are. The encouraging side: inner blocks are the kind you can actually clear yourself, and each reversed card above tells you where one of them sits." });
  }

  const courts = drawn.filter(d => d.card.arcana !== "major" && d.card.number >= 11).length;
  if (courts >= 2) {
    notes.push({ title: "Other people in the picture",
      text: courts + " court cards appeared in your spread. Court cards usually represent actual people: their personalities, agendas and influence on your question. This situation is not playing out in solitude. Specific individuals are shaping it, and reading their nature correctly, which is what each court card describes, matters as much as reading your own. Ask yourself who in your life matches each court card's character; the answer usually arrives quickly." });
  }

  const numCounts = {};
  for (const d of drawn) if (d.card.arcana !== "major" && d.card.number <= 10) numCounts[d.card.number] = (numCounts[d.card.number] || 0) + 1;
  const NUM_MEANINGS = { 1: "beginnings, several things starting at once", 2: "choices and partnerships, balance points everywhere", 3: "growth and collaboration, things expanding", 4: "stability and consolidation, foundations being tested or laid", 5: "conflict and disruption, friction as the theme", 6: "harmony and exchange, restoration after difficulty", 7: "assessment and perseverance, the long middle of things", 8: "movement and mastery, power gathering speed", 9: "culmination, matters nearing their fullness", 10: "completion, cycles ending and resetting" };
  for (const [num, count] of Object.entries(numCounts)) {
    if (count >= 2) {
      notes.push({ title: "A repeated number: " + num,
        text: "The number " + num + " appears " + count + " times across different suits. In tarot numerology a repeated number is read as an emphasis mark: it stresses " + NUM_MEANINGS[num] + ". The same chapter of a cycle is playing out in more than one area of your life at the same time, which is why the situation may feel bigger than any single part of it." });
    }
  }

  return notes;
}

// ------------------------------------------------------------
// The arc of the spread: a narrative through-line
// ------------------------------------------------------------
function polOf(d) { return d.orient === "up" ? d.card.polarity.up : d.card.polarity.rev; }

function flowParagraph(drawn, spread) {
  const n = drawn.length;
  if (n < 3) return null;
  const first = drawn[0], last = drawn[n - 1];
  const name = d => d.card.name + (d.orient === "rev" ? " reversed" : "");
  const delta = polOf(last) - polOf(first);
  let arc;
  if (delta >= 2) {
    arc = "That is a rising line. Whatever weight sits in the early positions, the spread resolves toward strength, which usually means the situation wants to improve and is asking you to cooperate with it rather than brace against it.";
  } else if (delta <= -2) {
    arc = "That is a descending line. The reading starts stronger than it ends, which is the deck's way of warning that the current course spends more than it earns. This is not a prophecy; it is a trajectory shown early enough to be bent, and the middle cards hold the levers.";
  } else if (polOf(first) >= 1 && polOf(last) >= 1) {
    arc = "The line holds steady in favorable territory from start to finish. Continuity rather than upheaval is the message: protect what is working, and resist the urge to fix what is not broken.";
  } else if (polOf(first) <= -1 && polOf(last) <= -1) {
    arc = "The line stays in heavy territory throughout. The deck is not predicting doom; it is describing sustained pressure, and pressure this consistent usually means the meaningful change has to start with you rather than with circumstances deciding to soften on their own.";
  } else {
    arc = "The line is genuinely mixed, rising and dipping rather than pointing one way. Readings like this usually mean the outcome is still undecided and hangs on choices that have not been made yet, very possibly yours.";
  }
  const middle = n >= 4 ? ", moves through " + drawn.slice(1, n - 1).map(name).join(", ") + "," : ", passes through " + name(drawn[1]) + ",";
  return "Read as one continuous story, your spread opens with " + name(first) + middle + " and comes to rest on " + name(last) + ". " + arc;
}

// ------------------------------------------------------------
// Overall tone + opening
// ------------------------------------------------------------
function overallTone(drawn) {
  const avg = drawn.reduce((s, d) => s + polOf(d), 0) / drawn.length;
  if (avg >= 1.2) return { key: "bright", avg };
  if (avg >= 0.4) return { key: "positive", avg };
  if (avg >= -0.4) return { key: "mixed", avg };
  if (avg >= -1.2) return { key: "challenging", avg };
  return { key: "hard", avg };
}

function openingParagraph(drawn, spread, topic, question) {
  const tone = overallTone(drawn).key;
  const t = TOPICS[topic];
  const names = drawn.map(d => d.card.name + (d.orient === "rev" ? " (reversed)" : "")).join(", ");
  const toneText = {
    bright: "The overall complexion of this reading is strongly positive. The cards lean decisively in your favor here, and the honest work of the reading is less about avoiding danger than about not talking yourself out of good things.",
    positive: "The overall complexion of this reading is encouraging, with real strengths to build on and only manageable frictions. Nothing here is out of your depth.",
    mixed: "This reading is genuinely mixed: real assets and real frictions side by side. In practice that usually means the outcome hinges on choices still ahead of you, which is better news than it first sounds, because it means the deciding vote is yours.",
    challenging: "The cards are being candid with you: this reading carries real difficulty. Read it as a map of hard terrain rather than a judgment. Knowing the terrain, in detail and in advance, is exactly how it gets crossed.",
    hard: "This is a heavy spread, and it would be dishonest to soften it. But heavy readings are the most useful ones a deck can give: every difficult card below also contains, in its text, the specific way through it. Read slowly and take what serves you."
  }[tone];
  return "You asked about " + t.noun + (question ? ", putting it into words as “" + question.trim() + "”" : "") +
    ", and your own hand drew " + names + ". " + toneText;
}

function openingGuide(spread, topic) {
  return "How to read what follows: each card is explained in three layers. First, what the card itself is and where it sits in the tarot's architecture. Second, what it means for " +
    TOPICS[topic].noun + " in the specific position it landed in, including what its upright or reversed orientation is telling you. Third, how it speaks to the exact question you brought. After the cards, the reading closes by looking at all " +
    spread.count + (spread.count === 1 ? " card" : " cards of the " + spread.name) + " together, because the patterns across a spread carry a message of their own.";
}

// ------------------------------------------------------------
// Yes/No verdict
// ------------------------------------------------------------
function yesNoVerdict(drawn) {
  const val = d => {
    const v = d.orient === "up" ? d.card.yesNo.up : d.card.yesNo.rev;
    return v === "yes" ? 1 : v === "no" ? 0 : 0.5;
  };
  const weights = drawn.length === 3 ? [1, 2, 1] : drawn.map(() => 1);
  let total = 0, max = 0;
  drawn.forEach((d, i) => { total += val(d) * weights[i]; max += weights[i]; });
  const score = total / max;
  let verdict, text;
  if (score >= 0.8) { verdict = "Yes"; text = "The cards lean clearly toward yes. The energies around your question support it from more than one direction, which is the strongest form a yes can take in a three card draw. Proceed, and proceed like you mean it: a wholehearted yes acted on tentatively often produces the muddled result of a maybe."; }
  else if (score >= 0.6) { verdict = "Leaning Yes"; text = "The cards lean yes, but with reservations attached. The direction is favorable; the cautions inside the individual cards below are the fine print, the conditions this yes comes with. Read them carefully, because a conditional yes honored in full usually outperforms an unconditional one taken for granted."; }
  else if (score > 0.4) { verdict = "Unclear: Not Yet Decided"; text = "The cards are genuinely split, and that split is itself the answer. In tarot a divided verdict usually means the outcome is still being written by choices not yet made, very often yours. Look hardest at the middle card: it carries double weight in this spread precisely because it names the deciding factor. Whatever it describes is the hinge your yes or no actually turns on."; }
  else if (score > 0.2) { verdict = "Leaning No"; text = "The cards lean no, or at the very least not now and not this way. That is different from never: read the individual cards below for what would have to change for this door to open, because they describe the conditions of a future yes as much as the reasons for the present no."; }
  else { verdict = "No"; text = "The cards answer plainly: no, or a strong warning against. It is worth knowing that a clear no from the tarot is usually protective rather than punitive. The cards below describe what you are being protected from, and reading them closely often turns disappointment into relief."; }
  return { verdict, score, text };
}

// ------------------------------------------------------------
// Suggest a spread from the question
// ------------------------------------------------------------
function suggestSpread(question, topic) {
  if (isYesNoQuestion(question)) return "yesno";
  const q = (question || "").toLowerCase();
  if (/(what should i do|how (do|can|should) i|advice|way forward|handle|deal with)/.test(q)) return "soa";
  if (/(future|going|heading|happen|become|end up|unfold)/.test(q)) return "ppf";
  if (/(decide|decision|choose|choice|crossroad|torn|between)/.test(q)) return "crossroads";
  if ((question || "").length > 120) return "celtic";
  return "ppf";
}

// ------------------------------------------------------------
// Build the complete reading object
// ------------------------------------------------------------
function buildReading(question, topic, spreadKey, drawn) {
  const spread = SPREADS[spreadKey];
  const reading = {
    question, topic, spreadKey,
    date: new Date().toISOString(),
    opening: openingParagraph(drawn, spread, topic, question),
    guide: openingGuide(spread, topic),
    flow: flowParagraph(drawn, spread),
    cards: drawn.map((d, i) => {
      const pos = spread.positions[i];
      return {
        position: pos.name,
        frame: pos.frame,
        cardId: d.card.id,
        name: d.card.name,
        display: d.card.display,
        arcana: d.card.arcana,
        glyph: d.card.glyph,
        orient: d.orient,
        keywords: (d.orient === "up" ? d.card.keywords.up : d.card.keywords.rev),
        about: cardAbout(d.card),
        body: lensText(pos.lens, d.card, d.orient, topic),
        orientNote: orientationNote(d.card, d.orient),
        forYou: forYouText(d.card, d.orient, pos.lens, question)
      };
    }),
    synthesis: synthesize(drawn, spread, topic),
    tone: overallTone(drawn).key
  };
  if (spreadKey === "yesno") reading.verdict = yesNoVerdict(drawn);

  const adviceIdx = spread.positions.findIndex(p => p.lens === "advice");
  let guideCard;
  if (adviceIdx >= 0) guideCard = drawn[adviceIdx];
  else guideCard = drawn.reduce((a, b) => (polOf(b) > polOf(a)) ? b : a);
  reading.closing = "If you carry one thing from this reading, let it be the counsel of " +
    guideCard.card.name + (guideCard.orient === "rev" ? " reversed" : "") + ": " +
    (guideCard.orient === "up" ? guideCard.card.advice.up : guideCard.card.advice.rev) +
    " Give the reading a day or two to settle before drawing again; tarot answers deepen with a little time, and repeated draws on the same question tend to blur rather than sharpen the picture. The cards you pulled were pulled by your own hand, in response to your own question, and the most personal part of any reading is what you notice yourself resisting or recognizing as you reread it.";
  return reading;
}
