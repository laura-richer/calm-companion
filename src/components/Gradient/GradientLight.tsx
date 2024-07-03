import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { GradientProps } from './types';
import { colors } from '~styles/variables';

const GradientLight = ({ children, style }: GradientProps) => {
  return (
    <LinearGradient
      colors={[colors.FOUR, colors.FIVE]}
      useAngle={true}
      angle={145}
      angleCenter={{ x: 0.75, y: 0.75 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientLight;
