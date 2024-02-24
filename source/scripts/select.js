const select = document.querySelector('.select');

select.addEventListener('click', () => {
  select.classList.toggle('select--active');
});

document.addEventListener('click', (event) => {
  if (event.target !== select) {
    select.classList.remove('select--active');
  }
});
