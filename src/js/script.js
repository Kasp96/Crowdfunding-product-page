const openNavBtn = document.querySelector('.burger-btn');
const closeNavBtn = document.querySelector('.burger-close');
const navMenu = document.querySelector('.nav-menu');
const navShade = document.querySelector('.nav-shade')

const openNavigation = () => {
    openNavBtn.classList.toggle('hide');
	closeNavBtn.classList.toggle('show');
	navMenu.classList.toggle('show-mobile-nav');
	navShade.classList.toggle('show')
	
};

const closeNavigation = () => {
	openNavBtn.classList.toggle('hide');
	closeNavBtn.classList.toggle('show');
	navMenu.classList.toggle('show-mobile-nav');
	navShade.classList.toggle('show')
};

openNavBtn.addEventListener('click', openNavigation);
closeNavBtn.addEventListener('click', closeNavigation);

