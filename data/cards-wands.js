// Suit of Wands — Fire. Energy, passion, creativity, ambition, action.
window.TAROT_CARDS = window.TAROT_CARDS || [];
window.TAROT_CARDS.push(
{
  id: 22, name: "Ace of Wands", arcana: "wands", number: 1, display: "Ace", glyph: "wand", element: "fire",
  keywords: { up: ["inspiration", "a spark", "new energy", "potential"], rev: ["false starts", "delays", "creative block"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Act on the spark within days, not months — inspiration is perishable and this one is genuine.",
            rev: "The idea is fine; the timing or channel is blocked. Clear one obstacle rather than doubting the whole flame." },
  meanings: {
    general: { up: "A raw spark of new energy is being handed to you — an idea, an opportunity, a surge of desire to begin. Aces are offers, not guarantees: this one rewards immediate, enthusiastic action.",
               rev: "Inspiration is present but sputtering — false starts, delays, or enthusiasm with nowhere to land. The spark needs a cleared channel, not more fuel." },
    love:    { up: "A jolt of fresh passion — a magnetic new attraction or a rekindling within an existing bond. Follow the energy; it has real potential behind it.",
               rev: "Attraction that flares and fizzles, or passion stalled by hesitation. Ask what's damping the fire before assuming it isn't there." },
    career:  { up: "A new project, role, or venture ignites genuine excitement. This is the green light for the bold beginning you've been circling.",
               rev: "A promising initiative is delayed or your creative drive is blocked. Recharge deliberately — the ambition returns once pressure lifts." },
    money:   { up: "A fresh income opportunity or the energizing first step of a financial goal. Strike while motivated; set up the structure today.",
               rev: "A money opportunity that underwhelms or stalls. Verify substance before investing more enthusiasm or cash." },
    health:  { up: "A surge of vitality — the perfect moment to begin a new practice or reclaim physical momentum.",
               rev: "Energy dips and stalled starts. Lower the bar to something you'll actually do daily; momentum rebuilds from small wins." },
    spiritual:{ up: "A spiritual spark — sudden inspiration, a calling, creative fire with sacred roots. Kindle it with practice.",
               rev: "The initial fire of your path has dimmed into routine. Return to what first lit you up; rekindle from the source." }
  }
},
{
  id: 23, name: "Two of Wands", arcana: "wands", number: 2, display: "II", glyph: "wand", element: "fire",
  keywords: { up: ["planning", "future vision", "a decision to expand"], rev: ["playing small", "fear of leaving the known", "poor planning"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Plan boldly and choose the wider world — the safe option and the right option are not the same one this time.",
            rev: "The world in your hands has shrunk to the size of your comfort zone. Name the fear, then plan past it." },
  meanings: {
    general: { up: "You hold the world in your hand and a decision at your feet: stay in the familiar castle or step toward the larger territory you can already see. The vision is sound — begin the concrete planning.",
               rev: "Bigger possibilities are being declined out of fear disguised as prudence. Or plans are all vision, no logistics. Either way, the gap between dreaming and mapping is the problem." },
    love:    { up: "The relationship faces a choose-your-future moment — deeper commitment, a move, a shared plan. Look outward together; the partnership is ready for a bigger map.",
               rev: "Playing it safe romantically — staying in the comfortable known rather than risking the honest conversation about the future. The limbo costs more than the answer would." },
    career:  { up: "Time to plan the expansion: the bigger role, new market, or leap you've been eyeing from the balcony. Your position is strong; use it as a launchpad, not a perch.",
               rev: "Career restlessness without a plan, or ambition capped by fear of leaving what's secure. Draft the exit-and-expansion plan even if you don't act yet — clarity changes everything." },
    money:   { up: "Strategic financial planning with a long horizon — investments, expansion, the calculated risk with researched upside.",
               rev: "Either money decisions made without a real plan, or a sound opportunity declined purely from timidity. Do the analysis; let numbers, not nerves, decide." },
    health:  { up: "Plan the next level of your wellbeing deliberately — set the goal beyond maintenance and map the route to it.",
               rev: "Health intentions that never leave the planning stage. Shrink the plan until it's startable today." },
    spiritual:{ up: "Your inner world is asking for a wider horizon — new study, new territory, a considered step beyond the familiar practice.",
               rev: "Comfort has quietly become confinement. The path you know completely may be complete; scout the next one." }
  }
},
{
  id: 24, name: "Three of Wands", arcana: "wands", number: 3, display: "III", glyph: "wand", element: "fire",
  keywords: { up: ["expansion", "momentum", "ships coming in", "foresight"], rev: ["delays", "obstacles to growth", "limited vision"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Your ships are moving — keep the long view and prepare to receive what you set in motion.",
            rev: "Progress is delayed, not denied. Reassess the route, adjust the timeline, and resist the urge to recall the ships." },
  meanings: {
    general: { up: "What you launched is underway and the first returns are appearing on the horizon. Momentum, expansion, and rewarded foresight — keep looking outward; more is coming than you can yet see.",
               rev: "Expansion hits delays or the results disappoint expectations. The plan needs adjustment, not abandonment — check whether the vision was too small or the logistics too vague." },
    love:    { up: "A relationship gaining real momentum — plans materializing, the future opening up, possibly love across distance working out. What you've invested is coming back.",
               rev: "Progress in love feels stalled — plans postponed, distance straining, growth on hold. Diagnose honestly: obstacle to remove, or signal to heed?" },
    career:  { up: "Efforts pay off and horizons widen: new markets, bigger projects, opportunities arriving from a distance. Position yourself for scale.",
               rev: "The venture is growing slower than projected. Persist with adjustments — most expansion fails at exactly this impatient middle stretch." },
    money:   { up: "Investments and initiatives begin returning. The trend is genuinely upward — reinvest wisely and extend the horizon.",
               rev: "Expected returns are late or light. Review assumptions before doubling down, but don't liquidate a sound position out of impatience." },
    health:  { up: "Sustained efforts show visible results — the routine is working and compounding. Extend the streak.",
               rev: "Results slower than hoped tempt you to quit right before the visible payoff. Plateaus precede breakthroughs; hold the routine." },
    spiritual:{ up: "Seeds planted in your inner life are sprouting — practice is bearing fruit you can finally feel. Keep tending; the harvest widens.",
               rev: "Growth feels stalled because you're measuring daily instead of seasonally. Zoom out; you are further along than the close view shows." }
  }
},
{
  id: 25, name: "Four of Wands", arcana: "wands", number: 4, display: "IV", glyph: "wand", element: "fire",
  keywords: { up: ["celebration", "homecoming", "milestone", "harmony"], rev: ["postponed celebration", "instability at home", "transition"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: 0 },
  advice: { up: "Mark the milestone properly — celebration is not indulgence, it's how progress becomes foundation.",
            rev: "Steady the home base first; everything else builds faster on settled ground." },
  meanings: {
    general: { up: "A milestone worth celebrating: stability achieved, a homecoming, a gathering of your people. The foundation is genuinely solid — enjoy it out loud.",
               rev: "A celebration postponed or a home base feeling unsettled — transition, tension, or a milestone that arrived without the expected joy. Stabilize the foundation before the next climb." },
    love:    { up: "One of the great commitment cards: engagements, moving in, weddings, or simply a relationship reaching happy, stable ground shared with community.",
               rev: "A relationship milestone delayed or domestic friction unsettling the bond. The commitment may be sound while the logistics wobble — separate the two before worrying." },
    career:  { up: "A work milestone lands — launch, completion, promotion — and team harmony makes it sweeter. Mark it; teams that celebrate, last.",
               rev: "Achievement without acknowledgment, or an unstable work environment mid-reorganization. Create your own markers of progress while the ground resettles." },
    money:   { up: "Financial stability worth acknowledging — the foundation is laid: the fund, the home, the plateau of safety. Celebrate proportionately, then build.",
               rev: "Home-related costs or instability straining finances, or premature celebration before the foundation set. Secure the base layer first." },
    health:  { up: "A recovery or fitness milestone achieved — the body has reached stable, celebratory ground. Consolidate the gains.",
               rev: "Wellbeing disrupted by upheaval at home or a transition. Anchor the basics — sleep, meals, movement — while everything else moves." },
    spiritual:{ up: "Gratitude and sacred celebration: the practice of joy, community ritual, honoring how far you've come.",
               rev: "You've been sprinting past your own milestones unacknowledged. Gratitude retroactively completes them — pause and count." }
  }
},
{
  id: 26, name: "Five of Wands", arcana: "wands", number: 5, display: "V", glyph: "wand", element: "fire",
  keywords: { up: ["competition", "friction", "conflicting agendas", "sparring"], rev: ["conflict avoided or ending", "inner conflict", "picking battles"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -1, rev: 0 },
  advice: { up: "Treat the friction as sparring practice, not war — compete cleanly, and turn the chaos into rules everyone can play by.",
            rev: "End the skirmish that's ending anyway, and stop refereeing five opinions — including the five inside your own head." },
  meanings: {
    general: { up: "Crossed wands everywhere: competition, clashing agendas, everyone talking and no one aligned. The conflict is real but low-stakes — more scuffle than war. Bring structure to the chaos and the energy becomes productive.",
               rev: "The conflict is winding down, being dodged, or has moved inside you as five competing priorities. Resolve it deliberately — suppressed friction leaks; concluded friction frees energy." },
    love:    { up: "Friction in love: rivals for attention, bickering over small things, or two strong wills sparring. Underneath is usually engaged energy — redirect it from opposition to teamwork.",
               rev: "A cycle of quarrels is either resolving or being swept under the rug. Only one of those is peace; check which one you have." },
    career:  { up: "Competitive workplace energy — rival ideas, turf friction, everyone pitching at once. Compete on the merits and stay clean; this round is won by composure plus competence.",
               rev: "Office conflict subsiding or being avoided at the cost of honesty. Surface the real disagreement in a structured way before it re-erupts unstructured." },
    money:   { up: "Competing financial demands — everything claiming priority at once. Rank them ruthlessly; scattered money, like scattered fire, warms nothing.",
               rev: "Financial tug-of-war easing, or an internal battle between spender and saver. Write the truce down: a budget is a peace treaty." },
    health:  { up: "Scattered energy and competing demands wearing the body down — stress from too many fronts. Simplify the battlefield.",
               rev: "Inner conflict about health choices resolving into a clearer plan. Choose one approach and give it an honest month." },
    spiritual:{ up: "Competing beliefs and inner voices in noisy debate. This is growth's messy middle — hold the questions without forcing a winner.",
               rev: "The inner debate quiets and a synthesis emerges. Let the remaining differences coexist; not every question needs a verdict." }
  }
},
{
  id: 27, name: "Six of Wands", arcana: "wands", number: 6, display: "VI", glyph: "wand", element: "fire",
  keywords: { up: ["victory", "recognition", "public success", "confidence"], rev: ["private victory", "fall from favor", "ego check", "self-doubt"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Accept the laurels graciously and visibly — earned recognition, received well, attracts the next opportunity.",
            rev: "Detach your worth from the applause. Do the excellent work; let recognition catch up on its own schedule." },
  meanings: {
    general: { up: "Victory — and a public one. Recognition, acclaim, the win that others witness. You've earned this parade; ride through it with confidence and gratitude in equal measure.",
               rev: "Success without applause, recognition delayed, or confidence wobbling on other people's opinions. The achievement is real whether or not it trended. Validate yourself first." },
    love:    { up: "A relationship you're proud to be seen in — public affirmation, support of friends and family, or winning the heart you sought. Enjoy being celebrated together.",
               rev: "Seeking too much external validation of the relationship, or feeling unseen by your partner. The audience that matters is each other." },
    career:  { up: "Professional triumph: the promotion, the award, the win announced in front of everyone. Your reputation rises — leverage the moment while it's warm.",
               rev: "Passed over, under-credited, or promoted into imposter feelings. Keep receipts of your impact and advocate calmly — and remember titles lag contributions." },
    money:   { up: "A financial win worth acknowledging — the raise, the successful sale, the goal achieved. Success handled with grace compounds.",
               rev: "Financial appearance management — spending to look successful. The audit that matters is net worth, not perceived worth." },
    health:  { up: "A visible health victory — the milestone others notice, the recovery confirmed. Confidence itself now accelerates progress.",
               rev: "Progress that others don't see yet, tempting you to discount it. The scale of change is measured from your start line, not their glance." },
    spiritual:{ up: "Confidence on the path — a summit reached, and the humility to know more mountains follow. Share the view without preaching it.",
               rev: "Spiritual pride or performance — the practice bent toward being seen. Return to the version you'd do with no witnesses." }
  }
},
{
  id: 28, name: "Seven of Wands", arcana: "wands", number: 7, display: "VII", glyph: "wand", element: "fire",
  keywords: { up: ["defending your ground", "perseverance", "conviction under pressure"], rev: ["overwhelm", "giving ground", "exhausted defenses"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Hold the high ground — you're right to defend this, and your position is stronger than the noise suggests.",
            rev: "You cannot defend every wall at once. Choose what's truly worth protecting and let the rest of the siege exhaust itself." },
  meanings: {
    general: { up: "You're on the hill being challenged from below — competitors, critics, demands. The good news: you hold the high ground, and conviction is your weapon. Defend what you've built; don't surrender it to sheer volume of opposition.",
               rev: "The defense is faltering — too many fronts, eroding conviction, or fatigue making surrender look like wisdom. Regroup: which battles are actually yours, and which are you fighting from habit?" },
    love:    { up: "Defending the relationship — against outside opinions, circumstances, or old patterns trying to reassert. Standing firm for what you two have is exactly right now.",
               rev: "Worn down by having to constantly justify or fight for the relationship. Ask whether the siege is external noise or a signal from within the walls." },
    career:  { up: "Your position, idea, or territory is being challenged — and defensible. Advocate firmly for your work; those who hold steady through this round come out established.",
               rev: "Workplace pressure from all directions has you near burnout. Prioritize ruthlessly, ask for backup, and stop defending projects nobody actually threatens." },
    money:   { up: "Protect your financial position against claims, pressure, and salespeople — 'no' is a complete sentence and currently your most profitable one.",
               rev: "Financial boundaries collapsing under persistent pressure. Automate the protections (locks, budgets, cooling-off rules) so tired-you can't be negotiated with." },
    health:  { up: "Sustained defense of your wellbeing — protecting routines, boundaries, and recovery against everything that wants your time. Guard them like appointments.",
               rev: "Running on defensive fumes; stress from every side. The strongest move is strategic retreat — genuinely rest, then re-engage selectively." },
    spiritual:{ up: "Hold your convictions under challenge — testing is how beliefs become yours instead of inherited. Stand firm without becoming rigid.",
               rev: "Defensiveness has crept into your beliefs — protecting positions instead of seeking truth. Let the genuinely strong convictions survive on their merits." }
  }
},
{
  id: 29, name: "Eight of Wands", arcana: "wands", number: 8, display: "VIII", glyph: "wand", element: "fire",
  keywords: { up: ["swift movement", "momentum", "news arriving", "alignment"], rev: ["delays", "scattered energy", "resisting the pace"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Move now and move fast — the wind is behind you and hesitation is the only drag.",
            rev: "Stop launching new arrows until the airborne ones land. Sequence beats speed when everything's in flight." },
  meanings: {
    general: { up: "Everything accelerates: messages arrive, obstacles clear, events align and move. This is the deck's fastest card — decisions and actions taken now travel far. Clear the runway.",
               rev: "Momentum stalls — delays, missed connections, or energy scattered across too many arrows. Frustration is understandable; use the slowdown to aim better." },
    love:    { up: "Rapid developments in love — sudden messages, quick progress, passion moving at flight speed. Possibly travel or distance closing fast. Say yes to the momentum.",
               rev: "Mixed or delayed signals, plans postponed, a connection losing velocity. Before chasing, let the dust settle enough to see if they're moving toward you at all." },
    career:  { up: "Fast-moving developments: quick decisions, rapid-fire opportunities, news that changes the picture. Respond same-day; speed is currently a competitive advantage.",
               rev: "Projects stuck in transit — approvals pending, replies missing, launches slipping. Chase the blockers politely and relentlessly; squeaky wheels ship." },
    money:   { up: "Money moves quickly now — fast transactions, swift news, opportunities with short windows. Be ready, but verify even while moving fast.",
               rev: "Payments delayed, transfers stuck, deals dragging. Build slack into the timeline and follow up in writing." },
    health:  { up: "Energy returns at speed — recovery accelerates, vitality surges. Channel it into structured movement before it dissipates.",
               rev: "Rushing the body's timeline invites setback. Some healing simply takes the time it takes; impatience is not a treatment." },
    spiritual:{ up: "Rapid inner movement — insights arriving in clusters, synchronicities stacking. Ride the current and take notes; this pace won't be constant.",
               rev: "Spiritual restlessness — grabbing at every practice as it flies past. Let one arrow land and study where it struck." }
  }
},
{
  id: 30, name: "Nine of Wands", arcana: "wands", number: 9, display: "IX", glyph: "wand", element: "fire",
  keywords: { up: ["resilience", "last stand", "battle-tested persistence"], rev: ["exhaustion", "paranoia", "refusing help", "one wall too many"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "You're wounded but standing, and closer to the end than you think — hold on for this last stretch.",
            rev: "Not every approaching figure is an enemy. Lower the shield long enough to accept the help that's offered." },
  meanings: {
    general: { up: "Battle-worn but unbroken. You've absorbed real hits and you're still standing guard — and the crucial truth is that this is the final stretch, not the middle. Resilience now completes what persistence started.",
               rev: "The wounds are running the watch: exhaustion, hypervigilance, defenses raised against everything including help. You've confused being guarded with being strong. Rest is not surrender." },
    love:    { up: "Love that has weathered real tests and still stands — cautious, scarred, but committed. One more honest push through the current difficulty likely secures the peace.",
               rev: "Past hurts patrolling the present relationship — walls against a partner who isn't the one who wounded you. The armor that saved you then is starving you now." },
    career:  { up: "The project or push is at its hardest, latest stage — everyone else has dropped away and you're still holding. Persist: this specific endurance is what the payoff has been waiting for.",
               rev: "Professional burnout wearing a uniform of dedication. Delegating, pausing, or asking for reinforcements isn't weakness — it's how campaigns are actually won." },
    money:   { up: "Financial defenses tested but holding — you've protected the essentials through a hard stretch. Maintain the discipline; the siege is lifting.",
               rev: "Money vigilance shading into scarcity paranoia, or defenses so rigid they block opportunity. Review the threats realistically; some ended a while ago." },
    health:  { up: "Deep resilience — recovering, persisting, still in the fight. Your stamina through this is building a durability nothing else could.",
               rev: "The body's reserves are spent and still being drawn on. This is the card that orders rest before the system orders it for you." },
    spiritual:{ up: "Faith tested and still standing — the seasoned kind that has survived doubt. The final stretch of this inner trial is where the real transformation completes.",
               rev: "Spiritual battle-fatigue: guarded against the very openness the path requires. You can put the staff down; the war you're braced for is over." }
  }
},
{
  id: 31, name: "Ten of Wands", arcana: "wands", number: 10, display: "X", glyph: "wand", element: "fire",
  keywords: { up: ["burden", "overload", "carrying it all", "the costly last mile"], rev: ["releasing burdens", "delegation", "collapse if unheeded"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -1, rev: 0 },
  advice: { up: "Finish the load you're carrying, then renegotiate everything about how much you carry — this weight was never meant to be permanent.",
            rev: "Set some of it down today. Half these burdens belong to other people, and the rest can be carried in more than one trip." },
  meanings: {
    general: { up: "You're carrying everything — every task, every responsibility, every else's share — and the destination is close but the load is unsustainable. Success achieved this way costs more than it pays. Deliver this load, then redesign the job.",
               rev: "Either you're finally putting burdens down (good — continue), or you're one added straw from a forced collapse. The choice between chosen rest and imposed breakdown is still available. Barely." },
    love:    { up: "One partner is carrying the relationship — the logistics, the emotions, the repair work. Love isn't measured in exhaustion; redistribute before resentment does it for you.",
               rev: "The overloaded partner is starting to set things down — which either rebalances the relationship or reveals it never balances. Both outcomes beat silent martyrdom." },
    career:  { up: "Chronic overload: the reward for good work has become more work. You're near a real finish line — cross it, then have the workload conversation you keep postponing.",
               rev: "Delegation is beginning, or must: the current load is producing errors, resentment, and diminishing returns. Dropping the right tasks is a professional skill, not a failure." },
    money:   { up: "Heavy financial obligations — debts, dependents, commitments stacked to the chin. A structured payoff plan turns a crushing pile into a countable sequence.",
               rev: "Financial burdens easing through restructuring, or demanding to be restructured. Consolidate, renegotiate, and shed the obligations you only carry from guilt." },
    health:  { up: "The body is carrying the overload's bill — tension, exhaustion, stress symptoms. No supplement fixes a sustainability problem.",
               rev: "Forced rest looms if voluntary rest keeps being declined. Choose the smaller surrender now to avoid the larger one later." },
    spiritual:{ up: "You've made a virtue of carrying — responsibility as identity. The spiritual task is subtraction: what are you carrying that was never yours?",
               rev: "The great putting-down begins. Release obligations, guilt, and inherited weights — travel light enough to actually look up at the road." }
  }
},
{
  id: 32, name: "Page of Wands", arcana: "wands", number: 11, display: "Page", glyph: "wand", element: "fire",
  keywords: { up: ["enthusiasm", "exploration", "a spark of news", "free spirit"], rev: ["scattered enthusiasm", "hasty starts", "restless boredom"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Follow the curiosity — explore, ask, experiment. Not knowing where it leads is the point.",
            rev: "Enthusiasm needs a container. Pick one spark and tend it past the boring part where the last three died." },
  meanings: {
    general: { up: "The eternal enthusiast arrives — exciting news, a new interest, or your own restless spark demanding exploration. Say yes to the adventure at the idea stage; refinement comes later.",
               rev: "Sparks everywhere, fires nowhere: scattered starts, short attention, commitment allergies. The enthusiasm is a gift — it just needs one worthy target and a longer fuse." },
    love:    { up: "A flirtatious, energizing connection — someone playful and spontaneous, or a message that quickens things. Enjoy the lightness; let depth develop at its own pace.",
               rev: "Charm without follow-through — the exciting one who never lands, or your own restlessness sabotaging good beginnings. Ask what you're actually looking for." },
    career:  { up: "A promising opportunity or project arrives that reawakens your professional excitement. Explore it eagerly — apprentice energy opens doors expertise can't.",
               rev: "Job restlessness and half-started initiatives. Before jumping ship again, finish one visible thing where you are — it changes both your options and your pattern." },
    money:   { up: "An energizing new money idea or opportunity worth exploring — small, low-stakes experiments are exactly right.",
               rev: "Impulsive purchases and abandoned money schemes. Enthusiasm is not due diligence; give ideas a two-week cooling period." },
    health:  { up: "Playful new energy — a sport, activity, or approach that makes wellbeing fun again. Novelty is a legitimate strategy.",
               rev: "Fitness enthusiasm that burns out by week three. Design for the bored version of you, not the inspired one." },
    spiritual:{ up: "Beginner's mind rekindled — new practices, new questions, holy curiosity. Explore freely; this is a season for wandering.",
               rev: "Spiritual dabbling without depth. Wandering was the right season; it may be ending. Choose a path worth boring-parts commitment." }
  }
},
{
  id: 33, name: "Knight of Wands", arcana: "wands", number: 12, display: "Knight", glyph: "wand", element: "fire",
  keywords: { up: ["bold action", "adventure", "charisma", "full gallop"], rev: ["recklessness", "impulsiveness", "scattered fire", "burnout"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Charge — boldly, visibly, now. This situation rewards daring more than deliberation.",
            rev: "Rein in before you leap; the horse is running the rider. Passion plus patience is the actual power combo." },
  meanings: {
    general: { up: "Full-gallop energy enters your life — a bold move, a charismatic person, an adventure that won't wait. Momentum and courage are favored; perfection and permission are not required.",
               rev: "The gallop has lost its steering: impulsive starts, dramatic exits, promises outpacing delivery. Channel the fire through one commitment that survives its own excitement." },
    love:    { up: "A passionate pursuit — someone sweeps in with intensity and confidence, or the relationship gets a bold injection of adventure. Thrilling and genuine; just watch whether the pace has staying power.",
               rev: "Hot-then-cold intensity, a partner (or pattern) that loves the chase and stalls at the commitment. Enjoy fireworks; build with slower fuel." },
    career:  { up: "Bold professional moves pay: the audacious pitch, the fast relocation, the leap at the opening. Fortune favors your daring this season — move before the window shifts.",
               rev: "Career impulsiveness — leaping without looking, burning bridges for momentum's sake. Bold is good; irreversible-without-a-plan is not." },
    money:   { up: "Confident, decisive financial action on a researched opportunity. Strike fast — but only where you've already done the homework.",
               rev: "Hot money: impulsive bets, FOMO buys, thrill-driven risk. If the investment feels like adrenaline, it's entertainment, not strategy — budget it as such." },
    health:  { up: "Vigorous energy demanding an outlet — intense training, adventure, physical challenge suit you now.",
               rev: "All-out effort followed by injury or abandonment. The body keeps score of every session skipped-warmup; ramp intensity gradually." },
    spiritual:{ up: "Passionate spiritual pursuit — the pilgrimage, the intensive, the bold vow. Your fire is genuine; ride it.",
               rev: "Spiritual intensity that spikes and crashes. The masters were mostly marathoners; convert sprint fervor into daily embers." }
  }
},
{
  id: 34, name: "Queen of Wands", arcana: "wands", number: 13, display: "Queen", glyph: "wand", element: "fire",
  keywords: { up: ["confidence", "warmth", "magnetic leadership", "vibrancy"], rev: ["insecurity", "jealousy", "demanding validation", "dimmed fire"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Take up your full space — lead with warmth, want what you want openly, and let your confidence give others permission for theirs.",
            rev: "Comparison is dousing your fire. Return attention to your own hearth; your light doesn't need anyone else's dimmer." },
  meanings: {
    general: { up: "The most magnetic figure in the deck: confident, warm, unapologetically vibrant. Either such a person aids your situation, or you're called to be her — socially bold, creatively alive, leading by enthusiasm rather than force.",
               rev: "The fire turned inward or sour: confidence eroded by comparison, warmth curdling into jealousy or need for validation. The remedy is expression — the blocked creative energy is the symptom's source." },
    love:    { up: "Confident, passionate love — knowing your worth and radiating it. For seekers: lead with your genuine self, boldly. For partners: bring back the vibrancy you had at your boldest.",
               rev: "Jealousy or insecurity heating the relationship — possessiveness, comparison to others, needing constant reassurance. Address the confidence wound directly rather than policing the partner." },
    career:  { up: "Lead visibly: your combination of competence and warmth is your professional superpower right now. Host the meeting, own the room, champion others while advancing yourself.",
               rev: "Workplace confidence undermined — by a difficult figure, or your own inner critic wearing a colleague's face. Reclaim your record; you've earned your seat." },
    money:   { up: "Confident, generous stewardship — money as fuel for a full life rather than a scoreboard. Your instincts about value are sharp now.",
               rev: "Status spending — the finances performing confidence the heart doesn't feel. The real flex is quietly funded freedom." },
    health:  { up: "Radiant vitality — energy, appetite for life, body confidence. Sustain it with pleasure-based movement rather than punishment-based." ,
               rev: "Energy dimmed by self-criticism or others' draining demands. Vitality returns when you stop performing wellness and start enjoying it." },
    spiritual:{ up: "Embodied spirit — practice with passion, warmth as devotion, confidence as faith in your own flame's source.",
               rev: "Comparing your inner life to others' displayed ones. The flame doesn't compete; tend yours in private until it steadies." }
  }
},
{
  id: 35, name: "King of Wands", arcana: "wands", number: 14, display: "King", glyph: "wand", element: "fire",
  keywords: { up: ["visionary leadership", "bold mastery", "entrepreneurship"], rev: ["arrogance", "tyranny of vision", "impulsive authority"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Lead from the front with the full vision — people follow conviction, and yours is currently earned and contagious.",
            rev: "Vision without listening becomes tyranny. Re-open the counsel channels before decreeing the next move." },
  meanings: {
    general: { up: "The visionary in full authority: bold strategy, natural command, fire matured into leadership. Either such an ally shapes your situation, or the situation demands you take the throne — decide the direction and own it publicly.",
               rev: "Leadership fire misfiring — arrogance, impatience with slower minds, or a domineering figure imposing their vision on everyone's map. Authority that stops listening starts failing." },
    love:    { up: "A partner (or partnership energy) of confident maturity — protective, direct, generous with vision for the shared future. Big commitments made from strength, not need.",
               rev: "Dominance dressed as leadership in the relationship — one vision steamrolling two lives. A partnership has co-authors, not a director." },
    career:  { up: "Executive energy: lead the venture, set the strategy, take the entrepreneurial leap. Others are ready to follow you — the vision plus your record equals real authority now.",
               rev: "A difficult authority figure, or your own leadership shading into impatience and ego. The strongest leaders in the room are the ones still asking questions." },
    money:   { up: "Bold, strategic financial leadership — the big-picture allocation, the calculated venture, wealth built by vision executed with discipline.",
               rev: "Overconfident money moves — betting the estate on being right. Even visionaries hedge; especially visionaries hedge." },
    health:  { up: "Command your health like a domain: clear goals, decisive changes, energy directed from the top down. The body follows committed leadership.",
               rev: "Ignoring bodily counsel because the schedule is 'too important' — the kingdom's leader running it into the ground. Sustainable rule requires a sustainable ruler." },
    spiritual:{ up: "Mature spiritual fire: vision in service of others, leadership by lived example, the teacher-flame that lights without burning.",
               rev: "The ego claiming the credit for the flame. True spiritual authority never needs announcing — recheck who the practice is serving." }
  }
}
);
