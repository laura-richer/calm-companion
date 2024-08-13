import { StyleSheet } from 'react-native';
import { fontFamily, colors, fontSize, spacer } from '~styles/variables';

export default StyleSheet.create({
  fullWidth: {
    width: '100%',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.WHITE,
    borderRadius: 50,
  },
  primaryText: {
    color: colors.ONE,
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: fontSize.MD,
    padding: spacer.XS,
  },
});
