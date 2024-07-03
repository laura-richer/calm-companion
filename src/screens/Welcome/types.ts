import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '~components/Navigation/types';

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export type WelcomeProps = {
  navigation: WelcomeScreenNavigationProp;
};
