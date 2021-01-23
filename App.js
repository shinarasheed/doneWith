// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import WelcomeScreen from './app/assets/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
