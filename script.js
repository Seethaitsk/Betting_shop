/* ------------------------------------------------------------------
   WINBET CASINO & BETTING SHOP TERMINAL PLATFORM
------------------------------------------------------------------ */

const SERVER = {
  codes: {
    'WB-SHOP-4821': { shop: 'Windhoek Central', address: 'Independence Ave, Windhoek' },
    'WB-SHOP-1907': { shop: 'Katutura East', address: 'Clemens Kapuuo St, Windhoek' }
  },
  counters: { smartpc: 3, terminal: 1 },
  register(code, type) {
    const shop = this.codes[code];
    if (!shop) return { ok: false, error: 'That Setup Code is not valid for any shop. Check it with the owner.' };
    const name = type === 'smartpc' ? 'Smart PC-0' + this.counters.smartpc
      : 'Terminal-0' + this.counters.terminal;
    return { ok: true, machine: { name, type, shop: shop.shop, address: shop.address } };
  }
};

/* Categories matching screenshot */
const CATEGORIES = [
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

/* Popular Games (from screenshot) */
const POPULAR_GAMES = [
  { id: 'g1', name: 'Buffalo King', provider: 'Pragmatic Play', badge: 'HOT', badgeClass: 'badge-hot', art: '🦬', color: '#5e2a14' },
  { id: 'g2', name: 'Gods of Olympus', provider: 'Pragmatic Play', badge: 'NEW', badgeClass: 'badge-new', art: '⚡', color: '#1e3a6a' },
  { id: 'g3', name: 'Buffalo King', provider: 'Pragmatic Play', badge: '', badgeClass: '', art: '🦅', color: '#4a210d' },
  { id: 'g4', name: 'Buffalo King', provider: 'Pragmatic Play', badge: '', badgeClass: '', art: '🦬', color: '#5e2a14' },
  { id: 'g5', name: 'Gods of Olympus', provider: 'Pragmatic Play', badge: '', badgeClass: '', art: '🏛️', color: '#172d54' },
  { id: 'g6', name: 'Gods of Olympus', provider: 'Pragmatic Play', badge: 'JACKPOT', badgeClass: 'badge-jackpot', art: '⚡', color: '#4c1d95' },
  { id: 'g7', name: 'Buffalo King', provider: 'Pragmatic Play', badge: '', badgeClass: '', art: '🐺', color: '#5e2a14' },
  { id: 'g8', name: 'Gods of Olympus', provider: 'Pragmatic Play', badge: '', badgeClass: '', art: '⚡', color: '#1e3a6a' }
];

/* New Games (from screenshot) */
const NEW_GAMES = [
  { id: 'n1', name: 'Gods of Olympus', provider: 'Pragmatic Play', art: '⚡', color: '#1e3a6a' },
  { id: 'n2', name: 'Gods of Olympus', provider: 'Pragmatic Play', art: '🏛️', color: '#172d54' },
  { id: 'n3', name: 'Buffalo King', provider: 'Pragmatic Play', art: '🦬', color: '#5e2a14' },
  { id: 'n4', name: 'Buffalo King', provider: 'Pragmatic Play', art: '🦅', color: '#4a210d' },
  { id: 'n5', name: 'Buffalo King', provider: 'Pragmatic Play', art: '🐺', color: '#5e2a14' },
  { id: 'n6', name: 'Gods of Olympus', provider: 'Pragmatic Play', art: '⚡', color: '#1e3a6a' },
  { id: 'n7', name: 'Mining Bonanza', provider: 'Pragmatic Play', art: '⛏️', color: '#452b12' },
  { id: 'n8', name: 'Buffalo King', provider: 'Pragmatic Play', art: '🦬', color: '#5e2a14' }
];

/* Initial Live Bets Data (exact values from screenshot) */
let LIVE_BETS = [
  { game: 'Gods of Olympus', icon: '⚡', iconBg: '#2563eb', user: 'Sophia Lee', amount: 3125, mult: '22.8X', profit: 14028 },
  { game: 'AVIATOR', icon: '✈️', iconBg: '#e11d48', user: 'Alex Hunter', amount: 1325, mult: '15.3X', profit: 9348 },
  { game: 'Wheel Pro', icon: '🎡', iconBg: '#7c3aed', user: 'Oliver Kahn', amount: 585, mult: '50.0X', profit: 28355 },
  { game: 'Gods of Olympus', icon: '⚡', iconBg: '#2563eb', user: 'Sophia Lee', amount: 5206, mult: '22.8X', profit: 11577 },
  { game: 'Plinko', icon: '🟣', iconBg: '#06b6d4', user: 'Emma Watson', amount: 2427, mult: '4.6X', profit: 11250 },
  { game: 'AVIATOR', icon: '✈️', iconBg: '#e11d48', user: 'Alex Hunter', amount: 1230, mult: '15.3X', profit: 7020 },
  { game: 'Gods of Olympus', icon: '⚡', iconBg: '#2563eb', user: 'Sophia Lee', amount: 4226, mult: '22.8X', profit: 10354 },
  { game: 'Lucky Mines', icon: '💎', iconBg: '#ec4899', user: 'Daniel Brooks', amount: 1400, mult: '3.70X', profit: 5411 },
  { game: 'Plinko', icon: '🟣', iconBg: '#06b6d4', user: 'Emma Watson', amount: 2325, mult: '2.8X', profit: 6510 },
  { game: 'Buffalo King', icon: '🦬', iconBg: '#d97706', user: 'Lucas Vance', amount: 2150, mult: '5.4X', profit: 4895 }
];

/* State */
let S = {
  screen: 'register',       // First registration page will come!
  modal: null,              // cashout | gamePlay
  code: 'WB-SHOP-4821',
  type: null,
  tick: false,
  err: '',
  machine: null,
  balance: 550.00,
  ticket: null,
  activeCat: 'all',
  betTab: 'recent',
  activeGame: null,
  spinning: false
};

const money = n => 'N$ ' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const isCodeShaped = c => /^WB-SHOP-\d{4}$/.test(c);

/* ------------------------------------------------------------------
   VIEWS
------------------------------------------------------------------ */

function topbarView() {
  const m = S.machine || { name: 'Terminal-01', shop: 'Windhoek Central', type: 'terminal' };
  return `
  <header class="topbar">
    <a href="#" class="brand" id="brandHome">
      BETTING <em>SHOP</em>
    </a>

    <div class="machine-chip">
      <span class="dot"></span>
      <span>${m.name}</span>
      <span style="opacity:.6;font-size:11px">(${m.shop})</span>
    </div>

    <div class="topbar-actions">
      <div class="balance-widget">
        <span class="lbl">BALANCE</span>
        <strong id="bal">${money(S.balance)}</strong>
      </div>
      
      <button class="topbar-btn btn-deposit" id="btnDepositTop">
        👛 Deposit
      </button>

      <button class="topbar-btn btn-cashout" id="cashaction" ${S.balance <= 0 ? 'disabled' : ''}>
        ${m.type === 'terminal' ? '🎟 Print Ticket' : '💵 Cash Out'}
      </button>
    </div>
  </header>`;
}

function shopFooter() {
  const known = isCodeShaped(S.code) && SERVER.codes[S.code];
  const resolved = S.machine || known || { shop: 'Windhoek Central', address: 'Independence Ave, Windhoek' };
  return `
  <footer class="footer">
    <span class="shopicon">🏪</span>
    <span>Shop</span> <b>${resolved.shop}</b> <span>· ${resolved.address}</span>
    <span style="margin-left:auto;color:var(--ink-dim)">Winbet Retail v4.2.0</span>
  </footer>`;
}

/* ------------------------------------------------------------------
   1ST IMAGE REFERENCE DATA & SECTIONS
------------------------------------------------------------------ */
const CARD_THEMES = {
  green: {
    frame: '#34e6a8',
    frameBright: '#9dffdf',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(52,230,168,0.15), transparent 60%), linear-gradient(180deg, #0c2018 0%, #06120d 55%, #030906 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(52,230,168,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #10241b 0%, #0a1712 45%, #050d0a 100%)',
    titleGradient: 'linear-gradient(180deg, #d6fff0 0%, #62e6ae 35%, #1f9d6d 70%, #bff3da 100%)',
    badgeBg: 'linear-gradient(180deg, #0d211a, #071310)',
    badgeText: '#a8f5d4',
    gold: '#d4af37',
    goldLight: '#f4e2a1',
    textStroke: '#06231a'
  },
  red: {
    frame: '#f43f5e',
    frameBright: '#fda4af',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(244,63,94,0.15), transparent 60%), linear-gradient(180deg, #240a12 0%, #14050a 55%, #080204 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(244,63,94,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2a0b14 0%, #17060a 45%, #0c0305 100%)',
    titleGradient: 'linear-gradient(180deg, #ffe4e8 0%, #fb7185 35%, #e11d48 70%, #fda4af 100%)',
    badgeBg: 'linear-gradient(180deg, #240a12, #14050a)',
    badgeText: '#fecdd3',
    gold: '#fbbf24',
    goldLight: '#fef08a',
    textStroke: '#25040b'
  },
  gold: {
    frame: '#f59e0b',
    frameBright: '#fde68a',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(245,158,11,0.15), transparent 60%), linear-gradient(180deg, #241805 0%, #140d02 55%, #080501 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(245,158,11,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2b1d06 0%, #180f03 45%, #0d0801 100%)',
    titleGradient: 'linear-gradient(180deg, #fffbeb 0%, #fcd34d 35%, #d97706 70%, #fde68a 100%)',
    badgeBg: 'linear-gradient(180deg, #241805, #140d02)',
    badgeText: '#fef3c7',
    gold: '#f59e0b',
    goldLight: '#fde68a',
    textStroke: '#251502'
  },
  blue: {
    frame: '#06b6d4',
    frameBright: '#a5f3fc',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(6,182,212,0.15), transparent 60%), linear-gradient(180deg, #071f2b 0%, #031017 55%, #010609 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(6,182,212,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #092636 0%, #04141c 45%, #02090d 100%)',
    titleGradient: 'linear-gradient(180deg, #ecfeff 0%, #38bdf8 35%, #0284c7 70%, #a5f3fc 100%)',
    badgeBg: 'linear-gradient(180deg, #071f2b, #031017)',
    badgeText: '#cffafe',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#041620'
  },
  magenta: {
    frame: '#d946ef',
    frameBright: '#f5d0fe',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(217,70,239,0.15), transparent 60%), linear-gradient(180deg, #240a28 0%, #140517 55%, #08020a 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(217,70,239,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2b0b30 0%, #17061a 45%, #0c030d 100%)',
    titleGradient: 'linear-gradient(180deg, #fdf4ff 0%, #e879f9 35%, #c026d3 70%, #f5d0fe 100%)',
    badgeBg: 'linear-gradient(180deg, #240a28, #140517)',
    badgeText: '#fae8ff',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#25042a'
  },
  purple: {
    frame: '#8b5cf6',
    frameBright: '#ddd6fe',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(139,92,246,0.15), transparent 60%), linear-gradient(180deg, #180e2b 0%, #0d0717 55%, #05030a 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(139,92,246,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #1f1236 0%, #10091c 45%, #07040d 100%)',
    titleGradient: 'linear-gradient(180deg, #f5f3ff 0%, #a78bfa 35%, #7c3aed 70%, #ddd6fe 100%)',
    badgeBg: 'linear-gradient(180deg, #180e2b, #0d0717)',
    badgeText: '#ede9fe',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#15082b'
  },
  orange: {
    frame: '#f97316',
    frameBright: '#fed7aa',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(249,115,22,0.15), transparent 60%), linear-gradient(180deg, #261105 0%, #140802 55%, #080301 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(249,115,22,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2d1406 0%, #190a03 45%, #0d0501 100%)',
    titleGradient: 'linear-gradient(180deg, #fff7ed 0%, #fb923c 35%, #ea580c 70%, #fed7aa 100%)',
    badgeBg: 'linear-gradient(180deg, #261105, #140802)',
    badgeText: '#ffedd5',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#280c02'
  },
  cyan: {
    frame: '#0ea5e9',
    frameBright: '#bae6fd',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(14,165,233,0.15), transparent 60%), linear-gradient(180deg, #051d29 0%, #020e14 55%, #010608 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(14,165,233,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #072333 0%, #03121a 45%, #01080d 100%)',
    titleGradient: 'linear-gradient(180deg, #f0f9ff 0%, #38bdf8 35%, #0284c7 70%, #bae6fd 100%)',
    badgeBg: 'linear-gradient(180deg, #051d29, #020e14)',
    badgeText: '#e0f2fe',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#021520'
  }
};

function renderThemedCard(g) {
  const theme = CARD_THEMES[g.theme || 'green'] || CARD_THEMES.green;
  return `
    <div class="troll-king-card-root" data-game-name="${g.name}" style="
      --frame-green: ${theme.frame};
      --frame-green-bright: ${theme.frameBright};
      --gold: ${theme.gold};
      --gold-light: ${theme.goldLight};
      --text-mint: ${theme.badgeText};
      cursor: pointer;
    ">
      <div class="tk-card">
        <div class="tk-art" style="background: ${theme.artBg};">
          ${g.image ? `<img src="${g.image}" alt="${g.name}" class="tk-art-img" onerror="this.style.display='none'">` : `<div class="tk-art-label">${g.artLabel || 'character illustration area'}</div>`}
        </div>
        <div class="tk-frame">
          <svg viewBox="0 0 468 724" preserveAspectRatio="none">
            <polygon class="tk-frame-line" points="28,0 440,0 468,28 468,696 440,724 28,724 0,696 0,28" />
            <polygon class="tk-frame-line-inner" points="34,10 434,10 458,34 458,690 434,714 34,714 10,690 10,34" />
          </svg>
        </div>

        <div class="tk-title-block">
          ${g.titleTop ? `<div class="tk-title-line silver">${g.titleTop}</div>` : ''}
          ${g.titleBottom ? `<div class="tk-title-line mint" style="background:${theme.titleGradient};-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-stroke:0.4cqw ${theme.textStroke};">${g.titleBottom}</div>` : ''}
          <div class="tk-rule">
            <span class="tk-line"></span>
            <span class="tk-diamond-sm"></span>
            <span class="tk-line"></span>
          </div>
        </div>
        ${g.subtitle ? `
          <div class="tk-badge-wrap">
            <div class="tk-badge-diamond"></div>
            <div class="tk-badge" style="background: ${theme.badgeBg};">
              <span>${g.subtitle}</span>
            </div>
            <div class="tk-badge-diamond"></div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

const REF1_HOT_GAMES = [
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

const REF1_TOP_GAMES = [
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

const REF1_TABLE_GAMES = [
  { id: 't1', name: 'European Roulette', image: '/assets/promo_roulette_wheel.jpg' },
  { id: 't2', name: 'Video Poker', image: '/assets/promo_cards_bonus.jpg' },
  { id: 't3', name: 'Speed Baccarat', image: '/assets/live_casino_croupier.jpg' },
  { id: 't4', name: 'Plinko Drop', image: '/assets/game_plinko.png' },
  { id: 't5', name: 'Dragon Tiger', image: '/assets/game_dragon_hatch.jpg' }
];

/* Casino Lobby View matching 1st image reference */
function lobbyView() {
  const m = S.machine || { name: 'Terminal-01', shop: 'Windhoek Central', type: 'terminal' };

  return `
  ${topbarView()}
  <div class="lobby-content">

    <!-- 1. HOT GAMES SECTION -->
    <section class="hot-games-section">
      <div class="section-header-ref1">
        <div class="section-title-ref1">
          <span class="star-icon">⭐</span> HOT GAMES
        </div>
        <button class="badge-all-yellow" id="btnAllHot">ALL &gt;</button>
      </div>

      <div class="hot-games-grid-ref1">
        ${REF1_HOT_GAMES.map(g => renderThemedCard(g)).join('')}
      </div>

      <div class="show-more-wrap">
        <button class="btn-show-more-ref1" id="btnShowMoreHot">SHOW MORE ▾</button>
      </div>
    </section>

    <!-- 3. LIVE GAMES SECTION -->
    <div class="section-header-ref1">
      <div class="section-title-ref1">
        <span class="star-icon">⭐</span> Live Games
      </div>
      <button class="badge-all-yellow" id="btnAllLive">ALL &gt;</button>
    </div>

    <!-- 4. QUICK PLAY CATEGORY HUB (Casino + Dice & 5 Sub-category Badges) -->
    <div class="quick-hub-ref1">
      <div class="herobanner-container">
        <div class="herobanner-row">
          <!-- CASINO HERO PROMO -->
          <div class="hero-card casino" data-game-name="Live Casino" role="button" tabindex="0">
            <div class="tech-corner-accent"></div>
            <div class="hero-content">
              <div class="hero-badge badge-live">
                <span class="live-dot"></span>
                Live Dealers
              </div>
              <div class="hero-title casino-title">CASINO</div>
              <div class="hero-desc">Live tables, Roulette, Blackjack & VIP dealer rooms</div>
              <button type="button" class="hero-btn btn-gold">
                PLAY NOW <span class="btn-arrow">→</span>
              </button>
            </div>
            <div class="hero-visual-container">
              <img src="/assets/roulette.png" alt="Live Casino Roulette" class="hero-visual-img roulette-art" loading="eager">
            </div>
          </div>

          <!-- DICE HERO PROMO -->
          <div class="hero-card dice" data-game-name="Dice Duels" role="button" tabindex="0">
            <div class="tech-corner-accent"></div>
            <div class="hero-content">
              <div class="hero-badge badge-rtp">
                <span class="rtp-icon">⚡</span>
                99% RTP · Provably Fair
              </div>
              <div class="hero-title dice-title">DICE</div>
              <div class="hero-desc">Provably fair dice rolls & lightning multiplier targets</div>
              <button type="button" class="hero-btn btn-purple">
                ROLL NOW <span class="btn-arrow">→</span>
              </button>
            </div>
            <div class="hero-visual-container">
              <img src="/assets/dice.png" alt="Dice Duels" class="hero-visual-img dice-art" loading="eager">
            </div>
          </div>
        </div>
      </div>

      <div class="hub-five-badges-row">
        <div class="hub-badge-pill" data-game-name="Roulette" role="button" tabindex="0">
          <img src="/assets/icon_roulette_3d.jpg" alt="Roulette" class="hub-pill-img-art">
          <span class="hub-pill-label">Roulette</span>
          <span class="hub-pill-arrow">→</span>
        </div>
        <div class="hub-badge-pill active" data-game-name="Slots" role="button" tabindex="0">
          <img src="/assets/icon_slots_3d.jpg" alt="Slots" class="hub-pill-img-art">
          <span class="hub-pill-label">Slots</span>
          <span class="hub-pill-arrow">→</span>
        </div>
        <div class="hub-badge-pill" data-game-name="Cards" role="button" tabindex="0">
          <img src="/assets/icon_cards_3d.jpg" alt="Cards" class="hub-pill-img-art">
          <span class="hub-pill-label">Cards</span>
          <span class="hub-pill-arrow">→</span>
        </div>
        <div class="hub-badge-pill" data-game-name="Fishing" role="button" tabindex="0">
          <img src="/assets/icon_fishing_3d.jpg" alt="Fishing" class="hub-pill-img-art">
          <span class="hub-pill-label">Fishing</span>
          <span class="hub-pill-arrow">→</span>
        </div>
        <div class="hub-badge-pill" data-game-name="Lottery" role="button" tabindex="0">
          <img src="/assets/icon_lottery_3d.jpg" alt="Lottery" class="hub-pill-img-art">
          <span class="hub-pill-label">Lottery</span>
          <span class="hub-pill-arrow">→</span>
        </div>
      </div>
    </div>

    <!-- 6. TOP GAMES SECTION (From 1st Image & User Request) -->
    <section class="top-games-section">
      <div class="section-header-ref1">
        <div class="section-title-ref1">
          <span class="star-icon">⭐</span> Top Games
        </div>
        <button class="badge-all-yellow" id="btnAllTop">ALL &gt;</button>
      </div>

      <div class="hot-games-grid-ref1">
        ${REF1_TOP_GAMES.map(g => renderThemedCard(g)).join('')}
      </div>
    </section>




    <!-- 9. SPECIAL OFFERS (From 1st Image: 3 Cards Side-by-Side) -->
    <section class="special-offers-ref1-section">
      <div class="section-header-ref1">
        <div class="section-title-ref1">
          <span class="star-icon">⭐</span> Special Offers
        </div>
      </div>

      <div class="special-offers-ref1-grid">
        <div class="offer-card-ref1" data-game-name="Loyalty Chests">
          <img src="/assets/promo_gift_box.jpg" alt="Loyalty Chests" class="offer-icon-ref1">
          <h4>Loyalty Chests</h4>
          <p>Unlock daily gift boxes & loyalty prizes with every ticket</p>
        </div>

        <div class="offer-card-ref1" data-game-name="Cashdrop Cashback">
          <img src="/assets/promo_reload_coins.jpg" alt="Cashdrop Cashback" class="offer-icon-ref1">
          <h4>Cashdrop Cashback</h4>
          <p>Get up to 20% weekly cashback on slot and table losses</p>
        </div>

        <div class="offer-card-ref1" data-game-name="Daily Zero Loss">
          <img src="/assets/promo_daily_reward.jpg" alt="Daily Zero Loss" class="offer-icon-ref1">
          <h4>Daily Zero Loss</h4>
          <p>Your first bet every day is 100% risk-free protected</p>
        </div>
      </div>
    </section>

    <!-- 10. EXCLUSIVE PROMO SECTION ("100% BONUS UP TO WIN MORE GIFTS") -->
    <section class="exclusive-promo-showcase-section" aria-label="100% Bonus Exclusive Promo">
      <div class="exclusive-promo-stage-card">
        <!-- Background Ambient Glows & Light Streak -->
        <div class="promo-ambient-glow glow-left"></div>
        <div class="promo-ambient-glow glow-center"></div>
        <div class="promo-ambient-glow glow-right"></div>
        <div class="promo-light-sheen"></div>

        <!-- Content Left Column -->
        <div class="promo-content-column">
          <div class="promo-tag-exclusive">
            <span class="promo-tag-crown">👑</span>
            <span class="promo-tag-text">EXCLUSIVE PROMO</span>
          </div>

          <h2 class="promo-headline-title">
            <span class="headline-line1">100% BONUS UP TO</span>
            <span class="headline-line2">WIN MORE GIFTS</span>
          </h2>

          <p class="promo-supporting-text">
            First 3 deposits unlock mystery rewards, free spins and cash match boosts.
          </p>

          <div class="promo-buttons-row">
            <button type="button" class="btn-promo-secondary-outline" id="btnPromoActiveMain" title="View All Active Promotions">
              <span class="btn-secondary-label">ALL ACTIVE PROMOS</span>
              <span class="btn-arrow-icon">→</span>
            </button>
          </div>
        </div>

        <!-- Center: 3 Interactive Benefit Badges -->
        <div class="promo-benefits-column">
          <div class="benefit-hex-card benefit-mystery" title="Unlock Mystery Rewards with your deposits">
            <div class="benefit-hex-icon-box">
              <svg class="hex-svg-badge" viewBox="0 0 44 48" fill="none">
                <polygon points="22 2, 42 13, 42 35, 22 46, 2 35, 2 13" class="hex-polygon-bg"></polygon>
                <polygon points="22 2, 42 13, 42 35, 22 46, 2 35, 2 13" class="hex-polygon-stroke"></polygon>
              </svg>
              <span class="benefit-icon-glyph">🎁</span>
            </div>
            <span class="benefit-label">Mystery Rewards</span>
          </div>

          <div class="benefit-hex-card benefit-spins" title="Get Instant Free Spins">
            <div class="benefit-hex-icon-box">
              <svg class="hex-svg-badge" viewBox="0 0 44 48" fill="none">
                <polygon points="22 2, 42 13, 42 35, 22 46, 2 35, 2 13" class="hex-polygon-bg"></polygon>
                <polygon points="22 2, 42 13, 42 35, 22 46, 2 35, 2 13" class="hex-polygon-stroke"></polygon>
              </svg>
              <span class="benefit-icon-glyph">🔄</span>
            </div>
            <span class="benefit-label">Free Spins</span>
          </div>

          <div class="benefit-hex-card benefit-boosts" title="Claim Cash Match Boosts">
            <div class="benefit-hex-icon-box">
              <svg class="hex-svg-badge" viewBox="0 0 44 48" fill="none">
                <polygon points="22 2, 42 13, 42 35, 22 46, 2 35, 2 13" class="hex-polygon-bg"></polygon>
                <polygon points="22 2, 42 13, 42 35, 22 46, 2 35, 2 13" class="hex-polygon-stroke"></polygon>
              </svg>
              <span class="benefit-icon-glyph">🪙</span>
            </div>
            <span class="benefit-label">Cash Match Boosts</span>
          </div>
        </div>

        <!-- Right: 3D Purple & Gold Gift Artwork -->
        <div class="promo-artwork-column">
          <div class="promo-art-stage">
            <div class="promo-art-radial-halo"></div>
            <img src="/assets/promo_gift_box_3d_cutout.png" alt="3D Purple and Gold Treasure Gift Box overflowing with gold coins and reward elements" class="promo-3d-gift-image">
            <div class="promo-floating-sparkle sparkle-1">✨</div>
            <div class="promo-floating-sparkle sparkle-2">✨</div>
            <div class="promo-floating-coin coin-1">🪙</div>
            <div class="promo-floating-coin coin-2">🪙</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. TABLE GAMES & PROVIDER ICONS (From 1st Image) -->
    <section class="table-games-ref1-section">
      <div class="section-header-ref1">
        <div class="section-title-ref1">
          <span class="star-icon">⭐</span> Table Games
        </div>
        <button class="badge-all-yellow" id="btnAllTable">ALL &gt;</button>
      </div>

      <div class="table-games-ref1-row">
        ${REF1_TABLE_GAMES.map(t => `
          <div class="table-game-card-ref1" data-game-name="${t.name}">
            <img src="${t.image}" alt="${t.name}">
            <div class="t-title">${t.name}</div>
          </div>
        `).join('')}
      </div>


    </section>





  </div>
  ${shopFooter()}`;
}

/* Registration View (for Setup Flow) */
function registerView() {
  const terminal = S.type === 'terminal';
  const ready = isCodeShaped(S.code) && S.type && (!terminal || S.tick);
  return `
  <div class="stage">
    <div>
      <div class="reg-brand">
        <div class="brand" style="justify-content:center;font-size:44px">
          BETTING <em>SHOP</em>
        </div>
        <div class="lock">BETTING SHOP TERMINAL SYSTEM</div>
      </div>

      <div class="card">
        <h1>Register this machine</h1>

        <div class="field">
          <label for="code">Setup Code</label>
          <input id="code" value="${S.code}" placeholder="WB-SHOP-0000"
                 inputmode="text" autocomplete="off" spellcheck="false"
                 aria-invalid="${S.err ? 'true' : 'false'}"
                 aria-describedby="codehint" maxlength="12">
          <div class="hint ${S.err ? 'err' : ''}" id="codehint">
            ${S.err || 'Example: WB-SHOP-4821 or WB-SHOP-1907'}
          </div>
        </div>

        <div class="field">
          <label id="typelabel">Machine type</label>
          <div class="types" role="radiogroup" aria-labelledby="typelabel">
            <button class="type" role="radio" data-type="smartpc"
                    aria-checked="${S.type === 'smartpc'}">🖥 Smart PC</button>
            <button class="type" role="radio" data-type="terminal"
                    aria-checked="${S.type === 'terminal'}">🎟 Terminal</button>
          </div>
        </div>

        ${terminal ? `
          <div class="tick" data-on="${S.tick}" id="tick" role="checkbox"
               tabindex="0" aria-checked="${S.tick}">
            <div class="box">✓</div>
            <p>Confirm Terminal registration for this shop
              <small>Terminals accept cash notes. Tick to confirm before registering.</small>
            </p>
          </div>` : ''}

        <button class="btn btn-gold btn-block" id="doReg" ${ready ? '' : 'disabled'}>
          🔒 Register & Activate
        </button>
      </div>
    </div>
  </div>`;
}

function successView() {
  const m = S.machine;
  return `
  ${topbarView()}
  <div class="stage">
    <div class="success">
      <div class="seal">✓</div>
      <h1>Registration successful</h1>
      <div class="sub">This machine is activated for ${m.shop}.</div>
      <div class="facts">
        <div class="fact"><span>Machine</span><b>${m.name}</b></div>
        <div class="fact"><span>Type</span><b>${m.type === 'smartpc' ? 'Smart PC' : 'Terminal'}</b></div>
        <div class="fact"><span>Shop</span><b>${m.shop}</b></div>
      </div>
      <div class="place">📍 ${m.address}</div>
      <button class="btn btn-gold btn-block" id="continue">Continue to gaming platform</button>
    </div>
  </div>
  ${shopFooter()}`;
}

function ticketView() {
  const t = S.ticket || { id: 'TK-849201', amount: S.balance, date: new Date().toLocaleString() };
  return `
  ${topbarView()}
  <div class="stage">
    <div class="success">
      <div class="seal">✓</div>
      <h1>Ticket printed</h1>
      <div class="ticket">
        <div class="bars"></div>
        <div class="tname">BETTING SHOP</div>
        <div style="letter-spacing:.14em;font-size:10px;color:#666">CASHOUT TICKET</div>
        <div style="font-size:11px;color:#444;margin-top:6px">Ticket ID ${t.id}</div>
        <div class="tamt">${money(t.amount)}</div>
        <div class="fine">
          <span>Valid for payout at cashier or scan on terminal</span>
          <span>${t.date}</span>
        </div>
      </div>
      <div class="next">
        <b>1</b> Take ticket <span>›</span> <b>2</b> Cashier pays cash
        <span>or</span> <b>3</b> Scan on a Terminal
      </div>
      <button class="btn btn-gold btn-block" id="backToGames">🎮 Back to games</button>
    </div>
  </div>
  ${shopFooter()}`;
}

/* Cash Out Confirmation Modal */
function modalView() {
  if (!S.modal) return '';
  const terminal = S.machine && S.machine.type === 'terminal';

  if (S.modal === 'gamePlay') {
    return `
    <div class="scrim" id="scrim">
      <div class="game-play-modal">
        <div class="game-play-header">
          <h2 style="margin:0;color:#fff;font-size:22px">🎰 ${S.activeGame || 'Casino Game'}</h2>
          <button class="btn-quiet" id="modalClose" style="padding:6px 14px;border-radius:999px">✕ Close</button>
        </div>
        <div class="game-play-stage">
          <div class="reels-row" id="reelsRow">
            <div class="reel" id="reel1">⚡</div>
            <div class="reel" id="reel2">👑</div>
            <div class="reel" id="reel3">💎</div>
          </div>
          <div id="spinResult" style="margin-top:16px;font-size:16px;font-weight:700;color:var(--gold-bright);min-height:24px">
            Press SPIN to test your luck! (Bet: N$ 10.00)
          </div>
        </div>
        <div style="display:flex;gap:12px;justify-content:center">
          <button class="btn btn-gold" id="btnSpin" style="min-width:160px">
            🎲 SPIN (N$ 10)
          </button>
          <button class="btn btn-purple" id="btnMaxWin">
            ⚡ SIMULATE WIN (+N$ 70)
          </button>
        </div>
      </div>
    </div>`;
  }

  return `<div class="scrim" id="scrim"><div class="modal" role="dialog" aria-modal="true">
    <h2>${terminal ? 'Print Cashout Ticket' : 'Cash Out'}</h2>
    <div class="amount-label">AMOUNT</div>
    <div class="amount">${money(S.balance)}</div>
    <p>${terminal
      ? 'Prints a ticket with barcode. Collect cash at the cashier, or scan it on another Terminal in this shop.'
      : 'The cashier pays this balance in cash at the counter.'}</p>
    <button class="btn btn-gold btn-block" id="modalGo">${terminal ? '🎟 Print Ticket' : 'Confirm Cashout'}</button>
    <button class="btn btn-quiet btn-block" id="modalCancel">Cancel</button>
  </div></div>`;
}

/* ------------------------------------------------------------------
   RENDER & EVENT BINDINGS
------------------------------------------------------------------ */

function render() {
  const app = document.getElementById('app');
  let html = '';
  if (S.screen === 'register') html = registerView();
  else if (S.screen === 'success') html = successView();
  else if (S.screen === 'lobby') html = lobbyView();
  else if (S.screen === 'ticket') html = ticketView();
  app.innerHTML = html;

  const old = document.getElementById('scrim');
  if (old) old.remove();
  if (S.modal) document.body.insertAdjacentHTML('beforeend', modalView());

  wire();
}

function wire() {
  const $ = id => document.getElementById(id);

  if ($('brandHome')) $('brandHome').onclick = (e) => { e.preventDefault(); };

  // Deposit actions (simulates adding cash / note insertion)
  const depositAction = () => {
    S.balance += 50;
    render();
  };
  if ($('btnDepositTop')) $('btnDepositTop').onclick = depositAction;
  if ($('btnDepositBanner')) $('btnDepositBanner').onclick = depositAction;
  if ($('btnDepositBottom')) $('btnDepositBottom').onclick = depositAction;
  if ($('btnQuickDepositBar')) $('btnQuickDepositBar').onclick = depositAction;
  if ($('btnDepositBannerMid')) {
    $('btnDepositBannerMid').onclick = (e) => {
      e.stopPropagation();
      depositAction();
    };
  }
  if ($('btnDepositBottomBar')) $('btnDepositBottomBar').onclick = depositAction;

  // Cashout actions
  const openCashout = () => {
    if (S.balance <= 0) return;
    S.modal = 'cashout';
    render();
  };
  if ($('cashaction')) $('cashaction').onclick = openCashout;
  if ($('btnCashoutBar')) $('btnCashoutBar').onclick = openCashout;
  if ($('btnCashoutBottomBar')) $('btnCashoutBottomBar').onclick = openCashout;

  // 1st Image Hero CTAs
  if ($('btnKickoffBet')) {
    $('btnKickoffBet').onclick = (e) => {
      e.stopPropagation();
      S.activeGame = 'Sports Betting';
      S.modal = 'gamePlay';
      render();
    };
  }
  if ($('btnPlinkoPlay')) {
    $('btnPlinkoPlay').onclick = (e) => {
      e.stopPropagation();
      S.activeGame = 'Plinko';
      S.modal = 'gamePlay';
      render();
    };
  }

  // 1st Image Promo Actions
  if ($('btnAllActivePromos')) {
    $('btnAllActivePromos').onclick = (e) => {
      e.stopPropagation();
      alert('Active Promos: 100% Welcome Match, Weekend Cashback, Free Spins & Multi-Boost active!');
    };
  }
  if (document.querySelector('.exclusive-promo-ref1-banner')) {
    document.querySelector('.exclusive-promo-ref1-banner').onclick = (e) => {
      if (e.target && e.target.id === 'btnAllActivePromos') return;
      depositAction();
    };
  }
  if ($('btnShowMoreHot')) {
    $('btnShowMoreHot').onclick = () => {
      alert('Loading all 120+ Hot Slot & Crash titles in shop inventory...');
    };
  }
  if ($('btnDetailsBalance') || $('btnDetailsCashout')) {
    const detailsAction = () => alert('Retail Machine WB-SHOP-4821 • Terminal-01 • Cashier Link: Operational');
    if ($('btnDetailsBalance')) $('btnDetailsBalance').onclick = detailsAction;
    if ($('btnDetailsCashout')) $('btnDetailsCashout').onclick = detailsAction;
  }

  // Modal actions
  if ($('modalCancel')) $('modalCancel').onclick = () => { S.modal = null; render(); };
  if ($('modalClose')) $('modalClose').onclick = () => { S.modal = null; render(); };
  if ($('modalGo')) $('modalGo').onclick = () => {
    const isSmartPC = S.machine && S.machine.type === 'smartpc';
    const amt = S.balance;
    S.balance = 0;
    S.modal = null;
    if (isSmartPC) {
      S.screen = 'lobby';
    } else {
      S.ticket = {
        id: 'TK-' + Math.floor(100000 + Math.random() * 900000),
        amount: amt,
        date: new Date().toLocaleString()
      };
      S.screen = 'ticket';
    }
    render();
  };

  // Game play modal actions
  if ($('btnSpin')) {
    $('btnSpin').onclick = () => {
      if (S.spinning) return;
      if (S.balance < 10) {
        alert('Insufficient balance! Deposit funds or simulate a note.');
        return;
      }
      S.balance -= 10;
      S.spinning = true;
      const symbols = ['⚡', '👑', '💎', '🦬', '7️⃣', '🔔', '🍒'];
      const r1 = $('reel1'), r2 = $('reel2'), r3 = $('reel3');
      r1.classList.add('spin-anim');
      r2.classList.add('spin-anim');
      r3.classList.add('spin-anim');
      $('spinResult').textContent = 'Spinning the reels...';

      setTimeout(() => {
        r1.classList.remove('spin-anim');
        r2.classList.remove('spin-anim');
        r3.classList.remove('spin-anim');
        S.spinning = false;

        // 40% chance of win
        const win = Math.random() > 0.45;
        let s1, s2, s3;
        if (win) {
          const sym = symbols[Math.floor(Math.random() * 4)];
          s1 = s2 = s3 = sym;
          const payout = 50;
          S.balance += payout;
          $('spinResult').innerHTML = `🎉 BIG WIN! +${money(payout)} 🎉`;
        } else {
          s1 = symbols[Math.floor(Math.random() * symbols.length)];
          s2 = symbols[Math.floor(Math.random() * symbols.length)];
          s3 = symbols[Math.floor(Math.random() * symbols.length)];
          $('spinResult').textContent = 'Try again! Spin for the Jackpot!';
        }
        r1.textContent = s1;
        r2.textContent = s2;
        r3.textContent = s3;
        $('bal').textContent = money(S.balance);
      }, 700);
    };
  }

  if ($('btnMaxWin')) {
    $('btnMaxWin').onclick = () => {
      S.balance += 70;
      const r1 = $('reel1'), r2 = $('reel2'), r3 = $('reel3');
      if (r1) r1.textContent = '⚡';
      if (r2) r2.textContent = '⚡';
      if (r3) r3.textContent = '⚡';
      $('spinResult').innerHTML = `⚡ OLYMPUS BLESSING! +N$ 70.00 ⚡`;
      $('bal').textContent = money(S.balance);
    };
  }

  // Category filter pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.onclick = () => {
      S.activeCat = pill.dataset.cat;
      render();
    };
  });

  // Recent / High bets tabs
  if ($('tabRecentBets')) $('tabRecentBets').onclick = () => { S.betTab = 'recent'; render(); };
  if ($('tabHighBets')) $('tabHighBets').onclick = () => { S.betTab = 'high'; render(); };

  // Game cards click -> open interactive game modal
  document.querySelectorAll('[data-game-name]').forEach(card => {
    card.onclick = () => {
      S.activeGame = card.dataset.gameName;
      S.modal = 'gamePlay';
      render();
    };
  });

  // Hub cards
  document.querySelectorAll('[data-hub]').forEach(hub => {
    hub.onclick = () => {
      S.activeGame = hub.dataset.hub.toUpperCase();
      S.modal = 'gamePlay';
      render();
    };
  });

  // Setup / Registration Flow wiring
  const code = $('code');
  if (code) {
    code.addEventListener('input', e => {
      let raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (raw.startsWith('WBSHOP')) raw = 'WB-SHOP-' + raw.slice(6, 10);
      else if (raw.startsWith('WB')) raw = 'WB-' + raw.slice(2);
      S.code = raw; S.err = '';
      const pos = raw.length;
      render();
      const el = $('code');
      if (el) { el.focus(); el.setSelectionRange(pos, pos); }
    });
  }

  document.querySelectorAll('.type').forEach(b => {
    b.onclick = () => {
      S.type = b.dataset.type;
      S.tick = false;
      S.err = '';
      render();
    };
  });

  const tick = $('tick');
  if (tick) {
    const flip = () => { S.tick = !S.tick; render(); };
    tick.onclick = flip;
    tick.onkeydown = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } };
  }

  const doReg = $('doReg');
  if (doReg) {
    doReg.onclick = () => {
      const type = S.type || 'terminal';
      const code = isCodeShaped(S.code) ? S.code : 'WB-SHOP-4821';
      const res = SERVER.register(code, type);
      if (!res.ok) {
        S.err = res.error;
        render();
        return;
      }
      S.machine = res.machine;
      S.screen = 'lobby';
      render();
    };
  }

  if ($('continue')) $('continue').onclick = () => { S.screen = 'lobby'; render(); };
  if ($('backToGames')) $('backToGames').onclick = () => { S.screen = 'lobby'; render(); };
}

/* ------------------------------------------------------------------
   REAL-TIME BET STREAM SIMULATOR (ADDS LIVE DYNAMIC FEEL)
------------------------------------------------------------------ */
const SAMPLE_USERS = ['Liam Davies', 'Noah Smith', 'Lucas Vance', 'Sophia Lee', 'Emma Watson', 'Elena Rostova', 'Marco Silva', 'Jack Miller'];
const SAMPLE_GAMES = [
  { name: 'Gods of Olympus', icon: '⚡', iconBg: '#2563eb' },
  { name: 'Buffalo King', icon: '🦬', iconBg: '#d97706' },
  { name: 'AVIATOR', icon: '✈️', iconBg: '#e11d48' },
  { name: 'Plinko', icon: '🟣', iconBg: '#06b6d4' },
  { name: 'Lucky Mines', icon: '💎', iconBg: '#ec4899' }
];

setInterval(() => {
  if (S.screen !== 'lobby') return;
  const tbody = document.getElementById('betsTableBody');
  if (!tbody) return;

  const g = SAMPLE_GAMES[Math.floor(Math.random() * SAMPLE_GAMES.length)];
  const u = SAMPLE_USERS[Math.floor(Math.random() * SAMPLE_USERS.length)];
  const amt = Math.floor(200 + Math.random() * 4500);
  const mult = (1.5 + Math.random() * 35).toFixed(1) + 'X';
  const profit = Math.floor(amt * parseFloat(mult));

  const tr = document.createElement('tr');
  tr.className = 'new-row';
  tr.innerHTML = `
    <td>
      <div class="game-cell">
        <span class="game-cell-icon" style="background:${g.iconBg}">${g.icon}</span>
        <span>${g.name}</span>
      </div>
    </td>
    <td class="user-cell">${u}</td>
    <td class="amount-cell">🪙 ${amt.toLocaleString()}</td>
    <td><span class="mult-pill">${mult}</span></td>
    <td class="profit-cell">+${profit.toLocaleString()}</td>
  `;

  tbody.insertBefore(tr, tbody.firstChild);
  if (tbody.children.length > 10) tbody.removeChild(tbody.lastChild);
}, 4500);

// Initialize app
render();
