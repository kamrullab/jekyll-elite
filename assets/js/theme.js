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
