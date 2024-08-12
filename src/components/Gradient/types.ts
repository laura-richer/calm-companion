import { StyleProp, ViewStyle } from 'react-native';

export type GradientProps = {
  children: string | JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};
