import styled from 'styled-components';
import {Platform} from 'react-native';

import {normalize} from 'style';
import {GRAY, WHITE, BLACK} from 'constants';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const HalfView = styled.View`
  width: 50%;
  flex: 1;
  overflow: hidden;
  padding: ${(props) =>
    props.rtl ? `0 ${normalize(10)}px 0 0` : `0 0 0 ${normalize(10)}px`};
  margin: ${(props) =>
    props.rtl ? `0 0 0 ${normalize(2)}px` : `0 ${normalize(2)}px 0 0`};
`;

export const PizzaNameContainer = styled.View``;
export const PizzaNameText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  ${(props) => (props.rtl ? `text-align:right` : '')}
`;
export const PizzaPriceText = styled.Text`
  color: ${GRAY};
  ${(props) => (props.rtl ? `text-align:right` : '')}
`;

export const PizzaImageContainer = styled.View`
  height: ${normalize(240)}px;
  width: ${normalize(240)}px;
  ${(props) =>
    props.rtl ? `left: -${normalize(120)}px;` : `right: -${normalize(120)}px;`}
  right: -${normalize(120)}px;
  top: ${normalize(120)}px;
  position: absolute;
`;

export const TotalContainer = styled.View`
  position: absolute;
  bottom: ${normalize(30)}px;
  width: 100%;
  flex: 1;
`;
export const TotalText = styled.Text`
  text-align: center;
  font-weight: bold;
`;

export const PizzaPreviewImage = styled.View`
  height: ${normalize(70)}px;
  width: ${normalize(70)}px;
  ${(props) =>
    props.rtl ? `left: -${normalize(35)}px;` : `right: -${normalize(35)}px;`}
  right: -${normalize(35)}px;
  top: ${normalize(35)}px;
  position: absolute;
  opacity: 0.5;
`;

export const RandomContainer = styled.View`
  width: ${normalize(45)}px;
  height: ${normalize(45)}px;
  background: ${WHITE};
  position: absolute;
  right: ${normalize(30)}px;
  bottom: ${normalize(90)}px;
  padding: ${normalize(10)}px;
  border-radius: ${normalize(45)}px;
  shadow-color:${BLACK};
  shadow-offset: {
    width: 5,
    height: 5,
  };
  shadow-opacity: 1;
  shadow-radius: ${Platform.OS === 'ios'?5:10};
  elevation: ${Platform.OS === 'ios'?1:7};
`;
export const RandomButton = styled.TouchableOpacity``;
