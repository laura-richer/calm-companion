import { StyleSheet } from 'react-native';
import { spacer, lineHeight } from '~styles/variables';

export default StyleSheet.create({
  heading: {
    marginBottom: spacer.XS,
  },
  body: {
    marginBottom: spacer.SM,
    lineHeight: lineHeight.default,
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
  },
});
