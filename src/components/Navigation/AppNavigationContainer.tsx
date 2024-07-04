import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigationContainer from './TabNavigationContainer';
import Welcome from '~screens/Welcome/Welcome.tsx';
import Home from '~screens/Home.tsx';
import BackButton from '~components/BackButton';
import navigationItems from '~data/navigation';
import { colors } from '~styles/variables';

const Stack = createStackNavigator();
const headerBackImage = () => <BackButton />;

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerBackTitleStyle: { color: colors.WHITE },
          headerBackImage,
          headerTitleStyle: { color: colors.TWO },
          headerStyle: { backgroundColor: colors.TWO },
          headerShadowVisible: false,
        }}
      >
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

export default AppNavigationContainer;
