import { StyleSheet } from 'react-native';
import { colors, borderRadius, spacer, fontFamily, fontSize } from '~styles/variables';

export default StyleSheet.create({
  listContainer: {
    display: 'flex',
    gap: spacer.SM,
  },
  listItemWrapper: {
    backgroundColor: colors.WHITE,
    borderRadius: borderRadius.default,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacer.XS,
    paddingHorizontal: spacer.SM,
    paddingVertical: spacer.XS,
    borderRadius: borderRadius.default,
  },
  listItemPressableArea: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacer.XS,
  },
  listItemIcon: {
    width: 25,
    height: 25,
    borderColor: colors.TWO,
    borderWidth: 2,
    borderRadius: 50,
  },
  listItemText: {
    color: colors.TWO,
  },
  listItemCheckedText: {
    color: colors.WHITE,
  },
  listItemHelper: {
    fontFamily: fontFamily.MEDIUM,
    fontSize: fontSize.SM,
    textDecorationLine: 'underline',
    marginLeft: 'auto',
    color: colors.ONE,
  },
});