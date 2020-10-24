import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Animated, PanResponder } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';
import XpCoins from './XpCoins';


const Map = () => {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        //console.log('x ', pan.x._value, ' y ', pan.y._value);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;
  
  return (
    <Animated.View
        style={[
          {transform: [{ translateX: pan.x }, { translateY: pan.y }]}
        ]}
        {...panResponder.panHandlers}
      >
      <Image 
        resizeMode='contain'
        style={styles.map}
        source={require('../../assets/map.png')}
        />
      <XpCoins/>
    </Animated.View>
  );
}

    //</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  map: {
    //flexGrow: 1,
    width: shortDimension,
    height: shortDimension,
  }
});

export default Map;
