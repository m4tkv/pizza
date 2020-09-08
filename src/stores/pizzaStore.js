import {observable, action} from 'mobx';

import {getRandomInt, checkVerticalSwipe} from 'common';
import {SWIPE_TYPES, RIGHT} from 'constants';

export default class {
  pizza = [];
  @observable leftSelected = null;
  @observable rightSelected = null;
  @observable isLoading = true;
  constructor(store) {
    this.store = store;
  }

  @action init = () => {
    this.leftSelected = 0;
    this.rightSelected = 1;
    this.loadPizza();
  };

  reset = () => {
    this.isLoading = true;
    this.rightSelected = null;
    this.leftSelected = null;
    this.pizza = [];
  };

  @action loadPizza = () => {
    const _pizza = require('data/pizza.json');
    if (_pizza) this.pizza = _pizza;
    this.isLoading = false;
  };

  @action onSwipe = ({type, dir}) => {
    if (!checkVerticalSwipe(dir)) return;

    if (type === RIGHT) {
      this.rightSelected = this.prepare(
        dir === SWIPE_TYPES.SWIPE_UP
          ? this.rightSelected + 1
          : this.rightSelected - 1,
      );
    } else {
      this.leftSelected = this.prepare(
        dir === SWIPE_TYPES.SWIPE_UP
          ? this.leftSelected + 1
          : this.leftSelected - 1,
      );
    }
  };

  @action random = () => {
    const newRight = getRandomInt();
    const newLeft = getRandomInt();
    if (newRight !== this.rightSelected && newLeft !== this.leftSelected) {
      this.rightSelected = newRight;
      this.leftSelected = newLeft;
    } else {
      this.random();
    }
  };

  prepare = (v) => {
    if (v < 0) return this.pizza.length - 1;
    if (v > this.pizza.length - 1) return 0;
    return v;
  };
}
