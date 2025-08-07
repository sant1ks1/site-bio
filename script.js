// Пример: плавное появление элементов при скролле
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(10px)";
    card.style.transition = "all 0.4s ease";
    observer.observe(card);
  });
});
