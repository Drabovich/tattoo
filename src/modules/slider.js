
// Слайдеры
export const sliders = () => {

    function bindslider(sliderSelector, sliderLineSelector, sliderImgSelector, btnPrevSelector, btnNextSelector, sliderDotSelector, activeDot) {

        // Исходные данные по слайдеру (const)
        const slider = document.querySelector(sliderSelector),
            sliderLine = document.querySelector(sliderLineSelector),
            sliderImages = document.querySelectorAll(sliderImgSelector),
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
            sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
            sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
            rollSlider();
        }
        showSlid();

        // Перелистывает слайд вперед
        function nextSlide() {
            sliderCount++;
            if (sliderCount >= sliderImages.length) sliderCount = 0;
            rollSlider();
            thisSlide(sliderCount);
        }

        // Перелистывает слайд назад
        function prevSlide() {
            sliderCount--;
            if (sliderCount < 0) sliderCount = sliderImages.length -1;
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
    
    bindslider('.slider', '.slider__line', '.slider__img', '.slider__btn-prev', '.slider__btn-next', '.slider__dot', 'active-dot');
}