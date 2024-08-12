import React from 'react';
import { Pressable, Text, Image, View } from 'react-native';
import GradientDark from '~components/Gradient/GradientDark';
import { WelcomeProps } from './types';
import { buttonStyles, dropShadowStyles, typographyStyles } from '~styles/global';
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

        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={[buttonStyles.primary, buttonStyles.fullWidth, dropShadowStyles.default]}
        >
          <Text style={buttonStyles.primaryText}>Get Started</Text>
        </Pressable>
      </View>
    </GradientDark>
  );
};

export default Welcome;
