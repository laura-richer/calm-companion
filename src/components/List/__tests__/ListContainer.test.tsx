import React from 'react';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import ListContainer from '../ListContainer';
import { ListItemType } from '~types/list';

const listItems: ListItemType[] = [
  {
    id: 1,
    title: 'Item title',
    slug: 'item-title',
    done: false,
  },
  {
    id: 2,
    title: 'Item title 2',
    slug: 'item-title-2',
    done: false,
  },
  {
    id: 3,
    title: 'Item title 3',
    slug: 'item-title-3',
    done: false,
  },
];

const mockItemClick = jest.fn();
const mockHintClick = jest.fn();

const _renderDefault = () => {
  return renderWithProviders(
    <ListContainer
      listItems={listItems}
      handleItemClick={mockItemClick}
      handleHintClick={mockHintClick}
      accessabilityLabel="List accessability label"
    />
  );
};

describe('list container', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders the correct amount of list items', () => {
    const renderedListItems = screen.getAllByAccessibilityHint('Tap to mark as done');
    expect(renderedListItems).toHaveLength(3);
  });
});
