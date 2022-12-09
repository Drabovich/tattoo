import './index.html';
import './index.scss';
import { modals } from './modules/modals';
import { sliders } from './modules/slider';
import { tabs } from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders();
    tabs();
});


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


// Переменные к выпадающему меню (каталог) в header
const menuHeaderCatalog = document.querySelector('.menu-header__catalog'),
    btnCatalog = document.querySelector('.menu-header__burger');

btnCatalog.addEventListener('click', () => {
    menuHeaderCatalog.classList.toggle('open-catalog')
});

window.addEventListener('click', event => {  
    // Закрытие меню (каталог) в header
    if (menuHeaderCatalog.classList.contains('open-catalog') 
    && event.target !== btnCatalog
    && !event.target.closest('.menu-header__catalog')) {
        menuHeaderCatalog.classList.remove('open-catalog')
    }
});