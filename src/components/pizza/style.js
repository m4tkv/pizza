import styled from 'styled-components';
import {GRAY, WHITE, BLACK} from 'constants';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const HalfView = styled.View`
  width: 50%;
  flex: 1;
  overflow: hidden;
  padding: ${(props) => (props.rtl ? '0 10px 0 0' : '0 0 0 10px')};
  margin: ${(props) => (props.rtl ? '0 0 0 2px' : '0 2px 0 0')};
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
  height: 250px;
  width: 250px;
  ${(props) => (props.rtl ? `left: -125px;` : 'right: -125px;')}
  right: -125px;
  top: 125px;
  position: absolute;
`;

export const TotalContainer = styled.View`
  position: absolute;
  bottom: 30px;
  width: 100%;
  flex: 1;
`;
export const TotalText = styled.Text`
  text-align: center;
  font-weight: bold;
`;

export const PizzaPreviewImage = styled.View`
  height: 80px;
  width: 80px;
  ${(props) => (props.rtl ? `left: -40px;` : 'right: -40px;')}
  right: -40px;
  top: 40px;
  position: absolute;
  opacity: 0.5;
`;

export const RandomContainer = styled.View`
  width: 50px;
  height: 50px;
  background: ${WHITE};
  position: absolute;
  right: 30px;
  bottom: 100px;
  padding: 10px;
  border-radius: 50px;
  shadow-color:${BLACK};
  shadow-offset: {
    width: 5,
    height: 5,
  };
  shadow-opacity: 1;
  shadow-radius: 10;
  elevation: 7;
`;
export const RandomButton = styled.TouchableOpacity``;
