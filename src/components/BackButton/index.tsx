import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const BackButton = () => {
  return (
    <Image
      source={require('~assets/images/back-button.png')}
      style={styles.image}
      resizeMode="contain"
    />
  );
};

export default BackButton;
