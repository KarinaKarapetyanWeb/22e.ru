'use strict';

(function () {

  const reviews = document.querySelector('.reviews__swiper');
  const experts = document.querySelector('.experts__swiper');

  if (reviews) {
    const swiperReview = new Swiper('.reviews__swiper', {
      speed: 700,
      spaceBetween: 16,
      slidesPerView: 1.15,
      mousewheel: { 
        forceToAxis: true,
        eventsTarget: '.reviews__swiper'
      },
      navigation: {
        nextEl: '.slider-buttons__item--next',
        prevEl: '.slider-buttons__item--prev',
        clickable: true
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2.2,        
        }, 
        1280: {
          slidesPerView: 3.2,
        },
      }
    });
  }

  if (experts) {
    const swiperExpert = new Swiper('.experts__swiper', {
      speed: 700,
      spaceBetween: 16,
      slidesPerView: 1.15,
      mousewheel: { 
        forceToAxis: true,
        eventsTarget: '.experts__swiper'
      },
      navigation: {
        nextEl: '.slider-buttons__item--next',
        prevEl: '.slider-buttons__item--prev',
        clickable: true
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2.2,         
        }, 
        1280: {
          slidesPerView: 3.2,
        },
      }
    });
  }

})();
'use strict';

(function () {

	const DEBOUNCE_INTERVAL = 300;

	window.debounce = (cb) => {
	  let lastTimeout = null;

	  return (...parameters) => {
	    if (lastTimeout) {
	      window.clearTimeout(lastTimeout);
	    }
	    lastTimeout = window.setTimeout(() => {
	      cb(...parameters);
	    }, DEBOUNCE_INTERVAL);
	  };
	};

})();
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