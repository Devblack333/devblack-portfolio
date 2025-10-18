// Responsive helper, mobile nav, smooth scroll, and render games dynamically

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Close mobile nav when clicking a link
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // Render games array (in case you want dynamic cards)
  const games = [
    {
      name: "اسرق المشاهير",
      image: "assets/images/game1.jpg",
      link: "https://www.roblox.com/games/103938520476530/unnamed",
      stats: "130k+ Visits • 15k+ Favorites"
    }
    // add more objects here
  ];

  const gamesGrid = document.getElementById('gamesGrid');
  if (gamesGrid && games.length) {
    // Clear any placeholders (optional)
    gamesGrid.innerHTML = '';
    games.forEach(g => {
      const card = document.createElement('article');
      card.className = 'game-card';
      card.innerHTML = `
        <img src="${g.image}" alt="${escapeHtml(g.name)}" loading="lazy">
        <div class="game-body">
          <h3>${g.name}</h3>
          <p class="muted">${g.stats}</p>
          <a class="btn btn-primary" href="${g.link}" target="_blank" rel="noopener noreferrer">Play Now</a>
        </div>
      `;
      gamesGrid.appendChild(card);
    });
  }

  // small visual effect: reveal items when in viewport
  const revealEls = document.querySelectorAll('.gallery-grid img, .game-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    obs.observe(el);
  });
});

// small helper to avoid XSS if names contain special chars
function escapeHtml(text){
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
