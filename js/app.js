let headerBurger = document.querySelector('.header__burger');
let headerBurgerIcon = document.querySelector('.header__burgerIcon');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');

headerBurger.addEventListener('click', function() {
	headerBurgerIcon.classList.toggle('open');
	headerNav.classList.toggle('open');
	body.classList.toggle('lock');
})

function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
