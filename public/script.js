// Mobile nav toggle
document.addEventListener('click', (e) => {
  const tgl = e.target.closest('[data-menu-toggle]');
  if (tgl) {
    document.querySelector('.nav')?.classList.toggle('open');
  }
});

// Highlight active nav link
(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .footer a[data-nav]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
})();

// Toast helper
function toast(msg) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div'); el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg; el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2600);
}

// Form submit handlers
document.addEventListener('submit', (e) => {
  const form = e.target;
  if (form.matches('[data-form="booking"]')) {
    e.preventDefault();
    toast('✓ Booking request sent — we will call you to confirm!');
    form.reset();
  }
  if (form.matches('[data-form="contact"]')) {
    e.preventDefault();
    toast('✓ Message sent — we will reply within 24 hours.');
    form.reset();
  }
});

// Floating book button -> booking page
document.addEventListener('click', (e) => {
  const fb = e.target.closest('[data-action="book"]');
  if (fb) location.href = 'booking.html';
});
