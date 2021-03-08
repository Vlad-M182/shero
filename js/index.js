let greetingButton = document.querySelector('.greeting__button');
let greetingPopPup = document.querySelector('.greeting__pop-pup');
let greetingPopPupButton = document.querySelector('.greeting__pop-pup-button');

greetingButton.addEventListener('click', function() {
	greetingPopPup.classList.add('show');
})

greetingPopPup.addEventListener('click', function() {
	greetingPopPup.classList.remove('show');
})
greetingPopPupButton.addEventListener('click', function() {
	greetingPopPup.classList.remove('show');
})

new Swiper('.motion__slider',{
	spaceBetween: 30,
	loop: true,
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
	loop: true,
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