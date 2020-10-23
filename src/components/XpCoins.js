import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';


const XpCoins = () => {
  const data = [{ id: '1', top: 50, left: 50}, {id: '2', top: 50, left: 20 }, {id: '3', top: 200, left: 10 }];

  const renderCoin = (item, index) => {
    return(
      <View style={styles.container} key={item.id}>
        <Image 
          style={[styles.xpCoin, { left: item.left, top: item.top } ]}
          source={require('../../assets/green.png')}
        />
    </View>
    );
  };


  return data.map(renderCoin);
}


const styles = StyleSheet.create({
  container: {
    width: shortDimension,
    height: shortDimension,
    position: 'absolute',
    
  },
  xpCoin: {
    width: 50,
    height: 50,
  }
});

export default XpCoins;
