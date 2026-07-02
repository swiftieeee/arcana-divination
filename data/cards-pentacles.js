// Suit of Pentacles. Earth. Material world, work, money, body, craft.
window.TAROT_CARDS = window.TAROT_CARDS || [];
window.TAROT_CARDS.push(
{
  id: 64, name: "Ace of Pentacles", arcana: "pentacles", number: 1, display: "Ace", glyph: "pentacle", element: "earth",
  keywords: { up: ["new opportunity", "seed money", "material beginning", "prosperity offered"], rev: ["missed opportunity", "shaky foundations", "scarcity thinking"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Take the tangible opportunity and plant it properly. This seed is real, and it grows at the speed of your care.",
            rev: "Before declining or fumbling the offer, check whether the obstacle is the deal or your doubt. Re-examine both." },
  meanings: {
    general: { up: "A golden seed offered from a cloud: a concrete, material opportunity, money, work, home, health, with genuine growing potential. Aces are offers: this one rewards practical, prompt cultivation. Take it and plant it well.",
               rev: "The seed dropped or doubted: an opportunity slipping through planning delays, or foundations too shaky to build on yet. Secure the ground first. Then watch for the offer's second pass; they often come around again." },
    love:    { up: "A relationship opportunity with real-world roots. Stable, buildable, shows up on time. Less fireworks than foundation; in the long ledger, foundation is the romance.",
               rev: "A promising connection undermined by practical instability or hesitation at the threshold. Address the material blockers honestly, or stop letting them excuse the deeper hesitation." },
    career:  { up: "The tangible break: the offer, the contract, the funded project. This is matter, not mist. Negotiate well, start strong, and treat the beginning as the foundation it is.",
               rev: "A career opportunity missed, mispriced, or built on unverified promises. Check the foundation before the next one: is the role funded, the company sound, the offer in writing?" },
    money:   { up: "The suit's purest money card, upright: new income, a windfall's seed, the beginning of real prosperity. Anchor it immediately. First allocation determines final destination.",
               rev: "Money arriving and evaporating, or opportunity declined from scarcity reflex. Build the catch-basin (automatic saving) before more water arrives." },
    health:  { up: "A grounded fresh start for the body. The program begun properly, the habit seeded in fertile routine. Physical foundations laid now hold for years.",
               rev: "Health investments that keep not-quite-starting. The unused membership, the plan without a first day. Shrink the seed until planting is trivial, then plant today." },
    spiritual:{ up: "Spirit taking material form: practice embodied, the sacred found in soil, work, and daily bread. Ground the insight in one concrete act.",
               rev: "Treating the material as spiritually beneath you. While it quietly destabilizes everything above it. The bills paid and the body tended ARE practice; start there." }
  }
},
{
  id: 65, name: "Two of Pentacles", arcana: "pentacles", number: 2, display: "II", glyph: "pentacle", element: "earth",
  keywords: { up: ["juggling", "adaptability", "balancing priorities", "flexible flow"], rev: ["dropped balls", "overcommitment", "disorganization"] },
  yesNo: { up: "maybe", rev: "no" }, polarity: { up: 0, rev: -1 },
  advice: { up: "Keep the juggle light and rhythmic. Adaptability is the skill being tested, and prioritization is its secret.",
            rev: "You're juggling one commitment past capacity. Choose what drops on purpose before physics chooses for you." },
  meanings: {
    general: { up: "The juggler mid-flow: multiple demands kept aloft with rhythm and humor. The balance is genuinely working, for now, because you're adapting rather than gripping. Stay light; but know the difference between a rhythm and a scramble.",
               rev: "The juggle failing: commitments colliding, details slipping, the smile becoming a grimace. Overcommitment is a math problem wearing a virtue costume. Subtract deliberately." },
    love:    { up: "Balancing love with life's other plates, work, family, obligations, and mostly pulling it off. Keep the relationship among the priorities, not the remainders; scheduled love is still love.",
               rev: "The relationship getting whatever attention survives everything else. Leftovers as a love language. Rebalance visibly: cancel something else for them, for once." },
    career:  { up: "Multiple projects handled with genuine dexterity. Your adaptability is being noticed. Ride the productive juggle, and log what it teaches about your actual capacity.",
               rev: "Too many workstreams, dropping quality everywhere. Busy as a substitute for effective. Renegotiate scope now, from strength, before a public drop renegotiates it for you." },
    money:   { up: "Cash-flow choreography: income and obligations timed, resources shifted nimbly, ends meeting through skill. Managing well. Now build the buffer that makes managing unnecessary.",
               rev: "Robbing Peter to pay Paul on a rotating schedule. The float becoming the system. Consolidate, automate, and face the totals; the juggle hides the arithmetic." },
    health:  { up: "Wellbeing kept in the rotation despite everything. Imperfect but present. Flexible consistency (something daily, anything) beats rigid programs abandoned whole.",
               rev: "Health as the first ball dropped whenever life speeds up. The pattern itself is the diagnosis. Make one non-negotiable: movable in time, unremovable in fact." },
    spiritual:{ up: "Practice woven into a full life. Equanimity amid the juggle, the balancing itself done mindfully. The monastery is optional; the presence isn't.",
               rev: "Too scattered for any inner life. Spirit scheduled last and cancelled first. Ten protected minutes daily outweighs the someday-retreat." }
  }
},
{
  id: 66, name: "Three of Pentacles", arcana: "pentacles", number: 3, display: "III", glyph: "pentacle", element: "earth",
  keywords: { up: ["teamwork", "craftsmanship", "skill recognized", "building together"], rev: ["poor collaboration", "mediocrity accepted", "credit disputes"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Build it with others and build it well. Your craft plus their craft plus a shared blueprint is the whole formula.",
            rev: "Fix the collaboration before the product: clarify roles, credit, and standards. Most 'quality problems' are teamwork problems in disguise." },
  meanings: {
    general: { up: "The cathedral card: skilled work, recognized and combined with others' skills toward something none could build alone. Collaboration is functioning, craft is respected, and the structure rising is sound. Contribute your best and trust the scaffolding.",
               rev: "The build stalling on human friction: unclear roles, unshared standards, effort without coordination. The blueprint conversation everyone skipped is now mandatory. Have it, then resume." },
    love:    { up: "Love as joint craftsmanship. Actively building the relationship: the communication patterns, the shared projects, the future's architecture. Working on it together IS the intimacy.",
               rev: "Building solo on a two-person site. One partner drafting futures the other hasn't reviewed. Align on the blueprint; effort toward different buildings just produces rubble faster." },
    career:  { up: "Your skill meeting its right context: the team that values it, the project worthy of it, the recognition arriving through collaboration. Quality is being noticed. Keep delivering it visibly.",
               rev: "Skilled work sabotaged by team dysfunction, or standards eroding to the room's lowest comfort. Raise the bar explicitly or find the room that already holds it." },
    money:   { up: "Prosperity through partnership and craft. Fair joint ventures, skills commanding proper rates, money built like masonry: course upon course.",
               rev: "Financial collaboration without documentation. The handshake deal fraying, contributions disputed. Paper the partnership now; contracts are how friendships survive money." },
    health:  { up: "The care team assembling: professionals, partners, and your own effort in working combination. Coordinated care outperforms solo heroics. Use the whole crew.",
               rev: "Health advice from uncoordinated sources conflicting into paralysis. Appoint a primary, one professional who sees the whole picture, and route decisions through them." },
    spiritual:{ up: "The sangha principle: growth built in community, each practice strengthening the others'. Find your fellow builders; the temple is collective.",
               rev: "Community friction obscuring the shared purpose, or going it alone past the point of benefit. Reconcile or recommit; the work needs hands, plural." }
  }
},
{
  id: 67, name: "Four of Pentacles", arcana: "pentacles", number: 4, display: "IV", glyph: "pentacle", element: "earth",
  keywords: { up: ["security", "holding on", "control", "scarcity's grip"], rev: ["loosening the grip", "generosity returning", "spending released"] },
  yesNo: { up: "maybe", rev: "maybe" }, polarity: { up: -1, rev: 1 },
  advice: { up: "Notice what the clutching costs: the coins are safe and the arms are full. Nothing new can be received in this posture.",
            rev: "The grip is loosening; let it. Money, control, and love all circulate. They only work in motion." },
  meanings: {
    general: { up: "The miser's pose: security achieved and then over-defended. Hoarding money, control, or the status quo until stability becomes rigidity. What you have is protected; what you could have is blocked by the same clenched posture. Loosen strategically.",
               rev: "Release beginning: the grip relaxing, generosity thawing, control delegated at last. Healthy, provided it's opening, not swinging to the opposite spillage. Circulate; don't hemorrhage." },
    love:    { up: "Holding the relationship too tightly. Possessiveness as security, control as care, the connection managed like an asset that might be stolen. Love held loosely stays; love clutched suffocates.",
               rev: "The possessive grip easing. Trust replacing surveillance, space becoming a gift rather than a threat. Keep opening; the relationship breathes better already." },
    career:  { up: "Guarding position over growing it: information hoarded, delegation refused, the safe role clutched while opportunities pass. Security-first has become ceiling-first; calculated openness is the unlock.",
               rev: "Loosening the professional grip. Delegating, sharing credit, risking the stretch role. The control released converts directly into capacity gained." },
    money:   { up: "Saving shading into scarcity: the account grows while the life shrinks, every expense an existential threat. The fear predates the finances. Audit both, and let the numbers (not the dread) set the policy.",
               rev: "The vault door opening. Reasonable spending resumed, generosity practiced, money remembered as a tool. Balance point found: neither hoarding nor hemorrhage." },
    health:  { up: "Tension as policy: the body braced, control extended to every meal and metric, stress hormones funding the whole operation. The white-knuckle approach to health is itself the health problem.",
               rev: "Unclenching. Flexibility re-entering the regimen, rest permitted, the body trusted slightly. Control loosened this way tends to improve the very numbers it feared for." },
    spiritual:{ up: "Clinging as suffering's engine. To possessions, identities, certainties. The inventory of what you can't release is the syllabus; start with the smallest item.",
               rev: "Non-attachment arriving in practice, not just theory. Holdings held lightly, outcomes released. The open hand receives; you're proving it to yourself now." }
  }
},
{
  id: 68, name: "Five of Pentacles", arcana: "pentacles", number: 5, display: "V", glyph: "pentacle", element: "earth",
  keywords: { up: ["hardship", "feeling shut out", "material struggle", "help unnoticed"], rev: ["recovery", "aid accepted", "the door found"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -2, rev: 1 },
  advice: { up: "You're walking past the lit window. Help exists and pride or despair is editing it out. Ask; asking is the skill this season teaches.",
            rev: "The worst is thawing. Accept the help fully, and keep the humility receipts for when someone else is in the snow." },
  meanings: {
    general: { up: "The figures in the snow outside the lit church window: hardship, material, physical, or the poverty of feeling shut out, with aid nearby and unseen. The suffering is real; so is the door. Most of this card's pain persists only until someone asks for help.",
               rev: "The thaw: recovery from hardship, assistance accepted, re-entry into warmth. The climb back has begun. Pace it, and let the experience widen your compassion permanently." },
    love:    { up: "Feeling out in the cold romantically. Excluded, unchosen, or weathering hardship as a couple that's forgotten it's a team. Huddle together, not apart; shared cold is half as cold.",
               rev: "Warmth returning to the connection. Reconciliation after a frozen season, or self-worth recovering enough to stop accepting winter as a residence." },
    career:  { up: "Professional winter: rejection, insecurity, or a workplace where you're perpetually outside the window. Survival mode is legitimate, but ask for the referral, the leads, the help; the network is warmer than the pride admits.",
               rev: "Career recovery from a hard stretch. Doors reopening, confidence rebuilding. Take the transitional help without shame; everyone credible was once helped." },
    money:   { up: "Real financial hardship or its felt equivalent. Scarcity constricting every decision. Triage, seek the assistance that exists for exactly this, and refuse the isolation: money problems compound in silence.",
               rev: "Financial recovery underway. The debt shrinking, the assistance working, spring arriving in the accounts. Rebuild with the lessons; discard the shame." },
    health:  { up: "The body in a hard season. Illness, depletion, or care delayed by cost or hopelessness. Help is closer and more accessible than the despair reports; make the appointment, ask about the options.",
               rev: "Health recovering from a low. Treatment working, strength returning, the system's doors found at last. Continue care past the first relief; full recoveries finish quietly." },
    spiritual:{ up: "The dark night's material verse: feeling abandoned by providence itself, faith frozen. Note where you're walking. Right past the window. The warmth hasn't moved; the gaze has.",
               rev: "Faith rewarming after the freeze, meaning returning, providence reappearing in ordinary kindnesses. The winter becomes part of the testimony." }
  }
},
{
  id: 69, name: "Six of Pentacles", arcana: "pentacles", number: 6, display: "VI", glyph: "pentacle", element: "earth",
  keywords: { up: ["generosity", "fair exchange", "help given and received", "balance of power"], rev: ["strings attached", "one-sided charity", "debt dynamics"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Give what you can, receive what you need, and keep the scales visible. Clean exchange builds more than charity or pride ever did.",
            rev: "Inspect the strings on the gift. Attached or expected. Generosity that creates obligation is a purchase; rename it honestly." },
  meanings: {
    general: { up: "The merchant with the scales: generosity in balance. Giving from surplus, receiving without shame, resources circulating fairly. Wherever you stand in the exchange this season, keep it clean, keep it scaled, and keep it moving.",
               rev: "The exchange corrupted: gifts with invoices attached, help that establishes hierarchy, or taking that's become a posture. Recalculate who owes whom what, often the honest answer is 'nothing, and that's the problem.'" },
    love:    { up: "Love as fair exchange. Support flowing both directions, each giving in their dialect and receiving in the other's. Generosity is the relationship's climate; keep the giving joyful and the ledger closed.",
               rev: "The benefactor dynamic: one partner as perpetual giver, the other as managed recipient. Power disguised as devotion. Rebalance toward mutuality or the roles calcify." },
    career:  { up: "Professional generosity compounding: mentorship given and received, credit shared, favors flowing through a healthy network. Give first; this ecosystem repays.",
               rev: "Workplace generosity with hooks. The mentor who owns you, the help that becomes leverage. Accept aid with clear terms; give it with none." },
    money:   { up: "Money in right circulation: debts repaid, generosity budgeted, help given that actually helps. If receiving. Receive well; if giving. Give scaled to real surplus.",
               rev: "Lending that strains, giving that enables, or charity as self-image maintenance. Generosity needs boundaries to remain generosity. Otherwise it's slow-motion resentment." },
    health:  { up: "Balance of care: accepting support during weakness, offering it in strength, the giving-receiving rhythm that health actually runs on.",
               rev: "All output, no intake: caring for everyone on an empty tank, or refusing the care that's offered. The oxygen-mask rule is not a metaphor this month." },
    spiritual:{ up: "Grace economics: everything received was given; everything given returns transformed. Practice both directions of the flow deliberately.",
               rev: "Spiritual giving as status. The donation announced, the service performed for its witnesses. Give one significant thing in complete secrecy and study what it teaches." }
  }
},
{
  id: 70, name: "Seven of Pentacles", arcana: "pentacles", number: 7, display: "VII", glyph: "pentacle", element: "earth",
  keywords: { up: ["patience", "assessment", "long-term investment", "the pause before harvest"], rev: ["impatience", "sunk costs", "misplaced effort"] },
  yesNo: { up: "maybe", rev: "no" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Lean on the hoe and assess honestly: the vine is growing. Feed what's working, prune what isn't, and respect the crop's own calendar.",
            rev: "Audit before you continue: effort is not evidence. If seven reviews haven't shown fruit, the plot, not the effort, is the problem." },
  meanings: {
    general: { up: "The farmer's pause: work invested, growth visible, harvest not yet. The assessment moment. This card blesses the patient review: what's thriving deserves more, what's stalling deserves scrutiny, and the timeline deserves respect. Sustainable beats spectacular.",
               rev: "Impatience or misallocation: yanking up seedlings to check roots, or years sunk into ground that was never going to yield. Distinguish slow-growing from dead. Then reinvest accordingly, without sentiment." },
    love:    { up: "The relationship in cultivation: investment made, deepening visible, full bloom still ahead. This is the tending stage. Consistent, unglamorous, decisive. Evaluate honestly and keep gardening.",
               rev: "Waiting on a harvest the relationship shows no sign of producing. Potential loved instead of the person present. Set an honest season: what growth, by when, would justify continued planting?" },
    career:  { up: "Career compounding quietly: skills deepening, reputation accruing, the long project maturing. Progress is real even where invisible. Review strategically, adjust modestly, persist.",
               rev: "Effort poured into a role or venture that audits badly. Sunk-cost gravity holding you to depleted soil. The years invested are spent regardless; decide on future yield alone." },
    money:   { up: "The compounding card: investments growing at their unhurried, unstoppable rate. Review the portfolio calmly, rebalance what's misweighted, and let time do the heavy lifting.",
               rev: "Impatient money undoing patient money. Churning positions, chasing faster crops, abandoning strategies mid-compound. The plan wasn't failing; the waiting was. Recommit or genuinely restructure, but stop oscillating." },
    health:  { up: "Health as agriculture: the routine's results arriving on the body's schedule, not the app's. Progress is compounding beneath the surface. Hold steady and measure monthly, not daily.",
               rev: "Program-hopping before any program can work, or persisting with one that measurably isn't. Give protocols honest trials with defined review dates. Then decide from data." },
    spiritual:{ up: "The practice's slow fruit: growth measured in years, visible only in retrospect. Trust the cultivation; the deepest changes never announce themselves daily.",
               rev: "Demanding receipts from the inner life. Enlightenment on a deadline. The watched soul never boils; return to practice without the stopwatch." }
  }
},
{
  id: 71, name: "Eight of Pentacles", arcana: "pentacles", number: 8, display: "VIII", glyph: "pentacle", element: "earth",
  keywords: { up: ["mastery through repetition", "diligence", "craft", "devoted skill-building"], rev: ["perfectionism", "drudgery", "cut corners", "skill plateau"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Do the reps. Mastery is today's coin carved well, times ten thousand. Put your head down and carve.",
            rev: "Check what the repetition is serving: perfectionism polishing coin one forever, or drudgery carving coins nobody needs. Recalibrate purpose, then resume." },
  meanings: {
    general: { up: "The apprentice becoming master, one carved coin at a time: focused repetition, standards rising, skill compounding into identity. Whatever you asked about. The answer is deliberate practice, applied daily, without shortcuts. The work works.",
               rev: "The workbench dysfunctions: perfectionism that never ships, drudgery that never questions, or corners cut that the finished work will confess. Reconnect effort to purpose. Then either recommit to the craft or change benches." },
    love:    { up: "Love as a practiced craft: the listening improved, the conflict skills drilled, devotion expressed through consistent effort. Relationships reward exactly this kind of unglamorous work. You're doing it; continue.",
               rev: "Work eclipsing the relationship, or the relationship itself gone mechanical. Motions without presence. Effort matters only when the beloved can feel it; redirect some craftsmanship toward them." },
    career:  { up: "Skill-building season at full power: the certification, the portfolio, the ten thousand hours accruing visibly. Your dedication is being converted directly into mastery and marketability. Protect the deep work time.",
               rev: "Diligence misfiring: perfectionism stalling delivery, or grinding without growth. The plateau where effort repeats instead of progresses. Seek harder problems or better feedback; volume alone stopped teaching a while ago." },
    money:   { up: "Income built on sharpening skill. Earning power as the ultimate asset, compounding with every improvement. Invest in the craft; it outyields most portfolios.",
               rev: "Working hard and earning flat. Effort unlinked from rate. The market pays for scarce skill, not accumulated hours; audit what's scarce about yours and build that." },
    health:  { up: "Health as practice: the form refined, the routine honored, small executions compounding into a different body. Technique and consistency. You have the method; keep the appointments with it.",
               rev: "The regimen turned obsessive or joyless. Form without vitality, discipline without dividend. If the practice costs your life-force to maintain your health, renegotiate its terms." },
    spiritual:{ up: "Practice IS the path: the daily sitting, the repeated prayer, the craft of attention refined coin by coin. No breakthrough replaces this; every breakthrough rides it.",
               rev: "Technique fetishized past its purpose. The perfect posture, the optimized practice stack, spirit lost in its own workshop. The method serves the opening; reopen." }
  }
},
{
  id: 72, name: "Nine of Pentacles", arcana: "pentacles", number: 9, display: "IX", glyph: "pentacle", element: "earth",
  keywords: { up: ["earned independence", "self-sufficiency", "refined enjoyment", "the garden built"], rev: ["dependence", "worth measured in assets", "luxury without liberty"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Stand in the garden you planted and actually enjoy it. Self-sufficiency this earned is meant to be savored, not just maintained.",
            rev: "Check what the lifestyle costs in freedom. Gilded dependence is still dependence. Rebuild the self-sufficient core." },
  meanings: {
    general: { up: "The woman in her own vineyard: independence earned, discipline matured into abundance, solitude enjoyed rather than endured. You built this. The security, the standards, the self-sufficiency. Walk the grounds; savor what discipline purchased.",
               rev: "The vineyard's shadow: comfort dependent on someone else's harvest, worth pegged to possessions, or luxury maintained at freedom's expense. Audit what's yours outright, materially and psychologically, and rebuild from that core." },
    love:    { up: "Whole-person love: two complete lives choosing each other. Desire without desperation. Your independence is the attraction and the safeguard; bring your full vineyard to the table, not your vacancy.",
               rev: "Independence as armor, or its opposite. Identity dissolved into the relationship. Both prevent real meeting: intimacy requires a self to share and the willingness to share it." },
    career:  { up: "Professional self-possession: expertise that stands alone, a reputation that precedes you, work chosen rather than begged for. You've earned the leverage. Negotiate and operate like it.",
               rev: "Golden-handcuffed: the compensation owns the calendar, the title owns the identity. Rebuild optionality, savings, skills, network, until staying is a choice again." },
    money:   { up: "Financial independence in view or in hand. Assets working, discipline paying dividends, luxury affordable without wobble. Enjoy it deliberately; wealth unenjoyed is just anxious arithmetic.",
               rev: "Lifestyle outpacing the assets, or net worth quietly installed as self-worth. Both are instability wearing silk. Re-anchor to sufficiency and to identity beyond the balance." },
    health:  { up: "The body as tended garden: vitality from years of quiet discipline, wellbeing that's self-maintained and genuinely enjoyed. The habits are paying compound interest. Stroll in the results.",
               rev: "Wellness outsourced or performed. Dependent on trainers, products, and audiences rather than owned practice. Repatriate the basics; the garden needs its own gardener." },
    spiritual:{ up: "The cultivated inner estate: a rich solitude, practices matured into peace, the self enjoyed as good company. This contentment is an achievement. Inhabit it gratefully.",
               rev: "Comfort as the final attachment. The pleasant life quietly replacing the examined one. Abundance is a fine base camp and a poor summit; keep climbing inward." }
  }
},
{
  id: 73, name: "Ten of Pentacles", arcana: "pentacles", number: 10, display: "X", glyph: "pentacle", element: "earth",
  keywords: { up: ["legacy", "lasting wealth", "family foundations", "generational stability"], rev: ["family money friction", "unstable foundations", "short-term thinking"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Build for the people after you. Decisions made at legacy-scale are almost always the right ones at life-scale too.",
            rev: "Repair the foundation before decorating the house: the family friction, the shaky structure, the short-term patch. Those first." },
  meanings: {
    general: { up: "The suit's culmination: wealth become legacy, security become inheritance, the family (blood or chosen) established across generations. Think in decades now. What you're building is bigger than a season, and it's working.",
               rev: "Cracks in the establishment: family conflict over resources, traditions binding instead of blessing, or long-term security traded for short-term optics. Foundation repair is unglamorous and non-optional. Begin." },
    love:    { up: "Love at estate-scale: the partnership woven into family, tradition, and permanence. In-laws, homes, histories merging. This is commitment's deepest layer; a relationship with this card has roots below the frost line.",
               rev: "Family friction pressing on the partnership. Approval withheld, traditions clashing, inheritance politics. The couple is the new founding unit: align inward first, then face the clans as one." },
    career:  { up: "Institutional success: the established firm, the lasting reputation, work that outlives the worker. Build the durable thing, systems, successors, standards, and your professional legacy assembles itself.",
               rev: "Stability revealed as scenery. The venerable employer restructuring, the safe path shifting underfoot. Diversify your security: skills and network are the only truly portable pension." },
    money:   { up: "Generational money done right: estates planned, wealth structured to outlast its maker, family provided for across time. Make the long arrangements, wills, funds, structures, while it's easy.",
               rev: "Money straining the family fabric. Inheritance disputes, dependence resented, support unspoken-of. Put the arrangements in writing and the expectations in conversation; silence is the expensive option." },
    health:  { up: "Health as inheritance: the family patterns known and managed, habits established that your future self and family will bank on. Prevention is legacy-building.",
               rev: "Family health patterns repeating unexamined. The hereditary risk unscreened, the household habits unquestioned. Break the chain deliberately; that's a gift across generations." },
    spiritual:{ up: "The long lineage: wisdom received, lived, and passed on. Your place in a chain longer than memory. Honor the inheritance by adding to it.",
               rev: "Tradition as furniture. Inherited forms kept for appearance, meaning long since moved out. Re-inhabit what's genuinely yours; release what was only ever décor." }
  }
},
{
  id: 74, name: "Page of Pentacles", arcana: "pentacles", number: 11, display: "Page", glyph: "pentacle", element: "earth",
  keywords: { up: ["studiousness", "a practical opportunity", "diligent beginnings", "learning by doing"], rev: ["procrastination", "plans without traction", "distracted study"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Study it, then do it small. The opportunity rewards the diligent beginner who starts concretely and learns by building.",
            rev: "Close the research tab and produce one tangible thing today. The plan's next stage is called doing it." },
  meanings: {
    general: { up: "The student holding the coin up to the light: a practical opportunity examined with real diligence. The course begun, the venture researched, the skill apprenticed. Grounded curiosity is the energy; reward it with concrete first steps.",
               rev: "The eternal planning stage: research as procrastination, enthusiasm without deliverables, the coin studied and never invested. The knowledge gap closed months ago; the action gap is the whole remaining problem." },
    love:    { up: "Love approached with sincere, steady intent. The earnest beginner energy: reliable, curious, building slowly. Unflashy and full of genuine long-term promise; nurture it practically.",
               rev: "Romantic intentions that never materialize into plans. The relationship discussed more than developed. Move something into the calendar; sincerity is proven in logistics." },
    career:  { up: "The apprentice ascending: new skills studied seriously, feet on the entry rung of something with a real top. Your willingness to learn IS the current qualification. Deploy it loudly.",
               rev: "Career development stuck in bookmark folders. Courses uncompleted, applications drafted, the pivot permanently pending. Pick the smallest real step and take it before Friday." },
    money:   { up: "Financial education paying its famous dividends: the budgeting learned, the investing understood before attempted, the first small position taken thoughtfully. Start-small-but-start is exactly right.",
               rev: "Money knowledge accumulating while money behavior stays frozen. Literate and unbudgeted. Automate one good decision this week; systems beat intentions." },
    health:  { up: "The student's approach to the body: learning what actually works for yours, building the habit foundation with beginner's patience. Small, informed, consistent. The compounding has begun.",
               rev: "Health plans in perpetual draft. The routine designed, redesigned, and never run. Version one, executed badly, beats version ten, executed never." },
    spiritual:{ up: "Grounded seeking: the practice studied and practiced, the tradition learned from the roots up. Beginner's mind with a library card. A genuinely powerful combination.",
               rev: "Spiritual study as spectator sport. Consumed, collected, never embodied. One practice, done daily for a month, will teach more than the next forty books." }
  }
},
{
  id: 75, name: "Knight of Pentacles", arcana: "pentacles", number: 12, display: "Knight", glyph: "pentacle", element: "earth",
  keywords: { up: ["steady progress", "reliability", "methodical effort", "the long haul"], rev: ["stagnation", "boredom", "rut vs. routine", "workaholic plodding"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Keep the steady pace. Unspectacular, unstoppable. This race goes to the one who simply does not stop.",
            rev: "The routine has quietly become a rut. Keep the discipline; change the route. Small novelty restores the whole engine." },
  meanings: {
    general: { up: "The slowest knight and the only one who always arrives: methodical progress, promises kept, the field plowed row by row. No drama, no shortcuts, no failure. Whatever you asked. The answer is patient, systematic, and already in your capability.",
               rev: "Motion without progress: the routine calcified, the diligence serving habit instead of goal, or plodding so joyless it's become its own burden. The horse needs a new field. Same discipline, refreshed direction." },
    love:    { up: "Love that shows up: the partner (or approach) of quiet constancy. Unglamorous, unfailing, building trust in daily deposits. In a world of sparks, this is the hearth; value it accordingly.",
               rev: "Devotion gone routine. Reliable but unromantic, present but on autopilot. The commitment isn't in question; the aliveness is. Schedule some deliberate surprise into the steadiness." },
    career:  { up: "The dependable professional at compounding work: deadlines met, quality constant, trust accruing into unshakeable reputation. Boring excellence is a career superpower. Yours is working; maintain it.",
               rev: "Reliability plateaued into invisibility. The workhorse unpromoted because the work is silent. Keep the standards; add the visibility. Diligence undocumented is diligence discounted." },
    money:   { up: "The tortoise portfolio: automatic saving, steady investing, the plan followed through every weather. This is the strategy that actually finishes rich. Protect it from your own boredom.",
               rev: "Financial habits so fixed they've stopped being examined. The same allocations, insurances, and rates for a decade. Steady is right; static is expensive. Schedule the review." },
    health:  { up: "Consistency as the entire secret: the walk taken daily, the sleep kept regular, the sustainable pace outperforming every intense program abandoned. You are the tortoise; the tortoise wins.",
               rev: "The routine maintaining fitness and boring you toward abandonment. Preempt the quit: vary the terrain, recruit company, refresh the goal. Keep the engine, change the scenery." },
    spiritual:{ up: "The long practice: showing up daily whether inspired or not, which is, finally, the whole teaching. Faithfulness to the small is the advanced course.",
               rev: "Practice hardened into ritual husk. Attendance without presence. Don't quit; re-enter. Do the same practice as if for the first time." }
  }
},
{
  id: 76, name: "Queen of Pentacles", arcana: "pentacles", number: 13, display: "Queen", glyph: "pentacle", element: "earth",
  keywords: { up: ["nurturing practicality", "resourcefulness", "grounded abundance", "the working homemaker"], rev: ["self-neglect via caretaking", "smothering practicality", "work-home imbalance"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Tend it all with warm competence, home, work, body, people, and include yourself on the list of things flourishing under your care.",
            rev: "The caretaker needs caretaking. Delegate one thing, decline one thing, and book the appointment you'd insist anyone else book." },
  meanings: {
    general: { up: "The queen with soil on her hands and gold in her ledger: practical nurture at its finest. Home warm, finances sound, people fed, garden growing. Either such a figure supports your situation or you're called to her craft: care made concrete. It's working; keep tending.",
               rev: "The system's blind spot is its operator: everyone tended but the tender, the home running on her depletion. Or practicality smothering what needed room to breathe. Rebalance. Sustainable care includes its source." },
    love:    { up: "Love in its practical dialect: care shown through meals, logistics, remembered details, a home made safe for two nervous systems. Deeply romantic once you learn to read it. This bond has warm, working roots.",
               rev: "One partner mothering the other into imbalance. Care becoming management, the romance buried under the to-do list. Redistribute the household's invisible labor; desire needs equals." },
    career:  { up: "The grounded powerhouse: managing complexity with maternal calm, growing teams and budgets alike. Work that nurtures while it produces is your zone. Operate from it openly.",
               rev: "Professional caretaking unpaid and unpromoted. The office parent role absorbing your actual role. Re-scope toward the work that's rewarded; kindness can keep office hours." },
    money:   { up: "Household finance as high art: resources stretched wisely, comfort created affordably, security built while others theorize. Your practical instincts about money are excellent. Trust and formalize them.",
               rev: "Providing for everyone at the expense of your own future. The family bank with no reserve requirement. Fund your retirement like a dependent; it is one." },
    health:  { up: "Wellbeing through grounded routine: real food, real sleep, the body tended like the garden it is. Home-based, sustainable, sensual health. Your native mode; return to it.",
               rev: "The classic caretaker's chart: everyone's checkups booked but hers. Symptoms deferred, rest indefinitely postponed. Your body is the estate's foundation. Service it first." },
    spiritual:{ up: "The sacred in the domestic: bread as communion, tending as prayer, abundance as gratitude made tangible. Your altar is the kitchen table. It's a real altar.",
               rev: "So embedded in providing that the inner life is unstaffed. Practicality without transcendence dries out; take the quiet hour. The household will astonishingly survive it." }
  }
},
{
  id: 77, name: "King of Pentacles", arcana: "pentacles", number: 14, display: "King", glyph: "pentacle", element: "earth",
  keywords: { up: ["material mastery", "abundant stability", "the wise steward", "success shared"], rev: ["greed", "status obsession", "wealth without wisdom", "the controlling provider"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Steward it like the established king: grow it patiently, share it strategically, and let stability itself be your signature move.",
            rev: "Ask what the empire is for. Wealth that rules its owner is just well-appointed servitude. Reinstate the values above the valuations." },
  meanings: {
    general: { up: "The suit's throne: material mastery matured into stewardship. Wealth grown patiently, used wisely, shared without weakness. Either such an established ally anchors your situation, or you're ready to govern your material world at this level. Build like the empire is already yours; increasingly, it is.",
               rev: "Midas syndrome: the golden touch inverting. Status metrics replacing values, generosity conditional, security pursued past every sufficiency into greed. The kingdom is fine; the king needs recalibrating. What was all this FOR? Answer, then govern accordingly." },
    love:    { up: "The provider in full maturity: love expressed as unshakeable stability, generosity, and long-horizon commitment. A partnership under this card wants for little materially and builds patiently emotionally. Receive its steady dialect as the devotion it is.",
               rev: "Providing as control: the resources given with a rulebook, worth measured in provision alone, warmth outsourced to the standard of living. The relationship needs the man, not the portfolio. Reintroduce him." },
    career:  { up: "Summit-level professional standing: the trusted authority, the business matured, the career converted into an institution. Operate at owner-scale, mentor, invest, acquire, delegate, the empire phase has begun.",
               rev: "Success ossifying: the established position defended instead of evolved, junior talent managed as threat, the score watched instead of the game. Renew or be renovated. Thrones are only rented." },
    money:   { up: "The wealth-mastery card: assets diversified, income multiplied, decisions made from abundance psychology backed by actual abundance. Think in ownership, equity, and decades. You're playing the long game correctly.",
               rev: "Money as identity's load-bearing wall: net worth watched hourly, enough never arriving, ethics discounted at sufficient price points. Wealth without governing values is a well-funded emergency. Install the values." },
    health:  { up: "The estate's cornerstone finally treated as such: health invested in like the asset class it is. The good care bought, the longevity planned, vitality funded properly. Continue; this compounds better than anything in the portfolio.",
               rev: "The classic executive bargain: health mortgaged for wealth, decade after decade, with the balloon payment pending. No estate enjoys itself. Rebalance while the body still accepts deposits." },
    spiritual:{ up: "Matter fully befriended: abundance held lightly, wealth as instrument, the material world governed as sacred trust. Prosperity and depth reconciled. The rarest mastery in the suit.",
               rev: "The golden cage from inside: everything owned, nothing sufficient, the acquiring long since automatic. The spiritual project is subtraction now. Discover what remains when having is subtracted; that remainder is you." }
  }
}
);
