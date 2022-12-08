export function burger () {
	// Variables
	let burger = document.querySelector('.header__menu-burger');
	let nav = document.querySelector('.nav');

	// Functional
	burger.addEventListener('click', function () {
		burger.classList.toggle('header__menu-burger_active');
		nav.classList.toggle('nav_active');
		document.body.classList.toggle('noscroll');
	});
}