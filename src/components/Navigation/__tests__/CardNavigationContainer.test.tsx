import React from 'react';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import CardNavigationContainer from '../NavigationContainers/CardNavigationContainer';

// const mockNavigate = jest.fn();

describe('Card navigation container', () => {
  beforeEach(() => {
    renderWithProviders(<CardNavigationContainer />);
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders quick help button', () => {
    const tab = screen.getByLabelText('Quick Help');
    expect(tab).toBeOnTheScreen();
  });

  test('renders anxiety resources tab', () => {
    const tab = screen.getByLabelText('Anxiety Resources');
    expect(tab).toBeOnTheScreen();
  });

  test('renders cbt tools tab', () => {
    const tab = screen.getByLabelText('CBT Tools');
    expect(tab).toBeOnTheScreen();
  });

  test('renders helpful contacts tab', () => {
    const tab = screen.getByLabelText('Helpful Contacts');
    expect(tab).toBeOnTheScreen();
  });

  // test('navigates to screen on press', async () => {
  //   const button = screen.getByLabelText('Quick Help');

  //   await fireEvent.press(button);

  //   expect(mockNavigate).toHaveBeenCalledWith('QuickHelp');
  // });
});
