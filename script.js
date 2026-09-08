const topButton = document.querySelector('.to-top');
const year = document.querySelector('#year');
const revealItems = document.querySelectorAll('.reveal');

year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  topButton.classList.toggle('is-visible', window.scrollY > 500);
}, { passive: true });

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver((entries, currentObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-shown');
      currentObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
