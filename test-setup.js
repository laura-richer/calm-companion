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
