//
// XpCoins is used in Map to display all xp coins as clickable images
//
// mapZoomLevel: it is the zoom level used in Map. 
//               It is used to reverse the scaling set in Map, so the xp coin images have a constant size
//

import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Context as MapContext } from "../context/MapContext";

import { Sizes } from "../styles";

import { requireImage } from '../utils/requireImage';
import { getInAppCoinPosition } from '../utils/getInAppCoinPosition';


const XpCoins = ({ mapZoomLevel }) => {
  const { state: { coins, coinsStatus, filters }, updateCoinStatus } = useContext(MapContext);

  const renderCoin = coin => {
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
