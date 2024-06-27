import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '~store/hooks';
import { type NavigationItemType } from '~components/Navigation/types.ts';
import NavigationItem from './NavigationItem';

export const NavigationList = () => {
  const navigationItems = useAppSelector(state => state.navigation.items);

  return (
    <View>
      <Text>Navigation items</Text>
      {navigationItems.map((item: NavigationItemType) => (
        <NavigationItem key={item.id} item={item} />
      ))}
    </View>
  );
};
