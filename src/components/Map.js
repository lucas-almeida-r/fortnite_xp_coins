import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Animated, PanResponder } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';
import XpCoins from './XpCoins';


const Map = ({ zoomLevel }) => {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('GRRAAAAAANNNTT x ', pan.x._value, ' y ', pan.y._value);
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
          source={require('../../assets/images/map.png')}
          />
        <XpCoins mapZoomLevel={zoomLevel}/>
      </View>
    </Animated.View>
  );
}

    //</View>

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderColor: 'red',
    //borderWidth: 2,
  },
  map: {
    width: Sizes.MAP_BASE_SIZE,
    height: Sizes.MAP_BASE_SIZE,
  }
});

export default Map;
