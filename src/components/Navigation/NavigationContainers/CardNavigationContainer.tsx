import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '~store/hooks';
import { setActiveScreen } from '~store/slices/navigation';
import { NavigationItemType } from '~types/navigation';
import styles from '../styles';
import CardItem from '../subcomponents/CardItem';

const CardNavigationContainer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const navigationItems = useAppSelector(state => state.navigation.items);

  const handleChangeScreen = (id: string) => {
    dispatch(setActiveScreen(id));
    navigation.navigate(id);
  };

  return (
    <View style={styles.cardNavigationContainer} accessibilityLabel="Navigation items">
      {navigationItems.map((item: NavigationItemType) => (
        <CardItem key={item.id} item={item} handleChangeScreen={handleChangeScreen} />
      ))}
    </View>
  );
};

export default CardNavigationContainer;
