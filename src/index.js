import 'react-native-gesture-handler';
import React from 'react';
import {observer, Provider} from 'mobx-react';
import AppStore from 'stores/appStore';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from 'navigation';

const stores = {
  AppStore,
  PizzaStore: AppStore.pizzaStore,
};

export default observer(() => {
  return (
    <Provider {...stores}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
});
