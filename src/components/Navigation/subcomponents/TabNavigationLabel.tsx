import React from 'react';
import { Text } from 'react-native';
import { TabNavigationLabelProps } from '../types';
import styles from '../styles';

const TabNavigationLabel = ({ label }: TabNavigationLabelProps) => {
  return (
    <Text accessibilityLabel={label} style={styles.tabNavigationItemLabel}>
      {label}
    </Text>
  );
};

export default TabNavigationLabel;
