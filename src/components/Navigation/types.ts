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
  icon: string;
};
