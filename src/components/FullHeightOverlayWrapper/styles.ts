import { StyleSheet } from 'react-native';
import { spacer, colors } from '~styles/variables';

export default StyleSheet.create({
  fullHeightOverlayHeader: {
    marginTop: spacer.XS,
    marginBottom: spacer.SM,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
  },
  fullHeightOverlayTitle: {
    maxWidth: '80%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    color: colors.TWO,
  },
});
