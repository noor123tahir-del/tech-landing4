// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('show');
  });
}
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;
const STORAGE_KEY = 'taskflow-theme';

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
}

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored;
  // fall back to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateIcon(theme) {
  //placeholder for swapping icon paths if desired
}

const initTheme = getPreferredTheme();
applyTheme(initTheme);
updateIcon(initTheme);

themeToggle?.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  updateIcon(next);
  localStorage.setItem(STORAGE_KEY, next);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile menu after click
      navMenu?.classList.remove('show');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===== Dynamic year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Simple demo for the email form =====
document.querySelector('.inline-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return;
  alert(`Thanks! We’ll email a trial link to: ${email}`);
});
