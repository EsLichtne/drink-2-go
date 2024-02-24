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
const pagination = slider.querySelector('.slider__pagination');

let currentSlideIndex = 0;

const updatePaginationButtons = () => {
  const paginationButtons = pagination.querySelectorAll('.slider-pagination__button');

  paginationButtons.forEach((button, index) => {
    button.classList.toggle('slider-pagination__button--current', index === currentSlideIndex);
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

const updateButtonState = () => {
  backButton.disabled = currentSlideIndex === 0;
  forwardButton.disabled = currentSlideIndex === slides.length - 1;
};

const updateSlide = (index) => {
  currentSlideIndex = index;
  updateSlideContent(currentSlideIndex);
  updatePaginationButtons();
  updateButtonState();
};

const createPaginationButtons = () => {
  pagination.innerHTML = '';

  slides.forEach((slide, index) => {
    const paginationItem = document.createElement('li');
    paginationItem.classList.add('slider-pagination__item');

    const button = document.createElement('button');
    button.classList.add('slider-pagination__button');
    button.type = 'button';
    button.innerHTML = `<span class='visually-hidden'>${index + 1} слайд.</span>`;

    button.addEventListener('click', () => {
      updateSlide(index);
    });

    paginationItem.appendChild(button);
    pagination.appendChild(paginationItem);
  });

  updatePaginationButtons();
};

const getNextSlide = () => {
  if (currentSlideIndex < slides.length - 1) {
    updateSlide(currentSlideIndex + 1);
  }
};

const getPreviousSlide = () => {
  if (currentSlideIndex > 0) {
    updateSlide(currentSlideIndex - 1);
  }
};

backButton.addEventListener('click', () => {
  forwardButton.disabled = false;
  getPreviousSlide();
});

forwardButton.addEventListener('click', () => {
  backButton.disabled = false;
  getNextSlide();
});

createPaginationButtons();
updateButtonState();
