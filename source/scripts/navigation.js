const TABLET_WIDTH = 768;


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

window.addEventListener('resize', () => {
  if (window.innerWidth >= TABLET_WIDTH) {
    navigation.classList.remove('navigation--open');
  }
});
