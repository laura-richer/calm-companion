import React from 'react';
import { View, Text, Image } from 'react-native';
import GradientDark from '~components/Gradient/GradientDark';
import { ScreenHeaderProps } from './types';
import { typographyStyles } from '~styles/global';
import styles from './styles';

const ScreenHeader = ({
  title,
  image,
  imageWidth,
  imageHeight,
  imageFlushToBottom = false,
}: ScreenHeaderProps) => {
  return (
    <GradientDark>
      <View
        testID="screenHeaderContainer"
        style={[styles.container, imageFlushToBottom ? styles.containerFlushToBottom : null]}
      >
        <Text style={[typographyStyles.textLg, styles.title]}>{title}</Text>
        <View style={styles.imageContainer}>
          <Image
            accessibilityLabel={`${title} image`}
            style={[styles.image, imageFlushToBottom ? styles.imageFlushToBottom : null]}
            source={image}
            resizeMode="contain"
            width={imageWidth}
            height={imageHeight}
          />
        </View>
      </View>
    </GradientDark>
  );
};

export default ScreenHeader;
