'use strict';

(function () {

	const chooseList = document.querySelector('.choose__list');

	if (chooseList) {

		const getWindowWidth = function () {
			return window.innerWidth;
		};

		const showTooltip = function (width) {

			const tooltipLinks = chooseList.querySelectorAll('.choose__tooltip-link');
			const tooltips = chooseList.querySelectorAll('.choose__item-tooltip');

			if (width < 1280) {	

				for (let i = 0; i < tooltipLinks.length; i++) {
			    	tooltipLinks[i].addEventListener('click', function (evt) {
			    		evt.preventDefault();
			    		let tooltip = evt.target.parentElement.querySelector('.choose__item-tooltip');
			    		tooltip.classList.toggle('choose__tooltip--show');
			    	});
			 	}

			} else {

				tooltipLinks.forEach((el) => {
					el.blur();
				});
				
				tooltips.forEach((item) => {
					item.blur();
					if (item.classList.contains('choose__tooltip--show')) {
						item.classList.remove('choose__tooltip--show');
					}
					return;
				});
			}

		};

		let startWidth = getWindowWidth();

		showTooltip(startWidth);

		let width = window.addEventListener(`resize`, function () {
			let newWidth = getWindowWidth();
			showTooltip(newWidth);
		});

		// window.addEventListener(`resize`, window.debounce(showTooltip));

	}
		
})();