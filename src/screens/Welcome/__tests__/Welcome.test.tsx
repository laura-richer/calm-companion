import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../Welcome';

import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MockStackNavigationProp<
  ParamList extends ParamListBase = any,
  RouteName extends keyof ParamList = string,
> = Record<keyof NativeStackNavigationProp<ParamList, RouteName>, ReturnType<typeof jest.fn>>;

const mockNavigation: MockStackNavigationProp = {
  navigate: jest.fn(),
};

const mockNavigate = jest.fn();

describe('Welcome screen', () => {
  test('renders the get started button and navigates to correct page on press', () => {
    render(
      <NavigationContainer>
        <Welcome navigation={mockNavigation} />
      </NavigationContainer>
    );

    const getStartedButton = screen.getByText('Get started');

    expect(getStartedButton).toBeOnTheScreen();
    fireEvent.press(getStartedButton);
    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });
});
