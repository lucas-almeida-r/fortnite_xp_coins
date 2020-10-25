//
// the position (x,y) is the position of the pixel, 
// where the coin is in an image 1016x1016. It is very easy to get this position
// and provide it to the app. However, to show the correct position on the screen
// we need to convert this position (x,y) to a position (xApp, yApp), which
// depends on the device
// 

import { PixelRatio } from 'react-native';
import { Sizes } from '../styles';

export const getInAppCoinPosition = (x, y, mapZoomLevel) => {
  
  const pxRatio = PixelRatio.get();

  const mapSizePx = 1016;
  
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