// ============================================================
// ARCANA BaZi + 三世书 page logic and rendering
// ============================================================

let gender = "female";

// Populate hour select with 时辰 blocks
(function initHours() {
  const sel = document.getElementById("bz-hour");
  const names = ["子 Zi", "丑 Chou", "寅 Yin", "卯 Mao", "辰 Chen", "巳 Si",
                 "午 Wu", "未 Wei", "申 Shen", "酉 You", "戌 Xu", "亥 Hai"];
  for (let h = 0; h < 24; h++) {
    const branch = (h === 23) ? 0 : Math.floor((h + 1) / 2) % 12;
    const opt = document.createElement("option");
    opt.value = h;
    opt.textContent = String(h).padStart(2, "0") + ":00 to " + String(h).padStart(2, "0") + ":59  ·  " + names[branch] + " hour";
    sel.appendChild(opt);
  }
})();

document.querySelectorAll(".bz-gender").forEach(chip => chip.addEventListener("click", () => {
  document.querySelectorAll(".bz-gender").forEach(c => c.classList.remove("selected"));
  chip.classList.add("selected");
  gender = chip.dataset.g;
}));

document.getElementById("bz-cast").addEventListener("click", castChart);

function showStep(id) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function newChart() { showStep("step-input"); }

function stemHTML(i) {
  const s = STEMS[i], e = ELEMENTS[s.element];
  return '<span class="gz" style="color:' + e.color + '">' + s.cn + '<small>' + s.pinyin + " · " + e.en + '</small></span>';
}
function branchHTML(i) {
  const b = BRANCHES[i], e = ELEMENTS[b.element];
  return '<span class="gz" style="color:' + e.color + '">' + b.cn + '<small>' + b.pinyin + " · " + b.zodiacEn + '</small></span>';
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function castChart() {
  const err = document.getElementById("bz-error");
  err.textContent = "";
  const dateVal = document.getElementById("bz-date").value;
  if (!dateVal) { err.textContent = "Please enter your date of birth."; return; }
  const [y, m, d] = dateVal.split("-").map(Number);
  const hourVal = document.getElementById("bz-hour").value;
  const hour = hourVal === "" ? null : Number(hourVal);
  let r;
  try { r = computeBazi(y, m, d, hour, gender); }
  catch (e) { err.textContent = e.message; return; }
  renderResult(r);
  showStep("step-result");
}

function renderResult(r) {
  const dmName = STEMS[r.dayMaster.stem].cn + " " + STEMS[r.dayMaster.stem].pinyin;
  const zod = r.lunar.zodiac;
  let html = '<div class="reading">';

  // Header
  html += '<div class="reading-head"><div class="reading-spread">Four Pillars of Destiny · 八字命盘</div>';
  html += "<h1>Your Chart</h1>";
  html += '<p class="reading-date">Born ' + r.input.y + "-" + String(r.input.m).padStart(2, "0") + "-" + String(r.input.d).padStart(2, "0") +
    (r.hourKnown ? ", " + String(r.input.hour).padStart(2, "0") + ":00 hour" : ", hour unknown") +
    " · Lunar 农历 " + r.lunar.year + " year, " + (r.lunar.isLeap ? "leap " : "") + r.lunar.monthCn + " " + r.lunar.dayCn +
    " · Year of the " + zod.zodiacEn + " " + zod.zodiacCn + "</p>";
  if (r.liChunAdjusted) {
    html += '<p class="reading-date">Note: you were born before 立春 (Start of Spring), so in the BaZi calendar your year is ' + r.baziYear + ", not " + r.input.y + ". This is correct and intentional.</p>";
  }
  html += "</div>";

  // Pillars table
  html += '<div class="pillar-grid">';
  const posMeaning = { year: "Ancestry, roots, early childhood", month: "Parents, career, young adulthood", day: "You yourself, marriage, middle life", hour: "Children, ambitions, later years" };
  for (const p of r.pillars) {
    html += '<div class="pillar"><div class="pillar-label">' + p.label + "</div>" +
      stemHTML(p.stem) + branchHTML(p.branch) +
      '<div class="pillar-meaning">' + posMeaning[p.key] + "</div></div>";
  }
  if (!r.hourKnown) {
    html += '<div class="pillar pillar-unknown"><div class="pillar-label">Hour Pillar 时柱</div><span class="gz">?</span><div class="pillar-meaning">Unknown birth hour</div></div>';
  }
  html += "</div>";
  html += '<p class="reading-guide">Reading the pillars: the top character of each pillar is a Heavenly Stem (天干) and the lower one an Earthly Branch (地支). The stem of your Day Pillar is your Day Master (日主), the character that represents you; everything else in the chart is read in relation to it. Your Day Master is <strong>' +
    dmName + ", " + ELEMENTS[r.dayMaster.element].en + " " + ELEMENTS[r.dayMaster.element].cn + "</strong>.</p>";

  // Day master reading
  html += '<div class="synthesis"><h2>Your Day Master: ' + esc(r.dayMaster.profile.title) + "</h2>";
  html += "<p>" + esc(r.dayMaster.profile.text) + "</p></div>";

  // Element balance
  html += '<div class="synthesis"><h2>Five Element Balance 五行</h2>';
  html += '<div class="element-bars">';
  for (const [el, info] of Object.entries(ELEMENTS)) {
    const pct = Math.round((r.tally[el] / r.total) * 100);
    html += '<div class="ebar-row"><div class="ebar-name" style="color:' + info.color + '">' + info.cn + " " + info.en + '</div>' +
      '<div class="ebar-track"><div class="ebar-fill" style="width:' + pct + '%;background:' + info.color + '"></div></div>' +
      '<div class="ebar-pct">' + pct + "%</div></div>";
  }
  html += "</div>";

  const sorted = Object.entries(r.tally).sort((a, b) => b[1] - a[1]);
  const strongest = sorted[0][0], weakest = sorted[sorted.length - 1][0];
  html += '<div class="synth-note"><h4>✦ Your chart\'s strength and lack</h4><p>' +
    "The dominant element in your chart is <strong>" + ELEMENTS[strongest].en + " " + ELEMENTS[strongest].cn + "</strong>. " +
    esc(ELEMENTS[strongest].excess) + "</p></div>";
  html += '<div class="synth-note"><p>' +
    "The scarcest element is <strong>" + ELEMENTS[weakest].en + " " + ELEMENTS[weakest].cn + "</strong>. " +
    esc(ELEMENTS[weakest].deficient) + "</p></div>";

  // Strength + favorable
  const favNames = r.favorable.map(e => ELEMENTS[e].en + " " + ELEMENTS[e].cn).join(", ");
  const favIndustries = r.favorable.map(e => ELEMENTS[e].industries).join("; ");
  const favColors = r.favorable.map(e => ELEMENTS[e].colors).join(", ");
  const favDirections = r.favorable.map(e => ELEMENTS[e].directions).join(", ");
  html += '<div class="synth-note"><h4>✦ Day Master strength and your favorable elements 喜用神</h4><p>' +
    "Weighing your chart, your Day Master is <strong>" + (r.strong ? "strong 身强" : "weak 身弱") + "</strong> (" +
    Math.round(r.ratio * 100) + "% of the chart's weighted energy supports it" + (r.inSeason ? ", and it is in season this birth month 得令" : ", and it is out of season this birth month") + "). " +
    (r.strong
      ? "A strong Day Master has energy to spend: your chart benefits from elements that channel, spend and discipline that strength. "
      : "A weak Day Master needs feeding and fellowship: your chart benefits from elements that nourish and reinforce it. ") +
    "Your favorable elements are <strong>" + favNames + "</strong>. Classical practice invites them in through environment and choices: colors such as " + favColors +
    "; the directions " + favDirections + "; and career fields aligned with them, such as " + favIndustries + ".</p></div>";
  html += "</div>";

  // Ten gods
  const godCounts = {};
  r.gods.forEach(g => { godCounts[g.god] = (godCounts[g.god] || 0) + 1; });
  const present = Object.entries(godCounts).sort((a, b) => b[1] - a[1]);
  html += '<div class="synthesis"><h2>The Ten Gods in Your Chart 十神</h2>';
  html += '<p class="synth-intro">Every stem in your chart plays a role relative to your Day Master. These roles, the Ten Gods, describe the cast of forces in your life. The strongest presences in your chart:</p>';
  for (const [god, count] of present.slice(0, 4)) {
    const info = TEN_GODS[god];
    html += '<div class="synth-note"><h4>✦ ' + god + " · " + info.en + (count > 1 ? " (appears " + count + " times)" : "") + "</h4><p>" + esc(info.text) + "</p></div>";
  }
  html += "</div>";

  // Luck pillars
  html += '<div class="synthesis"><h2>Your Luck Cycles 大运</h2>';
  html += '<p class="synth-intro">Life unfolds in ten year pillars, ' + (r.forward ? "moving forward" : "moving backward") +
    " through the calendar from your month pillar, beginning around age " + r.startAge +
    ". Cycles marked favorable carry your helpful elements; challenging ones ask more care; mixed ones carry both.</p>";
  html += '<div class="luck-row">';
  for (const l of r.luck) {
    html += '<div class="luck-cell ' + l.quality + '"><div class="luck-age">' + l.fromAge + "-" + l.toAge + '</div>' +
      '<div class="luck-gz">' + STEMS[l.stem].cn + BRANCHES[l.branch].cn + '</div>' +
      '<div class="luck-q">' + l.quality + "</div></div>";
  }
  html += "</div></div>";

  // Extras: nayin + zodiac
  html += '<div class="synthesis"><h2>Year Sound and Animal 纳音 · 生肖</h2>';
  html += '<div class="synth-note"><h4>✦ ' + r.nayin.year[0] + " · " + r.nayin.year[1] + "</h4><p>" +
    "In the sixty sound (纳音) tradition your birth year resonates as " + r.nayin.year[1] +
    ", and your day, the pillar of the self, as " + r.nayin.day[0] + ", " + r.nayin.day[1] + ".</p></div>";
  html += '<div class="synth-note"><h4>✦ Year of the ' + zod.zodiacEn + " " + zod.zodiacCn + "</h4><p>" + esc(ZODIAC_NOTES[zod.zodiacEn]) + "</p></div>";
  html += "</div>";

  // 三世书
  html += '<div class="sanshi"><div class="sanshi-head"><h2>三世书 · The Book of Three Lives</h2>';
  html += '<p class="sanshi-couplet">' + SANSHI_COUPLET.cn + "<br><em>" + esc(SANSHI_COUPLET.en) + "</em></p>";
  html += '<p class="synth-intro">Looked up the traditional way: your BaZi year ends in ' + r.sanshi.digit +
    " and you were born in lunar month " + r.sanshi.lunarMonth + ", which places your fortune under <strong>" +
    r.sanshi.cn + " · " + esc(r.sanshi.en) + "</strong>: " + esc(r.sanshi.theme) + ".</p></div>";
  html += '<div class="sanshi-panels">';
  html += '<div class="sanshi-panel"><h3>前世 · Past Life</h3><p>' + esc(r.sanshi.past) + "</p></div>";
  html += '<div class="sanshi-panel now"><h3>今生 · This Life</h3><p>' + esc(r.sanshi.present) + "</p></div>";
  html += '<div class="sanshi-panel"><h3>来世 · Next Life</h3><p>' + esc(r.sanshi.next) + "</p></div>";
  html += "</div></div>";

  html += '<div class="reading-actions">' +
    '<button class="btn-primary" onclick="newChart()">New Chart</button>' +
    '<button class="btn-ghost" onclick="location.href=\'tarot.html\'">Ask the Tarot Instead</button></div>';
  html += "</div>";

  document.getElementById("bazi-result").innerHTML = html;
}

// Stars
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
