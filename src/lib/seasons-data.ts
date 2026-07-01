export type SeasonData = {
  id: string;
  number: number;
  arc: string;
  game: string;
  title: string;
  subtitle: string;
  logline: string;
  themes: string[];
  locations: { name: string; blurb: string }[];
  personas: { character: string; initial: string; evolved: string; arcana: string; note: string }[];
  casting: { role: string; actor: string; why: string }[];
  fandom: { title: string; body: string }[];
  netflix: string[];
  palette: { from: string; to: string; accent: string; ring: string };
  episodes: string[];
};

export const SEASONS: SeasonData[] = [
  {
    id: "1",
    number: 1,
    arc: "Arc I · Persona 3 Reload",
    game: "Persona 3",
    title: "Midnight Hour",
    subtitle: "Season 1 · Death & Acceptance (Part I)",
    logline:
      "A transfer student discovers a 25th hour hidden inside every night — and the classmates who fight through it toward a moon that keeps growing.",
    themes: [
      "Mortality as a coming-of-age gate",
      "Grief inherited from a decade-old accident",
      "Found family under a ticking clock",
      "The seduction of apathy (Apathy Syndrome)",
    ],
    locations: [
      { name: "Iwatodai Dorm", blurb: "The safe house. Green lounge, humming vending machine, the sound of Aigis charging at night." },
      { name: "Gekkoukan High School", blurb: "Seaside campus that transforms after midnight into the base of a nightmare." },
      { name: "Tartarus", blurb: "The school inverted into a 200-floor tower that only exists during the Dark Hour." },
      { name: "Paulownia Mall", blurb: "Neon karaoke, police station, the Velvet Room elevator hidden behind blue doors." },
      { name: "Naganaki Shrine", blurb: "Quiet swings. The place characters go to admit the things they cannot say indoors." },
    ],
    personas: [
      { character: "Makoto Yuki", initial: "Orpheus", evolved: "Orpheus Telos", arcana: "Fool → Universe", note: "Wild Card. Every Persona he holds is a self he's willing to become." },
      { character: "Yukari Takeba", initial: "Io", evolved: "Isis", arcana: "Lovers", note: "From wounded daughter to protector-mother of the team." },
      { character: "Junpei Iori", initial: "Hermes", evolved: "Trismegistus", arcana: "Magician", note: "Clown mask cracks; the hero underneath is the one who survives grief." },
      { character: "Akihiko Sanada", initial: "Polydeuces", evolved: "Caesar", arcana: "Emperor", note: "The boxer who finally stops punching his own guilt." },
      { character: "Mitsuru Kirijo", initial: "Penthesilea", evolved: "Artemisia", arcana: "Empress", note: "Heir to the group's original sin; her ice thaws into leadership." },
    ],
    casting: [
      { role: "Makoto Yuki", actor: "Kentaro Kaneko (Alice in Borderland)", why: "Silence that reads as depth, not blankness." },
      { role: "Yukari Takeba", actor: "Mio Imada", why: "Soft-cover archer with iron underneath." },
      { role: "Junpei Iori", actor: "Ryo Yoshizawa", why: "Range from goofball to gutted in a single beat." },
      { role: "Mitsuru Kirijo", actor: "Nana Komatsu", why: "Aristocratic register, bilingual French/Japanese." },
      { role: "Akihiko Sanada", actor: "Kentaro Sakaguchi", why: "Physicality plus the guilt-eaten interior life." },
    ],
    fandom: [
      { title: "P3 Reload legacy", body: "The 2024 remake reignited a global fanbase — a live-action season lands on prepared ground." },
      { title: "Social Link cosplay economy", body: "Twelve zodiac-based Social Links map perfectly to episode-level character showcases fans already ship." },
      { title: "Aigis discourse", body: "The android's arrival late in the season is the internet event of the year." },
    ],
    netflix: [
      "Prestige tone comp: Dark meets Euphoria with a supernatural clock.",
      "Global rollout: Japanese OV + dubs in EN/ES/PT/FR/DE/KR.",
      "Companion doc short: 'Building the Dark Hour' released two weeks after the premiere.",
    ],
    palette: { from: "#0B1733", to: "#1a2a5a", accent: "#A9C6FF", ring: "#A9C6FF" },
    episodes: [
      "The Contract", "Evokers", "Full Moon, First Blood", "The Boxer's Ghost",
      "Priestess in the Library", "The Machine That Learned to Cry", "Emperor & Empress",
      "Hierophant on the Train", "Lovers Under a Fake Sky", "Chariot / Justice",
      "Hermit Online", "Fortune Turns",
    ],
  },
  {
    id: "2",
    number: 2,
    arc: "Arc I · Persona 3 Reload",
    game: "Persona 3",
    title: "Nyx Approaches",
    subtitle: "Season 2 · Death & Acceptance (Part II)",
    logline:
      "The tower is climbed. The truth is worse. To stop the end of the world, one of them has to become the door that keeps it out.",
    themes: [
      "Sacrifice vs. survival",
      "The Answer: does grief have a shape?",
      "Memory as a weapon and a wound",
      "Aigis and the question of a soul",
    ],
    locations: [
      { name: "Tartarus (upper blocks)", blurb: "Adamah, the Monad — floors that stop pretending to be a school." },
      { name: "Kyoto class trip", blurb: "A breather episode that becomes a Shadow ambush in a ryokan." },
      { name: "Yakushima", blurb: "Kirijo family beach house. Aigis meets the sea; the ocean answers back." },
      { name: "Moonlight Bridge", blurb: "Where it all began, ten years ago. The season returns here to end." },
    ],
    personas: [
      { character: "Makoto Yuki", initial: "Orpheus Telos", evolved: "Messiah", arcana: "Universe", note: "The Great Seal. The boy becomes the barrier." },
      { character: "Aigis", initial: "Palladion", evolved: "Athena → Pallas Athena", arcana: "Chariot → Aeon", note: "The android who chose grief and thereby chose life." },
      { character: "Ken Amada", initial: "Nemesis", evolved: "Kala-Nemi", arcana: "Justice", note: "A ten-year-old with a spear and a reason." },
      { character: "Shinjiro Aragaki", initial: "Castor", evolved: "Helel", arcana: "Moon", note: "The friend who was already dying when he showed up." },
      { character: "Koromaru", initial: "Cerberus", evolved: "—", arcana: "Strength", note: "The dog is not a joke. The dog is the reason." },
    ],
    casting: [
      { role: "Aigis (voice + mocap)", actor: "Aoi Yuuki", why: "Iconic voice work; carries the season's emotional finale." },
      { role: "Shinjiro Aragaki", actor: "Takumi Kitamura", why: "Beanie, growl, buried tenderness." },
      { role: "Ken Amada", actor: "Rio Suzuki (child lead)", why: "A child who plays revenge like Shakespeare." },
      { role: "Ryoji Mochizuki", actor: "Sota Fukushi", why: "Charm that reads as a warning." },
      { role: "Igor", actor: "Isao Sasaki (voice)", why: "Preserves the Velvet Room's operatic register." },
    ],
    fandom: [
      { title: "The Answer redemption", body: "Long-standing fan wish: adapt The Answer as the final two episodes. Delivered." },
      { title: "Shinji + Aki + Mitsuru triangle", body: "The most-shipped trio in P3 gets a full backstory episode." },
      { title: "Aigis awakening", body: "The finale's 'I want to live with you' beat is the season's cliffhanger into Arc II." },
    ],
    netflix: [
      "First-season finale trending event: 'The Great Seal' as an eight-minute unbroken shot.",
      "Global watch-party: simulcast Japan/US/EU with sync countdown on Netflix Tudum.",
      "Handoff device: post-credits sting reveals a rural Yasoinaba weather report.",
    ],
    palette: { from: "#0B1733", to: "#1a2a5a", accent: "#A9C6FF", ring: "#A9C6FF" },
    episodes: [
      "The Answer Begins", "Shinji's Coat", "Ken's Spear", "Yakushima",
      "Ryoji", "The Appriser", "December's Choice", "Nyx",
      "Erebus", "The Bridge, Again", "The Great Seal", "A New Aeon",
    ],
  },
  {
    id: "3",
    number: 3,
    arc: "Arc II · Persona 4 Golden",
    game: "Persona 4",
    title: "Midnight Channel",
    subtitle: "Season 3 · Truth & Identity (Part I)",
    logline:
      "A city kid moves to a foggy country town. A dead body hangs from a TV antenna. And on rainy nights, the television turns on by itself.",
    themes: [
      "The self you show vs. the self you deny",
      "Small-town claustrophobia and queerness",
      "Media, tabloid guilt, and rumor",
      "Bonds as literal power (Social Links become tactical)",
    ],
    locations: [
      { name: "Yasoinaba", blurb: "Rice fields, one shopping district, a gas station that knows too much." },
      { name: "Junes food court", blurb: "The team's HQ. Grand-opening jingle as a leitmotif." },
      { name: "The TV World", blurb: "A rolling fog realm where each victim's Shadow builds them a personal dungeon." },
      { name: "Samegawa Riverbank", blurb: "Where the season pauses to breathe — and where Nanako learns to swim." },
      { name: "Dojima residence", blurb: "The uncle-father household that anchors the season's emotional gravity." },
    ],
    personas: [
      { character: "Yu Narukami", initial: "Izanagi", evolved: "Izanagi-no-Okami", arcana: "Fool → World", note: "The Wild Card as calm center; leads by listening." },
      { character: "Yosuke Hanamura", initial: "Jiraiya", evolved: "Susano-o", arcana: "Magician", note: "The best friend who has to accept his own envy to grow up." },
      { character: "Chie Satonaka", initial: "Tomoe", evolved: "Suzuka Gongen", arcana: "Chariot", note: "Kung-fu daughter of anxiety; her Persona learns to protect, not punish." },
      { character: "Yukiko Amagi", initial: "Konohana Sakuya", evolved: "Amaterasu", arcana: "Priestess", note: "The princess who sets her own castle on fire." },
      { character: "Kanji Tatsumi", initial: "Take-Mikazuchi", evolved: "Rokuten Maoh", arcana: "Emperor", note: "A queer-coded arc that fandom has fought for; the show does it right." },
    ],
    casting: [
      { role: "Yu Narukami", actor: "Kento Yamazaki", why: "Signature quiet-heavy lead; carries harem-adjacent ensemble." },
      { role: "Yosuke Hanamura", actor: "Yuki Yamada", why: "Comic timing plus buried self-loathing." },
      { role: "Chie Satonaka", actor: "Hana Sugisaki", why: "Physical performer; can throw an actual roundhouse." },
      { role: "Yukiko Amagi", actor: "Mei Nagano", why: "Delicate exterior, ferocious laugh." },
      { role: "Kanji Tatsumi", actor: "Mackenyu", why: "Physicality plus tender voice work; makes the arc unmissable." },
    ],
    fandom: [
      { title: "P4 Golden PC re-release", body: "2020 Steam launch minted a whole new fanbase — the season lands on a second wave, not nostalgia alone." },
      { title: "Kanji & Naoto discourse", body: "Handled with a 2026 sensibility; consult with LGBTQ+ writers' room credited on screen." },
      { title: "Every Day's Great at Your Junes", body: "Meme jingle appears diegetically at least once per episode. Fandom will clip it." },
    ],
    netflix: [
      "Format shift: warmer color grade, softer edits — a deliberate tonal reset from Arc I.",
      "Interactive companion: a 'Midnight Channel' branching short on Netflix's interactive slate.",
      "Merch tie-in: Junes-branded limited food-court pop-up at Netflix Bites LA.",
    ],
    palette: { from: "#3a2f00", to: "#8a6b00", accent: "#E8C547", ring: "#E8C547" },
    episodes: [
      "Rainy Arrival", "The Body on the Antenna", "Inside the TV",
      "Chie's Castle", "Yukiko's Fire", "Junes Every Day",
      "Kanji's Bathhouse", "The Detective Prince", "Rise",
      "Teddie", "The Fog Thickens", "Cliffhanger: A New Suspect",
    ],
  },
  {
    id: "4",
    number: 4,
    arc: "Arc II · Persona 4 Golden",
    game: "Persona 4",
    title: "Truth Has a Face",
    subtitle: "Season 4 · Truth & Identity (Part II)",
    logline:
      "The killer is closer than they think. The truth costs more than they can pay. And Nanako learns what heaven looks like.",
    themes: [
      "Complicity, cowardice, and the will to look",
      "Chosen family in a town that whispers",
      "The season that asks whether truth is enough",
      "Grief as a room you learn to stay in",
    ],
    locations: [
      { name: "Heaven (Nanako's dungeon)", blurb: "The season's emotional climax. Pastel cruelty in cel-animated flashbacks." },
      { name: "Magatsu Inaba", blurb: "The town's reflection in the fog. Adachi's inner ugly." },
      { name: "Hollow Forest (Golden add)", blurb: "Marie's realm. The season's optional-arc coda for streaming completionists." },
      { name: "Yasogami rooftop", blurb: "Long, quiet dialogue scenes staged with theater blocking." },
    ],
    personas: [
      { character: "Naoto Shirogane", initial: "Sukuna-Hikona", evolved: "Yamato-Takeru", arcana: "Fortune", note: "The detective who lets themselves be seen." },
      { character: "Rise Kujikawa", initial: "Himiko", evolved: "Kanzeon", arcana: "Lovers", note: "The idol who stops performing." },
      { character: "Teddie", initial: "Kintoki-Douji", evolved: "Kamui", arcana: "Star", note: "A Shadow who becomes a boy who becomes a friend." },
      { character: "Yu Narukami", initial: "Izanagi", evolved: "Izanagi-no-Okami", arcana: "World", note: "The Wild Card's fusion tree pays off in the finale battle." },
      { character: "Marie (Aeon)", initial: "Kaguya", evolved: "Kaguya Picaro", arcana: "Aeon", note: "Golden's addition; the goddess who wanted to be human." },
    ],
    casting: [
      { role: "Naoto Shirogane", actor: "Suzu Hirose", why: "Handles the gender-role arc with authority." },
      { role: "Rise Kujikawa", actor: "Kanna Hashimoto", why: "Idol-industry veteran; the meta-casting is the point." },
      { role: "Teddie (voice + suit)", actor: "Kappei Yamaguchi", why: "Iconic voice; suit performer TBA." },
      { role: "Ryotaro Dojima", actor: "Hiroshi Abe", why: "Weight of a father who forgot how to be one." },
      { role: "Tohru Adachi", actor: "Osamu Mukai", why: "Charm as camouflage. The performance of the season." },
    ],
    fandom: [
      { title: "Nanako episode as event TV", body: "'Heaven' airs as a 65-minute standalone. Kleenex sponsorship joke writes itself." },
      { title: "Adachi reveal", body: "Handled without teasing the fandom — earned through directing, not shock cuts." },
      { title: "Golden loyalty", body: "Marie's Hollow Forest arc drops as bonus episodes S4E13-14, canonized." },
    ],
    netflix: [
      "Awards push: submit 'Heaven' for Outstanding Directing and Nanako actor for Guest Performance.",
      "Localization: idol pop numbers get local-language covers for major markets.",
      "Handoff: post-credits sting shows a Tokyo train, a red domino mask on a seat.",
    ],
    palette: { from: "#3a2f00", to: "#8a6b00", accent: "#E8C547", ring: "#E8C547" },
    episodes: [
      "Naoto's Secret", "Rise Returns", "Mitsuo",
      "Nanako Taken", "Heaven", "The Man on the Other Side",
      "Adachi", "Magatsu", "Izanami",
      "The Fog Lifts", "Marie / Hollow Forest", "Goodbye, Yasoinaba",
    ],
  },
  {
    id: "5",
    number: 5,
    arc: "Arc III · Persona 5 Royal",
    game: "Persona 5",
    title: "Thieves of Hearts",
    subtitle: "Season 5 · Rebellion & Freedom (Part I)",
    logline:
      "Tokyo, 2026. A transferred delinquent, a runaway model, a bullied prodigy, and a cat that talks. They steal the corrupt hearts of the adults who broke them.",
    themes: [
      "Rebellion as a moral act",
      "Cognition — reality is a story we agree to tell",
      "The failure of adult institutions (school, art, justice)",
      "Style as resistance",
    ],
    locations: [
      { name: "Yongen-Jaya", blurb: "Backstreet Tokyo. Café Leblanc's coffee steam, curry, cassette shop nostalgia." },
      { name: "Shibuya Station underground", blurb: "The world's most-shot subway becomes a home base of graffiti and safe houses." },
      { name: "Palaces", blurb: "Cognitive dungeons: Kamoshida's castle, Madarame's museum, Kaneshiro's bank, Futaba's pyramid." },
      { name: "Shujin Academy", blurb: "The school that hides its predators behind a trophy case." },
      { name: "Velvet Prison", blurb: "This arc's Velvet Room. Two twin wardens. One protagonist who is technically an inmate." },
    ],
    personas: [
      { character: "Joker (Ren Amamiya)", initial: "Arsène", evolved: "Satanael", arcana: "Fool → World", note: "The gentleman thief whose final Persona takes a shot at a literal god." },
      { character: "Skull (Ryuji Sakamoto)", initial: "Captain Kidd", evolved: "Seiten Taisei", arcana: "Chariot", note: "The friend who lost track and rebel first, thinks later." },
      { character: "Panther (Ann Takamaki)", initial: "Carmen", evolved: "Hecate", arcana: "Lovers", note: "Weaponized femininity refused; whip, fire, wrath." },
      { character: "Fox (Yusuke Kitagawa)", initial: "Goemon", evolved: "Kamu Susano-o", arcana: "Emperor", note: "The painter who has to burn his master to find his own line." },
      { character: "Queen (Makoto Niijima)", initial: "Johanna", evolved: "Anat", arcana: "Priestess", note: "Class president on a motorcycle. Strategist. Sister." },
      { character: "Oracle (Futaba Sakura)", initial: "Necronomicon", evolved: "Prometheus", arcana: "Hermit", note: "The hikikomori who hacks her own grief." },
    ],
    casting: [
      { role: "Ren Amamiya / Joker", actor: "Sora Amamiya (breakout casting)", why: "New face; the point is the mask, not the star." },
      { role: "Ryuji Sakamoto", actor: "Taishi Nakagawa", why: "Track-athlete physicality, chaotic-brotherly energy." },
      { role: "Ann Takamaki", actor: "Sara Minami", why: "Half-American model type per canon; range beyond the surface." },
      { role: "Yusuke Kitagawa", actor: "Ryusei Yokohama", why: "Aristocratic bone structure, deadpan poetic delivery." },
      { role: "Makoto Niijima", actor: "Minami Hamabe", why: "Command that plays as both president and detective." },
      { role: "Futaba Sakura", actor: "Mio Yuki", why: "Neurodivergent-coded performance with authenticity consultants." },
      { role: "Morgana (voice)", actor: "Ikue Otani", why: "Voice icon; the cat has to sell 'not a cat.'" },
    ],
    fandom: [
      { title: "P5 Royal as the fandom peak", body: "Highest-selling Persona ever; the season lands on the largest existing audience." },
      { title: "Style-guide obsession", body: "Fan art culture demands the 'red UI' aesthetic bleeds into title cards and end credits." },
      { title: "Ship wars, handled fairly", body: "Ann/Ryuji, Makoto/Joker, Yusuke/Anyone — no season-long endgame push; friendships lead." },
    ],
    netflix: [
      "Marketing: 'Take Your Heart' calling card drops IRL in Tokyo, LA, London, Paris the week before launch.",
      "Live-action opening credits animated in a hybrid frame — nod to the game's iconic All-Out Attack panels.",
      "Netflix Bites returns: Café Leblanc curry pop-up during the launch weekend.",
    ],
    palette: { from: "#3a0008", to: "#8b0a1a", accent: "#FF4D5E", ring: "#FF4D5E" },
    episodes: [
      "Transfer Student", "Kamoshida's Castle", "The First Calling Card",
      "Madarame's Museum", "Kaneshiro's Bank", "Futaba's Pyramid",
      "Hawaii", "Okumura's Space Port", "Interrogation Room",
      "Sae's Casino", "The Cognitive Joker", "To Be Continued",
    ],
  },
  {
    id: "6",
    number: 6,
    arc: "Arc III · Persona 5 Royal",
    game: "Persona 5 Royal",
    title: "Royal Heart",
    subtitle: "Season 6 · Rebellion & Freedom (Part II)",
    logline:
      "The god of control has a new face — and a nicer one. A perfect dream costs everything real. To wake up, the Thieves have to steal it.",
    themes: [
      "The gilded lie of a perfect world",
      "Grief, second chances, and the ethics of a happy ending",
      "The counselor as the villain (Maruki)",
      "Solidarity vs. wish fulfillment",
    ],
    locations: [
      { name: "Shibuya (rewritten)", blurb: "Odaiba dome sky. A city that got everything it wished for. That's the horror." },
      { name: "Maruki's Palace", blurb: "A planetarium-observatory of love. Every room hurts more than the last." },
      { name: "Mementos Depths", blurb: "The public unconscious. Where the season's final calling card is placed." },
      { name: "Odaiba Ferris wheel", blurb: "The two-hander episode that fandom will replay for years." },
    ],
    personas: [
      { character: "Kasumi / Sumire Yoshizawa", initial: "Cendrillon", evolved: "Vanadis", arcana: "Faith", note: "The gymnast whose two selves refuse to erase each other." },
      { character: "Goro Akechi", initial: "Robin Hood / Loki", evolved: "Hereward", arcana: "Justice", note: "The rival whose whole arc is 'stop pretending you're okay.'" },
      { character: "Takuto Maruki", initial: "Azathoth", evolved: "Adam Kadmon", arcana: "Councillor", note: "The gentle antagonist. He wants to fix you and that's why he has to be stopped." },
      { character: "Joker (Ren Amamiya)", initial: "Arsène", evolved: "Raoul → Satanael", arcana: "Fool → World", note: "Royal's added Raoul evolution earns its own act-break." },
    ],
    casting: [
      { role: "Kasumi / Sumire", actor: "Aoi Morikawa", why: "Dancer-adjacent physicality, dual-role range." },
      { role: "Goro Akechi", actor: "Kentaro Sakaguchi (adult, Arc-II callback)", why: "Same actor as young Akihiko in flashback; visual echo of Arc I is intentional." },
      { role: "Takuto Maruki", actor: "Satoshi Tsumabuki", why: "Warmth that is impossible to hate. That's the tragedy." },
      { role: "Igor (true)", actor: "Tomokazu Seki", why: "The real Igor returns; contrasts with the false one in Season 5." },
      { role: "Lavenza", actor: "Sara Wakatsuki (child actor)", why: "The child witness who gets the final line of the entire six-season saga." },
    ],
    fandom: [
      { title: "The 'Third Semester'", body: "Royal's added arc is the reason the fandom re-bought the game. It gets a full season, not a coda." },
      { title: "Akechi survives", body: "The show adopts the fandom's preferred ambiguous ending. Yes, both his shots. Yes, that one." },
      { title: "The finale as generational callback", body: "Aigis makes a cameo. So does adult Yu Narukami. The saga closes as one story." },
    ],
    netflix: [
      "Finale event: two-part 90-minute episodes released a week apart to preserve discourse.",
      "Awards-season release window: October drop, timed for International Emmy consideration.",
      "Bookend documentary: 'One Saga, Six Seasons' — cast reunion, retrospective, handoff to potential spinoffs (Velvet Room anthology).",
    ],
    palette: { from: "#3a0008", to: "#8b0a1a", accent: "#FF4D5E", ring: "#FF4D5E" },
    episodes: [
      "The Perfect World", "Kasumi Awakens", "Maruki's Office",
      "The Reality Test", "Akechi Returns", "Odaiba, Two-Hander",
      "Mementos Depths", "The Councillor's Palace", "Adam Kadmon",
      "The Real Ending", "A New Journey", "I Am Thou, Thou Art I",
    ],
  },
];

export const getSeason = (id: string) => SEASONS.find((s) => s.id === id);