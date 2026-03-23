/* ═══════════════════════════════════════════════════════════
   croquetwade.com — Effects (XP Desktop)
   Draggable windows, bring-to-front, smooth scroll, clock.
   Vanilla JS. No dependencies.
   ═══════════════════════════════════════════════════════════ */

var floatZ = 50;

(function () {
  'use strict';

  /* ── Draggable Windows ───────────────────────────────── */

  function initDrag() {
    var titlebars = document.querySelectorAll('[data-drag]');
    titlebars.forEach(function (bar) {
      var winId = bar.getAttribute('data-drag');
      var win = document.getElementById(winId);
      var offsetX = 0, offsetY = 0, dragging = false;

      bar.addEventListener('mousedown', function (e) {
        if (e.target.closest('.window-btn')) return;
        dragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        bringToFront(win);
        e.preventDefault();
      });

      document.addEventListener('mousemove', function (e) {
        if (!dragging) return;
        win.style.left = Math.max(0, e.clientX - offsetX) + 'px';
        win.style.top = Math.max(0, e.clientY - offsetY) + 'px';
      });

      document.addEventListener('mouseup', function () {
        dragging = false;
      });
    });

    // Bring to front on any click inside a float-window
    document.querySelectorAll('.float-window').forEach(function (win) {
      win.addEventListener('mousedown', function () {
        bringToFront(win);
      });
    });
  }

  function bringToFront(win) {
    floatZ++;
    win.style.zIndex = floatZ;
  }

  /* ── Taskbar Clock ───────────────────────────────────── */

  function initClock() {
    var clock = document.querySelector('.taskbar-clock');
    if (!clock) return;
    function update() {
      var now = new Date();
      var h = now.getHours();
      var m = now.getMinutes();
      var ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      m = m < 10 ? '0' + m : m;
      clock.textContent = h + ':' + m + ' ' + ampm;
    }
    update();
    setInterval(update, 30000);
  }

  /* ── Visitor Counter ─────────────────────────────────── */

  function initVisitorCounter() {
    var el = document.getElementById('visitor-count');
    if (!el) return;
    var stored = localStorage.getItem('cw-visitors');
    var count = stored ? parseInt(stored, 10) : 4271;
    count += Math.floor(Math.random() * 3) + 1;
    localStorage.setItem('cw-visitors', count);
    el.textContent = String(count).replace(/\B(?=(\d{3})+(?!\d))/g, ',').padStart(7, '0');
  }

  /* ── Resizable Windows (bottom edge) ──────────────────── */

  function initResize() {
    document.querySelectorAll('.float-window').forEach(function (win) {
      // Skip game iframes and games folder
      if (win.querySelector('iframe') || win.id === 'games-win') return;

      var handle = document.createElement('div');
      handle.className = 'resize-handle';
      win.appendChild(handle);

      var startY = 0, startH = 0, resizing = false;

      handle.addEventListener('mousedown', function (e) {
        resizing = true;
        startY = e.clientY;
        startH = win.offsetHeight;
        bringToFront(win);
        e.preventDefault();
        e.stopPropagation();
      });

      document.addEventListener('mousemove', function (e) {
        if (!resizing) return;
        var newH = Math.max(120, startH + (e.clientY - startY));
        win.style.height = newH + 'px';
      });

      document.addEventListener('mouseup', function () {
        resizing = false;
      });
    });
  }

  /* ── BIOS POST Sequence (mobile) ─────────────────────── */

  function initBios() {
    var post = document.getElementById('bios-post');
    var content = document.getElementById('bios-content');
    if (!post || !content) return;
    // Only run on mobile
    if (window.innerWidth > 768) return;

    buildBiosContent();

    var lines = [
      { text: 'CroquetWade BIOS v1.0', cls: 'bios-brand', delay: 0 },
      { text: 'Copyright (C) 2026 Wade Hart\n', cls: '', delay: 100 },
      { text: 'Checking RAM... ', cls: '', delay: 400 },
      { text: '640K OK', cls: 'bios-ok', delay: 800 },
      { text: '\nDetecting hard drives... ', cls: '', delay: 1000 },
      { text: 'C:\\CroquetWade found', cls: 'bios-ok', delay: 1400 },
      { text: '\nLoading Windows XP... ', cls: '', delay: 1800 },
      { text: '\n', cls: '', delay: 2400 },
      { text: 'ERROR: Display resolution too low', cls: 'bios-error', delay: 2600 },
      { text: '\nWindows requires minimum 1024x768', cls: 'bios-error', delay: 3000 },
      { text: '\n\nFalling back to text mode...', cls: '', delay: 3400 },
      { text: '\n', cls: '', delay: 3800 },
      { text: 'Tap anywhere to continue_', cls: 'bios-prompt', delay: 4000 }
    ];

    var html = '';
    lines.forEach(function(line) {
      setTimeout(function() {
        if (line.cls) html += '<span class="' + line.cls + '">' + line.text + '</span>';
        else html += line.text;
        post.innerHTML = html;
      }, line.delay);
    });

    // Show content on tap or after 6 seconds
    var revealed = false;
    function revealContent() {
      if (revealed) return;
      revealed = true;
      post.innerHTML += '\n\n<span class="bios-ok">System ready.</span>\n';
      content.classList.add('visible');
    }

    document.addEventListener('click', function() {
      setTimeout(revealContent, 100);
    }, { once: false });

    setTimeout(revealContent, 6000);
  }

  /* ── Init ────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    initDrag();
    initResize();
    initClock();
    initVisitorCounter();
    initBios();
  });
})();

/* ── Global: open/close floating windows ───────────────── */

function openApp(id) {
  var win = document.getElementById(id);
  if (!win) return;
  win.classList.add('open');
  floatZ++;
  win.style.zIndex = floatZ;
}

function closeApp(id) {
  var win = document.getElementById(id);
  if (!win) return;
  win.classList.remove('open');
}
