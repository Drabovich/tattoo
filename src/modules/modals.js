
// Модальные окна
export const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector), 
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            body = document.querySelector('body');
        let widthScroll;

        if (trigger.length > 0) {
            trigger.forEach(item => item.addEventListener('click', event => {
                if (event.target) event.preventDefault();
                modal.style.display = 'flex';
                widthScroll = window.innerWidth - modal.offsetWidth + 'px';
                document.body.style.overflow = 'hidden';
                body.style.paddingRight = widthScroll;
            }));
        }

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            body.style.paddingRight = '';
        })

        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                body.style.paddingRight = '';
            }
        })
    }

    bindModal('.slide-catalog__btn', '.modal-call', '.form-call-modal__close');
}

// // Табы
// const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
//     const header = document.querySelector(headerSelector),
//         tab = document.querySelectorAll(tabSelector),
//         content = document.querySelectorAll(contentSelector);

//         function hideTabContent() {
//             content.forEach(item => {
//                 item.style.display = 'none';
//             });

//             tab.forEach(item => {
//                 item.classList.remove(activeClass);
//             })
//         }

//         function showTabContent(i = 0) {
//             content[i].style.display = 'block';
//             tab[i].classList.add(activeClass);
//         }

//         hideTabContent();
//         showTabContent();

//         header.addEventListener('click', (e) => {
//             const target = e.target;

//             if (target && (target.classList.contains(tabSelector.replace(/\./, '')) ||
//                 target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
//                     tab.forEach((item, i) =>{
//                         if (target == item || target.parentNode == item) {
//                             hideTabContent();
//                             showTabContent(i);
//                         }
//                     })
//                 }
//         })
// }

