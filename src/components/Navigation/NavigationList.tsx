import React from 'react';
import { View, Text } from 'react-native';

import navigationItems from '~data/navigation';

import { NavigationItem } from './NavigationItem';

export const NavigationList = () => {
  console.log(navigationItems);
  return (
    <View>
      <Text>Navigation items</Text>
      {navigationItems.map(item => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </View>
  );
};
