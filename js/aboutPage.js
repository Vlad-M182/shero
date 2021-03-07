let greetingButton = document.querySelector('.greeting__button');

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

if(document.documentElement.clientWidth <= 767) {
	new Swiper('.works__slider-contaier', {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 40,
		simulateTouch: false,
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		navigation: {
			nextEl: '.works__slider-button-next',
			prevEl: '.works__slider-button-prev',
		},
	})
}

new Swiper('.comments__slider-container', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 40,
	simulateTouch: false,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.comments__slider-button-next',
		prevEl: '.comments__slider-button-prev',
	},
	breakpoints: {
		768: {
			loop: true,
		},
	},
})
