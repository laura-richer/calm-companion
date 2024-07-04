import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '~screens/Welcome/Welcome';
import Home from '~screens/Home.tsx';
import CbtTools from '~screens/CbtTools.tsx';

const Stack = createStackNavigator();

const CbtToolsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CbtTools" component={CbtTools} />
    </Stack.Navigator>
  );
};

export default CbtToolsStack;
