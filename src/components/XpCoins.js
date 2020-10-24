import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Context as MapContext } from "../context/MapContext";

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';


const XpCoins = () => {
  const { state: { coins, coinsStatus, filters } } = useContext(MapContext);

  
  const renderCoin = (item, index) => {
    const status = coinsStatus.find( coin => coin.id === item.id).status;
    return(
      filters[item.color] && filters[item.week] && filters[status]
      ? (<TouchableOpacity 
        style={[styles.container, { left: item.coords.left, top: item.coords.top }]} 
        onPress={()=>console.log('normal')} 
        key={item.id}
        >
          <Image 
            style={styles.xpCoin}
            source={require('../../assets/green.png')}
          />
        </TouchableOpacity>)
      : null
    );
  };
  

  return coins.map(renderCoin);
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
