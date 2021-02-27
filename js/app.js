let headerBurger = document.querySelector('.header__burger');
let headerBurgerIcon = document.querySelector('.header__burgerIcon');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');

headerBurger.addEventListener('click', function() {
	headerBurgerIcon.classList.toggle('open');
	headerNav.classList.toggle('open');
	body.classList.toggle('lock');
})