import React from 'react';

import {Header} from 'ui';
import {Page, Wrapper} from './style';

export const Layout = ({header, children} = {}) => {
  return (
    <Page>
      <Header {...header} />
      <Wrapper>{children}</Wrapper>
    </Page>
  );
};
