import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
  customText: {
    color: 'black',
    fontSize: 30,
  },
});

export const Welcome = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Welcome</Text>
      <Button title="Get started" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
