import styled from 'styled-components';
import {BLACK} from 'constants';

export const ButtonView = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px 25px;
  shadow-color:${BLACK};
  shadow-offset: {
    width: 5,
    height: 5,
  };
  shadow-opacity: 1;
  shadow-radius: 10;
  elevation: 7;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
`;
