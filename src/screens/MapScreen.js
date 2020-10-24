import React, { useContext } from 'react';
import { Text, StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../components/Filter';
import { screenHeight, screenWidth } from '../utils/scaling';
import { Sizes, Colors } from '../styles';
import Map from '../components/Map';

const MapScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Map/>
      <View style={styles.filtersContainer}>
          <Filter type='week'/>
          <Filter type='color'/>
          <Filter type='status'/>  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
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

