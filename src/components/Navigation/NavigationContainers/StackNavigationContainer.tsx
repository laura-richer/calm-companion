import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigationContainer from './TabNavigationContainer';
import { useAppSelector } from '~store/hooks';
import Welcome from '~screens/Welcome/Welcome';
import Home from '~screens/Home/Home';
import BackButton from '~components/BackButton/BackButton';
import { colors } from '~styles/variables';

const Stack = createStackNavigator();
const headerBackImage = () => <BackButton />;

const StackNavigationContainer = () => {
  const navigationItems = useAppSelector(state => state.navigation.items);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerBackAccessibilityLabel: 'Back to previous screen',
          cardStyle: { backgroundColor: colors.WHITE },
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
            component={TabNavigationContainer}
            options={{ title: item.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigationContainer;
