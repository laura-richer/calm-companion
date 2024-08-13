import React from 'react';
import { Text, Image, View } from 'react-native';
import GradientDark from '~components/Gradient/GradientDark';
import Button from '~components/Button/Button';
import { WelcomeProps } from './types';
import { typographyStyles } from '~styles/global';
import styles from './styles';

const Welcome = ({ navigation }: WelcomeProps) => {
  return (
    <GradientDark style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={[styles.title, typographyStyles.textLg]}>Calm Companion</Text>
        <Text style={styles.subtitle}>Supporting your path to peace.</Text>
      </View>

      <Image
        source={require('~assets/images/calm-companion.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.footer}>
        <Text style={styles.bodyText}>
          Your handy reference of anxiety relief techniques and CBT tools to help you when your
          struggling.
        </Text>

        <Button text="Get Started" handleButtonPress={() => navigation.navigate('Home')} />
      </View>
    </GradientDark>
  );
};

export default Welcome;
