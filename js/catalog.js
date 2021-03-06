// Modal basket

const BASKET_OPEN = document.querySelector('.item__button--buy');
const BASKET_POPAP = document.querySelector('.modal__basket');
const BASKET_CLOSE = document.querySelector('.basket__close');

BASKET_OPEN.addEventListener('click', (evt) => {
  evt.preventDefault();
  BASKET_POPAP.classList.remove('visually-hidden');
});

BASKET_CLOSE.addEventListener('click', (evt) => {
  evt.preventDefault();
  BASKET_POPAP.classList.add('visually-hidden');
});
