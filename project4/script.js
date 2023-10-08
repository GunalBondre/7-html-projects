const items = document.querySelectorAll('.faq-accordion button');

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');
	console.log('hllo');

	for (let i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
	}

	if (itemToggle === 'false') {
		this.setAttribute('aria-expanded', 'true');
	}
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
