// === Devblack Portfolio Animations ===

// Smooth scroll between sections
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Glow effect on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.game-card, .gallery img').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.boxShadow = "0 0 20px rgba(179, 136, 255, 0.5)";
    } else {
      el.style.boxShadow = "none";
    }
  });
});
