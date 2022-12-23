// Header 
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.header__wrap__content__callback__info__select');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.header__wrap__content__callback__info__select__btn');
			const content = self.querySelector('.header__wrap__content__callback__info__select__addition');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});


// Prices 
document.addEventListener('DOMContentLoaded', () => {
	const accordionsPrices = document.querySelectorAll('.price__wrap__list__item');

	accordionsPrices.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const controlPrices = self.querySelector('.price__wrap__list__item__control');
			const contentPrices = self.querySelector('.price__wrap__list__item__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				controlPrices.setAttribute('aria-expanded', true);
				contentPrices.setAttribute('aria-hidden', false);
				contentPrices.style.maxHeight = content.scrollHeight + 'px';
			} else {
				controlPrices.setAttribute('aria-expanded', false);
				contentPrices.setAttribute('aria-hidden', true);
				contentPrices.style.maxHeight = null;
			}
		});
	});
});


// FAQ
document.addEventListener('DOMContentLoaded', () => {
	const accordionsFaq = document.querySelectorAll('.faq__wrap__list__item');

	accordionsFaq.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const controlFaq = self.querySelector('.faq__wrap__list__item__control');
			const contentFaq = self.querySelector('.faq__wrap__list__item__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				controlFaq.setAttribute('aria-expanded', true);
				contentFaq.setAttribute('aria-hidden', false);
				contentFaq.style.maxHeight = content.scrollHeight + 'px';
			} else {
				controlFaq.setAttribute('aria-expanded', false);
				contentFaq.setAttribute('aria-hidden', true);
				contentFaq.style.maxHeight = null;
			}
		});
	});
});