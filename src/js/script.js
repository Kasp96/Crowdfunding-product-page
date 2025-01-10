const openNavBtn = document.querySelector('.burger-btn');
const closeNavBtn = document.querySelector('.burger-close');
const navMenu = document.querySelector('.nav-menu');
const navShade = document.querySelector('.nav-shade');
const pledgeItems = document.querySelectorAll('.pledge-item');
const pledgeInputs = document.querySelectorAll('.pledge-input');
const heroShadow = document.querySelector('.hero-shadow');
const modal = document.querySelector('.backing-modal');
const completedModal = document.querySelector('.modal-completed');
const closeComplModalBtn = document.querySelector('.got-it-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const mainContainer = document.querySelector('.container-l');
const selectedPledgeBtns = document.querySelectorAll('.continue-btn');
const radioInputs = document.querySelectorAll('.radio-input');

selectedPledgeBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		const closestValueInput =
			btn.previousElementSibling.querySelector('.pledge-input');
		if (closestValueInput.value == 0 || closestValueInput.value == '') {
			closestValueInput.style.border = '1px solid red';
			completedModal.style.display = 'none';
		} else {
			closestValueInput.style.border = '1px solid var(--clr-gray-300)';
			modal.style.display = 'none';
			completedModal.style.display = 'flex';
			pledgeInputs.forEach((input) => {
				input.value = '';
			});
			window.scrollTo({
				top: 150,
				behavior: 'smooth',
			});
		}
	});
});

const resetPlegeItems = () => {
	pledgeItems.forEach((otherItem) => {
		const otherInputGroup = otherItem.querySelector('.pledge-input-group');
		const otherRadioInput = otherItem.querySelector('.radio-input');

		if (otherRadioInput) {
			otherRadioInput.checked = false;
		}
		if (otherInputGroup) {
			otherInputGroup.style.display = 'none';
		}
	});
};

const openModal = () => {
	resetPlegeItems();
	pledgeInputs.forEach((input) => {
		input.value = '';
		input.style.border = '1px solid var(--clr-gray-300)';
	});
	modal.style.display = 'block';
	heroShadow.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	mainContainer.style.zIndex = -1;
	heroShadow.style.zIndex = 1;
	window.scrollTo({
		top: 225,
		behavior: 'smooth',
	});
};

openModalBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		openModal();
		e.stopPropagation();
	});
});

const closeModal = () => {
	modal.style.display = 'none';
	heroShadow.style.backgroundColor = 'rgba(0, 0, 0, 0.03)';
	heroShadow.style.zIndex = 0;
};

pledgeItems.forEach((item) => {
	item.addEventListener('click', () => {
		resetPlegeItems();

		pledgeInputs.forEach((input) => {
			input.style.border = '1px solid var(--clr-gray-300)';
		});
		const radioInput = item.querySelector('.radio-input');
		const inputGroup = item.querySelector('.pledge-input-group');
		const pledgeStock = item.querySelector('.pledge-stock');
		const pledgeInput = item.querySelector('.pledge-input');

		if (radioInput) {
			radioInput.checked = true;
			if (pledgeStock) {
				inputGroup.style.display = 'flex';
			}
		}
	});
});

const openNavigation = () => {
	openNavBtn.classList.toggle('hide');
	closeNavBtn.classList.toggle('show');
	navMenu.classList.toggle('show-mobile-nav');
	navShade.classList.toggle('show');
};

const closeNavigation = () => {
	openNavBtn.classList.toggle('hide');
	closeNavBtn.classList.toggle('show');
	navMenu.classList.toggle('show-mobile-nav');
	navShade.classList.toggle('show');
};

const closeCompletedModal = () => {
	completedModal.style.display = 'none';
};

openNavBtn.addEventListener('click', openNavigation);
closeNavBtn.addEventListener('click', closeNavigation);
closeModalBtn.addEventListener('click', closeModal);
closeComplModalBtn.addEventListener('click', closeCompletedModal);
document.addEventListener('keyup', (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
});
document.addEventListener('click', (e) => {
	if (!modal.contains(e.target)) {
		closeModal();
	}
});
