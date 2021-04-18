'use strict';
let activeFixedMenu = false;
let body = document.querySelector('body');
let nav = document.querySelector('#nav');
let fixedPadding = document.querySelectorAll('.fixed-padding');

/* IB */

function ib() {
	let ib = document.querySelectorAll(".ib");
	for (let i = 0; i < ib.length; i++) {
		if (ib[i].querySelector('.ib_use')) {
			ib[i].style.backgroundImage = 'url(' + ib[i].querySelector('.ib_use').getAttribute('src') + ')';
		}
	}
}

ib();

/* Reviews Slider */

const reviewsSlider = new Swiper('.reviews__slider', {
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});