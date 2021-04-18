/* Smooth */

function addSmooth(anchors) {
	if (anchors) {
		window.onload = function() {
			for(let i = 0, length = anchors.length; i < length; i++) {
				if (anchors[i].hasAttribute('data-to')) {
					anchors[i].addEventListener('click', function(e) {
						let scroll;
						let anchorDataTo = anchors[i].getAttribute('data-to');
						if (nav != undefined) {
							function scrollValue() {
								if (document.getElementById(anchorDataTo).offsetTop > pageYOffset) {
									return document.getElementById(anchorDataTo).offsetTop;
								}

								if (document.getElementById(anchors[i].getAttribute('data-to')).offsetTop <= pageYOffset) {
									return document.getElementById(anchorDataTo).offsetTop - nav.offsetHeight;
								}
							}

							scroll = scrollValue();
						} else {
							scroll = document.getElementById(anchorDataTo).offsetTop;
						}

						window.scrollTo({
							top: scroll,
							behavior: 'smooth',
						});
					});
				}
			}
		}
	}
}

addSmooth(document.querySelectorAll('.menu__links'));