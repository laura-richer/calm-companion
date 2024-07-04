import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '~components/Navigation/types';

export type WelcomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};
