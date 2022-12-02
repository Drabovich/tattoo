import './index.html';
import './index.scss';
import './modules/slider';
import { modals } from './modules/modals';
import { sliders } from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders();
//     tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
//     tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});


// // Переменные к выпадающему меню (каталог) в header
// const menuHeaderCatalog = document.querySelector('.menu-header__catalog');
// const btnCatalog = document.querySelector('.menu-header__burger');


// btnCatalog.addEventListener('click', () => {
//     menuHeaderCatalog.classList.toggle('open-catalog')
// });


// window.addEventListener('click', event => {
    
//     // Закрытие меню (каталог) в header
//     if (menuHeaderCatalog.classList.contains('open-catalog') 
//     && event.target !== btnCatalog
//     && !event.target.closest('.menu-header__catalog')) {
//         menuHeaderCatalog.classList.remove('open-catalog')
//     }
// })


// // Переменные к Табам выпадающего меню (каталог) в header
// const catalogHeaderTitle = document.querySelectorAll('.catalog-header__title');

// catalogHeaderTitle.forEach(item => item.addEventListener('click', (event) => {

//     const catalogHeaderContent = document.querySelectorAll('.catalog-header__content');

//     catalogHeaderContent.forEach(element => {
//         element.classList.add('hidden')
//     })

//     catalogHeaderTitle.forEach(element => {
//         element.classList.remove('active-title')
//     })

//     item.classList.add('active-title')


//     const content = document.querySelector('#' + item.dataset.tab);
//     content.classList.remove('hidden')
// }))

// document.querySelector('[data-tab="tab-1"]').classList.add('active-title');
// document.querySelector('#tab-1').classList.remove('hidden');