export function menu () {
	// Header
	const header = document.querySelector('.header');

	// Functional
	if (window.pageXOffset > 600) {
		window.onscroll = () => {
			if (window.pageYOffset > 350) {
				header.classList.add('active');
			} else {
				header.classList.remove('active');
			};
		};
	} else {
		window.onscroll = () => {
			if (window.pageYOffset > 100) {
				header.classList.add('active');
			} else {
				header.classList.remove('active');
			};
		};
	};
}
