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

new Swiper('.motion__slider',{
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
			centeredSlides: true,
			initialSlide: 1,
		},
		668: {
			slidesPerView: 2,
			centeredSlides: false,
			initialSlide: 0,
		},
		320: {
			slidesPerView: 1,
			initialSlide: 0,
		}
	},
})