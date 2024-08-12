import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  QuickHelp: undefined;
  AnxietyResources: undefined;
  CbtTools: undefined;
  HelpfulContacts: undefined;
};

export type NavigationItemType = {
  id: string;
  component: React.ComponentType;
  title: string;
  tabIcon: ImageSourcePropType;
  cardIcon: ImageSourcePropType;
};
