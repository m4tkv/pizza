import React from 'react';

import Welcome from 'components/welcome';
import {Layout} from 'layouts';

export default () => {
  return (
    <Layout
      header={{
        type: 1,
      }}>
      <Welcome />
    </Layout>
  );
};
