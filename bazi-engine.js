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

// ============================================================
// Deep 三世书 extensions: 皇帝身命, 称骨, 受生债, 流年太岁
// ============================================================

// Season from the BaZi month branch (solar term boundaries):
// 寅卯辰 spring, 巳午未 summer, 申酉戌 autumn, 亥子丑 winter
function seasonOfMonthBranch(mb) {
  if ([2, 3, 4].includes(mb)) return "spring";
  if ([5, 6, 7].includes(mb)) return "summer";
  if ([8, 9, 10].includes(mb)) return "autumn";
  return "winter";
}

function emperorBody(monthBranch, hourBranch) {
  if (hourBranch === null || hourBranch === undefined) return null;
  const season = seasonOfMonthBranch(monthBranch);
  const partKey = EMPEROR_TABLE[season][hourBranch];
  return { season, partKey, part: EMPEROR_PARTS[partKey] };
}

// 称骨: bone weight in 钱. Needs the BaZi year ganzhi + lunar month/day + hour.
function chengGu(yearStem, yearBranch, lunarMonth, lunarDay, hourBranch) {
  const gz = STEM_CN[yearStem] + BRANCH_CN[yearBranch];
  const y = CHENGGU_YEAR[gz];
  const m = CHENGGU_MONTH[lunarMonth - 1];
  const d = CHENGGU_DAY[Math.min(lunarDay, 30) - 1];
  const partial = y + m + d;
  const h = (hourBranch === null || hourBranch === undefined) ? null : CHENGGU_HOUR[hourBranch];
  const total = h === null ? null : partial + h;
  const weightCn = w => Math.floor(w / 10) + "两" + (w % 10 ? (w % 10) + "钱" : "");
  let band = null, verse = null;
  if (total !== null) {
    const t = Math.max(21, Math.min(72, total));
    verse = CHENGGU_VERSES[t] || null;
    band = CHENGGU_BANDS.find(b => t >= b.min && t <= b.max) || null;
  }
  return { yearGz: gz, parts: { year: y, month: m, day: d, hour: h }, partial, total,
           weightCn: total !== null ? weightCn(total) : null,
           partialCn: weightCn(partial), verse, band };
}

// 受生债 by natal year branch (+ hour surcharge)
function shouShengDebt(yearBranch, hourBranch) {
  const row = SHOUSHENG_DEBT[yearBranch];
  return { ...row, branchCn: BRANCH_CN[yearBranch],
           hourDebt: (hourBranch === null || hourBranch === undefined) ? null : SHOUSHENG_HOUR[hourBranch] };
}

// Branch relation sets for 流年
const CHONG_PAIR = b => (b + 6) % 12;                       // 六冲
const LIUHE = { 0: 1, 1: 0, 2: 11, 11: 2, 3: 10, 10: 3, 4: 9, 9: 4, 5: 8, 8: 5, 6: 7, 7: 6 }; // 六合
const HAI = { 0: 7, 7: 0, 1: 6, 6: 1, 2: 5, 5: 2, 3: 4, 4: 3, 8: 11, 11: 8, 9: 10, 10: 9 };   // 六害
const PO = { 0: 9, 9: 0, 3: 6, 6: 3, 1: 4, 4: 1, 7: 10, 10: 7, 2: 11, 11: 2, 5: 8, 8: 5 };    // 六破
const SANHE = [[8, 0, 4], [11, 3, 7], [2, 6, 10], [5, 9, 1]];                                   // 三合 groups
const XING_GROUPS = [[2, 5, 8], [1, 10, 7], [0, 3]];        // 三刑 + 子卯刑
const ZIXING = [4, 6, 9, 11];                                // 自刑: 辰午酉亥

function taiSuiRelation(natalBranch, yearBranch) {
  if (natalBranch === yearBranch) {
    // 值太岁; some branches also self-punish in their own year
    return ZIXING.includes(natalBranch) ? ["zhi", "xing"] : ["zhi"];
  }
  if (CHONG_PAIR(natalBranch) === yearBranch) return ["chong"];
  const rels = [];
  for (const g of XING_GROUPS) if (g.includes(natalBranch) && g.includes(yearBranch)) rels.push("xing");
  if (HAI[natalBranch] === yearBranch) rels.push("hai");
  if (PO[natalBranch] === yearBranch) rels.push("po");
  if (rels.length) return rels;
  if (LIUHE[natalBranch] === yearBranch) return ["he"];
  for (const g of SANHE) if (g.includes(natalBranch) && g.includes(yearBranch)) return ["he"];
  return ["none"];
}

// 流年 assessment for the current calendar year against the natal chart
function liuNian(natal, today) {
  const now = today || new Date();
  const y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate();
  const currentBaziYear = baziYearOf(y, m, d);
  const yp = yearPillar(currentBaziYear);
  const gz = STEM_CN[yp.stem] + BRANCH_CN[yp.branch];
  const rels = taiSuiRelation(natal.pillars[0].branch, yp.branch);
  const yearElement = STEMS[yp.stem].element;
  const branchElement = BRANCHES[yp.branch].element;
  const favHits = [yearElement, branchElement].filter(e => natal.favorable.includes(e));
  const avoidHits = [yearElement, branchElement].filter(e => natal.avoid.includes(e));
  return {
    year: currentBaziYear, gz, stem: yp.stem, branch: yp.branch,
    zodiacEn: BRANCHES[yp.branch].zodiacEn, zodiacCn: BRANCHES[yp.branch].zodiacCn,
    relations: rels.map(r => TAISUI_RELATIONS[r]),
    afflicted: rels.some(r => ["zhi", "chong", "xing", "hai", "po"].includes(r)),
    elementNote: { yearElement, branchElement, favHits, avoidHits },
    taisui: TAISUI_INFO[gz] || null
  };
}

// ------------------------------------------------------------
// Personalized prayer plan: guardian by zodiac, matters by the
// chart's own 三世书 category and weakest element, Tai Sui only
// when actually afflicted.
// ------------------------------------------------------------
function prayerPlan(r, ln) {
  const yearBranch = r.pillars[0].branch;
  const guardian = BENMING_FO[yearBranch];
  const concerns = SANSHI_CONCERN[r.sanshi.key] || ["peace"];
  // Weakest element adds its own concern
  const sorted = Object.entries(r.tally).sort((a, b) => a[1] - b[1]);
  const weakest = sorted[0][0];
  const elementConcern = { water: "peace", fire: "career", wood: "career", earth: "peace", metal: "career" }[weakest];
  const matterKeys = [...new Set([...concerns, elementConcern])].slice(0, 2);
  const matters = matterKeys.map(k => ({ key: k, ...MATTER_DEITIES[k] }));
  const favEl = r.favorable[0];
  const favInfo = ELEMENTS[favEl];
  return {
    guardian, matters,
    afflicted: ln.afflicted,
    relationCn: ln.relations.map(x => x.cn).join(" 兼 "),
    household: "Your own auspicious setup, from your chart rather than anyone else's: your first favorable element is " + favInfo.en + " " + favInfo.cn +
      ", so face " + favInfo.directions + " when you pray at home, wear or carry " + favInfo.colors +
      " on days that matter, and keep your small altar or quiet corner on the " + favInfo.directions + " side of your home. Offer on 初一 and 十五 mornings: wash hands and face, light one or three sticks of incense (never two or four), say your name and birth date, speak the matter plainly without bargaining, bow three times, and let the incense finish undisturbed. Then, within the week, do one concrete good deed in the same cause. The tradition is unanimous that heaven audits the deed, not the incense."
  };
}

// ------------------------------------------------------------
// A humanized plain-language summary of the whole chart
// ------------------------------------------------------------
function plainChartSummary(r, ln, eb, cg) {
  const cap = t => t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
  const dm = r.dayMaster;
  const dmTitle = dm.profile.title.replace(/\s*\([^)]*\)$/, "");
  const zodiac = r.lunar.zodiac;
  const favNames = r.favorable.map(e => ELEMENTS[e].en + " " + ELEMENTS[e].cn).join(" and ");
  const rows = [];
  const art = /^[AEIOU]/.test(zodiac.zodiacEn) ? "An " : "A ";
  rows.push({ label: "Who you are", text: art + zodiac.zodiacEn + " " + zodiac.zodiacCn + " by year, and at your core " + dmTitle +
    ": " + STEMS[dm.stem].cn + " " + STEMS[dm.stem].pinyin + " " + ELEMENTS[dm.element].en + ", born " + (r.strong ? "strong" : "gentle") +
    ". " + dm.profile.text.split(". ").slice(1, 2).join(". ") + "." });
  rows.push({ label: "Your money story", text: r.sanshi.cn + ", " + r.sanshi.theme.split("·")[1].trim() +
    ". " + r.sanshi.present.split(". ").slice(0, 2).join(". ") + "." });
  if (eb) rows.push({ label: "Your place at court", text: "Born on " + eb.part.cn + ", " + eb.part.en.toLowerCase() +
    ". " + cap(eb.part.text.split(": ")[1].split(". ")[0]) + "." });
  if (cg && cg.total !== null && cg.band) rows.push({ label: "The weight of your bones", text: cg.weightCn + ", " + cg.band.grade +
    ". " + cap(cg.band.life.split(". ")[1]) + "." });
  const relMain = ln.relations[0];
  rows.push({ label: "This year, " + ln.year, text: (ln.afflicted ? "A year to walk carefully: " : "A workable year: ") + relMain.cn + ", " + relMain.en.toLowerCase() +
    ". " + relMain.avoid.split(", ")[0] + ", and lean on your favorable elements, " + favNames + ", in colors, directions and choices." });
  return rows;
}
