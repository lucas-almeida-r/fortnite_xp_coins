import React, { useState, useContext } from 'react';
import { Text, StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../components/Filter';
import { screenHeight, screenWidth } from '../utils/scaling';
import { Sizes, Colors, Typography } from '../styles';
import Map from '../components/Map';
import RoundButton from '../components/RoundButton';
import { Context as MapContext } from '../context/MapContext';

const MapScreen = ({ navigation }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const { state: { mapUrl, isOnline } } = useContext(MapContext);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Map 
        zoomLevel={zoomLevel}
        source={mapUrl ? {uri: mapUrl} : require('../../assets/images/map.png')}
      />
      <View style={styles.allButtonsContainer}>
        <View style={styles.zoomContainer}>
          <RoundButton icon='zoom-in' onPress={() => setZoomLevel(2)}/>
        </View>
        <View style={styles.offlineZoomContainer}>
          { isOnline 
            ? null 
            : <View style={styles.offlineContainer}>
                <Text style={styles.offlineTextStyle}>
                  {'Offline: mapa e moedas podem estar desatualizados.'}
                </Text>
              </View>
          }
          <View style={styles.zoomContainer}>
            <RoundButton icon='zoom-out' onPress={() => setZoomLevel(1)}/>
          </View>
        </View>
        <View style={styles.filtersContainer}>
            <Filter type='week'/>
            <Filter type='color'/>
            <Filter type='status'/>  
        </View>
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
    position: 'absolute',
    bottom: 0, 
    right: 0,
    left: 0
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingLeft: Sizes.BASE_SPACING,
    paddingTop: Sizes.BASE_SPACING,
    //borderColor: 'red',
    //borderWidth: 1,
  },
  offlineZoomContainer: {
    flexDirection: 'row',
    paddingLeft: Sizes.BASE_SPACING,
    justifyContent: 'flex-end',
    //borderColor: 'red',
    //borderWidth: 1,
  },
  offlineContainer: {
    flex:1,
    alignSelf: 'flex-end',
    //borderColor: 'white',
    //borderWidth: 1,
  },
  offlineTextStyle: {
    ...Typography.BUTTON,
  },
  zoomContainer: {
    alignSelf: 'flex-end',
    marginTop: Sizes.BASE_SPACING,
    marginRight: Sizes.BASE_SPACING,
    //borderColor: 'green',
    //borderWidth: 1,
  }
});

export default MapScreen;

