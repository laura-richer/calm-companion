import React from 'react';
import { View, Text, Button } from 'react-native';

import { type ListItemType } from '~components/List/types';

interface ListItemProps {
  item: ListItemType;
  handleListItemClick: any;
}

const ListItem = ({ item, handleListItemClick }: ListItemProps) => {
  return (
    <View>
      <Button onPress={() => handleListItemClick(item.id)} title={item.title} />
      <Text>{item.done ? 'true' : 'false'}</Text>
    </View>
  );
};

export default ListItem;
