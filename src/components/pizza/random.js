import React from 'react';

import {Img} from 'ui';
import {RANDOM_ICON} from 'constants';
import {useStore} from 'hooks';

import {RandomContainer, RandomButton} from './style';

export default () => {
  const {PizzaStore} = useStore(['PizzaStore']);
  return (
    <RandomContainer>
      <RandomButton onPress={() => PizzaStore.random()}>
        <Img img={RANDOM_ICON} />
      </RandomButton>
    </RandomContainer>
  );
};
