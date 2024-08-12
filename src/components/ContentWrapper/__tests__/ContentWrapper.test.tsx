import React from 'react';
import { Text } from 'react-native';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import ContentWrapper from '../ContentWrapper';

const _renderDefault = () => {
  return renderWithProviders(
    <ContentWrapper>
      <Text>Child content</Text>
    </ContentWrapper>
  );
};

describe('content wrapper', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders child content', () => {
    const content = screen.getByText('Child content');
    expect(content).toBeOnTheScreen();
  });
});
