import React, { useContext } from 'react';
import { Text, StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../components/Filter';
import { screenHeight, screenWidth } from '../utils/scaling';
import { Sizes } from '../styles';
import Map from '../components/Map';

const MapScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Map/>
      <View style={styles.filtersContainer}>
          <Filter />
          <Filter />
          <Filter />  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#ddd',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Sizes.BASE_SPACING,
  },
});

export default MapScreen;

