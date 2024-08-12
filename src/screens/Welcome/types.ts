import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '~types/navigation';

export type WelcomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};
