
// Модальные окна
export const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector), 
            modal = document.querySelector(modalSelector),
            close = document.querySelectorAll(closeSelector),
            body = document.querySelector('body');
        let widthScroll;
        let heightScroll;

        if (trigger.length > 0) {
            trigger.forEach(item => item.addEventListener('click', event => {
                if (event.target) event.preventDefault();
                heightScroll = window.pageYOffset;

                modal.classList.remove('hidden');
                widthScroll = window.innerWidth - modal.offsetWidth + 'px';
                body.style.overflow = 'hidden';
                body.style.position = 'fixed';
                body.style.top = `-${heightScroll}px`;
                body.style.paddingRight = widthScroll;
            }));
        }

        if (close.length > 0) {
            close.forEach(item => item.addEventListener('click', event => {
                if (event.target) event.preventDefault();
                modal.classList.add('hidden');
                body.style.position = '';
                body.style.top = '';
                body.style.overflow = '';
                body.style.paddingRight = '';
                window.scrollTo(0, heightScroll);
            }))
        }   

        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.classList.add('hidden');
                body.style.position = '';
                body.style.top = '';
                body.style.overflow = '';
                body.style.paddingRight = '';
                window.scrollTo(0, heightScroll);
            }
        })
    }

    // Заказать звонок
    bindModal('.slide-catalog__btn', '.modal-call', '.form-call-modal__close');

    // Окно после нажатия на кнопку "Добавить в корзину"
    bindModal('.card-main__btn', '.modal-main', '.modal-close');
}


