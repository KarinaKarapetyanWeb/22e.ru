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