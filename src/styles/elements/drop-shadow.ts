import { StyleSheet } from 'react-native';
import { colors } from '~styles/variables';

export default StyleSheet.create({
  default: {
    shadowColor: colors.DROP_SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
});
