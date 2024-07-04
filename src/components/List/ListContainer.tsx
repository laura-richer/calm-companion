import React from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';
import { type ListItemType } from '~components/List/types';

interface ListContainerProps {
  listItems: ListItemType[];
  handleListItemClick: any;
}

const ListContainer = ({ listItems, handleListItemClick }: ListContainerProps) => {
  return (
    <View>
      {listItems.map((listItem: ListItemType) => (
        <ListItem key={listItem.id} item={listItem} handleListItemClick={handleListItemClick} />
      ))}
    </View>
  );
};

export default ListContainer;
