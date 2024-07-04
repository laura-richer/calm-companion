import React from 'react';
import { View } from 'react-native';
import ScreenHeader from '~components/ScreenHeader';
import CardNavigationList from '~components/CardNavigation/CardNavigationList';

const Home = () => {
  return (
    <View>
      <ScreenHeader title={'Home'} icon={'~assets/images/calm-companion.png'} />
      <CardNavigationList />
    </View>
  );
};

export default Home;
