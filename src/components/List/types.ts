import { ListItemType } from '~types/list';

export type ListContainerProps = {
  listItems: ListItemType[];
  handleItemClick: any;
  handleHintClick: any;
  accessabilityLabel: string;
};

export type ListItemProps = {
  item: ListItemType;
  handleItemClick: any;
  handleHintClick: any;
};
