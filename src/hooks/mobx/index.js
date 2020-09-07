import React from 'react';
import {MobXProviderContext, useObserver} from 'mobx-react';

const useStores = () => {
  return React.useContext(MobXProviderContext);
};

export const useStore = (keys) => {
  const stores = useStores();
  const observers = keys.reduce(
    (res, cur) => ((res[cur] = stores[cur]), res),
    {},
  );
  return useObserver(() => observers);
};
