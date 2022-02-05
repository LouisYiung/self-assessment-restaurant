const slidesContainer = document.querySelector('[data-carousel-slides-container]');
const ButtonPrevious = document.querySelector('[data-carousel-button-previous]');
const ButtonNext = document.querySelector('[data-carousel-button-next]');
const carousel = document.querySelector('[data-carousel]');
const numSlides = slidesContainer.children.length;
let currentSlide = 0;

function modulo(number, mod) {
    let result = number % mod;
    if (number < 0) {
        result += mod;
    }
    return result;
}

function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    carousel.style.setProperty('--current-slide', currentSlide);
    console.log(currentSlide);
}

function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    carousel.style.setProperty('--current-slide', currentSlide);
    console.log(currentSlide);
}


ButtonPrevious.addEventListener('click', handlePrevious);
ButtonNext.addEventListener('click', handleNext);

console.log(currentSlide);