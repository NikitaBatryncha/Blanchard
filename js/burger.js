let menu = document.querySelector('.burgerMenu');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('burgerMenu--active');
  document.body.classList.toggle('stop-scroll');
});

let menuLinks = menu.querySelectorAll('.nav__link');
let closeButton = menu.querySelector('.close');

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('burgerMenu--active');
    document.body.classList.remove('stop-scroll');
  })
});

closeButton.addEventListener('click', function() {
  burger.classList.remove('burger--active');
  menu.classList.remove('burgerMenu--active');
  document.body.classList.remove('stop-scroll');
});
