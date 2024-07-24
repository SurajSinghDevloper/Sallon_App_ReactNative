import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const TestScreens = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hii, Jenny Wilson</Text>
        <Text style={styles.address}>
          8502 Preston Rd. Inglewood, Maine 98380
        </Text>
        <View style={styles.searchContainer}>
          <Icon name="magnifying-glass" size={20} color="#aaa" />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.subTitle}>What are you looking for?</Text>
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Image
            source={{uri: 'https://img.icons8.com/ios/100/000000/scissors.png'}}
            style={styles.image}
          />
          <Text style={styles.gridText}>Hair salons</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/100/000000/nail-polish.png',
            }}
            style={styles.image}
          />
          <Text style={styles.gridText}>Nail salons</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{uri: 'https://img.icons8.com/ios/100/000000/makeup.png'}}
            style={styles.image}
          />
          <Text style={styles.gridText}>Makeup</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/100/000000/face-mask.png',
            }}
            style={styles.image}
          />
          <Text style={styles.gridText}>Skin care</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{uri: 'https://img.icons8.com/ios/100/000000/spa.png'}}
            style={styles.image}
          />
          <Text style={styles.gridText}>Spa</Text>
        </View>
        <View style={styles.gridItem}>
          <Image
            source={{uri: 'https://img.icons8.com/ios/100/000000/massage.png'}}
            style={styles.image}
          />
          <Text style={styles.gridText}>Body beauty</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TestScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ff3366',
    padding: 20,
    paddingTop: 40,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    color: '#fff',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  welcome: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    width: '45%',
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff3366',
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  gridText: {
    textAlign: 'center',
  },
});
