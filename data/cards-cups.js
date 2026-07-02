// Suit of Cups. Water. Emotion, relationships, intuition, the heart.
window.TAROT_CARDS = window.TAROT_CARDS || [];
window.TAROT_CARDS.push(
{
  id: 36, name: "Ace of Cups", arcana: "cups", number: 1, display: "Ace", glyph: "cup", element: "water",
  keywords: { up: ["new love", "emotional opening", "compassion", "overflow"], rev: ["blocked feelings", "emptiness", "love withheld"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Open the heart and let it overflow. Offered feeling, expressed now, starts everything good that follows.",
            rev: "The cup refills from the inside. Tend your own emotional wellspring before measuring what others pour." },
  meanings: {
    general: { up: "A new emotional beginning. Love arriving, compassion overflowing, the heart genuinely opening. Whatever you're asking about, feeling is the fuel now: lead with it.",
               rev: "The wellspring feels blocked or drained. Feelings suppressed, love withheld (by you or toward you), emotional numbness after depletion. The cup isn't broken; it's been left untended." },
    love:    { up: "The purest new-love card: a fresh connection, a declaration, or a renewal of tenderness that feels like beginning again. Receive it without armor.",
               rev: "Feelings unexpressed are becoming feelings suppressed, or love offered into a cup that stays closed. Someone needs to go first with honesty; let it be you." },
    career:  { up: "Emotional renewal at work. A role that finally feeds you, warm collaboration, or creative flow returning. Choose work that fills rather than only pays.",
               rev: "Emotional flatness at work. Running on empty, feelings checked at the door. Sustainable careers need a heart line; find one thing to genuinely care about there, or plan toward work that has it." },
    money:   { up: "A healthier emotional relationship with money begins. Generosity from sufficiency, spending aligned with what you love.",
               rev: "Money and mood tangled. Spending to fill emotional gaps, or anxiety blocking reasonable enjoyment. Treat the feeling; the finances follow." },
    health:  { up: "Emotional healing lifts physical wellbeing. The mind-body connection working in your favor. Tend feelings as faithfully as symptoms.",
               rev: "Suppressed emotion expressing itself somatically. Tension, fatigue, unrest. The body is finishing sentences the heart won't start." },
    spiritual:{ up: "Grace flows: an open heart, spontaneous compassion, the felt sense of connection to something larger. Drink directly.",
               rev: "Spiritual dryness. Practices continuing but the feeling gone. The water table refills through rest, beauty, and honest grief, not more effort." }
  }
},
{
  id: 37, name: "Two of Cups", arcana: "cups", number: 2, display: "II", glyph: "cup", element: "water",
  keywords: { up: ["partnership", "mutual attraction", "union of equals"], rev: ["imbalance", "disconnection", "a strained bond"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Meet them exactly halfway. This connection thrives on visible mutuality, offered and received.",
            rev: "Name the imbalance gently and specifically. Bonds rarely break from one honest conversation; they break from a hundred avoided ones." },
  meanings: {
    general: { up: "Two cups raised in mutual recognition: partnership, attraction, alliance between equals. Whatever the domain, the answer involves another person, and the connection is genuinely reciprocal.",
               rev: "A bond out of balance. Effort flowing one way, respect uneven, or two people slowly de-synchronizing. Most such rifts are repairable at this stage; the repair is honesty, soon." },
    love:    { up: "The card of mutual love: attraction that flows both directions, a proposal or deepening, the rare meeting of true equals. This connection deserves your full presence.",
               rev: "The mutuality has slipped. One pursuing, one withholding; scores kept; tenderness rationed. Rebalance deliberately or the asymmetry becomes the relationship." },
    career:  { up: "A powerful working partnership. The collaborator, co-founder, or ally whose strengths interlock with yours. Formalize good alliances now.",
               rev: "A work partnership straining. Unequal credit, mismatched effort, or values quietly diverging. Renegotiate the terms explicitly before resentment writes them for you." },
    money:   { up: "Financial harmony through partnership. Joint goals aligned, mutual transparency, deals that benefit both sides evenly.",
               rev: "Money imbalance in a partnership. Unequal contribution or one-sided decisions. Fair doesn't always mean equal, but it always means agreed." },
    health:  { up: "Healing supported by connection. The partner, friend, or practitioner whose support tangibly helps. Don't recover alone what heals faster together.",
               rev: "A relationship strain is taxing your health, or you're pouring care out while receiving none. Rebalance the exchange; depletion helps no one twice." },
    spiritual:{ up: "The sacred mirror: another soul reflecting you clearly. A partner, friend, or teacher whose presence is itself a practice.",
               rev: "Projection has replaced connection. Relating to your image of them rather than them. Clean the mirror; see who's actually there." }
  }
},
{
  id: 38, name: "Three of Cups", arcana: "cups", number: 3, display: "III", glyph: "cup", element: "water",
  keywords: { up: ["friendship", "celebration", "community", "shared joy"], rev: ["third-party interference", "overindulgence", "isolation from friends"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Gather your people. This situation improves in community, and joy shared now multiplies.",
            rev: "Check what the crowd is costing you. Whether that's a third voice in a two-person matter, or festivities becoming avoidance." },
  meanings: {
    general: { up: "Cups raised among friends: celebration, community, the medicine of being truly known by your people. Whatever you asked, the answer is not solitary. Gather, share, toast.",
               rev: "Community miswired: a third party intruding where two belong, social obligations draining rather than filling, or isolation from friends who'd gladly help if asked." },
    love:    { up: "Love flourishing in community. A relationship your friends genuinely celebrate, or (for seekers) connection arriving through your social world. Say yes to the gatherings.",
               rev: "A third presence straining the bond. A friend, an ex, an in-law, or an actual rival. The couple's inner circle needs a boundary drawn by both partners together." },
    career:  { up: "Team success and collegial joy. Collaboration humming, wins celebrated together. Your network is warm right now; engage it.",
               rev: "Workplace cliques or friction in the team, or networking neglected until needed. Repair the collegial fabric before you need to pull on it." },
    money:   { up: "Shared abundance. Celebrating within means, generosity in community, maybe funds arriving via social channels.",
               rev: "Social spending outpacing the budget. The lifestyle keeping-up tax. Real friends celebrate you, not your receipts." },
    health:  { up: "Wellbeing through connection. The walk with friends, the shared meal, laughter as literal medicine. Isolation was the deficiency; community is the supplement.",
               rev: "Overindulgence in good company presenting the bill, or withdrawal from the very people who buoy you. Moderation in the pleasures; none in the friendship." },
    spiritual:{ up: "Sacred community. Practice shared, joy as worship, the divine found around a table. Seek your circle.",
               rev: "Spiritual community turned cliquish or performative, or your retreat from fellowship gone too long. Belonging is part of the path, with discernment." }
  }
},
{
  id: 39, name: "Four of Cups", arcana: "cups", number: 4, display: "IV", glyph: "cup", element: "water",
  keywords: { up: ["apathy", "discontent", "the unseen offer", "contemplation"], rev: ["re-engagement", "new receptivity", "emerging from withdrawal"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -1, rev: 1 },
  advice: { up: "Look up. A genuine offer sits at your elbow while you contemplate the three that disappointed. Weigh it before declining by default.",
            rev: "Your appetite for life is returning; feed it. Accept the next invitation on principle." },
  meanings: {
    general: { up: "Arms crossed under the tree: apathy, discontent, the sense that nothing on offer is quite it. Meanwhile an actual opportunity hovers unexamined. The malaise is real, but so is the fourth cup. Look up before you pass.",
               rev: "The fog of disinterest lifts. Appetite, curiosity, and willingness return. Re-engage promptly; the offers you ignored may still be within reach." },
    love:    { up: "Emotional withdrawal. One of you checked out, taking the connection for granted, or so focused on what's missing that what's offered goes unseen. Attention is the antidote.",
               rev: "Renewed openness after a shut-down season. Ready to notice, receive, and respond again. Someone may re-extend a hand; this time, see it." },
    career:  { up: "Work malaise: going through motions, opportunities greeted with a shrug. Before concluding the job is the problem, test whether disengagement has become the habit. Pursue one thing with full effort and compare.",
               rev: "Motivation stirs after a flat stretch. Act on it structurally, new project, new scope, before the window of energy closes." },
    money:   { up: "Financial apathy. Statements unopened, opportunities unexamined, autopilot spending. Boredom with money is expensive; one attentive hour pays for itself.",
               rev: "Re-engaging with finances after avoidance. The overdue review will be less painful than the imagining of it. Do it this week." },
    health:  { up: "Lethargy and low motivation. The body sluggish because the spirit is flat. Rule out the physical causes, then treat the boredom: novelty, nature, people.",
               rev: "Energy and interest returning. Anchor the recovery with one enjoyable physical commitment before apathy can reapply." },
    spiritual:{ up: "Spiritual discontent. Practices tasting of cardboard, blessings inventoried as insufficient. The dryness is a stage; the fourth cup here is usually gratitude, genuinely practiced.",
               rev: "Emerging from the dry season with new receptivity. What was stale re-enchants; return to the practice you shelved." }
  }
},
{
  id: 40, name: "Five of Cups", arcana: "cups", number: 5, display: "V", glyph: "cup", element: "water",
  keywords: { up: ["grief", "loss", "regret", "what remains unseen"], rev: ["acceptance", "moving forward", "forgiveness"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -2, rev: 1 },
  advice: { up: "Grieve the three spilled cups fully, and then turn around: two still stand, and the bridge home is intact.",
            rev: "You've mourned enough to move. Cross the bridge; carry the lesson, not the spill." },
  meanings: {
    general: { up: "Real loss has occurred, and the grief is legitimate. Honor it. But the card's whole teaching is in its geometry: three cups spilled, two still standing, and a bridge behind you. Mourning what's lost must not become blindness to what remains.",
               rev: "The turn: acceptance arriving, forgiveness (of others or yourself) becoming possible, the gaze lifting from the spill to the road. Recovery is underway. Walk it." },
    love:    { up: "Heartbreak, disappointment, or grief within love. An ending, a betrayal, or mourning what a relationship failed to be. Feel it fully; but note the two cups: what remains, in this bond or in you, is more than the pain admits.",
               rev: "Healing after heartbreak. The ex-grip loosening, forgiveness lightening the chest, openness to love returning. Don't rush it, but don't refuse it either." },
    career:  { up: "A professional loss or regret. The failed project, the missed role, the path not taken. Extract the lesson deliberately; then audit what survived, because your standing assets are larger than the failure suggests.",
               rev: "Moving past a career setback. Reframing failure as tuition and re-engaging. The comeback narrative is now yours to write; employers respect a well-told recovery." },
    money:   { up: "A financial loss and its grief. Money gone, an opportunity blown, the sting of hindsight. Count what remains accurately; rebuilding starts from the standing cups, not the spilled ones.",
               rev: "Acceptance of a loss and the turn toward rebuilding. Cut the mental replay of the mistake. Its remaining value is only the lesson, already extracted." },
    health:  { up: "Grief living in the body. Loss expressing as fatigue, heaviness, or unrest. Grieving is physical work; give it rest, movement, and witness.",
               rev: "Emotional recovery lifting physical symptoms. The heaviness thawing. Support the mend with gentleness; healing accelerates near the end." },
    spiritual:{ up: "The dark night as teacher: loss stripping away the nonessential. What spills was spillable; the practice now is grieving without abandoning the still-standing cups of meaning.",
               rev: "Grief alchemizing into wisdom. The loss becoming, slowly, a strange gift. Forgiveness completes the transmutation." }
  }
},
{
  id: 41, name: "Six of Cups", arcana: "cups", number: 6, display: "VI", glyph: "cup", element: "water",
  keywords: { up: ["nostalgia", "innocence", "reunion", "kindness from the past"], rev: ["stuck in the past", "rose-tinted memory", "leaving home behind"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Let the past visit, the reunion, the memory, the old kindness, and bring its sweetness into the present.",
            rev: "The past is a fine place to visit and a poor place to live. Take the gift; leave the residence." },
  meanings: {
    general: { up: "The past arrives bearing gifts: a reunion, a nostalgic sweetness, an old kindness returning, or the healing of your relationship with your own history. Innocence revisited can genuinely nourish the present.",
               rev: "The rearview mirror has become the windshield. Idealizing what was, or old patterns and people overstaying their relevance. Honor the past by graduating from it." },
    love:    { up: "An old flame, a childhood-sweetheart energy, or a couple reconnecting with their earliest tenderness. The past holds something warm and usable here. Revisit it together.",
               rev: "Comparing present love to an edited memory, or an ex orbiting back mostly out of nostalgia. Ask what's actually being missed: the person, or the era of your life they costarred in?" },
    career:  { up: "Past connections bear fruit. Former colleagues, old mentors, skills from an earlier chapter becoming newly relevant. Mine your history; it's an asset.",
               rev: "Clinging to how the industry, company, or role used to be. Institutional memory is valuable only when it informs the present rather than vetoing it." },
    money:   { up: "Help or resources from familiar sources. Family, old networks, or the fruits of past prudence. Money history can heal too: notice which inherited patterns to keep.",
               rev: "Financial patterns inherited from childhood running the show unexamined. Scarcity scripts, family money roles. Audit which are still true, and whose voice the anxious one actually is." },
    health:  { up: "Healing through the familiar. Childhood foods done healthily, old sports rediscovered, the comfort of known rhythms. The inner child's play is legitimate medicine.",
               rev: "Old comfort habits resurfacing under stress. The nostalgia is the craving's costume. Meet the need underneath it more kindly." },
    spiritual:{ up: "Return to innocence: the child's unguarded wonder as advanced practice. Revisit what felt sacred before you had words for it.",
               rev: "Spiritual homesickness for an earlier certainty. You can't re-enter that innocence, but you can carry it. The second naivety, chosen with open eyes, is deeper than the first." }
  }
},
{
  id: 42, name: "Seven of Cups", arcana: "cups", number: 7, display: "VII", glyph: "cup", element: "water",
  keywords: { up: ["options", "fantasy", "illusion", "choice paralysis"], rev: ["clarity", "commitment to one path", "sober choices"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: -1, rev: 1 },
  advice: { up: "Stop shopping among clouds. Pick one cup by your values, test it against reality, and let the other six evaporate.",
            rev: "Your discernment has returned. Trust the shortlist and commit before the fog re-forms." },
  meanings: {
    general: { up: "Seven shimmering options, most of them mirages: fantasy, wishful thinking, and choice paralysis dressed as possibility. The abundance is partly illusion. Nothing becomes real until one cup is chosen and the choosing hand does work.",
               rev: "The fog clears: options resolve into one or two real ones, fantasy yields to plan, and decisive commitment finally becomes possible. Choose promptly while the clarity holds." },
    love:    { up: "Romantic haze. Idealizing someone into a fantasy, juggling maybes, or preferring the dream of love to its practical work. The person in your head and the person in your life must be reconciled.",
               rev: "Seeing a person or situation clearly at last. The projection peeled off. Whatever's revealed, decisions made on reality outperform ones made on the highlight reel." },
    career:  { up: "Too many possible paths, each glittering, none pursued past daydream. Careers are built by elimination: kill the fantasy options explicitly so the real one gets your full force.",
               rev: "Career focus crystallizes. The shortlist is real now. Commit to the chosen path for a defined season; revisit only at the review date, not at every shiny distraction." },
    money:   { up: "Financial fantasies. The windfall daydream, scattered speculative bets, choices deferred while options are endlessly browsed. If it promises magic, it's marketing.",
               rev: "Sober financial clarity. The get-rich mist dissolving into an actual plan. Boring and funded beats brilliant and imaginary." },
    health:  { up: "Wellness option overload. Every protocol bookmarked, none followed past day four. The perfect regimen fantasy is defeating the adequate real one.",
               rev: "Cutting through health noise to a simple, committed plan. One page, few rules, actually followed. That's the breakthrough." },
    spiritual:{ up: "Spiritual window-shopping. Visions, systems, and promises in glittering array. Genuine paths all charge the same toll: sustained, unglamorous practice.",
               rev: "Discernment arrives: the genuine draws distinguish themselves from the glamours. Choose your cup and drink it to the bottom." }
  }
},
{
  id: 43, name: "Eight of Cups", arcana: "cups", number: 8, display: "VIII", glyph: "cup", element: "water",
  keywords: { up: ["walking away", "seeking deeper meaning", "brave departure"], rev: ["fear of leaving", "one more try", "avoidance disguised as seeking"] },
  yesNo: { up: "no", rev: "maybe" }, polarity: { up: 0, rev: -1 },
  advice: { up: "Walk away from the almost-enough. Leaving what half-fills you is the price of finding what fills you.",
            rev: "Distinguish tired-of-it from done-with-it. One is cured by rest and honest effort; only the other by leaving." },
  meanings: {
    general: { up: "The moonlit departure: leaving behind something that looks complete but no longer feeds the soul. This is not failure. It's the mature courage to abandon 'fine' in search of 'true.' The mountains ahead are calling for a reason.",
               rev: "Hovering at the exit. Afraid to leave, or leaving everything serially to avoid depth anywhere. Decide honestly: does this need one wholehearted final effort, or the dignity of a finished goodbye?" },
    love:    { up: "Walking away from a relationship (or relationship pattern) that's outwardly okay and inwardly empty. The absence of disaster is not the presence of love. You're allowed to want more than adequate.",
               rev: "One foot out the door for months. Neither leaving nor fully staying. That limbo is the cruelest option on the menu. Recommit completely or release completely." },
    career:  { up: "Leaving the good-on-paper job, the successful-but-hollow path. The dissonance you feel is data: purpose has left the building, and following it out is the career move.",
               rev: "Fantasy-quitting daily but never planning an actual exit, or job-hopping past a dissatisfaction that travels with you. Locate the real problem before addressing the location." },
    money:   { up: "Walking away from money that costs too much. The lucrative-but-corrosive gig, the investment that owns you. Enough, in service of meaning, beats more in service of nothing.",
               rev: "Golden handcuffs half-unlocked: you know the price of staying and haven't budgeted the exit. Make leaving affordable. The escape fund is the plan." },
    health:  { up: "Leaving depleting environments and habits. The friend group that drains, the routine that erodes. Removal is often the strongest intervention available.",
               rev: "Knowing what depletes you and staying anyway. Each postponed departure raises the toll; set the date." },
    spiritual:{ up: "The pilgrim's card: leaving the built and the known to seek what's missing. The restlessness is the call itself. Pack light and go inward.",
               rev: "Seeking as escape. The next retreat, the next tradition, always away. The thing you're leaving everywhere may be waiting at home, in stillness." }
  }
},
{
  id: 44, name: "Nine of Cups", arcana: "cups", number: 9, display: "IX", glyph: "cup", element: "water",
  keywords: { up: ["wishes fulfilled", "contentment", "satisfaction", "pleasure"], rev: ["hollow satisfaction", "greed", "the wish's fine print"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Enjoy it. Fully, guiltlessly, now. Satisfaction unclaimed expires; this moment of plenty is meant to be felt.",
            rev: "Check the wish before rewishing: satisfaction that fades on arrival means the want was aimed at the wrong target." },
  meanings: {
    general: { up: "The wish card: satisfaction achieved, comfort earned, the smug and legitimate pleasure of things going well. What you hoped for is arriving or arrived. Receive it consciously instead of immediately raising the target.",
               rev: "The wish granted and the happiness missing. Hollow wins, hedonic treadmill, or indulgence papering over a deeper want. Re-examine what you actually wished for versus what you actually need." },
    love:    { up: "Emotional fulfillment in love. Contentment that's deep rather than dramatic, the relationship wish granted. Savor it; secure love deserves celebration, not suspicion.",
               rev: "Outwardly enviable, inwardly unsatisfied. The relationship as achievement rather than nourishment. Name the missing ingredient honestly; comfort isn't yet communion." },
    career:  { up: "Professional satisfaction. The goal reached, the work enjoyed, the position earned and relished. Bank the confidence this gives you; it's fuel for the next chapter.",
               rev: "Success that tastes like cardboard. The milestone hit, the meaning absent. Before chasing a bigger number, ask what would actually satisfy; the ladder may be against the wrong wall." },
    money:   { up: "Material comfort achieved. Enough, plus some pleasure on top. Enjoy prosperity without guilt; also without letting the lifestyle quietly become the new baseline.",
               rev: "Spending on satisfaction and buying only its packaging. The purchase-shaped hole refills nightly; fund experiences and needs, audit the compensations." },
    health:  { up: "Wellbeing and pleasure in balance. Health good enough to enjoy, appetite as friend rather than enemy. Gratitude for the body, expressed as care.",
               rev: "Overindulgence collecting its fee, or wellness achieved and joylessly maintained. Health is for living. Recalibrate toward pleasure within wisdom." },
    spiritual:{ up: "Contentment as spiritual achievement. The rare art of being satisfied. Gratitude practiced here compounds into something like grace.",
               rev: "Comfort as spiritual anesthesia. Pleasant enough to stop seeking, not deep enough to be found. The full cup that satisfies is not on this table; keep the deeper appointment." }
  }
},
{
  id: 45, name: "Ten of Cups", arcana: "cups", number: 10, display: "X", glyph: "cup", element: "water",
  keywords: { up: ["lasting happiness", "family harmony", "emotional fulfillment"], rev: ["strained harmony", "the picture vs. the reality", "misaligned ideals"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Choose the people and the peace. This is the treasure the rest was for. Protect and inhabit it.",
            rev: "Stop performing the happy picture and tend the actual family. One honest conversation is worth ten perfect photographs." },
  meanings: {
    general: { up: "The rainbow over the homestead: deep, shared, durable happiness. Family in whatever form is yours, love that has become a home. This is the suit's destination card; whatever you asked, the answer bends toward chosen people and lasting peace.",
               rev: "The gap between the family portrait and the family. Harmony performed, tensions rehomed under rugs, or your ideal of happiness clashing with someone else's. Real harmony is built from addressed friction, not absence of it." },
    love:    { up: "Love at its most complete: partnership become family, the future visible and warm. Commitments made under this card tend to hold. This is the real thing, being offered.",
               rev: "A loving relationship strained by outside pressures or inside silences, or partners with genuinely different pictures of 'happily ever after.' Align the visions explicitly; drift is the danger here." },
    career:  { up: "Work in harmony with home. The career that supports the life instead of consuming it. Choices favoring the whole-life picture are the right ones now.",
               rev: "Work devouring the domestic peace it supposedly funds. The family time being deferred doesn't accrue interest. It just passes. Rebalance while rebalancing is cheap." },
    money:   { up: "Financial peace in service of family happiness. Security shared, generosity flowing, the money finally doing its actual job.",
               rev: "Money friction disturbing the household, or prosperity chased at the household's expense. Have the family money meeting; alignment is the asset." },
    health:  { up: "Wellbeing embedded in a happy home. Health supported by love, routines shared, the nervous system safe. Protect the ecosystem; it's doing more than any regimen.",
               rev: "Domestic stress leaking into health. The home not currently the sanctuary the body needs. Address the household tension as the health intervention it is." },
    spiritual:{ up: "The sacred domestic: divinity in the shared meal, the bedtime ritual, love multiplied by being given away. Heaven, it turns out, is other people. The right ones.",
               rev: "Seeking transcendence while the nearest relationships go untended. The advanced practice is at the kitchen table; begin there." }
  }
},
{
  id: 46, name: "Page of Cups", arcana: "cups", number: 11, display: "Page", glyph: "cup", element: "water",
  keywords: { up: ["a message of feeling", "creative intuition", "emotional openness", "whimsy"], rev: ["emotional immaturity", "moodiness", "blocked creativity"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Stay open to the unexpected feeling. The odd invitation, the surfacing emotion, the fish in the cup. Curiosity toward the heart is the move.",
            rev: "Feel the feeling without becoming it. Name it, give it ten minutes of full attention, then choose your response like an adult who felt something." },
  meanings: {
    general: { up: "The gentle surprise: an emotional message, a creative impulse, an invitation that arrives sideways. Something tender and slightly odd surfaces. Meet it with curiosity rather than analysis. Intuition is delivering mail.",
               rev: "Emotional weather without a forecast. Moodiness, sensitivity spiking, or creative and intuitive channels clogged by unprocessed feeling. The inner child is acting out because no one's listening; listen." },
    love:    { up: "A sweet beginning or a tender gesture. The shy message, the sincere admirer, love in its unguarded early form. Receive gentleness gently; don't audit it for hidden motives.",
               rev: "Emotional immaturity in the picture. Sulking instead of speaking, testing instead of asking. Whether it's theirs or yours, the fix is the same: feelings spoken plainly, like a beginner, out loud." },
    career:  { up: "Creative intuition stirring at work. The imaginative idea, the artistic angle, news that opens an unexpected door. Pitch the whimsical thing; freshness is its qualification.",
               rev: "Creative block or thin skin at work. Feedback landing as wounds, ideas hoarded for fear of critique. Separate the work from the self a little; both breathe easier." },
    money:   { up: "A small pleasant surprise in money matters, or intuition nudging you toward an unconventional-but-small opportunity. Keep stakes low and curiosity high.",
               rev: "Feelings driving small leaks. Mood purchases, generosity as approval-seeking. Track the emotional weather behind the receipts for one month; the pattern will introduce itself." },
    health:  { up: "Listen to the body's quieter messages. The subtle signal, the dream, the craving that's information. Gentle, playful movement suits this season.",
               rev: "Emotions surfacing as symptoms. The unshed becoming the unwell. Tears, journaling, and honest conversation are physical health interventions this month." },
    spiritual:{ up: "The mystic beginner: dreams speaking, wonder returning, small signs everywhere. Don't demand credentials of every messenger. Some fish do talk.",
               rev: "Spiritual sensitivity without container. Moved by everything, anchored by nothing. Give the openness a simple daily structure so it deepens instead of scattering." }
  }
},
{
  id: 47, name: "Knight of Cups", arcana: "cups", number: 12, display: "Knight", glyph: "cup", element: "water",
  keywords: { up: ["romantic pursuit", "an offer from the heart", "charm", "following a dream"], rev: ["empty promises", "moodiness", "fantasy over follow-through"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 1, rev: -1 },
  advice: { up: "Make the heartfelt offer. Arrive with the cup extended, feelings declared, dream pursued in the open.",
            rev: "Judge the romance by its logistics: poems are lovely, but calendars, actions, and follow-through are the love language of reality." },
  meanings: {
    general: { up: "The knight arrives cup-first: an offer led by feeling. A proposal, an invitation, a dream pursued with style. Idealism is on horseback and moving; accept the romance of it while keeping one eye on follow-through.",
               rev: "Charm outrunning substance: the beautiful offer that never lands, moods that change the terms daily, or your own dreaminess deferring the doing. Beauty of sentiment is not evidence of commitment." },
    love:    { up: "The classic romantic arrival. Courtship, declarations, someone leading with their heart. Genuinely lovely energy; let it sweep you somewhat off your feet while your feet remember the ground.",
               rev: "The romancer who loves the pursuit and mists over at commitment, or an emotional undertow of moodiness beneath the charm. Watch the pattern across weeks, not the poetry of single evenings." },
    career:  { up: "Lead with vision and feeling at work. The creative proposal, the emotionally intelligent pitch, the dream project pursued openly. Your idealism is persuasive right now.",
               rev: "The visionary colleague (or self) whose projects are all overture, no opera. Ideas need shipping dates; attach one to yours before pitching the next." },
    money:   { up: "An appealing offer arrives, likely wrapped beautifully. The aesthetics may be honest, but do the arithmetic anyway; romance and returns are separate line items.",
               rev: "Seduction pricing: the offer that flatters the dream and fleeces the wallet. If it's marketed to your ideal self, have your actual self read the terms." },
    health:  { up: "The heart leads healing. Practices you find beautiful (dance, swimming, yoga, art) will outlast ones you find efficient. Choose grace over grind.",
               rev: "Wellness romanticism. The aesthetic of health without its habits. The unglamorous basics, kept daily, are the actual love letter to your body." },
    spiritual:{ up: "The grail-seeker: following the heart's deepest quest, devotion as path, beauty as doorway. Pursue what moves you. Being moved is the compass.",
               rev: "In love with the imagery of the quest more than its walking. The grail is found in practice, not in Pinterest boards of grails." }
  }
},
{
  id: 48, name: "Queen of Cups", arcana: "cups", number: 13, display: "Queen", glyph: "cup", element: "water",
  keywords: { up: ["deep empathy", "emotional wisdom", "compassionate presence", "intuition"], rev: ["emotional overwhelm", "porous boundaries", "martyrdom", "manipulation via feeling"] },
  yesNo: { up: "yes", rev: "maybe" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Lead with compassionate presence. Hold space, trust the intuitive read, and let care be your authority.",
            rev: "Compassion with boundaries is still compassion; without them it's slow self-erasure. Re-draw the waterline." },
  meanings: {
    general: { up: "Emotional mastery embodied: the person (or the call to be the person) who feels everything and drowns in nothing. Deep empathy, calm presence, intuition refined into wisdom. Care, offered from fullness, resolves what force cannot.",
               rev: "The waters over the levee: absorbing everyone's feelings, giving past empty, or emotion used as leverage. Guilt, tears, moods as currency. The correction is boundaries, not hardness." },
    love:    { up: "Love held with deep emotional intelligence. Truly seeing and being seen, safety for both hearts. If this represents a person, they are the real thing: sensitive and stable at once.",
               rev: "Loving at your own expense. Over-functioning as the relationship's only emotional engine, or navigating a partner's manipulative currents. Care that erases the carer isn't sustainable love." },
    career:  { up: "Emotional intelligence as professional superpower. The trusted counselor colleague, the manager people can be human around. Lead with it openly; it's rarer than competence.",
               rev: "The office therapist role consuming your actual role, or workplace emotions swaying decisions that need daylight logic. Empathize generously; decide clearly." },
    money:   { up: "Money guided by care and intuition in good proportion. Generous where it matters, and instinctively wary of what feels off. Trust that wariness; it's pattern recognition.",
               rev: "The financial rescuer pattern: bailing out, covering for, softening every consequence for others while your own cushion thins. Compassion includes letting adults meet their own arithmetic." },
    health:  { up: "Healing through self-compassion. Treating your body like someone you love. Emotional and physical care integrated is the prescription; it's working.",
               rev: "Everyone's caretaker but your own. The empathy pouring outward while your reserves silently drain. Caregiver depletion is a medical issue; treat it with scheduled, guarded rest." },
    spiritual:{ up: "The mystic heart: compassion as practice, intuition as navigation, the still water that reflects clearly. Your inner knowing is exceptionally clear. Consult it first.",
               rev: "Spiritual porousness. Absorbing energies, moods, and needs until your own signal is lost. Grounding and boundary practices aren't less spiritual; right now they're the whole curriculum." }
  }
},
{
  id: 49, name: "King of Cups", arcana: "cups", number: 14, display: "King", glyph: "cup", element: "water",
  keywords: { up: ["emotional balance", "calm wisdom", "diplomatic strength", "compassionate authority"], rev: ["suppressed emotion", "coldness", "moody control", "manipulation"] },
  yesNo: { up: "yes", rev: "no" }, polarity: { up: 2, rev: -1 },
  advice: { up: "Be the calm in the storm. Feel it all, and steer anyway. Your composed compassion sets the room's temperature.",
            rev: "Composure that never opens becomes a wall. Let someone see the water behind the throne. Controlled isn't the same as closed." },
  meanings: {
    general: { up: "The sea, mastered: deep feeling held in mature balance. Compassion with a spine, calm that doesn't come from numbness. Either such a steadying figure aids your situation, or the situation asks you to captain your own emotional waters through it.",
               rev: "The dam under strain: feelings suppressed until they leak sideways, passive aggression, sudden squalls, chilly withdrawal, or emotional intelligence bent toward quiet manipulation. Controlled emotion must still flow somewhere honest." },
    love:    { up: "Mature, steady love. The partner who stays regulated in conflict and warm in calm, devotion expressed through reliability. Depth without drama is not boring; it's the destination.",
               rev: "Emotional unavailability behind a composed exterior. Still waters running silent rather than deep. Intimacy requires the throne room opened; ask for (or offer) the real weather report." },
    career:  { up: "Diplomatic mastery: navigating charged situations, difficult people, and high-stakes negotiations with unflappable grace. You're trusted precisely because you don't spill. Use that capital.",
               rev: "Suppressed workplace frustration accruing interest, or a superior whose calm is actually coldness with good posture. Address the submerged issues in structured settings before they surface unstructured." },
    money:   { up: "Emotionally regulated money management. Neither panic-selling nor euphoria-buying, decisions made in calm and kept in storms. This temperament, sustained, is most of what 'good with money' means.",
               rev: "The composed exterior hiding financial stress from everyone including yourself. Unshared money anxiety compounds like debt. Open the books to someone trustworthy." },
    health:  { up: "Equanimity as medicine: the regulated nervous system healing what tension inflamed. Practices that steady the waters, breath, routine, moderation, are your primary care now.",
               rev: "The bodily cost of perpetual composure: what's swallowed daily gets stored somewhere. The stoicism is straining the vessel. Release valves (movement, talk, tears) are maintenance, not weakness." },
    spiritual:{ up: "The depth that has made peace with itself: emotion and spirit integrated, compassion extended without being pulled under. You can now hold space for others' storms, that holding is the practice.",
               rev: "Detachment impersonating transcendence. 'above it all' as a hiding place. Real equanimity includes the feelings; it doesn't skip them. Descend and integrate." }
  }
}
);
