import React from 'react';
import { Provider } from 'react-redux';
import store from '~store/index';
import { NavigationContainerWrapper } from '~components/Navigation/NavigationContainer';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainerWrapper />
    </Provider>
  );
}

export default App;
