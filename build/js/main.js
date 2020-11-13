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

		navToggle.addEventListener('click', function() {
			if (navMain.classList.contains ('main-nav--closed')) {
				navMain.classList.remove('main-nav--closed');
				navMain.classList.add('main-nav--opened');
			} else {
				navMain.classList.add('main-nav--closed');
				navMain.classList.remove('main-nav--opened');
			}
		});
	}

})();
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
'use strict';

(function () {

	const faqList = document.querySelector('.faq__list');

	if (faqList) {

		const faqQuestions = document.querySelectorAll('.faq__item-question');

		const showAnswer = function (evt) {
			evt.preventDefault();
			let target = evt.target;
			let answer = target.parentElement.querySelector('.faq__item-answer');
			target.classList.toggle('faq__item-question--open');
			answer.classList.toggle('faq__item-answer--show');
		};

		for (let i = 0; i < faqQuestions.length; i++) {
			faqQuestions[i].addEventListener('click', showAnswer);
		}
	}


})();
'use strict';

(function () {

	const formCheck = document.querySelector('.modal--check');

	if (formCheck) {

		const BACKSPACE_KEYCODE = 8;
		const inputNumbers = formCheck.querySelectorAll('.modal__input-number');
		const repeatLink = formCheck.querySelector('.modal__repeat-link');
		const timeOutput = formCheck.querySelector('.modal__repeat-link span');

		const autoTab = function (field1, len, field2) {

			field1.addEventListener('input', function () {
				if (field1.value.length === len) {
					field2.focus();
				}
			});
		};

		const autoClear = function (input2, input1) {
			input2.addEventListener('keydown', function (evt) {
				if (evt.keyCode === BACKSPACE_KEYCODE && !input2.value) {
					input1.focus();
				}
			});
		};
		
		autoTab(inputNumbers[0], 1, inputNumbers[1]);
		autoTab(inputNumbers[1], 1, inputNumbers[2]);
		autoTab(inputNumbers[2], 1, inputNumbers[3]);
		autoTab(inputNumbers[3], 1, inputNumbers[4]);

		autoClear(inputNumbers[4], inputNumbers[3]);
		autoClear(inputNumbers[3], inputNumbers[2]);
		autoClear(inputNumbers[2], inputNumbers[1]);
		autoClear(inputNumbers[1], inputNumbers[0]);

		const timerRepeat = function() {
		  let timeLeft = 21;
		  
		  const timer = setInterval(function(){
		    if (--timeLeft >= 0) { 
		    	timeOutput.innerHTML = `(${timeLeft}c)`;
		    } else {
		    	timeOutput.style.display = 'none';
		        repeatLink.setAttribute('href', '#');
		        timeOutput.innerHTML = '';
		        clearInterval(timer);
		        repeatLink.addEventListener('click', function (evt) {
		        	evt.preventDefault();
		        	repeatLink.removeAttribute('href');
		    		timeOutput.style.display = 'inline';
		    		timerRepeat();
		        });
		    }
		  }, 1000) 
		};

		timerRepeat();
		
	}

})();