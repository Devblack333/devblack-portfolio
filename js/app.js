// Simple fade-in animation when scrolling
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((sec) => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Initial styles for animation
document.querySelectorAll("section").forEach((sec) => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "all 0.8s ease";
});
