const themeToggle = document.querySelector('[data-theme-toggle]');

if (themeToggle) {
  const updateLabel = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    const label = `Switch to ${next} theme`;
    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
  };

  updateLabel();
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('jekyll-elite-theme', next); } catch (_) {}
    updateLabel();
  });
}

const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNav?.classList.toggle('is-open', !isOpen);
});
