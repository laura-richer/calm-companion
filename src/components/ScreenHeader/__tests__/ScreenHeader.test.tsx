import React from 'react';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '~utils/test-utils';
import ScreenHeader from '../ScreenHeader';
import { spacer } from '~styles/variables';

const _renderDefault = () => {
  return renderWithProviders(
    <ScreenHeader
      title={'Quick Help'}
      image={require('~assets/images/screenHeaders/quick-help.png')}
      imageWidth={117}
      imageHeight={75}
    />
  );
};

describe('screen header', () => {
  beforeEach(() => {
    _renderDefault();
  });

  test('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('renders title', () => {
    const title = screen.getByText('Quick Help');
    expect(title).toBeOnTheScreen();
  });

  test('renders correct image', () => {
    const image = screen.getByLabelText('Quick Help image');
    expect(image).toBeOnTheScreen();
    expect(image).toHaveProp('source', require('~assets/images/screenHeaders/quick-help.png'));
  });

  test('renders image with correct width', () => {
    const image = screen.getByLabelText('Quick Help image');
    expect(image).toHaveProp('width', 117);
  });

  test('renders image with correct height', () => {
    const image = screen.getByLabelText('Quick Help image');
    expect(image).toHaveProp('height', 75);
  });

  test('renders image with correct resizeMode', () => {
    const image = screen.getByLabelText('Quick Help image');
    expect(image).toHaveProp('resizeMode', 'contain');
  });

  test('renders image with default margin', () => {
    const screenHeaderContainer = screen.getByTestId('screenHeaderContainer');
    expect(screenHeaderContainer).toHaveStyle({ padding: spacer.XS });
  });

  test('renders image flush to bottom', () => {
    renderWithProviders(
      <ScreenHeader
        title={'Quick Help'}
        image={require('~assets/images/screenHeaders/quick-help.png')}
        imageWidth={117}
        imageHeight={75}
        imageFlushToBottom={true}
      />
    );

    const image = screen.getByTestId('screenHeaderContainer');
    expect(image).toHaveStyle({ paddingBottom: 0 });
  });
});
