import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {normalize} from 'style';
import {Arrow} from 'svg';

import {
  HeaderContainer,
  HeaderBackContainer,
  HeaderBackText,
  HeaderTitleContainer,
  HeaderTitleText,
} from './style';

export const Header = ({type, ...props}) => {
  switch (type) {
    case 2:
      return <Type2 {...props} />;
    default:
      return <Type1 {...props} />;
  }
};

const Type1 = () => null;

const Type2 = ({title = '', backTitle = ''}) => {
  const navigation = useNavigation();
  return (
    <HeaderContainer>
      <HeaderBackContainer>
        <HeaderBackText onPress={() => navigation.goBack()}>
          <Arrow styles={{paddingTop: normalize(5)}} />
          {backTitle}
        </HeaderBackText>
      </HeaderBackContainer>
      <HeaderTitleContainer>
        <HeaderTitleText>{title}</HeaderTitleText>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
