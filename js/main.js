// FAQ: only one item open at a time
document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// Respect reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const heroCard = document.querySelector('.hero__fade');
  if (heroCard) {
    heroCard.style.animation = 'none';
    heroCard.style.opacity = '1';
    heroCard.style.transform = 'none';
  }
}
