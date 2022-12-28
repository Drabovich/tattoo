
//Открытие, закрытие корзины, основные переменные
const openCartBtn = document.querySelectorAll('.open-cart');
const modalCart = document.querySelector('.modal-cart');
const body = document.querySelector('body');

// Основные переменные для расчета кол-во товаров в корзине
const cartWrapper = document.querySelector('.modal-cart__products');
let arrProducts = [];


//========== Открытие, закрытие корзины ==========

// Перейти в корзину с мод. окна при нажатии на #btn-modal-open-cart
document.querySelector('#btn-modal-open-cart').addEventListener('click', () => {
    document.querySelector('.modal-main').classList.add('hidden');
    body.style.overflow = '';
    body.style.paddingRight = '';
    body.style.position = '';
    window.scrollTo(0, 0);
    openCart()
})

//Открытие корзины на кнопку ".open-cart"
if (openCartBtn.length > 0) {
    openCartBtn.forEach(item => item.addEventListener('click', event => {
        if (event.target) event.preventDefault();
        if (!modalCart.offsetWidth) openCart();
    }));
}

//Закрытие корзины и переход к каталогу
document.querySelector('.modal-cart__close').addEventListener('click', () => {
    const title = document.querySelector('.main');
    const gotoBlockValue = title.getBoundingClientRect().top + scrollY;

    modalCart.classList.add('hidden');
    body.style.overflow = '';
    body.style.paddingRight = '';
    body.style.position = '';

    window.scrollTo({
        top: gotoBlockValue,
        left: 0,
        behavior: "smooth"
    })
})



//========== Расчет кол-ва товаров в корзине, работа с LocalStorage ==========

// Выгрузка товаров из LocalStorage
if (localStorage.getItem('arrProducts')) {
    arrProducts = JSON.parse(localStorage.getItem('arrProducts'));
    arrProducts.forEach(item => renderProduct(item));
}

// Изменение товара в корзине и LocalStorage при нажатии на + и -
document.addEventListener('click', (event) => {
    
    if (event.target.dataset.action === 'plus' 
    || event.target.dataset.action === 'minus') {

        const cartProductWrapper = event.target.closest('.cart-product');
        const id = cartProductWrapper.getAttribute('data-id');
        let counter = cartProductWrapper.querySelector('[data-counter]');
        let productCena = cartProductWrapper.querySelector('.cart-product__cena span b');
        let productPrice = cartProductWrapper.querySelector('.cart-product__price span b');

        if (event.target.dataset.action === 'plus') counter.innerText = ++counter.innerText;

        if (event.target.dataset.action === 'minus') {
            if (counter.innerText > 1) counter.innerText = --counter.innerText;
        }

        productCena.innerText = parseInt(counter.innerText) * parseInt(productPrice.innerText);

        arrProducts.forEach(item => {
            if (item.id == id) {
                item.count = parseInt(counter.innerText);
                item.allPrice = parseInt(productCena.innerText);
            }
        })

        saveToLocalStorage();
    }

    // Удаление товара из корзины и LocalStorage
    if (event.target.dataset.action === 'close') {
        const cartProductWrapper = event.target.closest('.cart-product');
        const id = cartProductWrapper.getAttribute('data-id');

        arrProducts = arrProducts.filter(item => item.id != id);
        saveToLocalStorage();
        cartProductWrapper.remove()
    }

    // Считываем данные с карточки по которой нажал user и render ее
    if (event.target.hasAttribute('data-cart')) {
        let card = event.target.closest('.card-main');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card-main__img img').getAttribute('src'),
            title: card.querySelector('.card-main__title').innerText,
            price: card.querySelector('.card-main__price span').innerText,
            count: 1,
            allPrice: card.querySelector('.card-main__price span').innerText,
        }

        if (!arrProducts.find(item => item.id === productInfo.id)) {
            arrProducts.push(productInfo);
        }
        
        saveToLocalStorage();
        renderProduct(productInfo);
    }

    toggleCartSatus();
    calcCartPrice();
})



//========== Функции ==========

// Функция открытия корзины (модально окно)
function openCart() {
    modalCart.classList.remove('hidden');
    const widthScrollCart = window.innerWidth - modalCart.offsetWidth + 'px';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.paddingRight = widthScrollCart;
}

// Проверка на наличие/отсутсвие товаров в корзине
function toggleCartSatus() {

    const cartEmptyBadge = document.querySelector('.modal-cart__empty-badge');
    const modalCartPrice = document.querySelector('.modal-cart__price');
    const modalCartTop = document.querySelector('.modal-cart__top');

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('hidden');
        modalCartPrice.classList.remove('hidden');
        modalCartTop.classList.remove('hidden');

    } else {
        cartEmptyBadge.classList.remove('hidden')
        modalCartPrice.classList.add('hidden');
        modalCartTop.classList.add('hidden');
    }
}
toggleCartSatus()

// Расчет общей цены в корзине
function calcCartPrice() {
    const counterCart = document.querySelectorAll('.counter-cart');
    const cartItems = document.querySelectorAll('.cart-product');
    const totalCart = document.querySelectorAll('.total-cart');
    let priceTotal = 0;

    counterCart.forEach(item => item.innerText = cartWrapper.children.length);

    cartItems.forEach(item => {
        const priceEl = item.querySelector('.cart-product__cena b');
        const counter = item.querySelector('[data-counter]');
        const productCena = item.querySelector('.cart-product__cena span b');
        const productPrice = item.querySelector('.cart-product__price span b');

        priceTotal += parseInt(priceEl.innerText)

        productCena.innerText = parseInt(counter.innerText) * parseInt(productPrice.innerText)
    })

    totalCart.forEach(item => item.innerText = priceTotal);
}
calcCartPrice()

// Добавляем карточку в корзину с проверкой дубляжа
function renderProduct(item) {
    let itemInCart = cartWrapper.querySelector(`[data-id="${item.id}"]`);

    if (!itemInCart) {

        let cartItemHTML = 
            `<div class="cart-product" data-id="${item.id}">
                <div class="cart-product__content">
                    <img src="${item.imgSrc}">
                    <p>${item.title}</p>
                </div>
                <div class="cart-product__price">
                    <span><i>Цена:&nbsp;</i><b>${item.price}</b> ₽</span>
                </div>
                <div class="cart-product__all-price">
                    <div class="cart-product__wrapper">
                        <div class="cart-product__control" data-action="minus">
                            <img src="./assets/img/minus.svg" alt="Minus">
                        </div>
                        <div class="cart-product__current" data-counter>${item.count}</div>
                        <div class="cart-product__control" data-action="plus">
                            <img src="./assets/img/plus.svg" alt="Plus">
                        </div>
                    </div>
                    <div class="cart-product__cena">
                        <span><i>Стоимость:&nbsp;</i><b>${item.allPrice}</b> ₽</span>
                    </div>
                </div>
                <div class="cart-product__close" data-action="close">
                    <img src="./assets/img/close-call-modal.svg" alt="Close">
                </div>
            </div>`

        cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }
}

// Добавляем массив с карточками в LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('arrProducts', JSON.stringify(arrProducts));
}