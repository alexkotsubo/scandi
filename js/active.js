/* Active */

let bodyHeight = document.body.scrollHeight;

function getScrollValues() {
	for(let i = 0, length = menuLinks.length; i < length; i++) {
		if (menuLinks[i].hasAttribute('data-to')) {
			scroll[i] = document.getElementById(menuLinks[i].getAttribute('data-to')).offsetTop/* - nav.offsetHeight*/;
			maxScroll[i] = document.getElementById(menuLinks[i].getAttribute('data-to')).offsetHeight + scroll[i];
		} else {
			scroll[i] = null;
			maxScroll[i] = null;
		}
	}
}

function getScrollPosition() {
	for(let i = 0, length = menuLinks.length; i < length; i++) {
		if (scroll[i] != null && pageYOffset >= scroll[i] && pageYOffset < maxScroll[i]) {
			menuLinks[i].classList.add('active');
		} else {
			menuLinks[i].classList.remove('active');
		}
	}
}

function addActive(menuLinks) {
	if (menuLinks) {
		let scroll = [];
		let maxScroll = [];

		getScrollValues();
		getScrollPosition();

		window.addEventListener('scroll', function(e) {
			if (document.body.scrollHeight == bodyHeight) {
				getScrollPosition();
			} else {
				bodyHeight = document.body.scrollHeight;
				getScrollValues();
				getScrollPosition();
			}
		});
	}
}

addActive(document.querySelectorAll('.menu__link'));