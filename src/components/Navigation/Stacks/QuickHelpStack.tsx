import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '~screens/Welcome/Welcome';
import Home from '~screens/Home.tsx';
import QuickHelp from '~screens/QuickHelp.tsx';

const Stack = createStackNavigator();

const QuickHelpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="QuickHelp" component={QuickHelp} />
    </Stack.Navigator>
  );
};

export default QuickHelpStack;
