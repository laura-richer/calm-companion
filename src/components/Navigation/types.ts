import { ImageSourcePropType } from 'react-native';
import { NavigationItemType } from '~types/navigation';

export type TabNavigationIconProps = {
  icon: ImageSourcePropType;
};

export type TabNavigationLabelProps = {
  label: string;
};

export type CardItemProps = {
  item: NavigationItemType;
  handleChangeScreen: (id: string) => void;
};
