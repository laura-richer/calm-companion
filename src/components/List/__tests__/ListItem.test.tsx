import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import ListItem from '../ListItem';
import { ListItemType } from '~types/list';

const listItem: ListItemType = {
  id: 1,
  title: 'Item title',
  slug: 'item-title',
  done: false,
};

const mockItemClick = jest.fn();
const mockHintClick = jest.fn();

const _renderDefault = () => {
  return renderWithProviders(
    <ListItem
      key={listItem.id}
      item={listItem}
      handleItemClick={mockItemClick}
      handleHintClick={mockHintClick}
    />
  );
};

describe('list item', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders title', () => {
    const title = screen.getByText('Item title');
    expect(title).toBeOnTheScreen();
  });

  test('renders item without check if item is not done', () => {
    const itemUnchecked = screen.getByLabelText('Item title is not done');
    const itemCheckedImage = screen.queryByLabelText('Item title is done');
    expect(itemUnchecked).toBeOnTheScreen();
    expect(itemCheckedImage).not.toBeOnTheScreen();
  });

  test('renders item with check if item is done', () => {
    const item = { ...listItem, done: true };
    renderWithProviders(
      <ListItem
        key={item.id}
        item={item}
        handleItemClick={mockItemClick}
        handleHintClick={mockHintClick}
      />
    );

    const itemUnchecked = screen.queryByLabelText('Item title is not done');
    const itemCheckedImage = screen.getByLabelText('Item title is done');
    expect(itemUnchecked).not.toBeOnTheScreen();
    expect(itemCheckedImage).toBeOnTheScreen();
  });

  test('calls handleItemClick on click', () => {
    const toggleListItemButton = screen.getByLabelText('Toggle Item title done state');
    fireEvent.press(toggleListItemButton);
    expect(mockItemClick).toHaveBeenCalled();
  });

  // test('renders the "Whats this" text if list item has extra content', () => {});

  // test('renders hint trigger and calls handleHintClick on click', () => {
  //   const hint = screen.getByText('Whats this?');
  //   expect(hint).toBeOnTheScreen();

  //   fireEvent.press(hint);
  //   expect(mockHintClick).toHaveBeenCalled();
  // });
});
