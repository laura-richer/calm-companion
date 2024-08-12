import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
import { BackButtonProps } from './types';

const BackButton = ({ type = 'light' }: BackButtonProps) => {
  const imageSource =
    type === 'light'
      ? require('~assets/images/back-button.png')
      : require('~assets/images/back-button-dark.png');

  return <Image source={imageSource} style={styles.backButtonImage} resizeMode="contain" />;
};

export default BackButton;
