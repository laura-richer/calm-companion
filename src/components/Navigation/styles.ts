import { StyleSheet } from 'react-native';
import { fontFamily, fontSize, colors, spacer, borderRadius } from '~styles/variables';

export default StyleSheet.create({
  tabNavigationItemIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  tabNavigationItemLabel: {
    fontFamily: fontFamily.SEMIBOLD,
    fontSize: fontSize.XS,
    color: colors.ONE,
    paddingBottom: 2,
    paddingHorizontal: 5,
    lineHeight: fontSize.SM,
    textAlign: 'center',
  },
  cardNavigationContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNavigationItem: {
    flexBasis: '47%',
    marginBottom: spacer.MD,
  },
  cardNavigationItemInner: {
    padding: spacer.SM,
    borderRadius: borderRadius.default,
  },
  cardNavigationItemText: {
    color: colors.TWO,
    maxWidth: 100,
  },
  cardNavigationItemImage: {
    marginLeft: 'auto',
    opacity: 0.25,
    maxWidth: 75,
  },
});
