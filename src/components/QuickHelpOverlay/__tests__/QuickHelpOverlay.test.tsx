import React from 'react';
import { screen } from '@testing-library/react-native';
import { createTestStore, renderWithProviders } from '~utils/test-utils';
import QuickHelpOverlay from '../QuickHelpOverlay';

const store = createTestStore();

const _renderDefault = () => {
  return renderWithProviders(<QuickHelpOverlay show={true} onClose={() => {}} itemId={1} />, {
    store,
  });
};
describe('quick help overlay overlay', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  // test('renders overlay if current item exists', () => {
  //   const content = screen.getByText('Child content');
  //   expect(content).toBeOnTheScreen();
  // });

  // test('doesnt render overlay if current item is undefined', () => {
  //   const title = screen.getByText('Full height modal');
  //   expect(title).toBeOnTheScreen();
  // });
});
