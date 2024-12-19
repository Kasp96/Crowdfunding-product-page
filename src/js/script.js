const openNavBtn = document.querySelector('.burger-btn');
const closeNavBtn = document.querySelector('.burger-close');
const navMenu = document.querySelector('.nav-menu');

const openNavigation = () => {
    openNavBtn.classList.toggle('hide');
	closeNavBtn.classList.toggle('show');
	navMenu.classList.toggle('show-mobile-nav');
   
};

const closeNavigation = () => {
	openNavBtn.classList.toggle('hide');
	closeNavBtn.classList.toggle('show');
	navMenu.classList.toggle('show-mobile-nav');
};

openNavBtn.addEventListener('click', openNavigation);
closeNavBtn.addEventListener('click', closeNavigation);

