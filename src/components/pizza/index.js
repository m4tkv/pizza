import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useObserver} from 'mobx-react';
import GestureRecognizer from 'react-native-swipe-gestures';

import {useStore} from 'hooks';
import {SAFETY_ORANGE, RIGHT, LEFT} from 'constants';
import {Img, Button} from 'ui';
import {getMiddlePrice} from 'common';
import Random from './random';
import {normalize} from 'style';

import {
  Wrapper,
  HalfView,
  PizzaNameContainer,
  PizzaNameText,
  PizzaPriceText,
  PizzaImageContainer,
  TotalContainer,
  TotalText,
  PizzaPreviewImage,
} from './style';

const usePizzaStore = () => {
  const {PizzaStore} = useStore(['PizzaStore']);
  return useObserver(() => ({
    pizza: PizzaStore?.pizza,
    isLoading: PizzaStore?.isLoading,
    leftSelected: PizzaStore?.leftSelected,
    rightSelected: PizzaStore?.rightSelected,
    PizzaStore,
  }));
};

export default () => {
  const {isLoading} = usePizzaStore();

  if (isLoading)
    return <ActivityIndicator size={'large'} color={SAFETY_ORANGE} />;
  return (
    <Wrapper>
      <LeftView />
      <RightView />
      <Total />
      <Random />
    </Wrapper>
  );
};

const LeftView = () => {
  const {pizza, leftSelected, PizzaStore} = usePizzaStore();
  return (
    <HalfView>
      <GestureRecognizer
        onSwipe={(direction) =>
          PizzaStore.onSwipe({type: LEFT, dir: direction})
        }>
        <PizzaPreviewImage>
          <Img
            resizeMode={'cover'}
            resizeMethod={'resize'}
            img={pizza[leftSelected ? leftSelected - 1 : pizza.length - 1].img}
          />
        </PizzaPreviewImage>
        <PizzaNameContainer>
          <PizzaNameText>{pizza[leftSelected].name}</PizzaNameText>
          <PizzaPriceText>{pizza[leftSelected].price}р</PizzaPriceText>
        </PizzaNameContainer>
        <PizzaImageContainer>
          <Img
            resizeMode={'cover'}
            resizeMethod={'resize'}
            img={pizza[leftSelected].img}
          />
        </PizzaImageContainer>
      </GestureRecognizer>
    </HalfView>
  );
};

const RightView = () => {
  const {pizza, rightSelected, PizzaStore} = usePizzaStore();
  return (
    <HalfView rtl>
      <GestureRecognizer
        onSwipe={(direction) =>
          PizzaStore.onSwipe({type: RIGHT, dir: direction})
        }>
        <PizzaPreviewImage rtl>
          <Img
            resizeMode={'cover'}
            resizeMethod={'resize'}
            img={
              pizza[rightSelected ? rightSelected - 1 : pizza.length - 1].img
            }
          />
        </PizzaPreviewImage>
        <PizzaNameContainer rtl>
          <PizzaNameText rtl>{pizza[rightSelected].name}</PizzaNameText>
          <PizzaPriceText rtl>{pizza[rightSelected].price}р</PizzaPriceText>
        </PizzaNameContainer>
        <PizzaImageContainer rtl>
          <Img img={pizza[rightSelected].img} />
        </PizzaImageContainer>
      </GestureRecognizer>
    </HalfView>
  );
};

const Total = () => {
  const {pizza, rightSelected, leftSelected} = usePizzaStore();
  return (
    <TotalContainer>
      <TotalText>
        Цена{' '}
        {getMiddlePrice(pizza[leftSelected].price, pizza[rightSelected].price)}р
      </TotalText>
      <Button
        text={'Объеденить половинки'}
        styles={{
          marginRight: normalize(10),
          marginLeft: normalize(10),
          marginTop: normalize(15),
        }}
        onPress={() => alert('Пицца составленна')}
      />
    </TotalContainer>
  );
};
