import styled from 'styled-components';
import {WHITE} from 'constants';
import {normalize} from 'style';

export const Container = styled.View`
  flex: 1;
  background: ${WHITE};
`;

export const WelcomeHeader = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${normalize(17)}px;
  line-height: ${normalize(25)}px;
`;

export const WelcomeText = styled.Text`
  text-align: center;
  font-size: ${normalize(12)}px;
`;

export const WelcomeHeaderContainer = styled.View`
  padding-top: ${normalize(40)}px;
`;

export const ButtonContainer = styled.View`
  align-self: center;
  padding: ${normalize(40)}px 0 0;
`;
