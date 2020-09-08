import React from 'react';
import {SvgCss} from 'react-native-svg';

import {SAFETY_ORANGE} from 'constants';
import {normalize} from 'style';

import {ArrowContainer} from './style';

const xml = (color) => `
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="15"
      fill="none"
      viewBox="0 0 10 15"
    >
      <path
        fill="${color}"
        d="M.47 7.914l6.797 6.641c.298.29 1.174.71 1.677.218.504-.492.299-1.187 0-1.477L2.9 7.386l6.045-5.909c.299-.29.191-.985-.09-1.259-.298-.29-1.29-.29-1.588 0L.47 6.86a.74.74 0 000 1.055z"
      ></path>
    </svg>
`;

export const Arrow = ({color = SAFETY_ORANGE, styles = {}}) => {
  return (
    <ArrowContainer style={styles}>
      <SvgCss xml={xml(color)} width={normalize(10)} height={normalize(15)} />
    </ArrowContainer>
  );
};
