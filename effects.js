/* ═══════════════════════════════════════════════════════════
   croquetwade.com — Effects (Win98 edition)
   Smooth scroll, fade-in on scroll, taskbar clock.
   Vanilla JS. No dependencies.
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Fade-In on Scroll ───────────────────────────────── */

  function initScrollReveal() {
    var targets = document.querySelectorAll('.fade-in');
    if (!targets.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Smooth Scroll for Anchor Links ──────────────────── */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = anchor.getAttribute('href');
        if (targetId === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
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

  /* ── Visitor Counter (fake, increments on each visit) ── */

  function initVisitorCounter() {
    var el = document.getElementById('visitor-count');
    if (!el) return;
    var stored = localStorage.getItem('cw-visitors');
    var count = stored ? parseInt(stored, 10) : 4271;
    count += Math.floor(Math.random() * 3) + 1;
    localStorage.setItem('cw-visitors', count);
    el.textContent = String(count).replace(/\B(?=(\d{3})+(?!\d))/g, ',').padStart(7, '0');
  }

  /* ── Draggable Windows ────────────────────────────────── */

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
        win.style.zIndex = ++floatZ;
        e.preventDefault();
      });

      document.addEventListener('mousemove', function (e) {
        if (!dragging) return;
        win.style.left = (e.clientX - offsetX) + 'px';
        win.style.top = (e.clientY - offsetY) + 'px';
      });

      document.addEventListener('mouseup', function () {
        dragging = false;
      });
    });
  }

  var floatZ = 50;

  /* ── Init ────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initSmoothScroll();
    initClock();
    initVisitorCounter();
    initDrag();
  });
})();

/* ── Global: open/close floating apps ──────────────────── */

function openApp(id) {
  var win = document.getElementById(id);
  if (!win) return;
  win.classList.add('open');
  win.style.zIndex = 51;
}

function closeApp(id) {
  var win = document.getElementById(id);
  if (!win) return;
  win.classList.remove('open');
}

function scrollToWin(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // Flash highlight
  el.style.boxShadow = '0 0 0 3px #ffff00, 0 4px 20px rgba(0,0,0,0.4)';
  setTimeout(function() { el.style.boxShadow = ''; }, 1500);
}
