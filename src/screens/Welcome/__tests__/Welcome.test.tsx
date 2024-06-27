import { screen, render } from '@testing-library/react-native';
import React from 'react';
import Welcome from '../Welcome';

describe('Welcome screen', () => {
  test('renders correct title', () => {
    render(<Welcome />);
    const button = screen.getByText('Get started');
    screen.debug();
    expect(button).toBeOnTheScreen();
  });
});
