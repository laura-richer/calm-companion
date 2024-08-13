import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, RenderOptions } from '@testing-library/react-native';
import { Provider as StoreProvider } from 'react-redux';
import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootState } from '~store/index';
import navigationReducer, {
  initialState as navigationInitialState,
} from '~store/slices/navigation';
import quickHelpReducer, { initialState as quickHelpInitialState } from '~store/slices/quickHelp';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: EnhancedStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { preloadedState = {}, store = createTestStore(preloadedState) }: ExtendedRenderOptions = {}
) => {
  const wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <StoreProvider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </SafeAreaProvider>
      </StoreProvider>
    );
  };

  return {
    ...render(ui, {
      wrapper,
    }),
  };
};

const _createStore = (preloadedState: Partial<RootState> = {}): EnhancedStore => {
  return configureStore({
    reducer: {
      navigation: navigationReducer,
      quickHelp: quickHelpReducer,
    },
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: { warnAfter: 256 },
        serializableCheck: { warnAfter: 256 },
      }),
  });
};

export const createTestStore = (preloadedState: DeepPartial<RootState> = {}): EnhancedStore => {
  const state: RootState = {
    // @ts-ignore
    navigation: {
      ...navigationInitialState,
      ...(preloadedState.navigation || {}),
    },
    // @ts-ignore
    quickHelp: {
      ...quickHelpInitialState,
      ...(preloadedState.quickHelp || {}),
    },
  };
  const store: EnhancedStore = _createStore(state);
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
};
