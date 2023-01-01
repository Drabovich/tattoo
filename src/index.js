import './index.html';
import './index.scss';
import './modules/header';
import './modules/cart';
import './modules/renderProducts';
import './modules/favorite';
import { modals } from './modules/modals';
import { sliders } from './modules/slider';
import { tabs } from './modules/tabs';

import './img/card-main-1.png';
import './img/card-main-2.png';
import './img/card-main-3.png';
import './img/card-main-4.png';
import './img/card-main-5.png';
import './img/card-main-6.png';
import './img/card-main-7.png';
import './img/card-main-8.png';
import './img/card-main-9.png';
import './img/card-main-10.png';
import './img/card-main-11.png';
import './img/card-main-12.png';
import './img/card-main-13.png';
import './img/card-main-14.png';
import './img/card-main-15.png';
import './img/plus.svg';
import './img/minus.svg';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders();
    tabs();
});

document.addEventListener('touchstart', event => event.preventDefault())


// При нажати на "Показать еще" открываются все карточки в section Catalog 
document.querySelector('.catalog__btn').addEventListener('click', () => {
    document.querySelectorAll('.catalog__item').forEach(item => item.style.display = 'flex');
    document.querySelector('.catalog__btn').classList.add('hidden');
});

// При нажати на "Показать еще" открываются все карточки в main__cards
document.querySelector('.main__btn').addEventListener('click', () => {
    document.querySelectorAll('.card-main').forEach(item => item.style.display = 'grid');
    document.querySelector('.main__btn').classList.add('hidden');
});

// Убираем клик не рабочих ссылок в блоке 2 банеров и футере
document.querySelectorAll('.link-lock').forEach(item => {
    item.addEventListener('click', event => event.preventDefault())
})