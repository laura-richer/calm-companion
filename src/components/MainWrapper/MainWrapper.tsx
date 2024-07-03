import React from 'react';
import { View } from 'react-native';
import { MainWrapperProps } from './types';
import styles from './styles';

const MainWrapper = ({ children }: MainWrapperProps) => {
  return <View style={styles.mainWrapper}>{children}</View>;
};

export default MainWrapper;
