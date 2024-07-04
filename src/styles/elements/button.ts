import { StyleSheet } from 'react-native';
import { fontFamily, colors, fontSize, spacer } from '~styles/variables';

export default StyleSheet.create({
  fullWidth: {
    width: '100%',
    alignItems: 'center',
  },
  primary: {
    color: colors.ONE,
    backgroundColor: colors.WHITE,
    borderRadius: 50,
  },
  primaryText: {
    fontFamily: fontFamily.BOLD,
    fontSize: fontSize.MD,
    padding: spacer.XS,
  },
});
