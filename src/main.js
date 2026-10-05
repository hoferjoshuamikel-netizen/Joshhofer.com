// Native scrolling stays in control. Motion is progressive enhancement.
const root = document.documentElement;
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero');
const masthead = document.querySelector('.masthead');
const plantStory = document.querySelector('.plant-story');
const plantVisual = document.querySelector('.plant-visual');
const progress = document.querySelector('.reading-progress');
const revealItems = document.querySelectorAll('[data-reveal]');
const conceptViews = [...document.querySelectorAll('[data-concept]')];
const chapters = [...document.querySelectorAll('[data-chapter]')];
const chapterNumber = document.querySelector('.concept-number');
const chapterLabel = document.querySelector('.concept-label');
const menuLinks = [...document.querySelectorAll('.masthead nav a')];
const sections = menuLinks.map(link => document.querySelector(link.hash));
const supportsObserver = 'IntersectionObserver' in window;
let scheduled = false;
let activeConcept = '';
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function setConcept(name) {
  if (name === activeConcept) return;
  activeConcept = name;
  conceptViews.forEach(view => {
    const active = !supportsObserver || motionPreference.matches || view.dataset.concept === name;
    view.classList.toggle('is-active', active);
    view.setAttribute('aria-hidden', String(!active));
  });
  const index = conceptViews.findIndex(view => view.dataset.concept === name);
  chapterNumber.textContent = `${String(index + 1).padStart(2, '0')} / ${String(conceptViews.length).padStart(2, '0')}`;
  chapterLabel.textContent = conceptViews[index]?.dataset.caption || '';
}

function paintScroll() {
  scheduled = false;
  const viewport = window.innerHeight;
  const headerHeight = masthead.offsetHeight;
  const scrollable = root.scrollHeight - viewport;
  const heroTop = hero.getBoundingClientRect().top;
  const travel = Math.max(1, hero.offsetHeight - viewport + headerHeight);
  const storyTop = plantStory.getBoundingClientRect().top;
  const storyTravel = Math.max(1, plantStory.offsetHeight - plantVisual.offsetHeight);
  let currentChapter = chapters[0];
  chapters.forEach(chapter => {
    if (chapter.getBoundingClientRect().top < viewport * .76) currentChapter = chapter;
  });
  let current = '';
  sections.forEach((section, index) => {
    if (section && section.getBoundingClientRect().top <= viewport * .42) current = menuLinks[index].hash;
  });
  // Measure first, then paint once per frame. Native scrolling stays immediate.
  progress.style.transform = `scaleX(${scrollable > 0 ? clamp(window.scrollY / scrollable) : 0})`;
  root.style.setProperty('--hero-progress', motionPreference.matches ? '0' : clamp((headerHeight - heroTop) / travel).toFixed(4));
  plantVisual.style.setProperty('--plant-progress', motionPreference.matches ? '0' : clamp((headerHeight + 34 - storyTop) / storyTravel).toFixed(4));
  setConcept(currentChapter.dataset.chapter);
  menuLinks.forEach(link => {
    if (link.hash === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function requestPaint() {
  if (!scheduled) { scheduled = true; window.requestAnimationFrame(paintScroll); }
}
if (supportsObserver) {
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
window.addEventListener('pageshow', requestPaint);
applyMotionPreference();
setConcept(chapters[0].dataset.chapter);
paintScroll();
