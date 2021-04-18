/* Tabs */

function addTab(tabControl, items) {
	if (tabControl && items) {
		let prevTab;

		document.addEventListener('DOMContentLoaded', function(e) {
			for(let i = 0, length = tabControl.length; i < length; i++) {
				if (tabControl[i].classList.contains('active')) {
					items[i].classList.add('active');
					prevTab = i;
				}

				if (!items[i]) {
					tabControl[i].classList.add('disable');
				}

				tabControl[i].addEventListener('click', function(e) {
					if (items[i]) {
						items[i].classList.add('active');
						tabControl[i].classList.add('active');

						if (prevTab !== undefined && prevTab !== i) {
							items[prevTab].classList.remove('active');
							tabControl[prevTab].classList.remove('active');
						}
						prevTab = i;
					}
				});
			}
		});
	}
}

addTab(document.querySelectorAll('.films__tab'), document.querySelectorAll('.films__content'));