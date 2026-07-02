// ============================================================
// ARCANA — Interpretation Engine
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
// Spreads. Each position: name, hint (shown while picking),
// lens: how the card meaning is framed, frame: intro sentence template.
// ------------------------------------------------------------
const SPREADS = {
  single: {
    key: "single", name: "One Card Insight", count: 1,
    tagline: "A single, focused answer — the heart of the matter.",
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
    tagline: "The classic timeline — where this came from and where it's heading.",
    best: "Understanding how a situation is unfolding over time.",
    positions: [
      { name: "The Past", lens: "past", frame: "What shaped this situation — the roots beneath your question." },
      { name: "The Present", lens: "present", frame: "Where the energy stands right now." },
      { name: "The Future", lens: "future", frame: "Where this is heading if the current course holds." }
    ]
  },
  soa: {
    key: "soa", name: "Situation · Obstacle · Advice", count: 3,
    tagline: "A practical spread — what's happening, what's in the way, what to do.",
    best: "Decisions and problems that need a concrete way forward.",
    positions: [
      { name: "The Situation", lens: "present", frame: "The true nature of what you're dealing with." },
      { name: "The Obstacle", lens: "obstacle", frame: "The real barrier — which is not always the one you'd name." },
      { name: "The Advice", lens: "advice", frame: "The cards' counsel on how to move." }
    ]
  },
  crossroads: {
    key: "crossroads", name: "The Crossroads", count: 5,
    tagline: "Five cards for a decision or turning point — including what's hidden.",
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
    tagline: "The full classic reading — ten cards, the complete picture.",
    best: "Deep, complex situations deserving a thorough reading.",
    positions: [
      { name: "The Heart of the Matter", lens: "present", frame: "The core of your situation." },
      { name: "What Crosses You", lens: "obstacle", frame: "The immediate force working with or against you." },
      { name: "The Foundation", lens: "past", frame: "The deep root of the matter — often further back than expected." },
      { name: "The Recent Past", lens: "past", frame: "What is just now passing out of influence." },
      { name: "The Crown — Best Outcome", lens: "future", frame: "What is possible here at its best." },
      { name: "The Near Future", lens: "future", frame: "What approaches in the coming weeks." },
      { name: "How You See Yourself", lens: "self", frame: "Your own stance and self-perception in this." },
      { name: "Your Environment", lens: "environment", frame: "How others and circumstances around you bear on this." },
      { name: "Hopes and Fears", lens: "hidden", frame: "The hope and the fear — in tarot they are often the same card." },
      { name: "The Outcome", lens: "outcome", frame: "Where all these currents are carrying you." }
    ]
  }
};

// ------------------------------------------------------------
// Per-lens framing around the card's context meaning.
// ------------------------------------------------------------
function lensText(lens, card, orient, topic) {
  const m = card.meanings[topic] || card.meanings.general;
  const meaning = orient === "up" ? m.up : m.rev;
  const advice = orient === "up" ? card.advice.up : card.advice.rev;
  const kw = (orient === "up" ? card.keywords.up : card.keywords.rev).slice(0, 3).join(", ");
  const pol = orient === "up" ? card.polarity.up : card.polarity.rev;

  switch (lens) {
    case "past":
      return meaning + " As a past influence, this energy is the soil your present grew from — notice how its fingerprints are still on the current situation, even if the events themselves have passed.";
    case "present":
    case "core":
      return meaning;
    case "future":
      return meaning + (pol >= 1
        ? " As a forward-looking card this is a genuinely encouraging trajectory — but tarot shows the road, not a cage: keep doing what invites this energy."
        : pol <= -1
        ? " As a forward-looking card this is a warning, not a sentence: the future in tarot is a trajectory, and trajectories bend when you act on what the earlier cards showed."
        : " As a forward-looking card, this describes the direction of travel — how it lands depends on how you meet it.");
    case "obstacle":
      return pol >= 1
        ? "Here is the subtle part: as the obstacle, even this card's positive energy — " + kw + " — is what's in your way. " + meaning + " Something about this, in excess or misdirected, is blocking the path rather than clearing it."
        : meaning + " Naming this obstacle honestly is half of overcoming it — most people fight a decoy instead.";
    case "advice":
      return advice + " " + meaning;
    case "hidden":
      return meaning + " Because this operates beneath your awareness, expect the discovery to feel both surprising and — a breath later — obvious. You already half-knew.";
    case "self":
      return meaning + " This is how you're carrying yourself into the situation — worth comparing against how the other cards say the situation actually is.";
    case "environment":
      return meaning + " This is the weather around you — other people, circumstances, the room's mood. You don't control it, but you can dress for it.";
    case "outcome":
      return meaning + (pol >= 1
        ? " As the final card, this is where the currents are carrying you — a genuinely favorable landing if you stay the course the reading described."
        : pol <= -1
        ? " As the final card, this is where the current course leads — take it as the cards' frankest warning, and remember the outcome position shows momentum, not fate. The earlier cards showed you the levers."
        : " As the final card, this outcome is still being written — the deciding pen is in the choices the earlier positions pointed to.");
    default:
      return meaning;
  }
}

// ------------------------------------------------------------
// Cross-card synthesis
// ------------------------------------------------------------
const SUIT_NOTES = {
  wands: "Wands are fire — energy, desire, will. The engine of this reading is passion and drive: things want to MOVE, and action (or its absence) is the deciding factor.",
  cups: "Cups are water — emotion, relationships, intuition. Whatever the surface subject, the real currents here are feelings, and the real answers will come from the heart being honest.",
  swords: "Swords are air — thought, truth, conflict. This reading lives in the mind: communication, decisions, and the stories being told (or avoided) are where everything hinges.",
  pentacles: "Pentacles are earth — the material world, work, money, body. The cards are being intensely practical with you: real-world structures and concrete steps matter more than sentiment right now."
};

function synthesize(drawn, spread, topic) {
  const notes = [];
  const n = drawn.length;
  if (n < 2) return notes;

  // Major Arcana weight
  const majors = drawn.filter(d => d.card.arcana === "major").length;
  if (majors >= Math.ceil(n * 0.5)) {
    notes.push({ title: "Major forces at work",
      text: majors + " of your " + n + " cards are Major Arcana — an unusually heavy presence. The tarot is saying this is not a small or passing matter: larger life-currents, lessons, and turning points are involved, and events may feel like they have their own momentum. Attend to it accordingly." });
  } else if (majors === 0 && n >= 3) {
    notes.push({ title: "The power is in your hands",
      text: "Not a single Major Arcana card appeared. This situation, whatever its weight in your mind, is made of everyday, workable material — habits, conversations, choices. Nothing fated here: it will go the way you and the people involved decide to take it." });
  }

  // Suit dominance
  const suitCounts = {};
  for (const d of drawn) if (d.card.arcana !== "major") suitCounts[d.card.arcana] = (suitCounts[d.card.arcana] || 0) + 1;
  for (const [suit, count] of Object.entries(suitCounts)) {
    if (count >= Math.max(2, Math.ceil(n * 0.45))) {
      notes.push({ title: "A dominant element: " + suit.charAt(0).toUpperCase() + suit.slice(1),
        text: count + " of your cards come from the Suit of " + suit.charAt(0).toUpperCase() + suit.slice(1) + ". " + SUIT_NOTES[suit] });
    }
  }

  // Reversals
  const revs = drawn.filter(d => d.orient === "rev").length;
  if (revs === 0 && n >= 3) {
    notes.push({ title: "Clear channels",
      text: "Every card fell upright — the energies in this reading are flowing freely and expressing themselves directly. Take the reading at face value; there is little hidden resistance or blocked energy around this question." });
  } else if (revs >= Math.ceil(n * 0.6)) {
    notes.push({ title: "Blocked or inward energy",
      text: revs + " of " + n + " cards fell reversed — a strong signal that the situation's energy is blocked, delayed, or turned inward. The work here is internal before it is external: resistance, hesitation, and unfinished inner business are shaping outcomes more than outside events are." });
  }

  // Court cards — people
  const courts = drawn.filter(d => d.card.arcana !== "major" && d.card.number >= 11).length;
  if (courts >= 2) {
    notes.push({ title: "Other people in the picture",
      text: courts + " court cards appeared. Court cards usually represent actual people — their personalities, agendas, and influence. This situation is not playing out in solitude: specific individuals are shaping it, and reading their nature correctly (each court card's character) matters as much as reading your own." });
  }

  // Repeated numbers
  const numCounts = {};
  for (const d of drawn) if (d.card.arcana !== "major" && d.card.number <= 10) numCounts[d.card.number] = (numCounts[d.card.number] || 0) + 1;
  const NUM_MEANINGS = { 1: "beginnings — several things starting at once", 2: "choices and partnerships — balance points everywhere", 3: "growth and collaboration — things expanding", 4: "stability and consolidation — foundations being tested or laid", 5: "conflict and disruption — friction as the theme", 6: "harmony and exchange — restoration after difficulty", 7: "assessment and perseverance — the long-middle of things", 8: "movement and mastery — power gathering speed", 9: "culmination — matters nearing their fullness", 10: "completion — cycles ending and resetting" };
  for (const [num, count] of Object.entries(numCounts)) {
    if (count >= 2) {
      notes.push({ title: "A repeated number: " + num,
        text: "The number " + num + " appears " + count + " times across different suits — in tarot numerology this emphasizes " + NUM_MEANINGS[num] + ". The same chapter of a cycle is playing out in more than one area of your life simultaneously." });
    }
  }

  // Trajectory for timeline spreads
  if ((spread.key === "ppf" || spread.key === "celtic" || spread.key === "crossroads") && n >= 3) {
    const polOf = d => d.orient === "up" ? d.card.polarity.up : d.card.polarity.rev;
    const early = polOf(drawn[0]);
    const late = polOf(drawn[n - 1]);
    if (late - early >= 2) notes.push({ title: "An improving arc",
      text: "Read as a sequence, this spread climbs: the energy of the later positions is markedly brighter than where things began. Whatever the current difficulty, the momentum of this reading is genuinely toward improvement." });
    else if (early - late >= 2) notes.push({ title: "A descending arc — catch it early",
      text: "Read as a sequence, this spread darkens toward its end. That is not a verdict — it is the cards showing you the current trajectory precisely so it can be bent. The advice and obstacle positions hold the levers; use them while the arc is still shallow." });
  }

  return notes;
}

// ------------------------------------------------------------
// Overall tone + opening paragraph
// ------------------------------------------------------------
function overallTone(drawn) {
  const avg = drawn.reduce((s, d) => s + (d.orient === "up" ? d.card.polarity.up : d.card.polarity.rev), 0) / drawn.length;
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
    bright: "The overall complexion of this reading is strongly positive — the cards lean decisively in your favor here.",
    positive: "The overall complexion of this reading is encouraging, with real strengths to build on and only manageable frictions.",
    mixed: "This reading is genuinely mixed — real assets and real frictions side by side, which usually means the outcome hinges on choices still ahead of you.",
    challenging: "The cards are being candid with you: this reading carries real difficulty. Read it as a map of the hard terrain — knowing the terrain is how it gets crossed.",
    hard: "This is a heavy spread, and it would be dishonest to soften it. But heavy readings are the most useful ones: every difficult card below also contains the specific way through it."
  }[tone];
  return "You asked about " + t.noun + (question ? " — “" + question.trim() + "”" : "") +
    " — and drew " + names + ". " + toneText;
}

// ------------------------------------------------------------
// Yes/No verdict
// ------------------------------------------------------------
function yesNoVerdict(drawn) {
  const val = d => {
    const v = d.orient === "up" ? d.card.yesNo.up : d.card.yesNo.rev;
    return v === "yes" ? 1 : v === "no" ? 0 : 0.5;
  };
  // middle card (index 1) counts double
  const weights = drawn.length === 3 ? [1, 2, 1] : drawn.map(() => 1);
  let total = 0, max = 0;
  drawn.forEach((d, i) => { total += val(d) * weights[i]; max += weights[i]; });
  const score = total / max;
  let verdict, text;
  if (score >= 0.8) { verdict = "Yes"; text = "The cards lean clearly toward yes. The energies support this — proceed, and proceed like you mean it."; }
  else if (score >= 0.6) { verdict = "Leaning Yes"; text = "The cards lean yes, with reservations. The direction is favorable, but the cautions in the individual cards below are the conditions attached to that yes."; }
  else if (score > 0.4) { verdict = "Unclear — Not Yet Decided"; text = "The cards are genuinely split. In tarot this usually means the answer is still being written by choices not yet made — often yours. Look at the middle card: it names the deciding factor."; }
  else if (score > 0.2) { verdict = "Leaning No"; text = "The cards lean no, or at least not now, not this way. Read the individual cards for what would have to change for this door to open."; }
  else { verdict = "No"; text = "The cards answer plainly: no — or a strong warning against. Note that a clear no from the tarot is usually protecting you from something the cards below describe."; }
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
        body: lensText(pos.lens, d.card, d.orient, topic)
      };
    }),
    synthesis: synthesize(drawn, spread, topic),
    tone: overallTone(drawn).key
  };
  if (spreadKey === "yesno") reading.verdict = yesNoVerdict(drawn);

  // Closing guidance: prefer an advice-lens card; else the most positive card's advice
  const adviceIdx = spread.positions.findIndex(p => p.lens === "advice");
  let guide;
  if (adviceIdx >= 0) guide = drawn[adviceIdx];
  else guide = drawn.reduce((a, b) =>
    ((b.orient === "up" ? b.card.polarity.up : b.card.polarity.rev) >
     (a.orient === "up" ? a.card.polarity.up : a.card.polarity.rev)) ? b : a);
  reading.closing = "If you carry one thing from this reading, let it be the counsel of " +
    guide.card.name + (guide.orient === "rev" ? " reversed" : "") + ": " +
    (guide.orient === "up" ? guide.card.advice.up : guide.card.advice.rev) +
    " Sit with this reading rather than immediately re-drawing — tarot answers deepen over a day or two, and the cards you pulled were pulled by your own hand for a reason.";
  return reading;
}
