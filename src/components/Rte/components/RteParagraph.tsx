import React from 'react';
import { Text } from 'react-native';
import { RteProps } from '../types';
import styles from '../styles';

const RteParagraph = ({ content }: RteProps) => {
  return <Text style={styles.body}>{content}</Text>;
};

export default RteParagraph;
