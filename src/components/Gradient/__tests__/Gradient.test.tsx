import React from 'react';
import { Text } from 'react-native';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import GradientDark from '../GradientDark';
import GradientLight from '../GradientLight';

const _renderGradientLight = () => {
  return renderWithProviders(
    <GradientLight>
      <Text>Child content</Text>
    </GradientLight>
  );
};

const _renderGradientDark = () => {
  return renderWithProviders(
    <GradientDark>
      <Text>Child content</Text>
    </GradientDark>
  );
};

describe('gradient', () => {
  test('matches dark snapshot', () => {
    _renderGradientDark();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('matches light snapshot', () => {
    _renderGradientLight();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders dark child content', () => {
    _renderGradientDark();
    const content = screen.getByText('Child content');
    expect(content).toBeOnTheScreen();
  });

  test('renders light child content', () => {
    _renderGradientLight();
    const content = screen.getByText('Child content');
    expect(content).toBeOnTheScreen();
  });
});
