import React from 'react';
import { screen, act } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import TabNavigationContainer from '../NavigationContainers/TabNavigationContainer';

describe('TabNavigationContainer', () => {
  beforeEach(() => {
    renderWithProviders(<TabNavigationContainer />);
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders quick help tab', async () => {
    const tab = await screen.getByLabelText('Quick Help');
    await act(async () => await expect(tab).toBeOnTheScreen());
  });

  test('renders anxiety resources tab', async () => {
    const tab = await screen.getByLabelText('Anxiety Resources');
    await act(async () => await expect(tab).toBeOnTheScreen());
  });

  test('renders cbt tools tab', async () => {
    const tab = await screen.getByLabelText('CBT Tools');
    await act(async () => await expect(tab).toBeOnTheScreen());
  });

  test('renders helpful contacts tab', async () => {
    const tab = await screen.getByLabelText('Helpful Contacts');
    await act(async () => await expect(tab).toBeOnTheScreen());
  });
});
