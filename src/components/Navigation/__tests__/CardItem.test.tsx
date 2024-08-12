import React from 'react';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import CardItem from '../subcomponents/CardItem';

const mockCardItem = {
  id: 'QuickHelp',
  component: jest.fn(),
  title: 'Quick Help',
  tabIcon: require('~assets/images/tabIcons/quick-help.png'),
  cardIcon: require('~assets/images/screenHeaders/quick-help.png'),
};

const _renderDefault = () => {
  return renderWithProviders(<CardItem item={mockCardItem} handleChangeScreen={() => {}} />);
};

describe('Card item', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders card title', () => {
    const title = screen.getByLabelText('Quick Help');
    expect(title).toBeOnTheScreen();
  });

  test('renders card icon', () => {
    const title = screen.getByAccessibilityHint('Icon');
    expect(title).toBeOnTheScreen();
  });
});
