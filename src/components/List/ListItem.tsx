import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleDoneState } from '~store/slices/quickHelp';
import { type ListItemType } from '~components/List/types';

interface ListItemProps {
  item: ListItemType;
}

const ListItem = ({ item }: ListItemProps) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button onPress={() => dispatch(toggleDoneState(item.id))} title={item.title} />
      <Text>{item.done ? 'true' : 'false'}</Text>
    </View>
  );
};

export default ListItem;
