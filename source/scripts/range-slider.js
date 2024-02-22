import '../vendor/nouislider/nouislider.js';

const slider = document.querySelector('#slider');
const minValue = document.querySelector('.filter__range-input--min');
const maxValue = document.querySelector('.filter__range-input--max');

noUiSlider.create(slider, {
  start: [0, 900],
  step: 10,
  margin: 150,
  connect: true,
  range: {
    'min': 0,
    'max': 1000,
  }
});

slider.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];

  if (handle === 0) {
    minValue.value = Math.round(value);
  } else {
    maxValue.value = Math.round(value);
  }
});

const setSliderValues = () => {
  slider.noUiSlider.set([minValue.value, maxValue.value]);
};

minValue.addEventListener('change', () => {
  setSliderValues();
});

maxValue.addEventListener('change', () => {
  setSliderValues();
});
