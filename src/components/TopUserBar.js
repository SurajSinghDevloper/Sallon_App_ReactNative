import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import userLogo from '../../assets/userLogo.jpg';

const TopUserBar = () => {
  return (
    <View style={styles.topBarContainer}>
      <Image source={userLogo} style={styles.topBarImg} />
      <View style={styles.topBarDetails}>
        <Text style={styles.topBarDetailUserName}>User Kumar Singh</Text>
        <Text style={styles.topBarDetailUserAdd}>
          User Address point to get Service
        </Text>
      </View>
      <TouchableOpacity style={styles.notify}>
        <Octicons name="bell" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TopUserBar;

const styles = StyleSheet.create({
  topBarContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    marginTop: -20,
    padding: 10,
    backgroundColor: '#4A90E2', // Changed background color to a more appealing shade
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    // Shadow for Android
    elevation: 6,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  topBarImg: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 30, // Keeping the border radius proportional to the image size
    borderWidth: 2,
    borderColor: 'white',
  },
  topBarDetails: {
    marginLeft: 15,
    flex: 1,
  },
  topBarDetailUserName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  topBarDetailUserAdd: {
    fontSize: 14,
    color: 'white',
  },
  notify: {
    position: 'absolute',
    right: 15,
    top: 55,
    padding: 8,
  },
});
