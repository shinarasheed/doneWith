import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({});
