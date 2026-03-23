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

  /* ── Init ────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initSmoothScroll();
    initClock();
  });
})();
