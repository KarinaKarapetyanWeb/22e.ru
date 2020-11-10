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