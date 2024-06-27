import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
const Welcome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.main}>
      <Text>Welcome</Text>
      <Button title="Get started" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Welcome;
