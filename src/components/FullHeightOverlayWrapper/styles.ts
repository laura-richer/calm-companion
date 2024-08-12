import { StyleSheet } from 'react-native';
import { spacer } from '~styles/variables';

export default StyleSheet.create({
  fullHeightOverlayHeader: {
    marginTop: spacer.XS,
    marginBottom: spacer.MD,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
  },
  fullHeightOverlayTitle: {
    maxWidth: '80%',
    textAlign: 'center',
    marginHorizontal: 'auto',
  },
});
