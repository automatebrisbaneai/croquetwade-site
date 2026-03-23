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

  /* ── Init ────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    initDrag();
    initResize();
    initClock();
    initVisitorCounter();
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
