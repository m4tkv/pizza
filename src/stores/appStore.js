import PizzaStore from 'stores/pizzaStore';

class AppStore {
  pizzaStore = null;

  constructor() {
    this.pizzaStore = new PizzaStore(this);
  }
}

export default new AppStore();
