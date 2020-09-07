import styled from 'styled-components';
import {WHITE} from 'constants';

export const Container = styled.View`
  flex: 1;
  background: ${WHITE};
`;

export const WelcomeHeader = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
`;

export const WelcomeText = styled.Text`
  text-align: center;
  font-size: 14px;
`;

export const WelcomeHeaderContainer = styled.View`
  padding-top: 40px;
`;

export const ButtonContainer = styled.View`
  align-self: center;
  padding: 40px 0 0;
`;
