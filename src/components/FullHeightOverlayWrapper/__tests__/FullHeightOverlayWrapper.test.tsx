import React from 'react';
import { Text } from 'react-native';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import FullHeightOverlayWrapper from '../FullHeightOverlayWrapper';

const mockCloseOverlay = jest.fn();

const _renderDefault = () => {
  return renderWithProviders(
    <FullHeightOverlayWrapper show={true} onClose={mockCloseOverlay} title="Full height modal">
      <Text>Child content</Text>
    </FullHeightOverlayWrapper>
  );
};
describe('full height overlay', () => {
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

  test('show title', () => {
    const title = screen.getByText('Full height modal');
    expect(title).toBeOnTheScreen();
  });

  test('close modal on back button click', () => {
    const backButton = screen.getByLabelText('Navigate back to previous screen');
    expect(backButton).toBeOnTheScreen();

    fireEvent.press(backButton);
    expect(mockCloseOverlay).toHaveBeenCalled();
  });
});
