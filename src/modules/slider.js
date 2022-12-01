// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnNext = document.querySelector('.slider__btn-next'),
    sliderBtnPrev = document.querySelector('.slider__btn-prev');

// Переменные    
let sliderCount = 0,
    sliderWidth;

// Адаптивность слайдера
    window.addEventListener('resize', showSlid);

// Кнопки листания слайдов вперед и назад
    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnPrev.addEventListener('click', prevSlide);


// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlid() {
    sliderWidth = document.querySelector('.slider').offsetWidth;

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
    sliderDots.forEach(item => item.classList.remove('active-dot'));

    sliderDots[index].classList.add('active-dot');
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {

    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})

// Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);