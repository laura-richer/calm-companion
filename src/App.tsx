import React from 'react';
import { Provider } from 'react-redux';
import store from '~store/index';
import AppNavigationContainer from '~components/Navigation/AppNavigationContainer';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
}

export default App;
