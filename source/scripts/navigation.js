const navigation = document.querySelector('.navigation');
const button = navigation.querySelector('.navigation__button');
const navigationClue = navigation.querySelector('.navigation__clue');

button.addEventListener('click', () => {
  navigation.classList.toggle('navigation--open');
  if (navigation.classList.contains('navigation--open')) {
    navigationClue.textContent = 'Закрыть меню.';
  } else {
    navigationClue.textContent = 'Открыть меню.';
  }
});
