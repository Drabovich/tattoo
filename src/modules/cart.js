
//Открытие, закрытие корзины, основные переменные
const openCartBtn = document.querySelectorAll('.open-cart'), 
    modalCart = document.querySelector('.modal-cart'),
    body = document.querySelector('body');
    modalCartCloseBtn = document.querySelector('.modal-cart__close');

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





