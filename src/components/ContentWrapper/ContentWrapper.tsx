import React from 'react';
import { ScrollView, View } from 'react-native';
import { ContentWrapperProps } from './types';
import styles from './styles';

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <ScrollView>
      <View style={styles.contentWrapperContainer}>{children}</View>
    </ScrollView>
  );
};

export default ContentWrapper;
