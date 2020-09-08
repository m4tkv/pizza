import {SWIPE_TYPES} from 'constants';

export const isSvg = (img) => img.indexOf('svg') !== -1;
export const getMiddlePrice = (a, b) => Math.round((a + b) / 2);
export const getRandomInt = (max = 6) =>
  Math.floor(Math.random() * Math.floor(max));
export const checkVerticalSwipe = (swipe) =>
  ![SWIPE_TYPES.SWIPE_LEFT, SWIPE_TYPES.SWIPE_RIGHT].includes(swipe);
