import React from 'react';
import { Text } from 'react-native';
import { RteProps } from '../types';
import { typographyStyles } from '~styles/global';
import styles from '../styles';

const RteHeading = ({ content }: RteProps) => {
  return <Text style={[typographyStyles.textMd, styles.heading]}>{content}</Text>;
};

export default RteHeading;
