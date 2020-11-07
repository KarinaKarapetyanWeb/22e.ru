'use strict';

(function () {

	const navMain = document.querySelector('.main-nav');

	if (navMain) {
		const navToggle = document.querySelector('.main-nav__toggle');
		const logo = document.querySelector('.page-header__logo');

		logo.classList.remove('page-header__logo--dark');

		navToggle.addEventListener('click', function() {
			if (navMain.classList.contains ('main-nav--closed')) {
				navMain.classList.remove('main-nav--closed');
				navMain.classList.add('main-nav--opened');
				logo.classList.add('page-header__logo--dark');
			} else {
				navMain.classList.add('main-nav--closed');
				navMain.classList.remove('main-nav--opened');
				logo.classList.remove('page-header__logo--dark');
			}
		});
	}

})();