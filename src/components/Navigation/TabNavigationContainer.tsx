import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '~screens/Home.tsx';
import navigationItems from '~data/navigation';

const Tab = createBottomTabNavigator();

const TabNavigationList = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      {navigationItems.map(item => (
        <Tab.Screen
          name={item.id}
          key={item.id}
          component={item.component}
          options={{ title: item.title }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigationList;
