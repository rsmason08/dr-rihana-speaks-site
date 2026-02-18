// Shared helpers
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('active');
  });

  // Simple year stamp
  const y = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(el => (el.textContent = y));
})();
