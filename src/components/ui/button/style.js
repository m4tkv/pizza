import styled from 'styled-components';
import {Platform} from 'react-native';

import {normalize} from 'style';
import {BLACK} from 'constants';

export const ButtonView = styled.TouchableOpacity`
  border-radius: ${normalize(10)}px;
  padding: ${normalize(10)}px ${normalize(25)}px;
  shadow-color:${BLACK};
  shadow-offset: {
    width: 5,
    height: 5,
  };
  shadow-opacity: 1;
  shadow-radius: ${Platform.OS === 'ios'?5:10};
  elevation: ${Platform.OS === 'ios'?1:7};
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: ${normalize(15)}px;
  text-transform: uppercase;
`;
