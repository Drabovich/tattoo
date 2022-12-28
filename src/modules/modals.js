
// Модальные окна
export const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector), 
            modal = document.querySelector(modalSelector),
            close = document.querySelectorAll(closeSelector),
            body = document.querySelector('body');
        let widthScroll;

        if (trigger.length > 0) {
            trigger.forEach(item => item.addEventListener('click', event => {
                if (event.target) event.preventDefault();
                modal.classList.remove('hidden');
                widthScroll = window.innerWidth - modal.offsetWidth + 'px';
                body.style.overflow = 'hidden';
                body.style.position = 'fixed';
                // body.style.top = `-${window.scrollY}px`;
                body.style.paddingRight = widthScroll;
            }));
        }

        if (close.length > 0) {
            close.forEach(item => item.addEventListener('click', event => {
                if (event.target) event.preventDefault();
                modal.classList.add('hidden');
                body.style.overflow = '';
                body.style.paddingRight = '';
                body.style.position = '';
                // body.style.top = '';
            }))
        }   

        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.classList.add('hidden');
                body.style.overflow = '';
                body.style.paddingRight = '';
                body.style.position = '';
            }
        })
    }

    // Заказать звонок
    bindModal('.slide-catalog__btn', '.modal-call', '.form-call-modal__close');

    // Окно после нажатия на кнопку "Добавить в корзину"
    bindModal('.card-main__btn', '.modal-main', '.modal-close');
}


