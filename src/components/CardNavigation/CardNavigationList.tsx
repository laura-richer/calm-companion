import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAppSelector } from '~store/hooks';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { type NavigationItemType } from '~components/Navigation/types.ts';

const CardNavigationList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const navigationItems = useAppSelector(state => state.navigation.items);

  return (
    <View>
      {navigationItems.map((item: NavigationItemType) => (
        <Pressable onPress={() => navigation.navigate(item.id)}>
          <Text>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default CardNavigationList;
