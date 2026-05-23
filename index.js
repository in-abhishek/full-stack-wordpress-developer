document.addEventListener("DOMContentLoaded", (event) => {
// ── LETTER ANIMATION ──────────────────────────────────────────────
(function () {
  const START   = 300;  // ms before first letter appears
  const STAGGER = 60;   // ms between each letter

  // words: [containerId, text, isDotRow]
  const words = [
    ['row1', 'Abhishek', false],
    ['row2', 'Kumar.',   true ],
  ];

  let globalIndex = 0;

  words.forEach(([id, text, isDotRow]) => {
    const container = document.getElementById(id);
    if (!container) return;

    [...text].forEach((ch) => {
      const span = document.createElement('span');
      const isDot = isDotRow && ch === '.';
      span.className = 'char' + (isDot ? ' dot' : '');
      span.textContent = ch;

      const delay = START + globalIndex * STAGGER;
      span.style.animationDelay = isDot
        ? `${delay}ms, ${delay + 500}ms`   // slide + blink
        : `${delay}ms`;

      container.appendChild(span);
      globalIndex++;
    });
  });

  // Shimmer sweep once all letters have landed
  const lastLetterLands = START + globalIndex * STAGGER + 650;
  setTimeout(() => {
    const nameEl = document.getElementById('heroName');
    if (!nameEl) return;
    nameEl.classList.add('do-shimmer');
    setTimeout(() => nameEl.classList.remove('do-shimmer'), 800);
  }, lastLetterLands);
})();

// ── HAMBURGER ─────────────────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  })
);

// ── SCROLL REVEAL ─────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});