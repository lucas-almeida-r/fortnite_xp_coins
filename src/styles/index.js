import { Platform } from 'react-native';

import { moderateScale, shortDimension } from '../utils/scaling';

//
// COLORS
//

export const Colors = {
  SURFACE: '#fff',
  ON_SURFACE: '#000',
  HEADER : '#67abeb',
  ON_HEADER: '#000',
  BORDER: '#ddd',
  MODAL_BACKGROUND: 'rgba(0, 0, 0, 0.75)',
  BACKGROUND: '#000',
};

//
// TEXTS
//
// este link https://github.com/react-native-training/react-native-fonts contém as
// fontes disponíveis no React-Native
// este link (aberto em um IOS) https://iosfonts.com mostra comos são as fontes

export const Typography = {
  HEADER: {
    fontSize:  moderateScale(14),
    color: Colors.ON_HEADER,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
  },
  BASE: {
    fontSize:  moderateScale(12),
    color: Colors.ON_SURFACE,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
  },
  // SMALL: ... // not used yet
};

//
// DIMENSIONS
//

export const Sizes = {
  BASE_SPACING: moderateScale(10),
  BORDER_RADIUS: moderateScale(5),
  ICON_ROUND_BUTTON: moderateScale(30),
  ICON_FILTER_ITEM: moderateScale(20),
  ROUND_BUTTON: moderateScale(55),
  COIN_BASE_WIDTH: moderateScale(45),
  COIN_BASE_HEIGHT: moderateScale(60), // aspect ratio w:h = 3:4
  MAP_BASE_SIZE: shortDimension,
};

