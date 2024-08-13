import { StyleSheet } from 'react-native';
import { spacer, lineHeight, colors } from '~styles/variables';

export default StyleSheet.create({
  heading: {
    marginBottom: spacer.XS,
    color: colors.TWO,
  },
  body: {
    marginBottom: spacer.SM,
    lineHeight: lineHeight.default,
    color: colors.ONE,
  },
  listItemWrapper: {
    flexDirection: 'row',
    gap: spacer.XS,
  },
  listItemText: {
    flex: 1,
    marginLeft: spacer.XS,
    marginBottom: spacer.XS,
    lineHeight: lineHeight.default,
    color: colors.ONE,
  },
});
