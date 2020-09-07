import styled from 'styled-components';
import {SAFETY_ORANGE} from 'constants';

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 15px 0;
`;

export const HeaderBackContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 0 0 20px;
  position: absolute;
  top: 80%;
`;
export const HeaderBackText = styled.Text`
  color: ${SAFETY_ORANGE};
`;
export const HeaderTitleContainer = styled.View`
  flex-grow: 2;
  justify-content: center;
  align-items: center;
`;
export const HeaderTitleText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;
