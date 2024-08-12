import { StyleSheet } from 'react-native';
import { colors, spacer } from '~styles/variables';

export default StyleSheet.create({
  container: {
    padding: spacer.XS,
  },
  containerFlushToBottom: {
    paddingBottom: 0,
  },
  title: {
    color: colors.WHITE,
    marginBottom: spacer.XS,
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  image: {
    opacity: 0.1,
  },
  imageFlushToBottom: {
    marginTop: spacer.XS,
  },
});
