import React from 'react';
import { Text, View } from 'react-native';
import { RteProps } from '../types';
import styles from '../styles';

const RteList = ({ content }: RteProps) => {
  return (
    <View style={styles.body}>
      {Array.isArray(content)
        ? content.map(item => (
            <View key={item} style={styles.listItemWrapper}>
              <Text>{'\u2022'}</Text>
              <Text style={[styles.listItemText]}>{item}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default RteList;
