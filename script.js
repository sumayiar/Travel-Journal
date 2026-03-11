const revealTargets = document.querySelectorAll(
  ".card, .roadmap, .country-themes, .country-panel, .theme-block, .wish"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((item, index) => {
  item.style.transitionDelay = `${index * 80}ms`;
  observer.observe(item);
});
