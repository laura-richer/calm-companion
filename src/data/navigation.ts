import QuickHelp from '~screens/QuickHelp/QuickHelp';
import AnxietyResources from '~screens/AnxietyResources';
import CbtTools from '~screens/CbtTools';
import HelpfulContacts from '~screens/HelpfulContacts';

import { NavigationItemType } from '~types/navigation';

const navigationItems: NavigationItemType[] = [
  {
    id: 'QuickHelp',
    component: QuickHelp,
    title: 'Quick Help',
    tabIcon: require('~assets/images/tabIcons/quick-help.png'),
    cardIcon: require('~assets/images/screenHeaders/quick-help.png'),
  },
  {
    id: 'AnxietyResources',
    component: AnxietyResources,
    title: 'Anxiety Resources',
    tabIcon: require('~assets/images/tabIcons/anxiety-resources.png'),
    cardIcon: require('~assets/images/screenHeaders/anxiety-resources.png'),
  },
  {
    id: 'CbtTools',
    component: CbtTools,
    title: 'CBT Tools',
    tabIcon: require('~assets/images/tabIcons/cbt-tools.png'),
    cardIcon: require('~assets/images/screenHeaders/cbt-tools.png'),
  },
  {
    id: 'HelpfulContacts',
    component: HelpfulContacts,
    title: 'Helpful Contacts',
    tabIcon: require('~assets/images/tabIcons/helpful-contacts.png'),
    cardIcon: require('~assets/images/screenHeaders/helpful-contacts.png'),
  },
];

export default navigationItems;
