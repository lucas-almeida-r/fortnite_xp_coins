import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Context as MapContext } from "../context/MapContext";

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';


const XpCoins = () => {
  const { state: { coins, coinsStatus, filters }, updateCoinStatus } = useContext(MapContext);

  const renderCoin = (coin, index) => {
    const status = coinsStatus.find(c => {return c.id === coin.id;}).status;
    const newStatusOnPress = status === 'collected' ? 'notCollected' : 'collected';

    return(
      filters[coin.color] && filters[coin.week] && filters[status]
      ? (<TouchableOpacity 
        style={[styles.container, { left: coin.coords.left, top: coin.coords.top }]} 
        onPress={()=> updateCoinStatus(coin.id, newStatusOnPress)}
        key={coin.id}
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
