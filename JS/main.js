// if (document.querySelector('.screen') !== null && document.querySelector('.screen') !== undefined && document.querySelector('.screen').innerHTML.length !== 0) {
// 	const toggleSwitches = document.querySelectorAll('.screen');

// 	toggleSwitches.forEach(function (toggleSwitch) {
// 		const toggleSwitchInput = toggleSwitch.querySelector('.toggle-switch-input');
// 		const toggleSwitchSlider = toggleSwitch.querySelector('.toggle-switch-slider');
// 		const toggleLabel = toggleSwitch.querySelector('.toggle-switch-label');

// 		toggleSwitchInput.addEventListener('change', function () {
// 			toggleSwitchInput.parentElement.parentElement.parentElement.classList.toggle('landscape');

// 			if (toggleSwitchInput.checked) {
// 				toggleSwitchInput.setAttribute('checked', '');
// 				toggleSwitchSlider.classList.add('active');
// 				toggleLabel.innerHTML = 'Portrait';
// 			} else {
// 				toggleSwitchInput.removeAttribute('checked');
// 				toggleSwitchSlider.classList.remove('active');
// 				toggleLabel.innerHTML = 'Landscape';
// 			}
// 		});
// 	});
// }

function emptyVal() {
	const x = document.querySelectorAll('.empty-value');

	for (let i = 0; i < x.length; i++) {
		if (x[i].innerHTML === null || x[i].length === 0 || x[i].innerHTML.trim().length === 0 || x[i].innerHTML === '0' || x[i].innerHTML === '-' || x[i].innerHTML === '') {
			x[i].parentElement.classList.add('d-none');
		} else {
			x[i].parentElement.classList.remove('d-none');
		}
	}
}

function listingAgent1() {
	const x = document.querySelectorAll('.thank-you-page .agent-wrapper .agent-name');

	for (let i = 0; i < x.length; i++) {
		if (x[i].innerHTML === null || x[i].length === 0 || x[i].innerHTML.trim().length === 0 || x[i].innerHTML === '0' || x[i].innerHTML === '-' || x[i].innerHTML === '') {
			x[i].parentElement.parentElement.classList.add('d-none');
		} else {
			x[i].parentElement.parentElement.classList.remove('d-none');
		}
	}
}

function listProperty() {
	const x = document.querySelectorAll('.list-property-item');

	for (let i = 0; i < x.length; i++) {
		if (x.length > 13) {
			x[i].parentElement.classList.add('two-column');
		} else {
			x[i].parentElement.classList.remove('two-column');
		}
	}
}

function testimonialCount() {
	const x = document.querySelectorAll('.testimonial-wrapper');

	for (let i = 0; i < x.length; i++) {
		if (x[i].children.length === 3) {
			x[i].classList.add('three-testimonials');
			x[i].classList.remove('four-testimonials');
		} else if (x[i].children.length === 4) {
			x[i].classList.add('four-testimonials');
			x[i].classList.remove('three-testimonials');
		} else {
			x[i].classList.remove('three-testimonials', 'four-testimonials');
		}
	}
}

function listingAgent2() {
	const x = document.querySelectorAll('.thank-you-page.landscape .md-prop-field-lname3');
	const y = document.querySelectorAll('.thank-you-page.landscape');

	for (let i = 0; i < x.length; i++) {
		if (x[i].innerHTML === null || x[i].length === 0 || x[i].innerHTML.trim().length === 0 || x[i].innerHTML === '0' || x[i].innerHTML === '-' || x[i].innerHTML === '') {
			y[i].classList.remove('three-agents');
		} else {
			y[i].classList.add('three-agents');
		}
	}
}

if (document.readyState === 'complete') {
	emptyVal();
	listingAgent1();
	listProperty();
	testimonialCount();
	listingAgent2();
} else {
	window.onload = emptyVal();
	window.onload = listingAgent1();
	window.onload = listProperty();
	window.onchange = testimonialCount();
	window.onload = listingAgent2();
}
