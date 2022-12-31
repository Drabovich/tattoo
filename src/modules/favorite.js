
//Открытие, закрытие избранных карточек, основные переменные
const openLikeBtn = document.querySelector('.top-header__like a');
const modalLike = document.querySelector('.modal-like');
const body = document.querySelector('body');

// Основные переменные для расчета кол-во карточек в избранных
const likeWrapper = document.querySelector('.modal-like__cards');
let arrFavorite = [];


// Выгрузка товаров из LocalStorage
if (localStorage.getItem('arrFavorite')) {
    arrFavorite = JSON.parse(localStorage.getItem('arrFavorite'));
    arrFavorite.forEach(item => renderLikeCard(item));
}


//========== Открытие, закрытие избранных ==========

//Открытие избранных карточек на кнопку "openLikeBtn"
openLikeBtn.addEventListener('click', event => {
    if (event.target) event.preventDefault();
    if (document.querySelector('.menu-header').classList.contains('active')
        || document.querySelector('.modal-cart').offsetWidth) openLike();
    if (!modalLike.offsetWidth) openLike();
})

//Закрытие избранных карточек и переход к каталогу
document.querySelector('.modal-like__close').addEventListener('click', () => {
    const title = document.querySelector('.main');
    const gotoBlockValue = title.getBoundingClientRect().top + scrollY;

    document.querySelector('.modal-cart').classList.add('hidden');
    modalLike.classList.add('hidden');
    body.style.overflow = '';
    body.style.paddingRight = '';
    body.style.position = '';

    window.scrollTo({
        top: gotoBlockValue,
        left: 0,
        behavior: "smooth"
    })
})

//========== Расчет кол-ва карточек в избранных, работа с LocalStorage ==========

document.addEventListener('click', event => {
    if (event.target.hasAttribute('data-like')) {
        let card = event.target.closest('.card-main');
        const activeLiike = card.querySelector('.card-main__like');
        activeLiike.classList.toggle('active')

        if (activeLiike.classList.contains('active')) {
            const productInfoLike = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.card-main__img img').getAttribute('src'),
                title: card.querySelector('.card-main__title').innerText,
                price: card.querySelector('.card-main__price span').innerText,
            }
    
            if (!arrFavorite.find(item => item.id === productInfoLike.id)) {
                arrFavorite.push(productInfoLike);
            }
            renderLikeCard(productInfoLike);
        } else {
            const idCard = card.dataset.id;
            const cardLikes = document.querySelectorAll('.card-like');


            cardLikes.forEach(item => {
                let idLike = item.dataset.id;
                if (idCard === idLike) {
                    arrFavorite = arrFavorite.filter(item => item.id !== idLike);
                    item.remove()
                }
            })
        }

        saveToLikeLocalStorage();
    }

    // Удаление карточки из избранных и LocalStorage
    if (event.target.dataset.action === 'close-like') {
        const cartLikeWrapper = event.target.closest('.card-like');
        const id = cartLikeWrapper.getAttribute('data-id');
        const mainCards = document.querySelectorAll('.card-main');

        mainCards.forEach(item => {
            let idMain = item.dataset.id;
            if(id === idMain) {
                item.querySelector('.card-main__like').classList.remove('active')
            }
        })
        arrFavorite = arrFavorite.filter(item => item.id != id);
        saveToLikeLocalStorage();
        cartLikeWrapper.remove()
    }
    toggleCartLikeSatus()
})

// Функция открытия избранных карточек (модально окно)
function openLike() {
    document.querySelector('.modal-cart').classList.add('hidden');
    body.style.overflow = '';
    body.style.paddingRight = '';
    body.style.position = '';
    body.classList.remove('lock')
    body.classList.remove('lock-apple')
    document.querySelector('.menu-header').classList.remove('active')
    document.querySelector('.top-header__icon').classList.remove('active')

    modalLike.classList.remove('hidden');
    const widthScrollCart = window.innerWidth - modalLike.offsetWidth + 'px';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.paddingRight = widthScrollCart;
}

// Добавляем массив с карточками в LocalStorage
function saveToLikeLocalStorage() {
    localStorage.setItem('arrFavorite', JSON.stringify(arrFavorite));
}

// Добавляем карточку в избранные с проверкой дубляжа
function renderLikeCard(item) {
    let itemInCart = likeWrapper.querySelector(`[data-id="${item.id}"]`);

    if (!itemInCart) {

        const cartItemHTML = `
        <div class="card-like" data-id="${item.id}">
            <div class="card-like__img">
            <img src="${item.imgSrc}">
            </div>
            <h3 class="card-like__title">${item.title}</h3>
            <div class="card-like__price"><span>${item.price}</span> ₽</div>
            <button class="info-btn card-like__btn" type="button" data-cart-like>Добавить в корзину</button>
            <div class="card-like__close" data-action="close-like">
                <img src="./assets/img/close-call-modal.svg" alt="Close">
            </div>
        </div>`
        likeWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }
}

// Проверка на наличие/отсутсвие карточек в избранном
function toggleCartLikeSatus() {

    const cartEmptyBadge = document.querySelector('.modal-like__empty-badge');
    const counterLike = document.querySelector('.counter-like');

    counterLike.innerText = likeWrapper.children.length;

    if (likeWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('hidden');

    } else {
        cartEmptyBadge.classList.remove('hidden')
    }
}
toggleCartLikeSatus()