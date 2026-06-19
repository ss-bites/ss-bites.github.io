// Sticky nav background on scroll
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');

const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 40);
  toTop.classList.toggle('show', y > 500);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Reveal on scroll (with stagger for grouped items)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
        setTimeout(() => el.classList.add('in'), delay);
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.15 }
);

// Auto-stagger reveal items that share a parent grid
document.querySelectorAll('.thali__grid, .menu__grid').forEach((grid) => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = i * 110;
  });
});
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Spotlight follows cursor on thali cards
document.querySelectorAll('.thali-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
