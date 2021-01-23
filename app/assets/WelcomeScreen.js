import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} />
        <Text>Sell What You don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.regsiterButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: '70',
  },
  regsiterButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});