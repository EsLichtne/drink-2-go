import {slides} from './slides-mocks';

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const title = slider.querySelector('.slider__title');
const image = slider.querySelector('.slider__image-wrapper');
const description = slider.querySelector('.slider__description');
const oldPrice = slider.querySelector('.price--old');
const price = slider.querySelector('.price--new');
const backButton = slider.querySelector('.slider__button--back');
const forwardButton = slider.querySelector('.slider__button--forward');
const paginationButtons = slider.querySelectorAll('.slider-pagination__button');

let currentSlideIndex = 0;

const updatePaginationButtons = () => {
  paginationButtons.forEach((button, index) => {
    if (index === currentSlideIndex) {
      button.classList.add('slider-pagination__button--current');
    } else {
      button.classList.remove('slider-pagination__button--current');
    }
  });
};

const updateSlideContent = (index) => {
  const slide = slides[index];

  hero.style.setProperty('--product-color', slide.color);
  title.textContent = slide.title;
  image.innerHTML = slide.image;
  description.innerHTML = slide.description;
  oldPrice.textContent = slide.oldPrice;
  price.textContent = slide.price;
};

const getNextSlide = () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlideContent(currentSlideIndex);
  updatePaginationButtons();
};

const getPreviousSlide = () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlideContent(currentSlideIndex);
  updatePaginationButtons();
};

backButton.addEventListener('click', () => {
  getPreviousSlide();
});

forwardButton.addEventListener('click', () => {
  getNextSlide();
});

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlideIndex = index;
    updateSlideContent(currentSlideIndex);
    updatePaginationButtons();
  });
});
