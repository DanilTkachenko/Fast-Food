export function burger () {
	// Variables
	let burger = document.querySelector('.header__menu-burger');
	let nav = document.querySelector('.nav');

	// Functional
	burger.addEventListener('click', function () {
		burger.classList.toggle('active');
		nav.classList.toggle('active');
		document.body.classList.toggle('noscroll');
	});
}
