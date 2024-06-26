import React from 'react';
import { Button } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { type NavigationItemType } from './types';

interface NavigationItemProps {
  item: NavigationItemType;
}

export const NavigationItem = ({ item }: NavigationItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return <Button title={item.title} onPress={() => navigation.navigate(item.id)} />;
};
