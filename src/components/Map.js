//
// Map is the draggable map shown in MapScreen. It includes the XP coins.
//
// zoomLevel: It is a number that scales the map and the xp coins
// source:    It is the string that represents the source used for the image of the map.
//            It may be an firebase url or a relative path
//

import React, { useRef } from 'react';
import { View, StyleSheet, Image, Animated, PanResponder } from 'react-native';

import { Sizes } from "../styles";
import XpCoins from './XpCoins';


const Map = ({ zoomLevel, source }) => {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        pan.setValue({ x: 0, y: 0 }); // to prevent the "position x2" bug
      },
      //onPanResponderMove: (event, gesture) => {
      //  pan.setValue({ x: gesture.dx, y: gesture.dy });
      //},
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
          styles.container,
          { transform: [{ translateX: pan.x }, { translateY: pan.y }, { scale: zoomLevel }] }
        ]}
        {...panResponder.panHandlers}
    >
      <View>
        <Image 
          resizeMode='contain'
          style={styles.map}
          source={source}
          />
        <XpCoins mapZoomLevel={zoomLevel}/>
      </View>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderColor: 'red',
    //borderWidth: 1,
  },
  map: {
    width: Sizes.MAP_BASE_SIZE,
    height: Sizes.MAP_BASE_SIZE,
  }
});

export default Map;
