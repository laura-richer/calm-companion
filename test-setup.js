import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// react-navigation/native
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    getParent: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
  }),
}));
