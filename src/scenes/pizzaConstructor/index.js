import React, {useEffect} from 'react';
import {useObserver} from 'mobx-react';

import {useStore} from 'hooks';
import {Layout} from 'layouts';
import Pizza from 'components/pizza';

const usePizzaStore = () => {
  const {PizzaStore} = useStore(['PizzaStore']);
  return useObserver(() => ({
    pizza: PizzaStore?.pizza,
    PizzaStore,
  }));
};

export default () => {
  const {PizzaStore, pizza} = usePizzaStore();
  useEffect(() => {
    if (!pizza.length) PizzaStore.init();
    return () => {
      PizzaStore.reset();
    };
  }, []);
  return (
    <Layout
      header={{
        type: 2,
        title: `Пицца из половинок, 35 см`,
        backTitle: 'Меню',
      }}>
      <Pizza />
    </Layout>
  );
};
