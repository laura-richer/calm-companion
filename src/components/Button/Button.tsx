import React from 'react';
import { Pressable, Text } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { ButtonProps } from './types';
import { buttonStyles, dropShadowStyles } from '~styles/global';

const Button = ({ text, handleButtonPress }: ButtonProps) => {
  return (
    <DropShadow style={[dropShadowStyles.default, buttonStyles.fullWidth]}>
      <Pressable onPress={handleButtonPress} style={[buttonStyles.primary, buttonStyles.fullWidth]}>
        <Text style={buttonStyles.primaryText}>{text}</Text>
      </Pressable>
    </DropShadow>
  );
};

export default Button;
