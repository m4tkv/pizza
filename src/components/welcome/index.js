import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button, Img} from 'ui';
import {WELCOME_IMAGE} from 'constants';

import {
  Container,
  WelcomeHeader,
  WelcomeHeaderContainer,
  WelcomeText,
  ButtonContainer,
} from './style';

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <WelcomeHeaderContainer>
        <WelcomeHeader>Добро пожаловать в {`\n`}тестовый проект!</WelcomeHeader>
      </WelcomeHeaderContainer>
      <WelcomeText>
        Приложение реализовано только под android. Под рукой не было мака:(
      </WelcomeText>
      <ButtonContainer>
        <Button text={'Начать'} onPress={() => navigation.navigate('pizza')} />
      </ButtonContainer>
      <Img img={WELCOME_IMAGE} styles={{height: 300, width: '100%'}} />
    </Container>
  );
};
