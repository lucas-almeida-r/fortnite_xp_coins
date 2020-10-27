import React, { useState } from 'react';
import { Text, StyleSheet, Platform, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../components/Filter';
import { screenHeight, screenWidth } from '../utils/scaling';
import { Sizes, Colors } from '../styles';
import Map from '../components/Map';
import RoundButton from '../components/RoundButton';

const MapScreen = ({ navigation }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Map zoomLevel={zoomLevel}/>
      <View style={styles.allButtonsContainer}>
        <View style={styles.zoomContainer}>
          <RoundButton icon='zoom-in' onPress={() => setZoomLevel(2)}/>
        </View>
        <View style={styles.zoomContainer}>
          <RoundButton icon='zoom-out' onPress={() => setZoomLevel(1)}/>
        </View>
        <ScrollView>
        <View style={styles.filtersContainer}>
            <Filter type='week'/>
            <Filter type='color'/>
            <Filter type='status'/>  
        </View>
        </ScrollView>
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
    //borderColor: 'red',
    //borderWidth: 1,
  },
  allButtonsContainer: {
    position: Platform.OS ==='web' ? 'relative' : 'absolute',
    bottom: 0, 
    right: 0,
    left: 0
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    //borderColor: 'red',
    //borderWidth: 1,
  },
  zoomContainer: {
    alignSelf: 'flex-end',
    marginTop: Sizes.BASE_SPACING,
    marginRight: Sizes.BASE_SPACING,
    //borderColor: 'red',
    //borderWidth: 1,
  }
});

export default MapScreen;

