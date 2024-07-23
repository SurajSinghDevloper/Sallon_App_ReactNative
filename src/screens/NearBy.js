import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {nearbyShops} from '../tempData/appData';

const NearBy = () => {
  return (
    <ScrollView style={styles.container}>
      {nearbyShops.map(shop => (
        <View key={shop.id} style={styles.shopCard}>
          <View style={styles.shopImageContainer}>
            <Image source={{uri: shop.image}} style={styles.shopImage} />
          </View>
          <View style={styles.shopDetailsContainer}>
            <View style={styles.shopHeader}>
              <Text style={styles.shopName}>{shop.name}</Text>
              <Text
                style={[
                  styles.status,
                  shop.status === 'Open' ? styles.open : styles.closed,
                ]}>
                {shop.status}
              </Text>
            </View>
            <Text style={styles.distance}>
              <MaterialCommunityIcons
                name="map-marker"
                size={14}
                color="#555"
              />{' '}
              {shop.distance}
            </Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={18} color="#FFD700" />
              <Text style={styles.rating}>{shop.rating}</Text>
            </View>
            <Text style={styles.catersTo}>
              <MaterialCommunityIcons
                name="gender-male-female"
                size={14}
                color="#555"
              />{' '}
              {shop.catersTo}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Services</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  shopCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  shopImageContainer: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
  },
  shopImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  shopDetailsContainer: {
    padding: 15,
  },
  shopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
  },
  open: {
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  closed: {
    backgroundColor: '#f44336',
    color: '#fff',
  },
  distance: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  catersTo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NearBy;
