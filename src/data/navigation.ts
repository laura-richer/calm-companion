// import QuickHelpStack from '~components/Navigation/Stacks/QuickHelpStack';
// import AnxietyResourcesStack from '~components/Navigation/Stacks/AnxietyResourcesStack';
// import CbtToolsStack from '~components/Navigation/Stacks/CbtToolsStack.tsx';
// import HelpfulContactsStack from '~components/Navigation/Stacks/HelpfulContactsStack.tsx';

import QuickHelp from '~screens/QuickHelp';
import AnxietyResources from '~screens/AnxietyResources';
import CbtTools from '~screens/CbtTools.tsx';
import HelpfulContacts from '~screens/HelpfulContacts.tsx';

import { type NavigationItemType } from '~components/Navigation/types.ts';

const navigationItems: NavigationItemType[] = [
  {
    id: 'QuickHelp',
    component: QuickHelp,
    title: 'Quick Help',
    icon: 'Smile',
  },
  {
    id: 'AnxietyResources',
    component: AnxietyResources,
    title: 'Anxiety Resources',
    icon: 'Drop',
  },
  {
    id: 'CbtTools',
    component: CbtTools,
    title: 'CBT Tools',
    icon: 'Mountain',
  },
  {
    id: 'HelpfulContacts',
    component: HelpfulContacts,
    title: 'Helpful Contacts',
    icon: 'Tree',
  },
];

export default navigationItems;
