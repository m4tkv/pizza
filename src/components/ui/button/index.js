import React from 'react';

import {SAFETY_ORANGE, WHITE} from 'constants';

import {ButtonView, ButtonText} from './style';

export const Button = ({
  text = '',
  color = SAFETY_ORANGE,
  textColor = WHITE,
  styles = {},
  ...props
}) => {
  return (
    <ButtonView style={{backgroundColor: SAFETY_ORANGE, ...styles}} {...props}>
      <ButtonText style={{color: WHITE}}>{text}</ButtonText>
    </ButtonView>
  );
};
