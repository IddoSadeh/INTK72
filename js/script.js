// toggle mobile nav
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-links');
  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
