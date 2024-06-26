import { createSlice } from '@reduxjs/toolkit';
import { type NavigationItemType } from '~components/Navigation/types.ts';
import navigationItems from '~data/navigation';

interface NavigationState {
  items: NavigationItemType[];
}

const initialState: NavigationState = {
  items: navigationItems,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
