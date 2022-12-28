
// Открыть/закрыть меню бургер при разрешениее < 900px
if (document.querySelector('.top-header__icon')) {
    document.querySelector('.top-header__icon').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('lock')
        document.querySelector('body').classList.toggle('lock-apple')
        document.querySelector('.menu-header').classList.toggle('active')
        document.querySelector('.top-header__icon').classList.toggle('active')
    })
}


// Переменные к выпадающему меню (каталог) в header
const menuHeaderCatalog = document.querySelector('.menu-header__catalog'),
    btnCatalog = document.querySelector('.menu-header__burger');

btnCatalog.addEventListener('click', function() {
    menuHeaderCatalog.classList.toggle('open-catalog');
    this.classList.toggle('rotate-arow');
});

document.addEventListener('click', event => {  
    // Закрытие меню (каталог) в header
    if (menuHeaderCatalog.classList.contains('open-catalog') 
    && event.target !== btnCatalog
    && !event.target.closest('.menu-header__catalog')) {
        menuHeaderCatalog.classList.remove('open-catalog');
        btnCatalog.classList.remove('rotate-arow');
    }
});


// Перемещение поиска на всех разрешениях при адаптиве
const headerSearch = document.querySelector('.menu-header__search'),
        headerTop = document.querySelector('.header__top'),
        headerMenu = document.querySelector('.menu-header');

if (window.innerWidth <= 600) {
    headerMenu.insertBefore(headerSearch, headerMenu.children[3])
} else if (window.innerWidth <= 900 && window.innerWidth > 600) {
    headerTop.insertBefore(headerSearch, headerTop.children[1])
} else {
    headerMenu.insertBefore(headerSearch, headerMenu.children[1])
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
        headerMenu.insertBefore(headerSearch, headerMenu.children[2])
    } else if (window.innerWidth <= 900 && window.innerWidth > 600) {
        headerTop.insertBefore(headerSearch, headerTop.children[1])
    } else {
        headerMenu.insertBefore(headerSearch, headerMenu.children[1])
    }
});




