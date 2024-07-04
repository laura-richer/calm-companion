import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { GradientProps } from './types';
import { colors } from '~styles/variables';

const GradientDark = ({ children, style }: GradientProps) => {
  return (
    <LinearGradient
      colors={[colors.TWO, colors.THREE]}
      useAngle={true}
      angle={170}
      angleCenter={{ x: 0.75, y: 0.75 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientDark;
