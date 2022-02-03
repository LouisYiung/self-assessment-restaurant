//While attempting to implement the Carousel on to my page, my javascript inexplicably would not comply with handling the the querySelector function.
//
/*function modulo(number, mod) {
    let result = number % mod;
    if (number < 0) {
        result += mod;
    }
    return result;
}

function handleNext() {
    currentSlide += 1;
    carousel.style.setProperty('--current-slide', currentSlide);
}

function handlePrevious() {
    currentSlide -= 1;
    carousel.style.setProperty('--current-slide', currentSlide);
}

const slidesContainer = document.querySelector('[data-carousel-slides-container]');
const ButtonPrevious = document.querySelector('[data-carousel-button-previous]');
const ButtonNext = document.querySelector('[data-carousel-button-next]');
const carousel = document.querySelector('[data-carousel]');
const numSlides = slidesContainer.children.length();
console.log(numSlides);
let currentSlide = 0;

//ButtonPrevious.addEventListener('click', () => console.log("Previous Clicked"));
//ButtonNext.addEventListener('click', () => console.log("Next Clicked"));

//ButtonPrevious.addEventListener('click', HandlePrevious());
ButtonNext.addEventListener('click', handleNext());