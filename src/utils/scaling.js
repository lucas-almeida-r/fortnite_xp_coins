//
// This file exports useful functions for adapting the components for different screen sizes
//
// This code was adapted from https://github.com/nirsky/react-native-size-matters
//

import { Dimensions, Platform } from 'react-native';

// workaround for "very small shortDimension" bug
const { width, height } = Platform.OS === 'ios' 
                            ? Dimensions.get('screen') 
                            : Dimensions.get('window');

const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

const screenWidth = width;
const screenHeight = height;

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => shortDimension / guidelineBaseWidth * size;
const verticalScale = size => longDimension / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.2) => size + (scale(size) - size) * factor;
const moderateVerticalScale = (size, factor = 0.2) => size + (verticalScale(size) - size) * factor;

export { scale, verticalScale, moderateScale, moderateVerticalScale, 
  screenWidth, screenHeight, shortDimension, longDimension};
