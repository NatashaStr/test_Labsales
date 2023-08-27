const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.header__menu-wrapper');
// const wrapper = document.querySelector('.header__nav-wrapper');

const toggleBurger = () => {
    if (header.classList.contains('header__menu--closed')) {
        header.classList.remove('header__menu--closed');
        header.classList.add('header__menu--opened');
    } else if (header.classList.contains('header__menu--opened')) {
        header.classList.remove('header__menu--opened');
        header.classList.add('header__menu--closed');
    }
};

const initBurger = () => {
    header.classList.add('header__menu--closed');
    burgerBtn.addEventListener('click', (evt) => toggleBurger(evt));
};

export { initBurger }