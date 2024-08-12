import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import Welcome from '../Welcome';

const mockNavigate = jest.fn();

const _renderDefault = () => {
  return renderWithProviders(<Welcome navigation={{ navigate: mockNavigate } as any} />);
};

describe('Welcome screen', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders the get started button and navigates to home page on click', () => {
    const buttonTitle = screen.getByText('Get Started');

    expect(buttonTitle).toBeOnTheScreen();
    fireEvent.press(buttonTitle);
    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });

  // test('does not render tab navigation', () => {
  //   const tabNavigation = screen.queryByLabelText('Tab navigation items');

  //   expect(tabNavigation).not.toBeOnTheScreen();
  // });

  // test('does not render stack navigation', () => {});
});
