import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '~screens/Welcome/Welcome.tsx';
import { Home } from '~screens/Home.tsx';
import navigationItems from '~data/navigation';

export const NavigationContainerWrapper = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        {navigationItems.map(item => (
          <Stack.Screen
            name={item.id}
            key={item.id}
            component={item.component}
            options={{ title: item.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
