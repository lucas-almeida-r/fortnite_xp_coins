import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Context as MapContext } from "../context/MapContext";

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth, shortDimension } from '../utils/scaling';

import { requireImage } from '../utils/requireImage';
import { getInAppCoinPosition } from '../utils/getInAppCoinPosition';


const XpCoins = ({ mapZoomLevel }) => {
  const { state: { coins, coinsStatus, filters }, updateCoinStatus } = useContext(MapContext);

  const renderCoin = (coin, index) => {
    const status = coinsStatus.find(c => {return c.id === coin.id;}).status;
    const newStatusOnPress = status === 'collected' ? 'notCollected' : 'collected';

    const [convertedLeft, convertedTop] = getInAppCoinPosition(coin.coords.left, coin.coords.top, mapZoomLevel);

    return(
      filters[coin.color] && filters[coin.week] && filters[status]
      ? (<TouchableOpacity 
        style={[styles.container, { left: convertedLeft, top: convertedTop }]} 
        onPress={()=> updateCoinStatus(coin.id, newStatusOnPress)}
        key={coin.id}
        >
          <Image 
            style={[
              styles.xpCoin,
              { width: Sizes.COIN_BASE_WIDTH / mapZoomLevel, height: Sizes.COIN_BASE_HEIGHT / mapZoomLevel }
             ]}
            source={requireImage(`xp_coin_${coin.color}_${status}`)}
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
    //borderColor: 'red',
    //borderWidth: 1,
    zIndex: 1,
    
  },
  xpCoin: {
    //borderColor: 'red',
    //borderWidth: 1,
  }
});

export default XpCoins;
