// ============================================================
// ARCANA BaZi engine. Four Pillars computation and analysis.
// Uses vendor/calendar.js (LunarCal) for solar terms, lunar
// conversion and the sexagenary day cycle, 1900-2100.
// Year pillar boundary: 立春 (Start of Spring), the correct
// BaZi convention (not Jan 1, not lunar new year).
// ============================================================

const STEM_CN = STEMS.map(s => s.cn);
const BRANCH_CN = BRANCHES.map(b => b.cn);

function parseGanzhi(str) {
  return { stem: STEM_CN.indexOf(str[0]), branch: BRANCH_CN.indexOf(str[1]) };
}

function cycleIndex(stem, branch) {
  return ((6 * stem - 5 * branch) % 60 + 60) % 60;
}

function nayinOf(stem, branch) {
  return NAYIN[Math.floor(cycleIndex(stem, branch) / 2)];
}

// BaZi year: changes at 立春 (solar term #3, always in February)
function baziYearOf(y, m, d) {
  const liChun = LunarCal.getTerm(y, 3);
  return (m > 2 || (m === 2 && d >= liChun)) ? y : y - 1;
}

function yearPillar(baziYear) {
  return { stem: ((baziYear - 4) % 10 + 10) % 10, branch: ((baziYear - 4) % 12 + 12) % 12 };
}

// Ten God of stem x relative to day master dm
function tenGodOf(dm, x) {
  const de = STEMS[dm].element, xe = STEMS[x].element;
  const same = STEMS[dm].yinyang === STEMS[x].yinyang;
  if (de === xe) return same ? "比肩" : "劫财";
  if (GENERATES[de] === xe) return same ? "食神" : "伤官";
  if (CONTROLS[de] === xe) return same ? "偏财" : "正财";
  if (CONTROLS[xe] === de) return same ? "七杀" : "正官";
  return same ? "偏印" : "正印"; // xe generates de
}

// Days between two dates (UTC-safe)
function daysBetween(y1, m1, d1, y2, m2, d2) {
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
}

// The 节 (odd solar terms) adjacent to a birth date, for luck pillar start age
function findJieDates(y, m, d) {
  // Collect jie (terms 1,3,...23 are 小寒,立春,...; jie of solar month m is term 2m-1) around birth
  const list = [];
  for (let yy = y - 1; yy <= y + 1; yy++) {
    if (yy < 1900 || yy > 2100) continue;
    for (let mm = 1; mm <= 12; mm++) {
      list.push({ y: yy, m: mm, d: LunarCal.getTerm(yy, 2 * mm - 1) });
    }
  }
  let prev = null, next = null;
  for (const t of list) {
    const diff = daysBetween(y, m, d, t.y, t.m, t.d);
    if (diff <= 0) { if (!prev || diff > daysBetween(y, m, d, prev.y, prev.m, prev.d)) prev = t; }
    if (diff > 0 && !next) next = t;
  }
  return { prev, next };
}

// Main computation
function computeBazi(y, m, d, hour, gender) {
  // hour: 0-23 integer, or null for unknown
  if (y < 1901 || y > 2099) throw new Error("Year must be between 1901 and 2099.");

  // 晚子时: births at 23:00+ count as the next day's 子 hour
  let dy = y, dm = m, dd = d;
  if (hour !== null && hour >= 23) {
    const nd = new Date(Date.UTC(y, m - 1, d));
    nd.setUTCDate(nd.getUTCDate() + 1);
    dy = nd.getUTCFullYear(); dm = nd.getUTCMonth() + 1; dd = nd.getUTCDate();
  }

  const lunar = LunarCal.solar2lunar(dy, dm, dd);
  if (lunar === -1) throw new Error("Date out of supported range (1900-2100).");

  const bYear = baziYearOf(y, m, d);
  const yp = yearPillar(bYear);
  const mp = parseGanzhi(lunar.gzMonth);
  const dp = parseGanzhi(lunar.gzDay);

  let hp = null, hourBranch = null;
  if (hour !== null) {
    hourBranch = (hour >= 23) ? 0 : Math.floor((hour + 1) / 2) % 12;
    const hStem = ((dp.stem % 5) * 2 + hourBranch) % 10; // 五鼠遁
    hp = { stem: hStem, branch: hourBranch };
  }

  const pillars = [
    { key: "year", label: "Year Pillar 年柱", ...yp },
    { key: "month", label: "Month Pillar 月柱", ...mp },
    { key: "day", label: "Day Pillar 日柱", ...dp },
  ];
  if (hp) pillars.push({ key: "hour", label: "Hour Pillar 时柱", ...hp });

  // Element tally: pillar stems weight 1, hidden stems 1 / 0.5 / 0.3
  const tally = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
  const hiddenWeights = [1, 0.5, 0.3];
  for (const p of pillars) {
    tally[STEMS[p.stem].element] += 1;
    BRANCHES[p.branch].hidden.forEach((hs, i) => {
      tally[STEMS[hs].element] += hiddenWeights[i] || 0.3;
    });
  }
  const total = Object.values(tally).reduce((a, b) => a + b, 0);

  // Day master strength (simplified classical): support = same element + generator
  const dmElement = STEMS[dp.stem].element;
  const generatorOfDm = Object.keys(GENERATES).find(k => GENERATES[k] === dmElement);
  const support = tally[dmElement] + tally[generatorOfDm];
  const ratio = support / total;
  const monthEl = BRANCHES[mp.branch].element;
  const inSeason = (monthEl === dmElement || GENERATES[monthEl] === dmElement); // 得令
  const strong = ratio >= 0.5 || (ratio >= 0.4 && inSeason);

  // Favorable elements (simplified 用神)
  let favorable, avoid;
  if (strong) {
    favorable = [GENERATES[dmElement], CONTROLS[dmElement], Object.keys(CONTROLS).find(k => CONTROLS[k] === dmElement)];
    avoid = [dmElement, generatorOfDm];
  } else {
    favorable = [generatorOfDm, dmElement];
    avoid = [CONTROLS[dmElement], Object.keys(CONTROLS).find(k => CONTROLS[k] === dmElement), GENERATES[dmElement]];
  }

  // Ten gods for visible stems (excluding day master itself)
  const gods = pillars.filter(p => p.key !== "day").map(p => ({
    where: p.key, stem: p.stem, god: tenGodOf(dp.stem, p.stem)
  }));
  // plus main hidden stem of each branch
  for (const p of pillars) {
    const mainHidden = BRANCHES[p.branch].hidden[0];
    gods.push({ where: p.key + " branch", stem: mainHidden, god: tenGodOf(dp.stem, mainHidden), hidden: true });
  }

  // Luck pillars 大运
  const yangYear = STEMS[yp.stem].yinyang === "yang";
  const forward = (yangYear && gender === "male") || (!yangYear && gender === "female");
  const { prev, next } = findJieDates(y, m, d);
  let startAge = 1;
  if (prev && next) {
    const days = forward ? daysBetween(y, m, d, next.y, next.m, next.d)
                         : -daysBetween(y, m, d, prev.y, prev.m, prev.d);
    startAge = Math.max(1, Math.round(days / 3));
  }
  const monthCycle = cycleIndex(mp.stem, mp.branch);
  const luck = [];
  for (let i = 1; i <= 8; i++) {
    const c = ((monthCycle + (forward ? i : -i)) % 60 + 60) % 60;
    const st = c % 10, br = c % 12;
    const el1 = STEMS[st].element, el2 = BRANCHES[br].element;
    const favHits = [el1, el2].filter(e => favorable.includes(e)).length;
    const avoidHits = [el1, el2].filter(e => avoid.includes(e)).length;
    luck.push({
      fromAge: startAge + (i - 1) * 10, toAge: startAge + i * 10 - 1,
      stem: st, branch: br,
      quality: favHits > avoidHits ? "favorable" : avoidHits > favHits ? "challenging" : "mixed"
    });
  }

  // 三世书: BaZi-adjusted year's last digit + lunar month (leap month counts as its base month)
  const digit = ((bYear % 10) + 10) % 10;
  const sanshiKey = SANSHI_TABLE[digit][lunar.lMonth - 1];
  const sanshi = SANSHI_CATEGORIES[sanshiKey];

  return {
    input: { y, m, d, hour, gender },
    lunar: { year: lunar.lYear, month: lunar.lMonth, day: lunar.lDay, isLeap: lunar.isLeap,
             monthCn: lunar.IMonthCn, dayCn: lunar.IDayCn, zodiac: BRANCHES[yp.branch] },
    baziYear: bYear, liChunAdjusted: bYear !== y,
    pillars, hourKnown: hour !== null,
    dayMaster: { stem: dp.stem, element: dmElement, profile: DAY_MASTERS[dp.stem] },
    tally, total, ratio, strong, inSeason,
    favorable: favorable.filter(Boolean), avoid: avoid.filter(Boolean),
    gods, luck, forward, startAge,
    nayin: { year: nayinOf(yp.stem, yp.branch), day: nayinOf(dp.stem, dp.branch) },
    sanshi: { key: sanshiKey, digit, lunarMonth: lunar.lMonth, ...sanshi }
  };
}
