import React from 'react';
import { View, Text, Image } from 'react-native';
import GradientDark from '~components/Gradient/GradientDark';
import { ScreenHeaderProps } from './types';
import { typographyStyles } from '~styles/global';
import styles from './styles';

const ScreenHeader = ({ title, icon }: ScreenHeaderProps) => {
  return (
    <GradientDark>
      <View style={styles.container}>
        <Text style={[typographyStyles.titleLg, styles.title]}>{title}</Text>
      </View>
      {/* <Image source={require(icon)} /> */}
    </GradientDark>
  );
};

export default ScreenHeader;
