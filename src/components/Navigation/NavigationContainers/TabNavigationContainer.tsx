import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigationIcon from '../subcomponents/TabNavigationIcon';
import TabNavigationLabel from '../subcomponents/TabNavigationLabel';
import { useAppSelector } from '~store/hooks';
import { colors } from '~styles/variables';

const Tab = createBottomTabNavigator();

const tabIcon = (icon: ImageSourcePropType) => <TabNavigationIcon icon={icon} />;
const tabLabel = (label: string) => <TabNavigationLabel label={label} />;

const TabNavigationContainer = () => {
  const activeScreen = useAppSelector(state => state.navigation.activeScreen);
  const navigationItems = useAppSelector(state => state.navigation.items);

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: colors.WHITE }}
      screenOptions={{
        headerShown: false,
        tabBarAccessibilityLabel: 'Tab navigation items',
      }}
      initialRouteName={`${activeScreen}Tab`}
    >
      {navigationItems.map(item => (
        <Tab.Screen
          name={`${item.id}Tab`}
          key={`${item.id}Tab`}
          component={item.component}
          options={{
            title: item.title,
            tabBarIcon: () => tabIcon(item.tabIcon),
            tabBarLabel: () => tabLabel(item.title),
            tabBarActiveBackgroundColor: colors.GREY,
            tabBarStyle: { borderTopColor: colors.GREY },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigationContainer;
