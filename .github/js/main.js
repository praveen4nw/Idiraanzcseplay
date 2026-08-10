// Smooth navigation & Active section tracking
document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('#nav a');
	const sections = document.querySelectorAll('.play-section');

	// Active link state on scroll
	window.addEventListener('scroll', () => {
		let current = '';
		const scrollPosition = window.pageYOffset + 120;

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				current = section.getAttribute('id');
			}
		});

		navLinks.forEach(link => {
			link.classList.remove('active');
			if (link.getAttribute('href') === `#${current}`) {
				link.classList.add('active');
			}
		});
	});
});
