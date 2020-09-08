import styled from 'styled-components';

import {normalize} from 'style';
import {SAFETY_ORANGE} from 'constants';

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: ${normalize(15)}px 0;
`;

export const HeaderBackContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 0 0 ${normalize(20)}px;
  position: absolute;
  top: ${normalize(14)}px;
`;
export const HeaderBackText = styled.Text`
  color: ${SAFETY_ORANGE};
  font-size: ${normalize(12)}px;
`;
export const HeaderTitleContainer = styled.View`
  flex-grow: 2;
  justify-content: center;
  align-items: center;
`;
export const HeaderTitleText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${normalize(13)}px;
`;
