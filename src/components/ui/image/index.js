import React from 'react';
import {Image} from 'react-native';
import {SvgCssUri} from 'react-native-svg';

import {isSvg} from 'common';

export const Img = ({
  img = '',
  styles = {width: '100%', height: '100%'},
  ...props
}) => {
  if (!img) return null;
  if (isSvg(img)) {
    return <SvgCssUri width={styles.width} height={styles.height} uri={img} />;
  }
  return (
    <Image
      style={styles}
      source={{
        uri: img,
      }}
      {...props}
    />
  );
};
