import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '~store/index';

export const renderWithProviders = (ui: React.ReactElement) => {
  const wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <NavigationContainer>{children}</NavigationContainer>
      </Provider>
    );
  };

  return {
    ...render(ui, {
      wrapper,
    }),
  };
};
