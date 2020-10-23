import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';


const Map = () => {

  return (
    <View style={{ flex:1, backgroundColor: 'black' }}>
      <Image 
        resizeMode='contain'
        style={styles.map}
        source={require('../../assets/map.png')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  map: {
    flexGrow: 1,
    width: null,
    height: null,
  }
});

export default Map;
