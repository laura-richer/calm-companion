import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import QuickHelp from '../QuickHelp';

const _renderDefault = () => {
  return renderWithProviders(<QuickHelp />);
};

describe('Home screen', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders screen header', () => {
    const screenHeader = screen.getByText('Quick Help');

    expect(screenHeader).toBeOnTheScreen();
  });

  test('renders list of quick help items', () => {
    const quickHelpItems = screen.queryByLabelText('Quick help items');

    expect(quickHelpItems).toBeOnTheScreen();
  });

  test('renders full height overlay wrapper when hint is clicked', () => {
    const hintButton = screen.getByLabelText('Find out more about 5x5 Breathing');
    fireEvent.press(hintButton);

    const overlayBackButton = screen.getByLabelText('Navigate back to previous screen');
    expect(overlayBackButton).toBeOnTheScreen();
  });

  // test('renders tab navigation', () => {
  //   const tabNavigation = screen.queryByLabelText('Tab navigation items');

  //   expect(tabNavigation).toBeOnTheScreen();
  // });

  // test('renders stack navigation', () => {
  //   const stackNavigation = screen.queryByLabelText('Stack navigation items');

  //   expect(stackNavigation).toBeOnTheScreen();
  // });
});
