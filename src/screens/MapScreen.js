import React, { useContext } from 'react';
import { Text, StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../components/Filter';
import { screenHeight, screenWidth } from '../utils/scaling';
import { Sizes } from '../styles';

const MapScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <Text style={{ fontSize: 30 }}>MapScreen</Text>
        <Text>{screenHeight}</Text>
        <Text>{screenWidth}</Text>
      </View>
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

