// window.addEventListener('DOMContentLoaded', () => {
//     modals();
//     tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
//     tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
//     forms()
// })

// // Модальные окна
// const modals = () => {

//     function bindModal(triggerSelector, modalSelector, closeSelector) {

//         const trigger = document.querySelectorAll(triggerSelector), 
//             modal = document.querySelector(modalSelector),
//             close = document.querySelector(closeSelector);

//         trigger.forEach(item => {

//             item.addEventListener('click', (e) => {
//                 if (e.target) {
//                     e.preventDefault();
//                 }
    
//                 modal.style.display = 'block';
//                 document.body.style.overflow = 'hidden';
//             });
//         });

//         close.addEventListener('click', () => {

//             modal.style.display = 'none';
//             document.body.style.overflow = '';
//         })

//         modal.addEventListener('click', (e) => {

//             if(e.target === modal) {
//                 modal.style.display = 'none';
//                 document.body.style.overflow = '';
//             }
//         })
//     }

//     function showModalByTime(selector, time) {

//         setTimeout(() => {
//             document.querySelector(selector).style.display = 'block';
//             document.body.style.overflow = 'hidden';
//         }, time);
//     }

//     bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
//     bindModal('.phone_link', '.popup', '.popup .popup_close');
//     // showModalByTime('.popup', 60000);
// }


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

