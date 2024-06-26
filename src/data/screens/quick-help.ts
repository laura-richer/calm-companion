import { type ListItemType } from '~components/List/types';

type QuickHelpType = {
  id: string;
  items: ListItemType[];
};

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
];

const quickHelp: QuickHelpType = {
  id: 'QuickHelp',
  items,
};

export default quickHelp;
