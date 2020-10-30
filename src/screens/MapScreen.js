//
// MapScreen is the screen that shows the map, filters and xp coins
// It is the main screen of our app.
//

import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Filter from '../components/Filter';
import { Sizes, Colors, Typography } from '../styles';
import Map from '../components/Map';
import RoundButton from '../components/RoundButton';
import InfoButton from '../components/InfoButton';
import { Context as MapContext } from '../context/MapContext';

const MapScreen = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const { state: { mapUrl, isOnline }, changeLanguage } = useContext(MapContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screenContainer}>
        <Map 
          zoomLevel={zoomLevel}
          source={mapUrl ? {uri: mapUrl} : require('../../assets/images/map.png')}
        />
        <View style={styles.infoContainer}>
          <InfoButton />
        </View>
        <View style={styles.languageContainer}>
          <RoundButton icon='zoom-in' onPress={() => changeLanguage()}/>
        </View>
        <View style={styles.zoomContainer}>
          <RoundButton icon='zoom-in' onPress={() => setZoomLevel(2)}/>
        </View>
        <View style={styles.zoomContainer}>
          <RoundButton icon='zoom-out' onPress={() => setZoomLevel(1)}/>
        </View>
        { isOnline 
            ? null 
            : <View style={styles.offlineContainer}>
                <Text style={styles.offlineTextStyle}>
                  {'Offline: mapa e moedas podem estar desatualizados.'}
                </Text>
              </View>
          }
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
    justifyContent: 'flex-end',
    //borderColor: 'red',
    //borderWidth: 1,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 0, 
    right: 0,
    left: 0,
    //borderColor: 'green',
    //borderWidth: 1,
  },
  infoContainer: {
    position: 'absolute',
    top: Sizes.BASE_SPACING,
    right: Sizes.BASE_SPACING,
    //borderColor: 'red',
    //borderWidth: 1,
  },
  languageContainer: {
    position: 'absolute',
    top: Sizes.BASE_SPACING,
    left: Sizes.BASE_SPACING,
    //borderColor: 'red',
    //borderWidth: 1,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginLeft: Sizes.BASE_SPACING,
    marginTop: Sizes.BASE_SPACING,
    //borderColor: 'red',
    //borderWidth: 1,
  },
  offlineContainer: {
    marginLeft: Sizes.BASE_SPACING,
    marginTop: Sizes.BASE_SPACING,
    alignSelf: 'flex-start',
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
  },
  
});

export default MapScreen;

