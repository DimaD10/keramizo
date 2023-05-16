const burgerBtn = document.querySelector('.burger');
const menuBurger = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', e => {
    e.target.classList.toggle('active');
    menuBurger.classList.toggle('_opened');
})