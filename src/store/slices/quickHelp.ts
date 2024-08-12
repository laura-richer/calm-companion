import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import quickHelp from '~data/screens/quickHelp/quick-help';
import quickHelpItems from '~data/screens/quickHelp/items.json';
import { QuickHelpItemContentType } from '~types/quickHelp';

export const initialState = {
  ...quickHelp,
  itemsContent: quickHelpItems as QuickHelpItemContentType[],
};

export const quickHelpSlice = createSlice({
  name: 'quickHelp',
  initialState,
  reducers: {
    toggleDoneState: (state, action: PayloadAction<number>): void => {
      const itemId = action.payload;
      const index = state.items.findIndex(item => item.id === itemId);

      if (index === -1) return;

      state.items[index].done = !state.items[index].done;
    },
  },
});

export const selectItemById = (
  state: RootState,
  itemId?: number
): QuickHelpItemContentType | undefined => {
  if (itemId === undefined) return undefined;

  const selectedItem = state.quickHelp.itemsContent.find(item => item.id === itemId);
  return selectedItem;
};

export const { toggleDoneState } = quickHelpSlice.actions;
export default quickHelpSlice.reducer;
