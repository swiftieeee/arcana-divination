// ============================================================
// ARCANA. App flow: question → spread → pick cards → reading
// ============================================================

const state = {
  question: "",
  topic: "general",
  topicLocked: false,   // true once user manually picks a topic
  spreadKey: null,
  deck: [],             // shuffled [{card, orient}]
  picked: [],           // chosen deck entries in order
  reading: null
};

// ---------- Card face art ----------
const SUIT_SVG = {
  pentacle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="10"/><path d="M12 3 L17.29 19.28 L3.44 9.22 L20.56 9.22 L6.71 19.28 Z" stroke-linejoin="round"/></svg>',
  cup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 3 H19 C19 11 16 13.5 12 13.5 C8 13.5 5 11 5 3 Z"/><path d="M12 13.5 V19"/><path d="M7.5 20.5 H16.5"/></svg>',
  sword: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2 L14.2 6 V15 H9.8 V6 Z" stroke-linejoin="round"/><path d="M7 15.5 H17"/><path d="M12 15.5 V20"/><circle cx="12" cy="21.2" r="1.2"/></svg>',
  wand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7.5 20.5 L16.5 5"/><path d="M16.5 5 L14.2 4.2 M16.5 5 L17.6 2.8 M16.5 5 L18.8 5.6" stroke-width="1.2"/></svg>'
};
const ARCANA_LABEL = { major: "Major Arcana", wands: "Wands", cups: "Cups", swords: "Swords", pentacles: "Pentacles" };
const SUIT_OF = { wands: "wand", cups: "cup", swords: "sword", pentacles: "pentacle" };

// ---------- Custom card art ----------
// Drop your own images in images/cards/ named to match cardSlug() below
// (see images/cards/filenames.txt for the exact list of 78 names).
// Any card without a matching file automatically falls back to the
// generated illustration below. Nothing breaks if you replace only some.
const CARD_IMAGE_EXT = "jpg"; // change to "png" or "webp" if that's what you're uploading

function cardSlug(card) {
  return card.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function cardImagePath(card) {
  return "images/cards/" + cardSlug(card) + "." + CARD_IMAGE_EXT;
}

function cardFaceHTML(card, orient) {
  const revClass = orient === "rev" ? " rev" : "";
  return '<div class="card-visual' + revClass + '">' +
    '<img class="card-img" src="' + cardImagePath(card) + '" alt="' + escapeHTML(card.name) + '">' +
    '<div class="card-face-fallback">' + generatedCardFace(card, orient) + '</div></div>';
}

// The built-in illustration, used automatically whenever a custom
// image for that card isn't found in images/cards/.
function generatedCardFace(card, orient) {
  const revClass = orient === "rev" ? " rev" : "";
  if (card.arcana === "major") {
    return '<div class="card-face major' + revClass + '">' +
      '<div class="cf-num">' + card.display + '</div>' +
      '<div class="cf-glyph">' + card.glyph + '</div>' +
      '<div class="cf-name">' + card.name + '</div></div>';
  }
  const suitSvg = SUIT_SVG[SUIT_OF[card.arcana]];
  const pips = card.number <= 10
    ? Array.from({ length: card.number }, () => '<span class="pip">' + suitSvg + '</span>').join("")
    : '<span class="pip court">' + suitSvg + '</span>';
  return '<div class="card-face ' + card.arcana + revClass + '">' +
    '<div class="cf-num">' + card.display + '</div>' +
    '<div class="cf-pips pips-' + (card.number <= 10 ? card.number : "court") + '">' + pips + '</div>' +
    '<div class="cf-name">' + card.name + '</div></div>';
}

// Watches for images that 404 (i.e. no custom art uploaded for that
// card yet) and swaps in the generated illustration automatically.
function activateCardImages(root) {
  (root || document).querySelectorAll(".card-visual:not(.wired)").forEach(wrap => {
    wrap.classList.add("wired");
    const img = wrap.querySelector(".card-img");
    if (!img) return;
    img.addEventListener("error", () => wrap.classList.add("img-missing"), { once: true });
  });
}

// ---------- Navigation ----------
function showStep(id) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function goHome() {
  state.picked = []; state.reading = null;
  showStep("step-question");
}

// ---------- Step 1: Question ----------
const qInput = document.getElementById("question-input");
const topicChips = document.querySelectorAll("#topic-chips .chip");
const topicHint = document.getElementById("topic-hint");

function setTopic(topic, locked) {
  state.topic = topic;
  state.topicLocked = locked;
  topicChips.forEach(c => c.classList.toggle("selected", c.dataset.topic === topic));
}
setTopic("general", false);

topicChips.forEach(chip => chip.addEventListener("click", () => {
  setTopic(chip.dataset.topic, true);
  topicHint.textContent = "";
}));

qInput.addEventListener("input", () => {
  if (state.topicLocked) return;
  const detected = detectTopic(qInput.value);
  setTopic(detected, false);
  topicHint.textContent = detected !== "general"
    ? "✦ The cards sense a question of " + TOPICS[detected].label.toLowerCase() + ". Change the focus above if that's not right."
    : "";
});
qInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); toSpreadStep(); }
});
document.getElementById("btn-to-spread").addEventListener("click", toSpreadStep);

function toSpreadStep() {
  state.question = qInput.value.trim();
  renderSpreadGrid();
  showStep("step-spread");
}

// ---------- Step 2: Spread ----------
function renderSpreadGrid() {
  const suggested = suggestSpread(state.question, state.topic);
  document.getElementById("spread-suggestion").textContent = state.question
    ? "Based on how you phrased your question, the cards suggest “" + SPREADS[suggested].name + "”, but the choice is yours."
    : "Each spread suits a different kind of question.";
  const grid = document.getElementById("spread-grid");
  grid.innerHTML = "";
  for (const spread of Object.values(SPREADS)) {
    const div = document.createElement("div");
    div.className = "spread-card" + (spread.key === suggested ? " suggested" : "");
    div.innerHTML =
      (spread.key === suggested ? '<div class="suggest-badge">✦ Suggested</div>' : "") +
      "<h3>" + spread.name + "</h3>" +
      '<div class="spread-count">' + spread.count + (spread.count === 1 ? " card" : " cards") + "</div>" +
      "<p>" + spread.tagline + "</p>" +
      '<p class="spread-best"><em>Best for:</em> ' + spread.best + "</p>";
    div.addEventListener("click", () => { state.spreadKey = spread.key; startSpreadSelection(); });
    grid.appendChild(div);
  }
}

// ---------- Step 3: Shuffle & pick ----------
function shuffleDeck() {
  const deck = window.TAROT_CARDS.map(card => ({
    card,
    orient: Math.random() < 0.33 ? "rev" : "up"   // ~1/3 reversed, as in a well-mixed deck
  }));
  // Fisher-Yates with crypto randomness. A genuinely fair shuffle
  const rand = new Uint32Array(deck.length);
  crypto.getRandomValues(rand);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = rand[i] % (i + 1);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function startSpreadSelection() {
  const spread = SPREADS[state.spreadKey];
  state.deck = shuffleDeck();
  state.picked = [];
  document.getElementById("select-title").textContent = spread.name;
  document.getElementById("focus-reminder").textContent = state.question
    ? "Hold your question in mind: “" + state.question + "”"
    : "Hold your question quietly in mind as you choose.";
  renderFan();
  renderPickedRow();
  showStep("step-select");
}

function renderFan() {
  const fan = document.getElementById("deck-fan");
  fan.innerHTML = "";
  const n = state.deck.length;
  state.deck.forEach((entry, i) => {
    if (entry.pickedAt !== undefined) return;
    const el = document.createElement("div");
    el.className = "fan-card";
    const mid = (n - 1) / 2;
    el.style.setProperty("--rot", ((i - mid) / mid * 6).toFixed(2) + "deg");
    el.style.setProperty("--lift", Math.abs((i - mid) / mid * 14).toFixed(1) + "px");
    el.innerHTML = '<div class="card-back">✦</div>';
    el.addEventListener("click", () => pickCard(i, el));
    fan.appendChild(el);
  });
  updateInstruction();
}

function updateInstruction() {
  const spread = SPREADS[state.spreadKey];
  const left = spread.count - state.picked.length;
  document.getElementById("select-instruction").textContent = left > 0
    ? "The deck has been shuffled. Choose " + left + " more " + (left === 1 ? "card" : "cards") +
      ". Let your hand drift to the ones that pull at you."
    : "Your cards are chosen.";
}

function pickCard(deckIndex, el) {
  const spread = SPREADS[state.spreadKey];
  if (state.picked.length >= spread.count) return;
  const entry = state.deck[deckIndex];
  if (entry.pickedAt !== undefined) return;
  entry.pickedAt = state.picked.length;
  state.picked.push(entry);
  el.classList.add("picked-away");
  setTimeout(() => el.remove(), 350);
  renderPickedRow();
  updateInstruction();
  if (state.picked.length === spread.count) {
    setTimeout(revealReading, 900);
  }
}

function renderPickedRow() {
  const row = document.getElementById("picked-row");
  const spread = SPREADS[state.spreadKey];
  if (!spread) return;
  row.innerHTML = "";
  for (let i = 0; i < spread.count; i++) {
    const slot = document.createElement("div");
    slot.className = "pick-slot" + (state.picked[i] ? " filled" : "");
    slot.innerHTML = '<div class="slot-label">' + spread.positions[i].name + "</div>" +
      (state.picked[i] ? '<div class="card-back small">✦</div>' : '<div class="slot-empty"></div>');
    row.appendChild(slot);
  }
}

// ---------- Step 4: Reading ----------
function revealReading() {
  const drawn = state.picked.map(p => ({ card: p.card, orient: p.orient }));
  state.reading = buildReading(state.question, state.topic, state.spreadKey, drawn);
  saveToJournal(state.reading);
  renderReading(state.reading, document.getElementById("reading-container"), true);
  showStep("step-reading");
}

function toneClass(tone) {
  return { bright: "tone-bright", positive: "tone-bright", mixed: "tone-mixed", challenging: "tone-dark", hard: "tone-dark" }[tone] || "tone-mixed";
}

function renderReading(r, container, animate) {
  const spread = SPREADS[r.spreadKey];
  let html = '<div class="reading ' + toneClass(r.tone) + '">';
  html += '<div class="reading-head"><div class="reading-spread">' + spread.name + " · " + TOPICS[r.topic].label + "</div>";
  html += "<h1>Your Reading</h1>";
  html += '<p class="reading-date">' + new Date(r.date).toLocaleString(undefined, { dateStyle: "long", timeStyle: "short" }) + "</p></div>";

  html += '<p class="reading-opening">' + escapeHTML(r.opening) + "</p>";
  if (r.guide) html += '<p class="reading-guide">' + escapeHTML(r.guide) + "</p>";

  if (r.verdict) {
    html += '<div class="verdict"><div class="verdict-answer">' + r.verdict.verdict + "</div><p>" + escapeHTML(r.verdict.text) + "</p></div>";
  }
  if (r.answer) {
    html += '<div class="direct-answer"><h4>' + escapeHTML(r.answer.title) + "</h4><p>" + escapeHTML(r.answer.text) + "</p></div>";
  }
  if (r.flow) html += '<div class="reading-flow"><h4>✦ The Arc of Your Spread</h4><p>' + escapeHTML(r.flow) + "</p></div>";

  html += '<div class="reading-cards">';
  r.cards.forEach((c, i) => {
    const card = window.TAROT_CARDS.find(x => x.id === c.cardId);
    html += '<div class="reading-card' + (animate ? " flip-in" : "") + '" style="animation-delay:' + (i * 0.35) + 's">';
    html += '<div class="rc-visual">' + cardFaceHTML(card, c.orient) + "</div>";
    html += '<div class="rc-text">';
    html += '<div class="rc-position">' + escapeHTML(c.position) + "</div>";
    html += '<h3>' + escapeHTML(c.name) + (c.orient === "rev" ? ' <span class="rev-tag">Reversed</span>' : "") + "</h3>";
    html += '<div class="rc-keywords">' + c.keywords.map(k => "<span>" + escapeHTML(k) + "</span>").join("") + "</div>";
    html += '<p class="rc-frame">' + escapeHTML(c.frame) + "</p>";
    if (c.about) html += '<p class="rc-about">' + escapeHTML(c.about) + "</p>";
    html += "<p>" + escapeHTML(c.body) + "</p>";
    if (c.orientNote) html += "<p>" + escapeHTML(c.orientNote) + "</p>";
    if (c.forYou) html += '<div class="rc-foryou"><h5>✦ For Your Question</h5><p>' + escapeHTML(c.forYou) + "</p></div>";
    html += "</div></div>";
  });
  html += "</div>";

  if (r.synthesis.length) {
    html += '<div class="synthesis"><h2>Reading the Cards Together</h2>';
    html += '<p class="synth-intro">A reading is more than its cards. The patterns across them carry their own message:</p>';
    r.synthesis.forEach(s => {
      html += '<div class="synth-note"><h4>✦ ' + escapeHTML(s.title) + "</h4><p>" + escapeHTML(s.text) + "</p></div>";
    });
    html += "</div>";
  }

  if (r.plain && r.plain.length) {
    html += '<div class="plain-words"><h2>In Plain Words</h2><p class="synth-intro">The whole reading, stripped of its robes:</p>';
    r.plain.forEach(row => {
      html += '<div class="pw-row"><div class="pw-label">' + escapeHTML(row.label) + '</div><div class="pw-text">' + escapeHTML(row.text) + "</div></div>";
    });
    html += "</div>";
  }

  html += '<div class="closing"><h2>To Carry With You</h2><p>' + escapeHTML(r.closing) + "</p></div>";

  html += '<div class="reading-actions">' +
    '<button class="btn-primary" onclick="goHome()">New Reading</button>' +
    '<button class="btn-ghost" onclick="copyReading()">Copy Reading as Text</button></div>';
  html += "</div>";
  container.innerHTML = html;
  activateCardImages(container);
}

function copyReading() {
  const r = state.reading; if (!r) return;
  let txt = "ARCANA TAROT READING, " + new Date(r.date).toLocaleString() + "\n";
  if (r.question) txt += "Question: " + r.question + "\n";
  txt += SPREADS[r.spreadKey].name + " · " + TOPICS[r.topic].label + "\n\n" + r.opening + "\n\n";
  if (r.verdict) txt += "VERDICT: " + r.verdict.verdict + "\n" + r.verdict.text + "\n\n";
  if (r.answer) txt += "THE CARDS' ANSWER\n" + r.answer.text + "\n\n";
  if (r.flow) txt += "THE ARC OF YOUR SPREAD\n" + r.flow + "\n\n";
  r.cards.forEach(c => {
    txt += "* " + c.position + ": " + c.name + (c.orient === "rev" ? " (Reversed)" : "") + "\n";
    if (c.about) txt += c.about + "\n";
    txt += c.body + "\n";
    if (c.orientNote) txt += c.orientNote + "\n";
    if (c.forYou) txt += "For your question: " + c.forYou + "\n";
    txt += "\n";
  });
  r.synthesis.forEach(s => { txt += "✦ " + s.title + "\n" + s.text + "\n\n"; });
  if (r.plain && r.plain.length) {
    txt += "IN PLAIN WORDS\n";
    r.plain.forEach(row => { txt += "- " + row.label + ": " + row.text + "\n"; });
    txt += "\n";
  }
  txt += r.closing + "\n";
  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.querySelector(".reading-actions .btn-ghost");
    if (btn) { btn.textContent = "Copied ✓"; setTimeout(() => btn.textContent = "Copy Reading as Text", 1500); }
  });
}

// ---------- Journal ----------
function saveToJournal(reading) {
  try {
    const journal = JSON.parse(localStorage.getItem("arcana_journal") || "[]");
    journal.unshift(reading);
    localStorage.setItem("arcana_journal", JSON.stringify(journal.slice(0, 50)));
  } catch (e) { /* private mode etc. */ }
}

function showJournal() {
  const list = document.getElementById("journal-list");
  let journal = [];
  try { journal = JSON.parse(localStorage.getItem("arcana_journal") || "[]"); } catch (e) {}
  if (!journal.length) {
    list.innerHTML = '<p class="empty-note">No readings yet. Your readings are saved here automatically. Private to this browser.</p>';
  } else {
    list.innerHTML = journal.map((r, i) =>
      '<div class="journal-entry" data-i="' + i + '">' +
      '<div class="je-date">' + new Date(r.date).toLocaleDateString(undefined, { dateStyle: "medium" }) + "</div>" +
      '<div class="je-main"><div class="je-q">' + escapeHTML(r.question || "(no question written)") + "</div>" +
      '<div class="je-meta">' + SPREADS[r.spreadKey].name + " · " + r.cards.map(c => c.name + (c.orient === "rev" ? " ℞" : "")).join(", ") + "</div></div>" +
      '<button class="je-del" title="Delete" data-del="' + i + '">✕</button></div>'
    ).join("");
    list.querySelectorAll(".journal-entry").forEach(el => {
      el.addEventListener("click", e => {
        if (e.target.dataset.del !== undefined) return;
        const r = journal[+el.dataset.i];
        state.reading = r;
        renderReading(r, document.getElementById("reading-container"), false);
        showStep("step-reading");
      });
    });
    list.querySelectorAll(".je-del").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        journal.splice(+btn.dataset.del, 1);
        localStorage.setItem("arcana_journal", JSON.stringify(journal));
        showJournal();
      });
    });
  }
  showStep("step-journal");
}

// ---------- Library ----------
function showLibrary() {
  renderLibrary("all");
  showStep("step-library");
}
document.querySelectorAll(".lib-chip").forEach(chip => chip.addEventListener("click", () => {
  document.querySelectorAll(".lib-chip").forEach(c => c.classList.remove("selected"));
  chip.classList.add("selected");
  renderLibrary(chip.dataset.arcana);
}));

function renderLibrary(filter) {
  const grid = document.getElementById("library-grid");
  const cards = window.TAROT_CARDS.filter(c => filter === "all" || c.arcana === filter);
  grid.innerHTML = "";
  cards.forEach(card => {
    const el = document.createElement("div");
    el.className = "lib-card";
    el.innerHTML = cardFaceHTML(card, "up") + '<div class="lib-name">' + card.name + "</div>";
    el.addEventListener("click", () => openCardModal(card));
    grid.appendChild(el);
  });
  activateCardImages(grid);
}

function openCardModal(card) {
  const modal = document.getElementById("card-modal");
  const content = document.getElementById("modal-content");
  const contexts = [["general", "General"], ["love", "Love"], ["career", "Career"], ["money", "Money"], ["health", "Wellbeing"], ["spiritual", "Spiritual"]];
  let html = '<button class="modal-close" onclick="closeModal()">✕</button>';
  html += '<div class="modal-top">' + cardFaceHTML(card, "up") +
    '<div><h2>' + card.name + "</h2><p class='modal-sub'>" + ARCANA_LABEL[card.arcana] +
    " · Element of " + card.element.charAt(0).toUpperCase() + card.element.slice(1) + "</p>" +
    '<div class="rc-keywords"><strong>Upright:</strong> ' + card.keywords.up.map(k => "<span>" + k + "</span>").join("") + "</div>" +
    '<div class="rc-keywords"><strong>Reversed:</strong> ' + card.keywords.rev.map(k => "<span>" + k + "</span>").join("") + "</div>" +
    "</div></div>";
  contexts.forEach(([key, label]) => {
    html += '<div class="modal-context"><h4>' + label + "</h4>" +
      '<p><strong class="up-tag">Upright</strong> ' + escapeHTML(card.meanings[key].up) + "</p>" +
      '<p><strong class="rev-tag2">Reversed</strong> ' + escapeHTML(card.meanings[key].rev) + "</p></div>";
  });
  content.innerHTML = html;
  modal.classList.add("open");
  activateCardImages(content);
}
function closeModal() { document.getElementById("card-modal").classList.remove("open"); }
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ---------- Ambience ----------
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
(function stars() {
  const wrap = document.getElementById("stars");
  for (let i = 0; i < 90; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = (Math.random() * 6).toFixed(2) + "s";
    s.style.animationDuration = (2.5 + Math.random() * 5).toFixed(2) + "s";
    const size = (Math.random() * 1.8 + 0.6).toFixed(1);
    s.style.width = size + "px"; s.style.height = size + "px";
    wrap.appendChild(s);
  }
})();
