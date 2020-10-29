//
// This function converts the coin position downloaded from the firebase storage
// to the coin position used in the user's device.
//
// The downloaded position is determined from the pixel that locates the coin in
// an image of size 1023x1023. However, the user's device won't show a image 1023x1023,
// it will scale it. "getInAppCoinPostion" takes care of the conversion needed to
// show the coin image in the appropriate position.
// 

import { PixelRatio } from 'react-native';
import { Sizes } from '../styles';

export const getInAppCoinPosition = (x, y, mapZoomLevel) => {
  
  const pxRatio = PixelRatio.get();

  const mapSizePx = 1023;
  
  // here we don't multiply by mapZoomLevel, because when we zoom-in
  // we do not set a new size for the map, we use a "transform scale = 2"
  const scale = Sizes.MAP_BASE_SIZE/mapSizePx/pxRatio;
  let xApp = x*pxRatio*scale;
  let yApp = y*pxRatio*scale;

  // translation
  // here we use mapZoomLevel, because we change the size of the icon
  xApp = xApp - Sizes.COIN_BASE_WIDTH / mapZoomLevel / 2;
  yApp = yApp - Sizes.COIN_BASE_HEIGHT / mapZoomLevel;

  return [xApp, yApp]
};