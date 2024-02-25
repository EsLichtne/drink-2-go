const select = document.querySelector('.select');
const label = document.querySelector('.sorting__label');

select.addEventListener('click', () => {
  select.classList.toggle('select--active');
});

label.addEventListener('click', (event) => {
  event.preventDefault();
});

document.addEventListener('click', (event) => {
  if (event.target !== select) {
    select.classList.remove('select--active');
  }
});
