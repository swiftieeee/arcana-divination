// Suit of Swords. Air. Intellect, truth, conflict, communication.
window.TAROT_CARDS = window.TAROT_CARDS || [];
window.TAROT_CARDS.push(
{
  id: 50, name: "Ace of Swords", arcana: "swords", number: 1, display: "Ace", glyph: "sword", element: "air",
  keywords: { up: ["breakthrough clarity", "truth", "a decisive idea", "mental power"], rev: ["confusion", "misused intellect", "a blunted truth"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Cut to the truth and say it plainly. Clarity is the gift on offer, and it only works unsheathed.",
            rev: "Don't act on a foggy blade. Get the facts straight and the motives honest before you cut anything." },
  meanings: {
    general: { up: "The sword of clarity descends: a breakthrough insight, the truth finally visible, mental force at its sharpest. Decisions made in this clean light tend to be right. Name the truth and act on it.",
               rev: "The blade is clouded. Confusion, information overload, or intellect serving rationalization instead of truth. Clear the mental fog before making the cut; a wrong incision here is expensive." },
    love:    { up: "Clarity arrives in matters of the heart. The honest conversation, the truth about what this is, the insight that reframes everything. Truth now, however sharp, is kindness.",
               rev: "Miscommunication and mixed messages clouding the connection, or truth wielded as a weapon rather than a light. Say the clear thing, cleanly, without the edge." },
    career:  { up: "The breakthrough idea, the decisive analysis, the moment your thinking cuts through the committee fog. Intellectual leadership is yours. Claim the insight publicly.",
               rev: "Muddled communication or analysis paralysis stalling the work. Rebuild from first principles: what do we actually know, and what follows from it?" },
    money:   { up: "Financial clarity through honest analysis. The real numbers faced, the decisive insight found. Cut through the noise; the correct move is visible now.",
               rev: "Fuzzy financial thinking. Decisions on vibes, terms unread, math avoided. Sharpen the picture before signing anything." },
    health:  { up: "Mental clarity about health. The clear diagnosis, the honest assessment, the decisive commitment. Knowledge cuts anxiety down to actionable size.",
               rev: "Health anxiety spiraling on incomplete information. Replace the 3am search results with one professional conversation." },
    spiritual:{ up: "The sword of discernment: seeing through illusion, naming your truth, the insight that reorders everything after it. Honor it by living accordingly.",
               rev: "Overthinking the ineffable. Spirit dissected until it stops moving. Some truths are grasped by the quieted mind, not the sharpened one." }
  }
},
{
  id: 51, name: "Two of Swords", arcana: "swords", number: 2, display: "II", glyph: "sword", element: "air",
  keywords: { up: ["stalemate", "a blocked decision", "willful blindness", "truce"], rev: ["the deadlock breaks", "information surfaces", "decision time"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -1, rev: 0 },
  advice: { up: "Take off the blindfold. The decision you're avoiding is being made anyway, slowly, by default. Choose it consciously instead.",
            rev: "The stalemate is breaking; steer it. Decide with the new information before circumstances finish deciding for you." },
  meanings: {
    general: { up: "Blindfolded between two swords: a decision suspended, options held at arm's length, peace purchased by not looking. The stalemate feels stable but costs daily, and the blindfold is self-tied. More information exists; you've been declining it.",
               rev: "The deadlock moves. Hidden facts surface, pressure forces the issue, or you finally look. Decisions delayed now get made in a rush; better to choose deliberately in this narrow window." },
    love:    { up: "An impasse of the heart. Two people avoiding the defining conversation, or you suspended between two choices (two people, two futures, stay-or-go). Not-choosing is quietly choosing; look directly at what you've been avoiding.",
               rev: "The standoff cracks: someone speaks first, or events force the topic. Painful honesty now is the merciful version. The postponed version compounds." },
    career:  { up: "A professional fork postponed. Two offers, two directions, or a workplace conflict you're staying studiedly neutral on. Neutrality has a shelf life; gather the missing facts and commit.",
               rev: "New information breaks the career deadlock. Decide within a defined deadline. Reopened decisions left open simply re-freeze." },
    money:   { up: "Financial decision paralysis. Statements unopened, options unweighed, the choice deferred because both paths cost something. Avoidance is the most expensive option on the list.",
               rev: "The financial picture clarifies enough to choose. Make the call with 80% information; the missing 20% was never coming." },
    health:  { up: "Ignoring the body to keep an uneasy peace. The symptom unexamined, the appointment unbooked, the trade-off unfaced. What you refuse to look at doesn't leave; it schedules itself.",
               rev: "Test results, clarity, or resolve arrive. The health question can finally move. Act on the answer promptly; clarity unused reverts to fog." },
    spiritual:{ up: "Inner stalemate: head and heart armed and silent, a truth known but not admitted. The meditation cushion is where blindfolds come off. Sit with the question you've been managing.",
               rev: "Inner deadlock dissolving. The truth admits itself and the swords lower. Integration follows honesty; welcome what surfaces even if it reorders things." }
  }
},
{
  id: 52, name: "Three of Swords", arcana: "swords", number: 3, display: "III", glyph: "sword", element: "air",
  keywords: { up: ["heartbreak", "painful truth", "grief", "betrayal"], rev: ["healing the wound", "releasing pain", "forgiveness beginning"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -2, rev: 1 },
  advice: { up: "Let the pain be felt and the truth be true. The cleanly grieved wound heals; the managed one festers.",
            rev: "The swords are coming out of the heart. Don't push them back in by re-reading old messages. Forward is the only exit." },
  meanings: {
    general: { up: "The pierced heart: heartbreak, betrayal, or a truth that cuts. This pain is real and the card won't minimize it, but note that swords are thoughts: the rain-soaked story you tell about the wound will shape its healing. Grieve fully, narrate carefully.",
               rev: "The long exhale after pain: swords withdrawing, forgiveness germinating, the wound closing at last. Or, its shadow, pain suppressed instead of processed. If it still runs your choices, it isn't healed yet; finish the grieving." },
    love:    { up: "Heartbreak in some form. Betrayal, separation, the sentence that can't be unsaid. The pain is proportional to how much you loved, which is to say: it's proof of your capacity, not your foolishness. Survive it first; understand it later.",
               rev: "Recovery from heartbreak underway. The ache dulling, the lesson separating from the pain. Guard the healing: no reunions or reopenings until the wound bears weight." },
    career:  { up: "A professional wound. The betrayal by a trusted colleague, the harsh rejection, the project's public failure. It hurts because you cared, and caring is still the right strategy. Process it away from the office; decide nothing this week.",
               rev: "Moving past a workplace wound. The sting fading, the confidence regenerating. Reengage deliberately; the scar tissue is where the next strength forms." },
    money:   { up: "A painful financial truth or betrayal. The loss uncovered, the trust misplaced, the real number faced. Feel it, then forensically learn from it: this wound's tuition should only be paid once.",
               rev: "Recovering from a financial blow. The panic settling into a plan. Rebuild methodically and let the lesson, not the trauma, design the new rules." },
    health:  { up: "Grief and stress bearing down on the body. Heartache somaticized. Emotional wounds are physical events; treat them with rest, movement, witness, and time.",
               rev: "The heaviness lifting as old pain processes through. Support the release. The body healing from grief needs gentleness, not performance targets." },
    spiritual:{ up: "The heart broken open: suffering as unwanted teacher. This is the storm before the deepening. Hold the pain within a larger meaning without rushing to assign one.",
               rev: "The broken-open heart beginning to mend larger than before. Forgiveness, of them, of life, of yourself, is the final suture; apply when ready, not before." }
  }
},
{
  id: 53, name: "Four of Swords", arcana: "swords", number: 4, display: "IV", glyph: "sword", element: "air",
  keywords: { up: ["rest", "recovery", "strategic retreat", "stillness"], rev: ["forced rest ignored", "restlessness", "burnout's threshold"] },
  yesNo: { up: "maybe", rev: "no" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Rest is the strategy, not its absence. Withdraw, recover, and let the battlefield reorganize without you for a while.",
            rev: "You're refusing rest that will soon stop being optional. Schedule the pause while you still hold the pen." },
  meanings: {
    general: { up: "The knight rests, swords retired to the wall: deliberate recovery, sanctuary, stillness between campaigns. This is not stagnation. It's the consolidation phase where strength and clarity rebuild. Grant yourself the pause the situation is offering.",
               rev: "Rest refused or rest disturbed. Pushing through exhaustion on principle, or lying down with a racing mind. The body's shutdown sequence has begun politely; cooperate now or negotiate with the impolite version later." },
    love:    { up: "The relationship needs quiet, not surgery. A gentle pause after intensity, space that restores rather than distances. Rest together, or rest apart briefly and kindly; calm is the current form of care.",
               rev: "Restlessness in the connection. Unable to be at peace together, or a needed pause being resisted as if pause meant ending. Distinguish recovery-space from escape; ask for the former explicitly." },
    career:  { up: "Strategic withdrawal: the vacation actually taken, the project deliberately shelved, thinking-time defended like a deadline. The next campaign's quality is being determined by this pause's quality.",
               rev: "Burnout's threshold: working through every signal, rest deferred to a mythical 'after.' Productivity through exhaustion is borrowing at loan-shark rates. The pause is now load-bearing." },
    money:   { up: "A financial resting period. No major moves, positions held, spending calmed. Wealth also grows in stillness; let compounding work while you recover.",
               rev: "Restless money. Churning accounts, checking obsessively, action for action's sake. The portfolio needs your absence; the anxiety needs your attention." },
    health:  { up: "The card literally prescribes it: rest, sleep, recovery, retreat. Healing is active at rest. This is the treatment, not the delay of one.",
               rev: "Recovery cut short or rest resisted. Back too soon, doing too much, sleep sacrificed first. The relapse being risked costs triple the rest being refused." },
    spiritual:{ up: "Contemplative retreat: silence, stillness, the sanctuary hours. The inner life consolidates in quiet. This is a season for the monastery mind, even an hour at a time.",
               rev: "Stillness avoided because of what surfaces there. That surfacing is the practice working. Stay seated through the discomfort; it completes if allowed." }
  }
},
{
  id: 54, name: "Five of Swords", arcana: "swords", number: 5, display: "V", glyph: "sword", element: "air",
  keywords: { up: ["hollow victory", "conflict at all costs", "defeat", "self-interest"], rev: ["reconciliation", "releasing grudges", "the cost acknowledged"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -2, rev: 0 },
  advice: { up: "Ask what winning will cost before you win it. Some victories are defeats with better posture. Walking away can be the strongest move on the board.",
            rev: "Extend or accept the olive branch. The grudge is heavy, the bridge is repairable, and being right has been paid enough." },
  meanings: {
    general: { up: "The battlefield after: someone won, and look at the cost. Relationships smoking, trust scattered, the victor collecting swords alone. Whether you're winning ugly or losing outright, this conflict's terms are bad. Change the game or leave the field.",
               rev: "The appetite for this fight is ending. Grudges loosening, apologies becoming possible, or the loss finally accepted and released. Reconciliation is available now; it requires someone to go first and care more about peace than credit." },
    love:    { up: "A conflict where winning is losing: the argument won and the closeness lost, scores kept, words chosen for damage. If every fight has a victor, the relationship is the loser. De-escalate. Being right is the consolation prize.",
               rev: "After the storm, repair becomes possible. Apologies, softened positions, the fight's futility mutually visible. Take the opening; pride is the only thing still blocking the door." },
    career:  { up: "Workplace warfare. Credit seized, colleagues undermined, a win that salts the earth it stands on. Even if you're winning, audit the reputation cost: careers are long and memories longer.",
               rev: "Office conflict de-escalating, or your exit from a toxic battle. Both count as wins. Repair what's repairable and document what isn't; then redirect the energy to actual work." },
    money:   { up: "A financial conflict turning scorched-earth. The dispute, the lawsuit, the deal where someone must lose. Run the true cost including time, stress, and relationship; settling often outperforms winning.",
               rev: "A money dispute resolving. Settlement over siege, fairness over total victory. Close it formally and completely; half-settled conflicts reopen." },
    health:  { up: "Conflict's tax on the body. The sustained cortisol of battle, tension as posture. The fight you're maintaining is a health expense; de-escalation is a medical intervention.",
               rev: "Releasing hostilities the body has been financing. As the conflict resolves, notice how much energy returns, that was the war's budget, now yours again." },
    spiritual:{ up: "The ego's pyrrhic wars: being right as addiction, spiritual superiority, the self defended at the soul's expense. What exactly is winning these battles, and do you want to be it?",
               rev: "Laying down the sword: humility after conflict, the grudge released before it fossilized. Forgiveness here is not weakness. It's the ego dethroned, which was the actual work." }
  }
},
{
  id: 55, name: "Six of Swords", arcana: "swords", number: 6, display: "VI", glyph: "sword", element: "air",
  keywords: { up: ["transition", "moving toward calmer waters", "a necessary passage"], rev: ["resisting the move", "baggage in the boat", "a rough crossing"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Get in the boat. The crossing is quiet, not triumphant, but the far shore is genuinely better, and the ferry is leaving.",
            rev: "You've boarded but left the anchor down. Release what (or who) is holding the boat to the old shore." },
  meanings: {
    general: { up: "The ferry to calmer water: a transition underway. Subdued, a little sad, and correct. You're leaving difficulty behind by degrees, not drama. Trust the quiet passage; smoother territory is genuinely ahead.",
               rev: "The crossing is stalled. Clinging to the old shore, baggage swamping the boat, or turbulence making you doubt a sound decision. Rough passage doesn't mean wrong direction; lighten the load and keep rowing." },
    love:    { up: "A relationship in transit. Moving past a hard chapter together, or moving on from one separately. Either way the waters ahead are calmer; let the past stay on its shore.",
               rev: "Old baggage riding along into the new chapter. Unfinished grief, patterns imported, an ex-shaped anchor. The next harbor deserves an unloaded boat; do the release work." },
    career:  { up: "A professional transition in motion. The new role, the recovery after difficulty, the move made rationally rather than dramatically. It compounds: each week ashore of the old trouble, the water calms further.",
               rev: "A career move resisted or half-made. Commuting emotionally back to the old job, the old team, the old identity. Arrive fully where you've landed; retention of the past halves the benefit of the move." },
    money:   { up: "Moving from financial rough water toward stability. The plan working, the debts receding, the crisis aging into history. Stay the unglamorous course; this is what recovery actually looks like.",
               rev: "Financial recovery undermined by old habits stowed in the hold. The new budget can't outrow the old patterns. Jettison them explicitly, one named habit at a time." },
    health:  { up: "Recovery as passage. Steadily leaving the difficult period, strength returning by quiet degrees. Healing is directional now; protect the trajectory.",
               rev: "Recovery turbulence. Setbacks mid-crossing, or old habits re-boarding. A rough patch in a right direction is not a wrong direction; adjust care and continue." },
    spiritual:{ up: "The soul's quiet migrations: outgrowing a former self and traveling, unhurried, toward the next. Honor the melancholy. It's the toll of every true crossing.",
               rev: "Transformation resisted midstream. Missing the person you were before the insight. You can't unknow it; the only way out of the river is the far bank." }
  }
},
{
  id: 56, name: "Seven of Swords", arcana: "swords", number: 7, display: "VII", glyph: "sword", element: "air",
  keywords: { up: ["deception", "strategy", "acting alone", "something taken"], rev: ["confession", "exposure", "conscience surfacing"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -2, rev: 0 },
  advice: { up: "Check the perimeter: something or someone isn't operating in the open, possibly including you. Strategy is fair; deception is a loan against the future.",
            rev: "Come clean or let it come clean. Exposure on your own terms costs half of exposure on the truth's terms." },
  meanings: {
    general: { up: "The figure tiptoeing off with the swords: deception, half-truths, strategies run in shadow. Someone acting alone where openness was owed. It may be around you or it may be you; either way, whatever's carried off in secret must eventually be accounted for.",
               rev: "The scheme unravels: confessions surface, cover stories thin, conscience files its report. If it's your secret, disclosure now, voluntary, complete, is the cheapest it will ever be. If another's, the reveal is near; position yourself honestly." },
    love:    { up: "Something operating off the books in the relationship. Hidden feelings, private hedges, or actual deception. Trust the specific unease, not paranoia; verify gently and directly, and audit your own secrets while you're at it.",
               rev: "Hidden things surfacing between you. A confession, a discovered truth, or mutual cards finally on the table. Turbulent, but the honest version of the relationship starts here or not at all." },
    career:  { up: "Workplace shadow-games: ideas lifted, conversations off the record, someone advancing by stealth. Protect your work product, put agreements in writing, and compete in daylight. The long game belongs to the trustworthy.",
               rev: "Office truths coming to light. The credit-taker exposed, the real numbers revealed. Vindication may arrive; receive it with restraint and let the record speak." },
    money:   { up: "Financial fine print, undisclosed interests, or someone's hand near your pocket. Every claim verified, every agreement written, every 'trust me' politely audited. That's the season's rule.",
               rev: "A financial deception surfacing. The hidden fee, the cooked number, the borrowed-without-asking. Painful but clarifying: rebuild arrangements on documentation, not assumption." },
    health:  { up: "Self-deception in health: the minimized symptom, the shaved report to the doctor, the diary that flatters. The body keeps unfalsifiable records. Align your story with them.",
               rev: "Honesty arriving in health matters. The full disclosure, the real habit named. Everything treatable becomes more treatable in the open." },
    spiritual:{ up: "The inner smuggler: rationalizations, spiritual shortcuts, the self-image curated even in private. The path only works with the whole self on it. Bring the contraband to the altar.",
               rev: "Self-honesty breaking through. The game seen, the mask lowered, integrity restored from the inside. This confession-to-oneself is among the most freeing moves in the deck." }
  }
},
{
  id: 57, name: "Eight of Swords", arcana: "swords", number: 8, display: "VIII", glyph: "sword", element: "air",
  keywords: { up: ["self-imposed restriction", "feeling trapped", "limiting beliefs"], rev: ["liberation", "seeing the exit", "beliefs dismantled"] },
  yesNo: { up: "no", rev: "yes" }, polarity: { up: -2, rev: 1 },
  advice: { up: "Test the bindings. They're looser than they look, the blindfold is removable, and the swords don't actually form a cage. The prison's architect is the only one who can pardon you.",
            rev: "You've seen that the door was unlocked. Keep walking, and be gentle with yourself about the time spent bound; everyone's knots look obvious only from outside." },
  meanings: {
    general: { up: "Bound, blindfolded, and if you look closely, loosely: the restriction is real as an experience and mostly self-maintained as a fact. 'I can't' is doing more binding than any actual rope. Name the belief that holds you; then test it against evidence.",
               rev: "The bindings drop: perspective returns, options reappear, the story of trappedness loses its narrator. Freedom feels disorienting at first. Walk anyway; agency is a muscle that remembers." },
    love:    { up: "Feeling trapped in a situation you have more power over than it seems. Bound by fear of being alone, imagined obligations, or a story about what you deserve. The relationship question is really a belief question; interrogate the belief.",
               rev: "Seeing the relationship (or your patterns in it) with unbound eyes. Realizing the cage's door was never locked. Choose freely now: staying and leaving are both real options, which finally makes either meaningful." },
    career:  { up: "Professionally stuck by internal ropes: 'I'm not qualified,' 'the market is impossible,' 'I can't leave.' Each belief deserves a test. Apply anyway, ask anyway, price the move anyway. Data dissolves imaginary walls.",
               rev: "Career paralysis lifting. Options visible where walls were, applications sent, conversations opened. Momentum compounds; take the next unbound step this week while the sight is clear." },
    money:   { up: "Financial helplessness that's part fact, mostly frame. 'no way out' usually means 'no way I've priced yet.' Get outside eyes on the numbers; trapped-feeling budgets often have doors an advisor spots in minutes.",
               rev: "The financial fog lifts and the options list repopulates. The restructure, the negotiation, the additional income. Pick one exit and walk it fully." },
    health:  { up: "Anxiety as the cage: the body braced, the catastrophizing loop, symptoms amplified by the story about them. The thoughts are the treatable part, and treating them treats more than you'd think.",
               rev: "Anxiety's grip releasing. The loop interrupted, the body unclenching, capability returning. Reinforce the escape: the practices that freed you are now maintenance, not crisis measures." },
    spiritual:{ up: "The tightest bindings are beliefs about who you are and what's possible for you. The whole path, arguably, is the removal of self-tied blindfolds. Begin with the one over your own worth.",
               rev: "Awakening from a limiting story mid-sentence. The identity loosening, the sky reappearing. Integration now: live from the freedom rather than just remembering the moment of it." }
  }
},
{
  id: 58, name: "Nine of Swords", arcana: "swords", number: 9, display: "IX", glyph: "sword", element: "air",
  keywords: { up: ["anxiety", "sleepless dread", "the 3am mind", "worry exceeding reality"], rev: ["dawn after the dark night", "seeking help", "fears deflating"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -2, rev: 1 },
  advice: { up: "The 3am mind is not a credible witness. Write the fears down, sleep, and re-read them at noon before believing any.",
            rev: "The worst is finishing, not beginning. Say the fears out loud to someone. Spoken dread shrinks; hosted dread grows." },
  meanings: {
    general: { up: "The 3am card: awake, head in hands, swords of worry mounted on the wall. None of them currently touching you. The anguish is real; its testimony is unreliable. Most of what this card fears never happens, and what does is survivable in daylight terms. Treat the anxiety itself as the emergency.",
               rev: "The night is ending. Worries deflating on inspection, help accepted, sleep returning. Or: the fears finally spoken aloud, which is how they start dying. Follow through on the reaching-out; recovery from dread is a team sport." },
    love:    { up: "Relationship anxiety running the night shift. Replayed conversations, imagined endings, dread between messages. The connection may be fine; the worry loop isn't. Verify against reality: ask, don't spiral.",
               rev: "Relationship fears easing as truth replaces imagination. The conversation had, the reassurance real, the catastrophe cancelled. Note how the dread lied; remember that at the next 3am." },
    career:  { up: "Work dread disproportionate to work facts. The Sunday-night stomach, the catastrophized review, the imagined firing. Audit the actual evidence; then treat the anxiety as its own project, because it's costing more than any job problem.",
               rev: "Professional anxiety receding. Feared outcomes not materializing, or support finally enlisted. Rebuild sleep and perspective first; competence returns automatically behind them." },
    money:   { up: "Money panic at its least useful hour. The mental arithmetic of ruin, compounding nightly. Actual numbers on actual paper are the exorcism: the real figure is almost always smaller than the 3am figure.",
               rev: "Financial dread easing into financial planning. The crisis downgraded to a problem, the problem to a list. Keep the list; retire the dread." },
    health:  { up: "The mind as symptom-generator: anxiety producing sensations, then diagnosing them, then panicking at the diagnosis. Break the loop with professional reassurance and sleep. Both are treatment, not indulgence.",
               rev: "Health anxiety releasing its grip. Reassurance absorbed, sleep repairing, the body decoupling from the doom loop. Protect sleep like the medicine it is." },
    spiritual:{ up: "The dark night in its literal hours: guilt, dread, and meaning-loss holding court while the defenses sleep. This station is on every deep path. Endure it without believing its verdicts.",
               rev: "First light after the dark night. Mercy toward oneself returning, the harsh inner tribunal adjourning. What survives this passage is faith with roots." }
  }
},
{
  id: 59, name: "Ten of Swords", arcana: "swords", number: 10, display: "X", glyph: "sword", element: "air",
  keywords: { up: ["rock bottom", "a painful ending", "betrayal's finale", "it is finished"], rev: ["survival", "slow rising", "the worst is over"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -2, rev: 1 },
  advice: { up: "Stop checking for an eleventh sword. There isn't one. This ending is total, which is precisely why you're finally free of it.",
            rev: "You survived the thing. Rise slowly, inventory the lessons, and don't lie back down in the outline of the old disaster." },
  meanings: {
    general: { up: "Ten swords: not one wound but the finality of them. Rock bottom, the ending beyond appeal. Here is the card's strange mercy: it's over. Completely. No more waiting for the other shoe; the wardrobe is empty. Note the dawn on the horizon. It's in the picture deliberately.",
               rev: "The getting-up card: you survived what felt unsurvivable, and the recovery has begun. Rise at your own pace, but rise, and refuse the temptation to re-dramatize a finished wound. The story now is the rebuilding." },
    love:    { up: "An ending in full: the relationship concluded, the betrayal complete, the hope officially retired. Brutal, and clean, which matters. Closure this total is rare; let it be total. Nothing here is coming back, which is the door to everything that comes next.",
               rev: "Recovering from love's worst-case. Standing again, scar tissue forming, the ex-shaped wound closing. Heal fully before re-arming the heart; but know the capacity to love survived, intact." },
    career:  { up: "The professional worst-case arriving. The termination, the collapse, the public failure. Devastating and, notably, finished: careers rebuild from this card constantly, and rebuild differently. What ends here needed to end this thoroughly to release you.",
               rev: "Career recovery from rock bottom. The comeback's unglamorous first chapters. Your survival of this is now a credential; carry it into the rebuild." },
    money:   { up: "Financial rock bottom or a loss's full extent revealed. Face the entire number at once. Totality is oddly stabilizing. From the actual bottom, every path is up; begin the boring, reliable climb.",
               rev: "Post-crisis rebuilding underway. The loss absorbed, the lessons expensive and owned. Protect the recovery with rules the old self didn't have." },
    health:  { up: "Depletion at its floor. The collapse, the burnout complete, the body's final memo. Total rest and real help, now; this card marks the place where pushing through officially stopped working.",
               rev: "Recovery from the bottom. Strength returning in increments, the crisis aging into a turning point. Honor the convalescence; rebuilds rushed are rebuilds repeated." },
    spiritual:{ up: "Ego's death in full: the old self done, no resurrection of the previous arrangement available. This is the composting stage of transformation. Dark, final-feeling, and secretly fertile.",
               rev: "Rising from the inner ashes. The new self assembling from what survived the old one's end. What you carry forward is essence; everything else stayed with the swords." }
  }
},
{
  id: 60, name: "Page of Swords", arcana: "swords", number: 11, display: "Page", glyph: "sword", element: "air",
  keywords: { up: ["curiosity", "vigilance", "new ideas", "truth-seeking energy"], rev: ["gossip", "scattered thoughts", "all talk", "hasty words"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Ask the sharp question and watch carefully. Curiosity plus vigilance is your edge. Verify before you repeat.",
            rev: "Sheathe the commentary. Fewer hot takes, more finished thoughts, and nothing sent that wasn't reread." },
  meanings: {
    general: { up: "The alert young mind, sword raised into the wind: curiosity, vigilance, questions that cut. New information is coming or being sought. Meet it with sharp attention and healthy skepticism. Watch and verify; the truth-seeker's posture wins this round.",
               rev: "Mental energy misfiring: gossip, hasty words, ideas announced and abandoned, vigilance soured into suspicion. The mind is quick but unanchored. Slow the output until the input is verified." },
    love:    { up: "Curiosity as courtship. The probing conversations, the delicious debates, attraction via wit. Communication is this connection's bloodstream; keep it honest and keep it flowing.",
               rev: "Words causing wounds. The sharp remark, the case built from screenshots, third parties narrating the relationship. Take communication back to first-person and face-to-face; delete the prosecution file." },
    career:  { up: "Intellectual alertness pays: the right question in the meeting, the anomaly noticed, the fast learning of new terrain. You're in information-gathering season. Gather aggressively, conclude slowly.",
               rev: "Office chatter, half-baked proposals, or vigilance becoming paranoia about colleagues. Trade rumor for record: document, verify, and speak when the facts are assembled." },
    money:   { up: "Research mode: the fine print actually read, the claims actually checked, questions asked until answers cohere. This diligence is worth actual money right now.",
               rev: "Financial chatter mistaken for financial knowledge. Tips, threads, and hot takes moving your money. Mute the noise; act only on what you've verified yourself." },
    health:  { up: "Curiosity serving the body: symptoms tracked, patterns noticed, smart questions brought to professionals. You are your own best early-warning system. Stay observant.",
               rev: "Health information overload. Every symptom searched, every result believed, vigilance becoming its own symptom. One trusted source, scheduled check-ins, and a research curfew." },
    spiritual:{ up: "The beginner's sharp mind: questioning everything, testing teachings against experience. Doubt wielded honestly is a spiritual instrument. Keep asking.",
               rev: "Endless questioning as avoidance of ever landing. Spiritual debate substituting for spiritual practice. Park the arguments; sit down and actually practice something for thirty days." }
  }
},
{
  id: 61, name: "Knight of Swords", arcana: "swords", number: 12, display: "Knight", glyph: "sword", element: "air",
  keywords: { up: ["decisive charge", "intellectual force", "swift action", "a cause taken up"], rev: ["recklessness", "aggression", "unfocused charge", "burnout velocity"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Charge with the truth. Fast, direct, unapologetic. This moment rewards the one who commits first and argues best.",
            rev: "Dismount and check the map. Speed without aim is just expensive noise. Reattach the strategy before the next charge." },
  meanings: {
    general: { up: "Full charge, sword extended: a cause embraced, a decision executed at speed, intellect weaponized for action. When this knight rides for the right cause, nothing outpaces him. Commit fully and move now.",
               rev: "The charge without the aim: haste, verbal aggression, battles picked by adrenaline rather than strategy. The horse is running the knight. Slow enough to steer, or the momentum picks the destination." },
    love:    { up: "Directness in love: the swift pursuit, the frank declaration, the defining conversation initiated at last. Refreshing after ambiguity. Say the true thing at full gallop.",
               rev: "Words moving faster than care. Arguments escalated in seconds, ultimatums issued in traffic. Institute a pause between feeling and sending; the relationship needs fewer duels and more dialogue." },
    career:  { up: "The decisive professional strike: the bold pitch delivered, the opportunity seized inside its window, the argument won on preparation and pace. Your conviction is your qualification. Deploy it.",
               rev: "Career aggression misfiring. Bridges burned mid-sentence, changes forced without groundwork. Ambition needs an itinerary; write it before the next charge." },
    money:   { up: "Swift, informed financial action. The researched decision executed without dithering. In fast-moving situations, prepared speed is the whole edge.",
               rev: "Trigger-happy finances: trades on impulse, commitments at full gallop, the research skipped for the rush. Mandatory 48-hour cooling on everything above trivial." },
    health:  { up: "Attack the health goal with campaign energy. Decisive changes, immediate starts, momentum as method. Channel it into a structured program before it self-scatters.",
               rev: "Intensity injuring what it means to improve. Overtraining, crash approaches, the body treated as an opponent. The war metaphor is the problem; switch to stewardship." },
    spiritual:{ up: "The truth-warrior: conviction ridden at full speed, inquiry pressed without flinching. Cut through the comfortable illusions. Respectfully, but cut.",
               rev: "Crusader mode: certainty weaponized, others' paths corrected uninvited. The sharpest sword serves best in its scabbard. Return to your own practice." }
  }
},
{
  id: 62, name: "Queen of Swords", arcana: "swords", number: 13, display: "Queen", glyph: "sword", element: "air",
  keywords: { up: ["clear-eyed truth", "independence", "boundaried compassion", "sharp discernment"], rev: ["coldness", "bitterness", "the guarded heart", "cutting words"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "See it exactly as it is and say so with grace. Honest clarity, delivered fairly, is the kindest available option.",
            rev: "Check the blade for old blood: is this clarity, or bitterness with excellent diction? Soften the delivery; keep the truth." },
  meanings: {
    general: { up: "The clearest eyes in the deck: truth without decoration, boundaries without apology, compassion that doesn't require self-deception. Either such a person cuts through your situation's fog, or you're called to be her. See precisely, speak honestly, decide independently.",
               rev: "Clarity curdled: perceptiveness turned to fault-finding, independence hardened into isolation, old wounds editing every present sentence. The mind is still sharp. It's the heart access that's been revoked. Reopen it deliberately." },
    love:    { up: "Love with eyes open: standards maintained, truths spoken, the partner seen as they are and chosen anyway. The most durable romance there is. If seeking: your discernment is protection, not pickiness.",
               rev: "The fortress heart: past betrayals staffing the gate, warmth taxed on entry, the partner paying an old debt they didn't incur. The walls that guarded the wound are now guarding the loneliness. Begin decommissioning." },
    career:  { up: "Professional clarity as authority: the unflinching analysis, the fair-but-firm standard, the reputation for saying what others hedge. In confusion, the clear speaker leads. That's you now.",
               rev: "Sharpness read as hostility, or genuine workplace bitterness leaking into the work. Precision doesn't require coldness. Pair every hard truth with visible fairness." },
    money:   { up: "Unsentimental financial judgment: the numbers faced exactly, the sunk costs cut, decisions made on evidence over emotion. This clarity, applied consistently, is a wealth strategy in itself.",
               rev: "Financial decisions driven by old resentments. The divorce math, the sibling scorekeeping, spite line-items. Separate the ledger from the grievance; only one of them compounds usefully." },
    health:  { up: "Clear-eyed health stewardship: honest symptom reporting, evidence-based choices, boundaries that protect recovery. Precision is care.",
               rev: "Stoicism past its usefulness. Pain unreported, help declined, the body managed like a hostile witness. Accurate disclosure is not weakness; it's how treatment works." },
    spiritual:{ up: "Discernment as devotion: illusions declined, truth preferred even when unflattering, the inner life kept honest. The sword in her hand is for cutting through. Use yours on your own favorite illusions first.",
               rev: "Skepticism as armor against the very openness the path requires. Doubt everything, fine, but doubt the bitterness too; it makes claims just as unverified as any faith." }
  }
},
{
  id: 63, name: "King of Swords", arcana: "swords", number: 14, display: "King", glyph: "sword", element: "air",
  keywords: { up: ["intellectual authority", "impartial judgment", "strategic truth", "ethical clarity"], rev: ["cold authority", "manipulation by logic", "rigid judgment", "power without heart"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 1, rev: -2 },
  advice: { up: "Rule on the merits: gather the facts, apply the principles, decide impartially, and stand publicly behind the verdict.",
            rev: "Logic that has stopped consulting the heart is just cleverness with a gavel. Re-admit the human evidence before ruling." },
  meanings: {
    general: { up: "The mind enthroned: intellectual authority, impartial judgment, strategy in service of principle. Either a sharp, fair-minded figure decides matters in your situation, or the situation requires you to be that figure. Rigorous, ethical, unswayed by noise.",
               rev: "Authority with the warmth removed: rulings without mercy, logic deployed to dominate, the letter of the law strangling its spirit. Whether it's a cold power over you or your own head outvoting your heart 10-0. The missing testimony is the human one." },
    love:    { up: "The relationship benefits from wise judgment now. The fair conversation, the terms made explicit, love given structural integrity. A partner of this type shows care through reliability and honest counsel; read the devotion in its actual dialect.",
               rev: "Love adjudicated instead of felt. Every conflict litigated, feelings dismissed for lacking citations. Being right in a relationship is a booby prize; reopen the emotional channel the analysis closed." },
    career:  { up: "Command through competence: the strategic mind trusted with the hard calls, authority earned by fairness. Lead with documented reasoning and transparent standards. This is your throne season.",
               rev: "The brilliant tyrant problem. Yours or a superior's: intellect as bludgeon, feedback as verdict, a chill where collaboration was. Genius that people hide from produces exactly nothing; warm the interface." },
    money:   { up: "Financial governance at its best: rules-based decisions, professional counsel weighted properly, emotion escorted out of the portfolio. Write your policy and let it rule you.",
               rev: "Financial logic serving a hidden agenda. The airtight case for the choice someone wanted anyway, or expertise used to overwhelm rather than inform. Audit the reasoning's motives, especially your own." },
    health:  { up: "Executive function applied to health: the specialist consulted, the protocol followed, decisions made on evidence and kept with discipline. The systematic approach is winning.",
               rev: "The body overruled by the calendar again. Symptoms dismissed as inefficiencies, rest denied on procedural grounds. The mind is not the body's owner; it's the body's steward. Rebalance the government." },
    spiritual:{ up: "Wisdom's cold-clear summit: truth pursued past comfort, ethics as practice, the mind refined into an instrument of principle. Teach only what you live.",
               rev: "Spiritual materialism of the intellect. Doctrine mastered, mystery managed, the map defended against the territory. The final examination has no written portion; put down the pen and experience something." }
  }
}
);
