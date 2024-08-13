import { StyleSheet } from 'react-native';
import { spacer, lineHeight, colors } from '~styles/variables';

export default StyleSheet.create({
  heading: {
    marginBottom: spacer.XS,
    color: colors.TWO,
  },
  body: {
    marginBottom: spacer.MD,
    lineHeight: lineHeight.default,
    color: colors.ONE,
  },
  listItemWrapper: {
    flexDirection: 'row',
    gap: spacer.SM,
  },
  listItemText: {
    flex: 1,
    marginLeft: spacer.SM,
    marginBottom: spacer.SM,
    lineHeight: lineHeight.default,
    color: colors.ONE,
  },
});
