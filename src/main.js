const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('header-nav--active');
  burger.classList.toggle('active'); 
});