/* ═══════════════════════════════════════════════════════════
   croquetwade.com — Effects
   Typewriter reveal, text scramble, smooth scroll, fade-in.
   Vanilla JS. No dependencies.
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Typewriter Reveal ───────────────────────────────────
     Elements with class "typewriter" type themselves when
     scrolled into view. One-shot, no cursor after.
     ────────────────────────────────────────────────────── */

  const CHARS_PER_MS = { min: 35, max: 65 };
  const SCRAMBLE_CHARS = '*?><[]&@#)(.%$-_:/;?!~^{}|';

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function typewrite(el) {
    const text = el.getAttribute('data-text') || el.textContent;
    el.textContent = '';
    el.classList.add('revealed');

    let i = 0;
    function tick() {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(tick, randomBetween(CHARS_PER_MS.min, CHARS_PER_MS.max));
      }
    }
    tick();
  }

  /* ── Fade-In on Scroll ───────────────────────────────── */

  function initScrollReveal() {
    const targets = document.querySelectorAll('.fade-in, .typewriter');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            if (el.classList.contains('typewriter') && !el.classList.contains('revealed')) {
              typewrite(el);
            }

            if (el.classList.contains('fade-in')) {
              el.classList.add('visible');
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => {
      // Store original text for typewriter elements
      if (el.classList.contains('typewriter')) {
        el.setAttribute('data-text', el.textContent);
        el.textContent = '';
      }
      observer.observe(el);
    });
  }

  /* ── Text Scramble on Hover ────────────────────────────
     Elements with class "scramble" scramble their text
     to random special characters on mouseenter, restore
     on mouseleave.
     ────────────────────────────────────────────────────── */

  function initScramble() {
    const targets = document.querySelectorAll('.scramble');

    targets.forEach((el) => {
      const original = el.textContent;
      let interval = null;

      el.addEventListener('mouseenter', () => {
        let counter = 0;
        interval = setInterval(() => {
          el.textContent = original
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < counter) return original[i];
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join('');
          counter += 1;
          if (counter > original.length) {
            clearInterval(interval);
          }
        }, 40);
      });

      el.addEventListener('mouseleave', () => {
        clearInterval(interval);
        el.textContent = original;
      });
    });
  }

  /* ── Smooth Scroll ─────────────────────────────────────
     Anchor links scroll smoothly with an eased duration.
     Lightweight — no Lenis dependency.
     ────────────────────────────────────────────────────── */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── Cursor Blink (hero element) ─────────────────────── */

  function initCursorBlink() {
    const cursor = document.querySelector('.cursor-blink');
    if (!cursor) return;

    setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 530);
  }

  /* ── Init ────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initScramble();
    initSmoothScroll();
    initCursorBlink();
  });
})();
