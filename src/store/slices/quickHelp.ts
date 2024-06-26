import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import quickHelp from '~data/screens/quick-help';

export const quickHelpSlice = createSlice({
  name: 'quickHelp',
  initialState: {
    ...quickHelp,
  },
  reducers: {
    toggleDoneState: (state, action: PayloadAction<number>): void => {
      const itemId = action.payload;
      const index = state.items.findIndex(item => item.id === itemId);

      if (index === -1) return;

      state.items[index].done = !state.items[index].done;
    },
  },
});

export const { toggleDoneState } = quickHelpSlice.actions;
export default quickHelpSlice.reducer;
