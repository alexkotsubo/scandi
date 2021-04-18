'use strict';
let body = document.querySelector('body');
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

/* Burger */

addBurger(document.querySelector('#elem-burger'));

function addBurger(elem, variation = 1) {
	let button = document.querySelector('#' + elem.id + ' .burger__btn');
	let links = document.querySelectorAll('#' + elem.id + ' .burger__link');
	let bgElem = document.querySelector('#' + elem.id + ' .burger__bg');
	let burgerClose;

	if (button && links && bgElem && elem) {
		if (variation === 1) {
			elem.classList.add('variation_1');
			burgerClose = document.querySelector('#' + elem.id + ' .burger__close-btn');
			burgerClose.addEventListener('click', function(e) {
				elem.classList.remove('active');
				burgBodyUnLock();
			});
		} else if (variation === 2) {
			elem.classList.add('variation_2');
		}

		elem.classList.remove('active');
		burgBodyUnLock();

		button.addEventListener('click', function(e) {
			let popupActive = document.querySelector('.popup.open');

			if (popupActive) {
				closePopup(popupActive, false);
			}

			if (elem.classList.contains('active') && variation === 2) {
				elem.classList.remove('active');
				burgBodyUnLock();
			} else {
				elem.classList.add('active');
				burgBodyLock();
			}
		});

		for(let i = 0, length = links.length; i < length; i++) {
			links[i].addEventListener('click', function(e) {
				elem.classList.remove('active');
				burgBodyUnLock();
			});
		}

		document.documentElement.addEventListener('click', function(e) {
			if ((!e.target.closest('.burger') && elem.classList.contains('active')) || (e.target.closest('.' + bgElem.classList) && elem.classList.contains('active'))) {
				elem.classList.remove('active');
				burgBodyUnLock();
			}
		});
	}
}

function burgBodyLock() {
	let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (fixedPadding.length > 0) {
		for(let i = 0, length = fixedPadding.length; i < length; i++) {
			fixedPadding[i].style.paddingRight = paddingValue;
		}
	}

	body.style.paddingRight = paddingValue;
	body.classList.add('lock');
}

function burgBodyUnLock() {
	setTimeout(helpFunction, 300);
	function helpFunction() {
		if (fixedPadding.length > 0) {
			for(let i = 0, length = fixedPadding.length; i < length; i++) {
				fixedPadding[i].style.paddingRight = '0px';
			}
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}
}

/* Scroll */

let anchors = document.querySelectorAll('a');

for(let i = 0, length = anchors.length; i < length; i++) {
	anchors[i].addEventListener('click', function(e) {
		if (anchors[i].getAttribute('href') !== '#' &&
				anchors[i].getAttribute('href').trim() &&
				anchors[i].getAttribute('href').substr(0, 1) === '#' &&
				document.querySelector(anchors[i].getAttribute('href'))) {
			e.preventDefault();
			let destination = document.querySelector(anchors[i].getAttribute('href')).offsetTop;
			window.scrollTo({
				top: destination,
				behavior: 'smooth'
			});
		}
	});
}

/* Validation */

document.addEventListener('DOMContentLoaded', function(e) {
	const contactForm = document.querySelector('#contact-form');

	contactForm.addEventListener('submit', function(e) {
		if (formValidate(contactForm) !== 0) {
			e.preventDefault();
		}

		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req');

			for(let i = 0, length = formReq.length; i < length; i++) {
				formRemoveError(formReq[i]);
				if (formReq[i].classList.contains('_phone')) {
					if (phoneTest(formReq[i])) {
						formAddError(formReq[i]);
						error++;
					}
				} else {
					if (formReq[i].value === '') {
						formAddError(formReq[i]);
						error++;
					}
				}
			}
			return error;
		}

		function formAddError(input) {
			input.classList.add('_error');
		}

		function formRemoveError(input) {
			input.classList.remove('_error');
		}

		function phoneTest(input) {
			return !/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(input.value);
		}
	});
});