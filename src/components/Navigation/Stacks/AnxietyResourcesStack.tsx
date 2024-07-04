import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '~screens/Welcome/Welcome';
import Home from '~screens/Home.tsx';
import AnxietyResources from '~screens/AnxietyResources.tsx';

const Stack = createStackNavigator();

const AnxietyResourcesStack = () => {
  return (
    <Stack.Navigator initialRouteName="AnxietyResources">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnxietyResources" component={AnxietyResources} />
    </Stack.Navigator>
  );
};

export default AnxietyResourcesStack;
