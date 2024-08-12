import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '~store/index';
import StackNavigationContainer from '~components/Navigation/NavigationContainers/StackNavigationContainer';

function App(): React.JSX.Element {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <StackNavigationContainer />
      </SafeAreaProvider>
    </StoreProvider>
  );
}

export default App;
