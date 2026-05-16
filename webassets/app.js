(() => {
  const y = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((n) => (n.textContent = y));
})();
