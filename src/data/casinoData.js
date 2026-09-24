/* ------------------------------------------------------------------
   CASINO DATA & BACKEND SIMULATION
------------------------------------------------------------------ */

export const SERVER = {
  codes: {
    'WB-SHOP-4821': { shop: 'Windhoek Central', address: 'Independence Ave, Windhoek' },
    'WB-SHOP-1907': { shop: 'Katutura East', address: 'Clemens Kapuuo St, Windhoek' }
  },
  counters: { smartpc: 3, terminal: 1 },
  register(code, type) {
    const shop = this.codes[code];
    if (!shop) {
      return { ok: false, error: 'That Setup Code is not valid for any shop. Check it with the owner.' };
    }
    const name = type === 'smartpc'
      ? 'Smart PC-0' + this.counters.smartpc
      : 'Terminal-0' + this.counters.terminal;
    return { ok: true, machine: { name, type, shop: shop.shop, address: shop.address } };
  }
};

export const CATEGORIES = [
  { id: 'drop', name: 'Drop', icon: '🟣', bg: '#9333ea' },
  { id: 'tournaments', name: 'Tournaments', icon: '🏆', bg: '#ea580c' },
  { id: 'roulette', name: 'Roulette', icon: '🪙', bg: '#dc2626' },
  { id: 'aviator', name: 'Aviator', icon: '✈️', bg: '#0284c7' },
  { id: 'bonus', name: 'Welcome Bonus', icon: '💰', bg: '#ca8a04' },
  { id: 'slots', name: 'Slots', icon: '🎰', bg: '#db2777' },
  { id: 'table', name: 'Table', icon: '🃏', bg: '#2563eb' },
  { id: 'live', name: 'Live games', icon: '🎥', bg: '#7c3aed' },
  { id: 'casual', name: 'Casual games', icon: '🎮', bg: '#d97706' },
  { id: 'crash', name: 'Crash', icon: '📈', bg: '#059669' },
  { id: 'sport', name: 'Sport', icon: '⚽', bg: '#e11d48' }
];

export const POPULAR_GAMES = [
  { id: 'g1', name: 'Buffalo King', provider: 'Pragmatic Play', badge: 'HOT', badgeClass: 'badge-hot', art: '🦬', image: '/assets/game_buffalo_king.jpg', color: '#5e2a14' },
  { id: 'g2', name: 'Gods of Olympus', provider: 'Pragmatic Play', badge: 'NEW', badgeClass: 'badge-new', art: '⚡', image: '/assets/game_gods_olympus.jpg', color: '#1e3a6a' },
  { id: 'g3', name: 'Sweet Bonanza', provider: 'Pragmatic Play', badge: 'POPULAR', badgeClass: 'badge-hot', art: '🍬', image: '/assets/game_candy.png', color: '#831843' },
  { id: 'g4', name: 'Buffalo King MW', provider: 'Pragmatic Play', badge: '', badgeClass: '', art: '🦬', image: '/assets/game_buffalo_king.jpg', color: '#5e2a14' },
  { id: 'g5', name: 'Aviator Pro', provider: 'Spribe', badge: 'HOT', badgeClass: 'badge-hot', art: '✈️', image: '/assets/game_aviator.png', color: '#991b1b' },
  { id: 'g6', name: 'Gods of Olympus', provider: 'Pragmatic Play', badge: 'JACKPOT', badgeClass: 'badge-jackpot', art: '⚡', image: '/assets/game_gods_olympus.jpg', color: '#4c1d95' },
  { id: 'g7', name: 'Mining Bonanza', provider: 'Pragmatic Play', badge: '', badgeClass: '', art: '⛏️', image: '/assets/game_miner_gold.jpg', color: '#452b12' },
  { id: 'g8', name: 'Wheel Pro', provider: 'Winbet Originals', badge: 'NEW', badgeClass: 'badge-new', art: '🎡', image: '/assets/game_wheel.png', color: '#1e3a6a' }
];

export const NEW_GAMES = [
  { id: 'n1', name: 'Gods of Olympus', provider: 'Pragmatic Play', art: '⚡', image: '/assets/game_gods_olympus.jpg', color: '#1e3a6a' },
  { id: 'n2', name: 'Olympus Rising', provider: 'Pragmatic Play', art: '🏛️', image: '/assets/tile-olympus.png', color: '#172d54' },
  { id: 'n3', name: 'Buffalo King', provider: 'Pragmatic Play', art: '🦬', image: '/assets/game_buffalo_king.jpg', color: '#5e2a14' },
  { id: 'n4', name: 'Lucky 6', provider: 'Winbet Originals', art: '🎱', image: '/assets/lucky6.png', color: '#1e1b4b' },
  { id: 'n5', name: 'Mines Master', provider: 'Spribe', art: '💣', image: '/assets/game_mines.png', color: '#4c1d95' },
  { id: 'n6', name: 'Plinko Deluxe', provider: 'Spribe', art: '🟣', image: '/assets/game_plinko.png', color: '#064e3b' },
  { id: 'n7', name: 'Mining Bonanza', provider: 'Pragmatic Play', art: '⛏️', image: '/assets/game_miner_gold.jpg', color: '#452b12' },
  { id: 'n8', name: 'Goal Bonanza', provider: 'Winbet Games', art: '⚽', image: '/assets/goal-bonanza.png', color: '#065f46' }
];

export const INITIAL_LIVE_BETS = [
  { id: 1, game: 'Gods of Olympus', icon: '⚡', image: '/assets/game_gods_olympus.jpg', iconBg: '#2563eb', user: 'Sophia Lee', amount: 3125, mult: '22.8X', profit: 14028 },
  { id: 2, game: 'AVIATOR', icon: '✈️', image: '/assets/game_aviator.png', iconBg: '#e11d48', user: 'Alex Hunter', amount: 1325, mult: '15.3X', profit: 9348 },
  { id: 3, game: 'Wheel Pro', icon: '🎡', image: '/assets/game_wheel.png', iconBg: '#7c3aed', user: 'Oliver Kahn', amount: 585, mult: '50.0X', profit: 28355 },
  { id: 4, game: 'Gods of Olympus', icon: '⚡', image: '/assets/game_gods_olympus.jpg', iconBg: '#2563eb', user: 'Sophia Lee', amount: 5206, mult: '22.8X', profit: 11577 },
  { id: 5, game: 'Plinko', icon: '🟣', image: '/assets/game_plinko.png', iconBg: '#06b6d4', user: 'Emma Watson', amount: 2427, mult: '4.6X', profit: 11250 },
  { id: 6, game: 'AVIATOR', icon: '✈️', image: '/assets/game_aviator.png', iconBg: '#e11d48', user: 'Alex Hunter', amount: 1230, mult: '15.3X', profit: 7020 },
  { id: 7, game: 'Gods of Olympus', icon: '⚡', image: '/assets/game_gods_olympus.jpg', iconBg: '#2563eb', user: 'Sophia Lee', amount: 4226, mult: '22.8X', profit: 10354 },
  { id: 8, game: 'Lucky Mines', icon: '💎', image: '/assets/game_mines.png', iconBg: '#ec4899', user: 'Daniel Brooks', amount: 1400, mult: '3.70X', profit: 5411 },
  { id: 9, game: 'Plinko', icon: '🟣', image: '/assets/game_plinko.png', iconBg: '#06b6d4', user: 'Emma Watson', amount: 2325, mult: '2.8X', profit: 6510 },
  { id: 10, game: 'Buffalo King', icon: '🦬', image: '/assets/game_buffalo_king.jpg', iconBg: '#d97706', user: 'Lucas Vance', amount: 2150, mult: '5.4X', profit: 4895 }
];

export const SAMPLE_USERS = [
  'Liam Davies', 'Noah Smith', 'Lucas Vance', 'Sophia Lee',
  'Emma Watson', 'Elena Rostova', 'Marco Silva', 'Jack Miller'
];

export const SAMPLE_GAMES = [
  { name: 'Gods of Olympus', icon: '⚡', image: '/assets/game_gods_olympus.jpg', iconBg: '#2563eb' },
  { name: 'Buffalo King', icon: '🦬', image: '/assets/game_buffalo_king.jpg', iconBg: '#d97706' },
  { name: 'AVIATOR', icon: '✈️', image: '/assets/game_aviator.png', iconBg: '#e11d48' },
  { name: 'Plinko', icon: '🟣', image: '/assets/game_plinko.png', iconBg: '#06b6d4' },
  { name: 'Lucky Mines', icon: '💎', image: '/assets/game_mines.png', iconBg: '#ec4899' },
  { name: 'Wheel Pro', icon: '🎡', image: '/assets/game_wheel.png', iconBg: '#7c3aed' }
];

export const money = n => 'N$ ' + Number(n).toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const isCodeShaped = c => /^WB-SHOP-\d{4}$/.test(c);

export const REF1_HOT_GAMES = [
  {
    id: 'h0',
    name: 'Troll King',
    titleTop: 'TROLL',
    titleBottom: 'KING',
    subtitle: 'Gorgath the Earthshaker',
    provider: 'Pragmatic Play',
    badge: 'HOT',
    badgeClass: 'badge-hot',
    theme: 'green',
    image: '/assets/game_troll_king.jpg',
    artLabel: 'Gorgath the Earthshaker',
    art: '🧌',
    color: '#064e3b'
  },
  {
    id: 'h1',
    name: 'Aviator Spooky',
    titleTop: 'AVIATOR',
    titleBottom: 'SPOOKY',
    subtitle: 'High-Altitude Multiplier',
    provider: 'Spribe',
    badge: 'HOT',
    badgeClass: 'badge-hot',
    theme: 'red',
    image: '/assets/aviator.png',
    art: '✈️',
    color: '#881337'
  },

  {
    id: 'h3',
    name: 'Gods of Olympus',
    titleTop: 'GODS OF',
    titleBottom: 'OLYMPUS',
    subtitle: 'Zeus Wrath of Thunder',
    provider: 'Pragmatic Play',
    badge: 'POPULAR',
    badgeClass: 'badge-popular',
    theme: 'blue',
    image: '/assets/game_gods_olympus.jpg',
    art: '⚡',
    color: '#312e81'
  },
  {
    id: 'h4',
    name: 'Crazy Time',
    titleTop: 'CRAZY',
    titleBottom: 'TIME',
    subtitle: 'Live Multiplier Wheel',
    provider: 'Evolution',
    badge: 'LIVE',
    badgeClass: 'badge-live',
    theme: 'magenta',
    image: '/assets/game_crazy_time.jpg',
    art: '🎡',
    color: '#701a75'
  },
  {
    id: 'h5',
    name: 'Irish Luck',
    titleTop: 'IRISH',
    titleBottom: 'LUCK',
    subtitle: 'Pots of Gold & Treasures',
    provider: 'Pragmatic Play',
    badge: 'CLASSIC',
    badgeClass: 'badge-new',
    theme: 'orange',
    image: '/assets/game_book_of_dead.jpg',
    art: '🍀',
    color: '#064e3b'
  }
];

export const REF1_TOP_GAMES = [
  {
    id: 'top1',
    name: 'Big Bass Splash',
    titleTop: 'BIG BASS',
    titleBottom: 'SPLASH',
    subtitle: 'Mega Catch Bonus',
    provider: 'Pragmatic Play',
    badge: 'HOT',
    badgeClass: 'badge-hot',
    theme: 'cyan',
    image: '/assets/game_big_bass.jpg',
    art: '🐟',
    color: '#0c4a6e'
  },
  {
    id: 'top2',
    name: 'Sweet Bonanza',
    titleTop: 'SWEET',
    titleBottom: 'BONANZA',
    subtitle: 'Tumble Sugar Rush',
    provider: 'Pragmatic Play',
    badge: 'JACKPOT',
    badgeClass: 'badge-jackpot',
    theme: 'magenta',
    image: '/assets/game_candy.png',
    art: '🍭',
    color: '#831843'
  },
  {
    id: 'top3',
    name: 'Buffalo King',
    titleTop: 'BUFFALO',
    titleBottom: 'KING',
    subtitle: 'Prairie Stampede',
    provider: 'Pragmatic Play',
    badge: 'HOT',
    badgeClass: 'badge-hot',
    theme: 'orange',
    image: '/assets/game_buffalo_king.jpg',
    art: '🦬',
    color: '#5e2a14'
  },
  {
    id: 'top4',
    name: "Joker's Jewels",
    titleTop: "JOKER'S",
    titleBottom: 'JEWELS',
    subtitle: '5-Line Diamond Spin',
    provider: 'Pragmatic Play',
    badge: 'NEW',
    badgeClass: 'badge-new',
    theme: 'purple',
    image: '/assets/game_jokers_jewels.jpg',
    art: '🃏',
    color: '#4c1d95'
  },
  {
    id: 'top5',
    name: 'Solar Queen',
    titleTop: 'SOLAR',
    titleBottom: 'QUEEN',
    subtitle: 'Egyptian Sun Wilds',
    provider: 'Playson',
    badge: 'POPULAR',
    badgeClass: 'badge-popular',
    theme: 'gold',
    image: '/assets/game_solar_queen.jpg',
    art: '☀️',
    color: '#78350f'
  }
];

export const REF1_ALL_GAMES = [
  {
    id: 'all1',
    name: 'Aviator Pro',
    title: 'Aviator Pro',
    desc: 'High-altitude crash multiplier up to 1,000x with instant cashout',
    image: '/assets/game_aviator.png',
    cardClass: 'offer-card-aviator',
    theme: 'red'
  },
  {
    id: 'all2',
    name: 'Lucky Mines',
    title: 'Lucky Mines',
    desc: 'Uncover hidden emerald diamonds and multiplier crystals safely',
    image: '/assets/game_mines.png',
    cardClass: 'offer-card-mines',
    theme: 'teal'
  },
  {
    id: 'all3',
    name: 'Dragon Hatch',
    title: 'Dragon Hatch',
    desc: 'Awaken ancient fire dragons for cascading cluster reel multipliers',
    image: '/assets/game_dragon_hatch.jpg',
    cardClass: 'offer-card-dragon',
    theme: 'amber'
  }
];


