import { _querySelector, _add, _remove } from '../_config.js';
import { addClassItem, removeClassItem } from './_toggleClassItem';

let headerHeight = parseFloat(
  document.documentElement.style.getPropertyValue('--header-height')
);
let lastHeaderPosition;
let newHeaderPosition;

const hideHeaderOnScroll = () => {
  lastHeaderPosition = window.scrollY;
  addClassItem('.header', 'scroll');

  if (
    headerHeight < lastHeaderPosition &&
    lastHeaderPosition > newHeaderPosition
  ) {
    addClassItem('.header', 'hide');
    addClassItem('.header', 'scroll');
  } else if (newHeaderPosition > lastHeaderPosition) {
    removeClassItem('.header', 'hide');
  }

  if (lastHeaderPosition < headerHeight) removeClassItem('.header', 'scroll');

  newHeaderPosition = lastHeaderPosition;
};

window.addEventListener('scroll', e => {
  hideHeaderOnScroll();
});

hideHeaderOnScroll();
