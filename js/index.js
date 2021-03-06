// Modal map

const MAP_OPEN = document.querySelector('.contacts__img');
const MAP_POPAP = document.querySelector('.modal__map')
const MAP_CLOSE = MAP_POPAP.querySelector('.map__close');


// Modal feedback

const FEEDBACK_OPEN = document.querySelector('.contacts__button');
const FEEDBACK_POPAP = document.querySelector('.modal__feedback');
const FEEDBACK_CLOSE = FEEDBACK_POPAP.querySelector('.form__close');

const openPopup = (openSelector, window) => {
  openSelector.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.classList.remove('visually-hidden');
  });
};

const closePopup = (closeSelector, window) => {
  closeSelector.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.classList.add('visually-hidden');
  });
};

openPopup(MAP_OPEN, MAP_POPAP);
closePopup(MAP_CLOSE, MAP_POPAP);

openPopup(FEEDBACK_OPEN, FEEDBACK_POPAP);
closePopup(FEEDBACK_CLOSE, FEEDBACK_POPAP);
