
// Слайдеры
export const sliders = () => {

    function bindslider(sliderSelector, sliderLineSelector, sliderItemSelector, btnPrevSelector, btnNextSelector, sliderDotSelector, activeDot) {

        // Исходные данные по слайдеру (const)
        const slider = document.querySelector(sliderSelector),
            sliderLine = document.querySelector(sliderLineSelector),
            sliderItems = document.querySelectorAll(sliderItemSelector),
            sliderBtnPrev = document.querySelector(btnPrevSelector),
            sliderBtnNext = document.querySelector(btnNextSelector),
            sliderDots = document.querySelectorAll(sliderDotSelector);

        // Переменные    
        let sliderCount = 0,
            sliderWidth;


        // Адаптивность слайдера
            window.addEventListener('resize', showSlid);

        // Кнопки листания слайдов вперед и назад
            sliderBtnNext.addEventListener('click', nextSlide);
            sliderBtnPrev.addEventListener('click', prevSlide);

        // Автоматическое перелистывание слайдов
        // setInterval(() => {
        //     nextSlide()
        // }, 3000);


        // Функции ==================
        // Задает нужную ширину картинки и sliderLine
        function showSlid() {
            sliderWidth = slider.offsetWidth;
            sliderLine.style.width = sliderWidth * sliderItems.length + 'px';
            sliderItems.forEach(item => item.style.width = sliderWidth + 'px');
            rollSlider();
        }
        showSlid();

        // Перелистывает слайд вперед
        function nextSlide() {
            sliderCount++;
            if (sliderCount >= sliderItems.length) sliderCount = 0;
            rollSlider();
            thisSlide(sliderCount);
        }

        // Перелистывает слайд назад
        function prevSlide() {
            sliderCount--;
            if (sliderCount < 0) sliderCount = sliderItems.length -1;
            rollSlider();
            thisSlide(sliderCount);
        }

        // Задает шаг перемещения слайдов
        function rollSlider() {
            sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
        }

        // Указывает как слайд по счету активен
        function thisSlide(index) {
            sliderDots.forEach(item => item.classList.remove(activeDot));
            sliderDots[index].classList.add(activeDot);
        }

        // Вешает клик на dot
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                sliderCount = index;
                rollSlider();
                thisSlide(sliderCount);
            })
        })
    }
    // Слайдер с фото татумашинок
    bindslider('.slider', '.slider__line', '.slider__img', '.slider__btn-prev', '.slider__btn-next', '.slider__dot', 'active-dot');
    
    // Слайдер с отзывами
    bindslider('.reviews-slider', '.reviews-slider__line', '.reviews-slider__item', '.reviews-slider__btn-prev', '.reviews-slider__btn-next', '.reviews-slider__dot', 'active-dot');
}