import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from './slices/navigation';
import quickHelpSlice from './slices/quickHelp';

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    navigation: navigationSlice,
    quickHelp: quickHelpSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
