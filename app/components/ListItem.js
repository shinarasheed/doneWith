import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import colors from '../config/colors';

import AppText from './AppText/AppText';

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});
