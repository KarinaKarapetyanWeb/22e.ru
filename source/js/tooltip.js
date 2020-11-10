'use strict';

(function () {

	const chooseList = document.querySelector('.choose__list');

	if (chooseList) {

		let windowWidth;
		const tooltipLinks = chooseList.querySelectorAll('.choose__tooltip-link');
		const tooltips = chooseList.querySelectorAll('.choose__item-tooltip');

		const getWindowWidth = function () {
			return window.innerWidth;
		};

		const onTooltipClick = function (evt) {
    		evt.preventDefault();
    		let target = evt.target;
    		let tooltip = target.parentElement.querySelector('.choose__item-tooltip');
    		tooltip.classList.toggle('choose__item-tooltip--show');
    	};

    	const onTooltipMouseover = function (evt) {
			evt.preventDefault();
			let target = evt.target; 
			let tooltip = target.parentElement.querySelector('.choose__item-tooltip');

			tooltip.classList.add('choose__item-tooltip--show');

			const onTooltipMouseout = function (evt) {
				tooltip.classList.remove('choose__item-tooltip--show');
				target.removeEventListener('mouseout', onTooltipMouseout);
			};

			target.addEventListener('mouseout', onTooltipMouseout);
		}; 	

		const showTooltip = function (width) {
			if (width < 1280) {
				for (let i = 0; i < tooltipLinks.length; i++) {
			    	tooltipLinks[i].addEventListener('click', onTooltipClick);
			    	tooltipLinks[i].removeEventListener('mouseover', onTooltipMouseover);
			 	}
			} else {
				for (let i = 0; i < tooltipLinks.length; i++) {
					tooltipLinks[i].addEventListener('mouseover', onTooltipMouseover);
					tooltipLinks[i].removeEventListener('click', onTooltipClick);
				}
			}
		};

		const updateWidth = function () {
			windowWidth = getWindowWidth();
			showTooltip(windowWidth);
		};

		updateWidth();	

		window.addEventListener(`resize`, window.debounce(updateWidth));

	}
		
})();