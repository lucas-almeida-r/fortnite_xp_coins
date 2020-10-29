//
// This file exports all styles used in the app
//

import { moderateScale, shortDimension } from '../utils/scaling';

//
// COLORS
//

export const Colors = {
  SURFACE: '#fff',
  ON_SURFACE: '#000',
  HEADER : '#0c71b5',
  ON_HEADER: '#fff',
  BUTTON : '#2a2a2a',
  ON_BUTTON: '#fff',
  BORDER: '#ddd',
  MODAL_BACKGROUND: 'rgba(0, 0, 0, 0.75)',
  BACKGROUND: '#0c71b5',
};

//
// TEXTS
//

export const Typography = {
  HEADER: {
    fontSize:  moderateScale(20),
    color: Colors.ON_HEADER,
    fontFamily: 'LuckiestGuy_400Regular',
  },
  BUTTON: {
    fontSize:  moderateScale(12),
    color: Colors.ON_BUTTON,
    fontFamily: 'LuckiestGuy_400Regular',
  },
  FILTER_ITEM: {
    fontSize:  moderateScale(14),
    color: Colors.ON_SURFACE,
    fontFamily: 'LuckiestGuy_400Regular',
    lineHeight: moderateScale(21),
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
  SHADOW: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
};

