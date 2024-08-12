import { ImageSourcePropType } from 'react-native';

export type ScreenHeaderProps = {
  title: string;
  image: ImageSourcePropType;
  imageWidth: number;
  imageHeight: number;
  imageFlushToBottom?: boolean;
};
