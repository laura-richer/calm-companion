import { ListItemType } from '~types/list';
import { ItemContentItemType } from '~types/itemContent';

export type QuickHelpType = {
  id: string;
  items: ListItemType[];
};

export type QuickHelpItemContentType = {
  id: number;
  title: string;
  content: ItemContentItemType[];
};
