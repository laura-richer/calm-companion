import { ImageSourcePropType } from 'react-native';
import { ListItemType } from '~types/list';
import { ItemContentItemType } from '~types/itemContent';

export type QuickHelpType = {
  id: string;
  title: string;
  description?: string;
  headerImage: ImageSourcePropType;
  items: ListItemType[];
};

export type QuickHelpItemContentType = {
  id: number;
  title: string;
  content: ItemContentItemType[];
};
