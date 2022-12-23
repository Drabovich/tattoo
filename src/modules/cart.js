
//Открытие, закрытие корзины, основные переменные
const openCartBtn = document.querySelectorAll('.open-cart'), 
    modalCart = document.querySelector('.modal-cart'),
    body = document.querySelector('body');
    modalCartCloseBtn = document.querySelector('.modal-cart__close');

const cartWrapper = document.querySelector('.modal-cart__products');



window.addEventListener('click', (event) => {
    
    if (event.target.dataset.action === 'plus' 
    || event.target.dataset.action === 'minus') {

        const cartProductWrapper = event.target.closest('.cart-product__wrapper');
        let counter = cartProductWrapper.querySelector('[data-counter]');
    
        if (event.target.dataset.action === 'plus') counter.innerText = ++counter.innerText;

        if (event.target.dataset.action === 'minus') {
            if (counter.innerText > 1) counter.innerText = --counter.innerText;
        }
    }

    if (event.target.dataset.action === 'close') {
        const cartProduct = event.target.closest('.cart-product');
        cartProduct.remove()
    }

    if (event.target.hasAttribute('data-cart')) {
        let card = event.target.closest('.card-main');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card-main__img img').getAttribute('src'),
            title: card.querySelector('.card-main__title').innerText,
            price: card.querySelector('.card-main__price').innerText,
        }

        let itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + 1;

        } else {
            let cartItemHTML = `
                <div class="cart-product" data-id="${productInfo.id}">
                    <div class="cart-product__content">
                        <img src="${productInfo.imgSrc}">
                        <p>${productInfo.title}</p>
                    </div>
                    <div class="cart-product__price">
                        <span><i>Цена:&nbsp;</i>${productInfo.price}</span>
                    </div>
                    <div class="cart-product__all-price">
                        <div class="cart-product__wrapper">
                            <div class="cart-product__control" data-action="minus">
                                <img src="./assets/img/minus.svg" alt="Minus">
                            </div>
                            <div class="cart-product__current" data-counter>1</div>
                            <div class="cart-product__control" data-action="plus">
                                <img src="./assets/img/plus.svg" alt="Plus">
                            </div>
                        </div>
                        <div class="cart-product__cena">
                            <span><i>Стоимость:&nbsp;</i>3000</span>₽
                        </div>
                    </div>
                    <div class="cart-product__close" data-action="close">
                        <img src="./assets/img/close-call-modal.svg" alt="Close">
                    </div>
                </div>`

            cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
        }
    }
})






























// Перейти в корзину с мод. окна при нажатии на #btn-modal-open-cart
document.querySelector('#btn-modal-open-cart').addEventListener('click', () => {
    document.querySelector('.modal-main').classList.add('hidden');
    document.querySelector('body').style.overflow = '';
    document.querySelector('body').style.paddingRight = '';
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
modalCartCloseBtn.addEventListener('click', () => {
    const title = document.querySelector('.main');
    const gotoBlockValue = title.getBoundingClientRect().top + scrollY;

    modalCart.classList.add('hidden');
    body.style.overflow = '';
    body.style.paddingRight = '';

    window.scrollTo({
        top: gotoBlockValue,
        left: 0,
        behavior: "smooth"
    })
})


// Функция открытия корзины (модально окно)
function openCart() {
    modalCart.classList.remove('hidden');
    const widthScrollCart = window.innerWidth - modalCart.offsetWidth + 'px';
    body.style.overflow = 'hidden';
    body.style.paddingRight = widthScrollCart;
}





