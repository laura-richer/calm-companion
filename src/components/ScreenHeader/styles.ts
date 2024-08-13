import { StyleSheet } from 'react-native';
import { colors, spacer } from '~styles/variables';

export default StyleSheet.create({
  container: {
    padding: spacer.SM,
  },
  containerFlushToBottom: {
    paddingBottom: 0,
  },
  title: {
    color: colors.WHITE,
    marginBottom: spacer.SM,
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  image: {
    opacity: 0.1,
  },
  imageFlushToBottom: {
    marginTop: spacer.SM,
  },
});
