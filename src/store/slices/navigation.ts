import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigationItemType } from '~types/navigation';
import navigationItems from '~data/navigation';

interface NavigationState {
  items: NavigationItemType[];
  activeScreen?: string;
}

export const initialState: NavigationState = {
  items: navigationItems,
  activeScreen: undefined,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveScreen: (state, action: PayloadAction<string>): void => {
      state.activeScreen = action.payload;
    },
  },
});

export const { setActiveScreen } = navigationSlice.actions;
export default navigationSlice.reducer;
