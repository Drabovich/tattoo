
// Отображение карточки с товаром в main-catalog
import { CATALOG } from './catalog.js';

const productsContainer = document.querySelector('.main__cards');
let arrLikes = [];

if (localStorage.getItem('arrFavorite')) {
    arrLikes = JSON.parse(localStorage.getItem('arrFavorite'));
}

renderProducts(CATALOG);

function renderProducts(arr) {
    arr.forEach(function (item) {

        arrLikes.forEach(prop => {
            if (prop.id === item.id) {
                item.like = true;
            }
        })

        const cssClass = item.like ? "card-main__like active" : "card-main__like";
        
        const productHTML = `
        <div class="card-main" data-id="${item.id}">
            <div class="card-main__img">
            <img src="./assets/img/${item.imgSrc}">
            </div>
            <h3 class="card-main__title">${item.title}</h3>
            <div class="card-main__price"><span>${item.price}</span> ₽</div>
            <button class="info-btn card-main__btn" type="button" data-cart>Добавить в корзину</button>
            <span class="${cssClass}" data-like>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2617 9.62586V9.62282C18.7612 9.10014 19.1541 8.4846 19.4178 7.81058C19.6968 7.09752 19.8252 6.33445 19.795 5.56936C19.7647 4.80427 19.5765 4.0537 19.2422 3.36487C18.9078 2.67604 18.4346 2.06385 17.8521 1.56679C17.2697 1.06974 16.5907 0.698571 15.8579 0.476641C15.1251 0.254712 14.3543 0.186818 13.5939 0.277231C12.8336 0.367644 12.1002 0.614406 11.4399 1.002C10.8931 1.32291 10.4063 1.73462 9.99974 2.21855C9.59321 1.73462 9.10635 1.32291 8.55961 1.002C7.89927 0.614406 7.16587 0.367644 6.40554 0.277231C5.64521 0.186818 4.87439 0.254712 4.14157 0.476641C3.40874 0.698571 2.72977 1.06974 2.14735 1.56679C1.56493 2.06385 1.09166 2.67604 0.7573 3.36487C0.422944 4.0537 0.23474 4.80427 0.20452 5.56936C0.1743 6.33445 0.30272 7.09752 0.581704 7.81058C0.860687 8.52363 1.28422 9.17127 1.82562 9.71272L9.99973 17.8858L18.2617 9.62586Z" fill="#BB8C5F"/>
            </svg>
            </span>
        </div>`
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}