import React from 'react';
import { View } from 'react-native';
import ListItem from './ListItem';
import styles from './styles';
import { ListContainerProps } from './types';
import { ListItemType } from '~types/list';

const ListContainer = ({
  listItems,
  handleItemClick,
  handleHintClick,
  accessabilityLabel,
}: ListContainerProps) => {
  return (
    <View style={styles.listContainer} accessibilityLabel={accessabilityLabel}>
      {listItems.map((listItem: ListItemType) => (
        <ListItem
          key={listItem.id}
          item={listItem}
          handleItemClick={handleItemClick}
          handleHintClick={handleHintClick}
        />
      ))}
    </View>
  );
};

export default ListContainer;
