const boxes = document.querySelectorAll('.animation__box')


window.addEventListener('scroll', () => {
	const triggerBottom = window.innerHeight / 5 * 4;

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top

		if (boxTop < triggerBottom) {
			box.classList.add('_show')
		} else {
			box.classList.remove('_show')
		}
	})
})