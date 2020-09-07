import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from 'scenes/welcome';
import Pizza from 'scenes/pizzaConstructor';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator initialRouteName={'welcome'}>
    <MainStack.Screen
      name={'welcome'}
      component={Welcome}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name={'pizza'}
      component={Pizza}
      options={{headerShown: false}}
    />
  </MainStack.Navigator>
);
