let headerBurger = document.querySelector('.header__burger');
let headerBurgerIcon = document.querySelector('.header__burgerIcon');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');
let greetingButton = document.querySelector('.greeting__button');
let greetingPopPup = document.querySelector('.greeting__pop-pup');
let greetingPopPupButton = document.querySelector('.greeting__pop-pup-button');

headerBurger.addEventListener('click', function() {
	headerBurgerIcon.classList.toggle('open');
	headerNav.classList.toggle('open');
	body.classList.toggle('lock');
})

greetingButton.addEventListener('click', function() {
	greetingPopPup.classList.add('show');
})

greetingPopPup.addEventListener('click', function() {
	greetingPopPup.classList.remove('show');
})
greetingPopPupButton.addEventListener('click', function() {
	greetingPopPup.classList.remove('show');
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
		nextEl: '.motion__slider-button-next',
		prevEl: '.motion__slider-button-prev',
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
new Swiper('.team__slider-container', {
	spaceBetween: 40,
	simulateTouch: false,
	navigation: {
		nextEl: '.team__slider-button-next',
		prevEl: '.team__slider-button-prev',
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
new Swiper('.clients__slider-container', {
	spaceBetween: 40,
	simulateTouch: false,
	navigation: {
		nextEl: '.clients__slider-button-next',
		prevEl: '.clients__slider-button-prev',
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