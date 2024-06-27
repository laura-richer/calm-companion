import React from 'react';
import { View } from 'react-native';

import { NavigationList } from '~components/Navigation/NavigationList';

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NavigationList />
    </View>
  );
};

export default Home;
