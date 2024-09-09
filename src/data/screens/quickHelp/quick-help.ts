import { ListItemType } from '~types/list';
import { QuickHelpType } from '~types/quickHelp';

const items: ListItemType[] = [
  {
    id: 0,
    title: '5x5 Breathing',
    done: false,
    slug: '5x5-breathing',
  },
  {
    id: 1,
    title: 'Take a bath',
    done: false,
    slug: 'take-a-bath',
  },
  {
    id: 2,
    title: 'Exersise',
    done: false,
    slug: 'exersise',
  },
  {
    id: 3,
    title: 'Write a todo list',
    done: false,
    slug: 'write-a-todo-list',
  },
  {
    id: 4,
    title: 'Schedule worry time',
    done: false,
    slug: 'schedule-worry-time',
  },
  {
    id: 5,
    title: 'Guided meditation',
    done: false,
    slug: 'guided-meditation',
  },
  {
    id: 6,
    title: 'Sound bath',
    done: false,
    slug: 'sound-bath',
  },
  {
    id: 7,
    title: 'Grounding exersise',
    done: false,
    slug: 'grounding-exersise',
  },
];

const quickHelp: QuickHelpType = {
  id: 'QuickHelp',
  title: 'Quick Help',
  headerImage: require('~assets/images/screenHeaders/quick-help.png'),
  description:
    'Quick help collection of quick and easy techniques and things to do to help you feel better. Tick them off as you go each time you need some quick anxiety relief',
  items,
};

export default quickHelp;
