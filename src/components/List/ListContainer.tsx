import React from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';
import { type ListItemType } from '~components/List/types';

interface ListContainerProps {
  listItems: ListItemType[];
}

const ListContainer = ({ listItems }: ListContainerProps) => {
  return (
    <View>
      <Text>Navigation items</Text>
      {listItems.map((listItem: ListItemType) => (
        <ListItem key={listItem.id} item={listItem} />
      ))}
    </View>
  );
};

export default ListContainer;
