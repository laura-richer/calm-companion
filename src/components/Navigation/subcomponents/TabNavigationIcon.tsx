import React from 'react';
import { Image } from 'react-native';
import { TabNavigationIconProps } from '../types';
import styles from '../styles';

const TabNavigationIcon = ({ icon }: TabNavigationIconProps) => {
  return <Image style={styles.tabNavigationItemIcon} source={icon} />;
};

export default TabNavigationIcon;
