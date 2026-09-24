// Native scrolling stays in control. Motion is progressive enhancement.
const root = document.documentElement;
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero');
const progress = document.querySelector('.reading-progress');
const revealItems = document.querySelectorAll('[data-reveal]');
const conceptViews = [...document.querySelectorAll('[data-concept]')];
const chapters = [...document.querySelectorAll('[data-chapter]')];
const chapterNumber = document.querySelector('.concept-number');
const menuLinks = [...document.querySelectorAll('.masthead nav a')];
let scheduled = false;
let activeConcept = '';
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function setConcept(name) {
  if (name === activeConcept) return;
  activeConcept = name;
  conceptViews.forEach(view => {
    const active = motionPreference.matches || view.dataset.concept === name;
    view.classList.toggle('is-active', active);
    view.setAttribute('aria-hidden', String(!active));
  });
  chapterNumber.textContent = name === 'trays' ? '02 / 02' : '01 / 02';
}

function paintScroll() {
  scheduled = false;
  const viewport = window.innerHeight;
  const scrollable = root.scrollHeight - viewport;
  progress.style.transform = `scaleX(${scrollable > 0 ? clamp(window.scrollY / scrollable) : 0})`;
  const heroTop = hero.getBoundingClientRect().top;
  const travel = Math.max(1, hero.offsetHeight - viewport + 76);
  root.style.setProperty('--hero-progress', motionPreference.matches ? '0' : clamp((76 - heroTop) / travel).toFixed(4));
  setConcept(chapters[1].getBoundingClientRect().top < viewport * .76 ? 'trays' : 'cylinder');
  let current = '';
  menuLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.getBoundingClientRect().top <= viewport * .42) current = link.hash;
  });
  menuLinks.forEach(link => {
    if (link.hash === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function requestPaint() {
  if (!scheduled) { scheduled = true; window.requestAnimationFrame(paintScroll); }
}
if ('IntersectionObserver' in window) {
  root.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  revealItems.forEach(item => revealObserver.observe(item));
}
window.addEventListener('scroll', requestPaint, { passive: true });
window.addEventListener('resize', requestPaint, { passive: true });
function applyMotionPreference() {
  root.classList.toggle('reduced-motion', motionPreference.matches);
  activeConcept = '';
  requestPaint();
}
motionPreference.addEventListener('change', applyMotionPreference);
window.addEventListener('load', requestPaint, { once: true });
applyMotionPreference();
setConcept('cylinder');
paintScroll();
