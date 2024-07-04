import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '~screens/Welcome/Welcome';
import Home from '~screens/Home.tsx';
import HelpfulContacts from '~screens/HelpfulContacts.tsx';

const Stack = createStackNavigator();

const HelpfulContactsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HelpfulContacts" component={HelpfulContacts} />
    </Stack.Navigator>
  );
};

export default HelpfulContactsStack;
