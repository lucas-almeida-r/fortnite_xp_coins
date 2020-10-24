import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';


const XpCoins = () => {
  const data = [
    { id: '1', coords: { top: 50, left: 50 }, color: 'blue', week: 2, collected: true }, 
    { id: '2', coords: { top: 50, left: 20 }, color: 'green', week: 5, collected: false }, 
    { id: '3', coords: { top: 200, left: 10 }, color: 'golden', week: 1, collected: true }
  ];

  const renderCoin = (item, index) => {
    return(
        <TouchableOpacity 
          style={[styles.container, { left: item.coords.left, top: item.coords.top }]} 
          onPress={()=>console.log('normal')} 
          key={item.id}
        >
          <Image 
            style={styles.xpCoin}
            source={require('../../assets/green.png')}
          />
        </TouchableOpacity>
    );
  };
  

  return data.map(renderCoin);
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderColor: 'red',
    borderWidth: 1,
    zIndex: 1,
    
  },
  xpCoin: {
    width: 50,
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
  }
});

export default XpCoins;
