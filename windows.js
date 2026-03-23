/* ═══════════════════════════════════════════════════════════
   croquetwade.com — Window Templates
   Define windows as data, generate HTML on load.
   ═══════════════════════════════════════════════════════════ */

var ICONS = {
  netscape: '<svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:4px"><rect x="1" y="1" width="14" height="14" rx="2" fill="#006644" stroke="#004422" stroke-width=".5"/><text x="8" y="12" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold" font-family="serif">N</text></svg>',
  folder: '<svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:4px"><rect x="1" y="2" width="14" height="12" rx="1" fill="#f5d76e" stroke="#c8a415" stroke-width=".5"/><rect x="1" y="2" width="7" height="2" rx="1" fill="#e8c838"/></svg>',
  document: '<svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:4px"><rect x="2" y="1" width="12" height="14" rx="1" fill="#fff" stroke="#808080" stroke-width=".5"/><line x1="4" y1="4" x2="12" y2="4" stroke="#0066cc" stroke-width="1"/><line x1="4" y1="7" x2="12" y2="7" stroke="#808080" stroke-width=".5"/><line x1="4" y1="9" x2="12" y2="9" stroke="#808080" stroke-width=".5"/></svg>',
  paint: '<svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:4px"><rect x="1" y="1" width="14" height="14" rx="1" fill="#fff" stroke="#808080" stroke-width=".5"/><rect x="3" y="3" width="4" height="3" fill="#f00"/><rect x="8" y="3" width="4" height="3" fill="#0a0"/><rect x="3" y="7" width="4" height="3" fill="#00f"/><rect x="8" y="7" width="4" height="3" fill="#ff0"/></svg>',
  email: '<svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:4px"><rect x="1" y="4" width="14" height="9" rx="1" fill="#f0ede1" stroke="#808080" stroke-width=".5"/><path d="M2 5l6 5 6-5" stroke="#0066cc" stroke-width="1" fill="none"/></svg>'
};

var WINDOWS = [
  {
    id: 'hero-win', title: 'CroquetWade — Growth Consultancy — Netscape', icon: 'netscape',
    open: true, top: 20, left: 110, width: 680, height: 720,
    menu: ['File','Edit','View','Favourites','Tools','Help'],
    address: 'C:\\CroquetWade\\Growth Consultancy',
    body: '<h1>CroquetWade</h1>'
      + '<p class="hero-subtitle">Croquet growth systems for Queensland. Strategy, technology, and membership — built from the ground up for the Croquet Association of Queensland.</p>'
      + '<p style="font-size:0.85rem;color:var(--fg-dim);">Wade Hart — CAQ Growth Consultancy</p>'
      + '<div class="recessed" style="margin-top:1.5rem;"><div class="stat-grid">'
      + '<div class="stat-item"><span class="stat-label">Clubs connected</span><span class="stat-value">41</span></div>'
      + '<div class="stat-item"><span class="stat-label">Members indexed</span><span class="stat-value">1,777</span></div>'
      + '<div class="stat-item"><span class="stat-label">Pipeline stages</span><span class="stat-value">6</span></div>'
      + '<div class="stat-item"><span class="stat-label">Systems built</span><span class="stat-value">8</span></div>'
      + '</div></div>'
      + '<h2 style="margin-top:1.5rem;">Welcome</h2>'
      + '<p>This is the control room for Queensland croquet growth. Eight connected systems that take someone from "I\'ve never heard of croquet" to "I\'ve just renewed my membership" — with as little volunteer effort as possible.</p>'
      + '<p>Everything here was built for the Croquet Association of Queensland. A membership portal that replaces handwritten forms. A sign-up system that gives small regional clubs the same tools as the big city ones. An email sequence that keeps new visitors warm without anyone lifting a finger. A news site that publishes itself.</p>'
      + '<h2 style="margin-top:1.25rem;">About Wade</h2>'
      + '<p>I\'m a growth consultant working with CAQ to build the systems that make croquet in Queensland easier to find, easier to join, and easier to run. I don\'t do marketing fluff — I build things that work, connect them together, and make sure clubs don\'t have to think about the plumbing.</p>'
      + '<h2 style="margin-top:1.25rem;">Have a look around</h2>'
      + '<p>Double-click the folders and files on the desktop to explore each project. Open as many as you like, drag them around, close them when you\'re done. There\'s a Games folder too — because every good computer needs Minesweeper.</p>'
      + '<p style="font-size:0.85rem;color:var(--fg-muted);margin-top:1.5rem;">\u{1F4E7} <a href="mailto:me@croquetwade.com">me@croquetwade.com</a> — I\'d love to hear from you.</p>'
  },
  {
    id: 'mycroquet-win', title: 'MyCroquet — Netscape', icon: 'netscape',
    top: 50, left: 150, width: 620,
    menu: ['File','Edit','View','Help'],
    body: '<h2>MyCroquet — Membership Portal</h2>'
      + '<p class="project-meta">41 clubs \u00b7 all active members \u00b7 6 alpha sessions</p>'
      + '<p>Passwordless membership portal. Replaces handwritten forms and direct database access with a clean interface that validates, logs, and audits every change.</p>'
      + '<p>Club secretaries enter data once. It flows through the system. Zero double-entry. Every change logged with full audit trail.</p>'
      + '<a href="mycroquet.html" class="btn">Open Full Detail</a>'
  },
  {
    id: 'comeandtry-win', title: 'Come & Try — Netscape', icon: 'netscape',
    top: 70, left: 180, width: 620,
    menu: ['File','Edit','View','Help'],
    body: '<h2>Come & Try — Unified Sign-Up System</h2>'
      + '<p class="project-meta">single shared pipeline \u00b7 committee-wide visibility</p>'
      + '<p>One website for every club in Queensland. Small regional clubs get parity with large city ones. When someone signs up, their details land where any committee member can see and follow up.</p>'
      + '<p>No more warm leads going cold because the right person was on holiday.</p>'
      + '<a href="come-and-try.html" class="btn">Open Full Detail</a>'
  },
  {
    id: 'ideals-win', title: 'Ideals & Aims — WordPad', icon: 'document',
    top: 40, left: 200, width: 620,
    menu: ['File','Edit','View','Insert','Format','Help'],
    body: '<h2>Strategic Framework</h2>'
      + '<p class="project-meta">4 ideals \u00b7 6 aims \u00b7 quarterly priority system</p>'
      + '<p>Four ideals govern how CAQ operates. Six aims define what it builds toward. Developed from a Management Committee workshop.</p>'
      + '<p>The aims form a cascade: strong admin enables external promotion, which brings people to the door, which feeds member growth, which strengthens clubs, which develops play, which opens room for innovation.</p>'
      + '<a href="ideals-and-aims.html" class="btn">Open Full Detail</a>'
  },
  {
    id: 'postcode-win', title: 'One Postcode — Club Finder — Netscape', icon: 'netscape',
    top: 60, left: 160, width: 580,
    body: '<h2>Club Finder</h2>'
      + '<p class="project-meta">deployed \u00b7 integrates with Come & Try pipeline</p>'
      + '<p>Type a postcode, get your nearest club and Come & Try times. Removes the discovery barrier entirely — someone curious about croquet doesn\'t have to search 20 different club websites.</p>'
  },
  {
    id: 'emails-win', title: 'The Email Sequence — Netscape', icon: 'netscape',
    top: 80, left: 140, width: 620,
    menu: ['File','Edit','View','Tools','Message','Help'],
    body: '<h2>Automated Nurture</h2>'
      + '<p class="project-meta">28 days \u00b7 fully automatic \u00b7 zero volunteer effort</p>'
      + '<p>Automated 28-day email series after Come & Try sign-up. Alternates game knowledge and club life stories. Ends with a direct join invitation.</p>'
      + '<p>Keeps croquet present in the gap between visits — the window where people drift away. The system handles the nurture; the club handles the personal touch.</p>'
  },
  {
    id: 'messaging-win', title: 'Messaging — Netscape', icon: 'netscape',
    top: 90, left: 170, width: 560,
    body: '<h2>Shared Enquiry Tracking</h2>'
      + '<p class="project-meta">3-week visibility \u00b7 committee accountability</p>'
      + '<p>Club contact goes to one system, not one person\'s email inbox. Any committee member can see who enquired and follow up. Solves the "person on holiday" problem.</p>'
  },
  {
    id: 'news-win', title: 'The News Site — Netscape Navigator', icon: 'netscape',
    top: 45, left: 190, width: 640,
    menu: ['File','Edit','View','Favourites','Tools','Help'],
    address: 'https://news.croquetqld.org',
    body: '<h2>Write Once, Publish Everywhere</h2>'
      + '<p class="project-meta">2,000+ members reached \u00b7 content stays findable</p>'
      + '<p>Authors write in plain text, articles appear on the news site, then get reused across emails, newsletters, and AI search results. No code, no design tools — anyone who can write a page can publish.</p>'
  },
  {
    id: 'contact-win', title: 'New Message', icon: 'email',
    top: 65, left: 210, width: 560,
    menu: ['File','Edit','View','Insert','Format','Tools','Help'],
    body: '<div style="border-bottom:1px solid #aca899;padding-bottom:0.5rem;margin-bottom:1rem;">'
      + '<p style="margin-bottom:0.3rem;font-size:0.85rem;"><strong>To:</strong> <a href="mailto:me@croquetwade.com">me@croquetwade.com</a></p>'
      + '<p style="margin-bottom:0.3rem;font-size:0.85rem;"><strong>From:</strong> You</p>'
      + '<p style="margin-bottom:0;font-size:0.85rem;"><strong>Subject:</strong> Let\'s talk about croquet growth</p></div>'
      + '<p><strong>Wade Hart</strong><br>CAQ Growth Consultancy — Queensland, Australia</p>'
      + '<p style="color:var(--fg-dim);font-size:0.85rem;">Hit reply. I\'d love to hear from you.</p>'
      + '<a href="mailto:me@croquetwade.com" class="btn" style="margin-top:0.5rem;">Send</a>'
  }
];

// Paint window is special — built separately due to unique layout
var PAINT_WINDOW = {
  id: 'identity-win', title: 'Visual Identity — Paint', icon: 'paint',
  top: 55, left: 130, width: 700
};

// Game iframes
var GAME_WINDOWS = [
  { id: 'minesweeper-win', title: 'Minesweeper', emoji: '\u{1F4A3}', src: 'games/minesweeper.html?embed=1', w: 380, h: 480, top: 60, left: 'calc(50% - 190px)' },
  { id: 'snake-win', title: 'Snake', emoji: '\u{1F40D}', src: 'games/snake.html?embed=1', w: 470, h: 560, top: 40, left: 'calc(50% - 120px)' },
  { id: 'solitaire-win', title: 'Solitaire', emoji: '\u2660', src: 'games/solitaire.html?embed=1', w: 620, h: 580, top: 30, left: 'calc(50% - 310px)' },
  { id: 'hearts-win', title: 'Hearts', emoji: '<span style="color:#c00">\u2665</span>', src: 'games/hearts.html?embed=1', w: 660, h: 600, top: 50, left: 'calc(50% - 230px)' },
  { id: 'blackjack-win', title: 'Blackjack', emoji: '\u{1F0CF}', src: 'games/blackjack.html?embed=1', w: 540, h: 580, top: 70, left: 'calc(50% - 170px)' }
];

function buildWindowHTML(w) {
  var cls = 'float-window' + (w.open ? ' open' : '');
  var style = 'top:' + w.top + 'px;left:' + w.left + 'px;width:' + w.width + 'px;';
  if (w.height) style += 'height:' + w.height + 'px;';
  if (w.maxHeight) style += 'max-height:' + w.maxHeight + ';';

  var h = '<div class="' + cls + '" id="' + w.id + '" style="' + style + '">';
  // Titlebar
  h += '<div class="window-titlebar" data-drag="' + w.id + '">';
  h += (ICONS[w.icon] || '');
  h += '<span class="window-titlebar-text">' + w.title + '</span>';
  h += '<div class="window-buttons"><span class="window-btn window-btn-minimize">\u2500</span><span class="window-btn window-btn-maximize">\u25a1</span><span class="window-btn window-btn-close" onclick="closeApp(\'' + w.id + '\')">\u00d7</span></div>';
  h += '</div>';
  // Menu bar
  if (w.menu) {
    h += '<div class="window-menubar">';
    w.menu.forEach(function(m) { h += '<a>' + m + '</a>'; });
    h += '</div>';
  }
  // Address bar
  if (w.address) {
    h += '<div class="window-addressbar"><span class="addressbar-label">Address</span><span class="addressbar-input">' + w.address + '</span><span class="addressbar-go">Go</span></div>';
  }
  // Body
  h += '<div class="window-frame"><div class="window-body' + (w.id === 'hero-win' ? ' hero-body' : '') + '">';
  h += w.body;
  h += '</div></div></div>';
  return h;
}

function buildPaintWindow() {
  var w = PAINT_WINDOW;
  var h = '<div class="float-window" id="' + w.id + '" style="top:' + w.top + 'px;left:' + w.left + 'px;width:' + w.width + 'px;">';
  h += '<div class="window-titlebar" data-drag="' + w.id + '">' + ICONS[w.icon];
  h += '<span class="window-titlebar-text">' + w.title + '</span>';
  h += '<div class="window-buttons"><span class="window-btn window-btn-minimize">\u2500</span><span class="window-btn window-btn-maximize">\u25a1</span><span class="window-btn window-btn-close" onclick="closeApp(\'' + w.id + '\')">\u00d7</span></div></div>';
  h += '<div class="window-menubar"><a>File</a><a>Edit</a><a>View</a><a>Image</a><a>Colours</a><a>Help</a></div>';
  h += '<div style="display:flex;">';
  h += '<div class="paint-toolbar" style="flex-direction:column;border-bottom:none;border-right:1px solid #aca899;"><span class="paint-tool">\u270f\ufe0f</span><span class="paint-tool active">\u{1f58c}\ufe0f</span><span class="paint-tool">\u{1faa3}</span><span class="paint-tool">\u2702\ufe0f</span><span class="paint-tool">\u{1f50d}</span><span class="paint-tool">\u{1f4dd}</span><span class="paint-tool">\u2b1c</span><span class="paint-tool">\u2b55</span></div>';
  h += '<div style="flex:1;"><div class="paint-canvas">';
  h += '<h2>Unified Design System</h2>';
  h += '<p class="project-meta" style="margin-bottom:0.5rem;">QLD Maroon \u00b7 lawn green \u00b7 Inter \u00b7 hand-sketched illustrations</p>';
  h += '<p>One colour palette, one typeface, one illustration style across all internal and external materials. A person who sees a Come & Try poster, an email, and a website recognises they\'re all part of the same organisation.</p>';
  h += '</div></div></div>';
  h += '<div class="paint-palette"><div class="paint-color-preview"><div class="paint-color-fg"></div><div class="paint-color-bg"></div></div><div class="paint-colors">';
  ['#000','#808080','#800000','#808000','#008000','#008080','#000080','#800080','#808040','#004040','#0000ff','#004080','#4000ff','#804000','#fff','#c0c0c0','#ff0000','#ffff00','#00ff00','#00ffff','#0000ff','#ff00ff','#ffff80','#00ff80','#80ffff','#8080ff','#ff0080','#ff8040'].forEach(function(c) {
    h += '<span class="paint-swatch" style="background:' + c + '"></span>';
  });
  h += '</div></div>';
  h += '<div class="paint-statusbar"><span>For Help, click Help Topics on the Help Menu.</span></div></div>';
  return h;
}

function buildGameWindow(g) {
  var h = '<div class="float-window" id="' + g.id + '" style="top:' + g.top + 'px;left:' + g.left + ';">';
  h += '<div class="window-titlebar" data-drag="' + g.id + '">';
  h += '<span style="margin-right:4px">' + g.emoji + '</span>';
  h += '<span class="window-titlebar-text">' + g.title + '</span>';
  h += '<div class="window-buttons"><span class="window-btn window-btn-minimize">\u2500</span><span class="window-btn window-btn-maximize">\u25a1</span><span class="window-btn window-btn-close" onclick="closeApp(\'' + g.id + '\')">\u00d7</span></div></div>';
  h += '<iframe src="' + g.src + '" width="' + g.w + '" height="' + g.h + '"></iframe></div>';
  return h;
}

function buildGamesFolder() {
  var h = '<div class="float-window" id="games-win" style="top:80px;left:200px;width:680px;">';
  h += '<div class="window-titlebar" data-drag="games-win">' + ICONS.folder;
  h += '<span class="window-titlebar-text">C:\\Program Files\\Games</span>';
  h += '<div class="window-buttons"><span class="window-btn window-btn-minimize">\u2500</span><span class="window-btn window-btn-maximize">\u25a1</span><span class="window-btn window-btn-close" onclick="closeApp(\'games-win\')">\u00d7</span></div></div>';
  h += '<div class="window-menubar"><a>File</a><a>Edit</a><a>View</a><a>Help</a></div>';
  h += '<div class="window-addressbar"><span class="addressbar-label">Address</span><span class="addressbar-input">C:\\Program Files\\Games</span><span class="addressbar-go">Go</span></div>';
  h += '<div style="background:#fff;padding:30px 36px;border:1px solid #aca899;margin:3px;display:flex;flex-wrap:wrap;gap:28px;">';

  var gameIcons = [
    { id: 'minesweeper-win', label: 'Minesweeper', svg: '<svg class="desktop-icon-img" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="2" fill="#c0c0c0" stroke="#808080"/><circle cx="10" cy="10" r="4" fill="#000"/><line x1="10" y1="6" x2="10" y2="3" stroke="#000" stroke-width="1.5"/><line x1="10" y1="14" x2="10" y2="17" stroke="#000" stroke-width="1.5"/><line x1="6" y1="10" x2="3" y2="10" stroke="#000" stroke-width="1.5"/><line x1="14" y1="10" x2="17" y2="10" stroke="#000" stroke-width="1.5"/></svg>' },
    { id: 'snake-win', label: 'Snake', svg: '<svg class="desktop-icon-img" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="2" fill="#1a1a1a" stroke="#808080"/><rect x="6" y="14" width="4" height="4" rx="1" fill="#4caf50"/><rect x="10" y="14" width="4" height="4" rx="1" fill="#66bb6a"/><rect x="14" y="14" width="4" height="4" rx="1" fill="#66bb6a"/><rect x="14" y="10" width="4" height="4" rx="1" fill="#66bb6a"/><circle cx="24" cy="22" r="3" fill="#f44336"/></svg>' },
    { id: 'solitaire-win', label: 'Solitaire', svg: '<svg class="desktop-icon-img" viewBox="0 0 32 32" fill="none"><rect x="4" y="2" width="20" height="28" rx="3" fill="#fff" stroke="#333"/><text x="9" y="14" fill="#c00" font-size="12" font-weight="bold">A</text><text x="14" y="26" fill="#c00" font-size="16">\u2665</text></svg>' },
    { id: 'hearts-win', label: 'Hearts', svg: '<svg class="desktop-icon-img" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="2" fill="#008000" stroke="#006000"/><text x="16" y="22" text-anchor="middle" fill="#c00" font-size="22">\u2665</text></svg>' },
    { id: 'blackjack-win', label: 'Blackjack', svg: '<svg class="desktop-icon-img" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="2" fill="#006400" stroke="#004400"/><text x="16" y="14" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">21</text><text x="16" y="26" text-anchor="middle" fill="#ffd700" font-size="14">\u{1F0CF}</text></svg>' }
  ];

  gameIcons.forEach(function(g) {
    h += '<a onclick="closeApp(\'games-win\');openApp(\'' + g.id + '\')" class="desktop-icon" style="cursor:pointer">' + g.svg + '<span class="desktop-icon-label" style="color:#000">' + g.label + '</span></a>';
  });

  h += '</div><div style="background:#ece9d8;padding:2px 8px;font-size:11px;color:#808080;border-top:1px solid #aca899;">5 objects</div></div>';
  return h;
}

// Build BIOS text-mode content from WINDOWS array (mobile fallback)
function buildBiosContent() {
  var el = document.getElementById('bios-content');
  if (!el) return;
  var html = '';
  WINDOWS.forEach(function(w) {
    if (w.id === 'hero-win') return; // hero is in the POST screen already
    // Strip HTML tags for clean text, but keep structure
    var body = w.body
      .replace(/<h2[^>]*>/g, '<h2>')
      .replace(/<a[^>]*class="btn"[^>]*>[^<]*<\/a>/g, '') // remove buttons
      .replace(/<div[^>]*class="recessed"[^>]*>[\s\S]*?<\/div><\/div>/g, ''); // remove stat grids
    html += '<div class="bios-section">';
    html += body;
    html += '</div>';
  });
  html += '<div class="bios-footer">';
  html += '<p>Wade Hart — CAQ Growth Consultancy</p>';
  html += '<p><a href="mailto:me@croquetwade.com">me@croquetwade.com</a></p>';
  html += '<a class="bios-reboot" onclick="document.querySelector(\'.bios-screen\').style.display=\'none\';document.body.style.background=\'\';document.querySelector(\'.desktop-icons\').style.display=\'\';document.querySelector(\'#window-container\').style.display=\'\';document.querySelector(\'.taskbar\').style.display=\'\';openApp(\'hero-win\');">⟳ Reboot in Desktop Mode</a>';
  html += '</div>';
  el.innerHTML = html;
}

// Render all windows into the page
function renderAllWindows() {
  var container = document.getElementById('window-container');
  var html = '';
  WINDOWS.forEach(function(w) { html += buildWindowHTML(w); });
  html += buildPaintWindow();
  html += buildGamesFolder();
  GAME_WINDOWS.forEach(function(g) { html += buildGameWindow(g); });
  container.innerHTML = html;
}
