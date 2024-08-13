import { StyleSheet } from 'react-native';
import { fontFamily, colors, fontSize, spacer } from '~styles/variables';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacer.MD,
    paddingVertical: spacer.LG,
  },
  header: {
    gap: spacer.MD,
    alignItems: 'center',
  },
  footer: {
    gap: spacer.LG,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: colors.WHITE,
  },
  subtitle: {
    fontFamily: fontFamily.MEDIUM,
    fontSize: fontSize.LG,
    color: colors.WHITE,
  },
  bodyText: {
    fontFamily: fontFamily.MEDIUM,
    fontSize: fontSize.MD,
    color: colors.WHITE,
    textAlign: 'center',
  },
  image: {
    maxWidth: '75%',
  },
});
