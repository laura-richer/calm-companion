import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import Welcome from '../Welcome';

const mockNavigate = jest.fn();

const _renderDefault = () => {
  return renderWithProviders(<Welcome navigation={{ navigate: mockNavigate } as any} />);
};

describe('Welcome screen', () => {
  test('renders the get started button and navigates to home page on click', () => {
    _renderDefault();

    const buttonTitle = screen.getByText('Get Started');

    expect(buttonTitle).toBeOnTheScreen();
    fireEvent.press(buttonTitle);
    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });
});
