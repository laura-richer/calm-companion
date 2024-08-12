import React from 'react';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import Home from '../Home';

const _renderDefault = () => {
  return renderWithProviders(<Home />);
};

describe('Home screen', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders screen header', () => {
    const screenHeader = screen.getByText('Home');

    expect(screenHeader).toBeOnTheScreen();
  });

  test('renders card navigation items', () => {
    const cardNavigationItems = screen.queryByLabelText('Navigation items');

    expect(cardNavigationItems).toBeOnTheScreen();
  });

  // test('does not render tab navigation', () => {
  //   const tabNavigation = screen.queryByLabelText('Tab navigation items');

  //   expect(tabNavigation).not.toBeOnTheScreen();
  // });

  // test('renders stack navigation', () => {
  //   const stackNavigation = screen.queryByLabelText('Stack navigation items');

  //   expect(stackNavigation).toBeOnTheScreen();
  // });
});
