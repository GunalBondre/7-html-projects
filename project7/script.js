document.addEventListener('DOMContentLoaded', function () {
	const tabButtons = document.querySelectorAll('.tab-button');
	const imageContainers = document.querySelectorAll('.image-container .image');
	const nav = document.querySelector('.nav');
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');

	window.addEventListener('scroll', function () {
		if (this.window.scrollY > 80) {
			nav.style.background = `rgba(0,0,0,0.5)`;
		} else {
			nav.style.background = 'transparent';
		}
	});
	hamburger.addEventListener('click', function () {
		menu.classList.toggle('show-mobile-menu');
	});

	tabButtons.forEach((button) => {
		button.addEventListener('click', function () {
			tabButtons.forEach((btn) => {
				btn.classList.remove('active');
			});
			imageContainers.forEach((container) => {
				container.style.display = 'none';
			});

			const category = button.getAttribute('data-category');

			button.classList.add('active');

			document.querySelector(`.image.${category}`).style.display = 'grid';
		});
	});
	document.querySelector(".tab-button[data-category='people']").click();
});
