import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainerWrapper } from '~components/Navigation/NavigationContainer';

import { store } from '~store/index';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainerWrapper />
    </Provider>
  );
}

export default App;
