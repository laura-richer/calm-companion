import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { type NavigationItemType } from './types';

export const NavigationItem = ({ item }) => {
  const navigation = useNavigation();

  return <Button title={item.title} onPress={() => navigation.navigate(item.id)} />;
};
