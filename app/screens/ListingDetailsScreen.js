import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';

import ListItem from '../components/ListItem';

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/jacket.jpg')}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket fro sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require('../assets/mosh.jpg')}
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userContainer: {
    marginVertical: 20,
  },
});
