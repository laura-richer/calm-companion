import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from './slices/navigation';
import quickHelpSlice from './slices/quickHelp';

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    quickHelp: quickHelpSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
