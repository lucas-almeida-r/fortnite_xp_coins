import { Platform } from 'react-native';

import { moderateScale } from '../utils/scaling';

//
// COLORS
//

export const COLOR_FILTER_BUTTON = '#fff';
export const COLOR_ON_FILTER_BUTTON = '#000';

export const COLOR_FILTER_ITEM = '#fff';
export const COLOR_ON_FILTER_ITEM = '#000';

export const COLOR_FILTER_ITEM_BORDER = '#ddd';

export const COLOR_FILTER_HEADER = '#67abeb';
export const COLOR_ON_FILTER_HEADER = '#000';

export const COLOR_MODAL_BACKGROUND = 'rgba(0, 0, 0, 0.75)';

//
// TEXTS
//
// este link https://github.com/react-native-training/react-native-fonts contém as
// fontes disponíveis no React-Native
// este link (aberto em um IOS) https://iosfonts.com mostra comos são as fontes

export const TEXT_TITLE_FONT_SIZE = moderateScale(16);
export const TEXT_TITLE_COLOR = '#000';
export const TEXT_TITLE_FONT_FAMILY = Platform.OS === 'android' ? 'Roboto' : 'AppeSDGothicNeo-Regular';
export const TEXT_TITLE_STYLE = {
  fontSize: TEXT_TITLE_FONT_SIZE,
  color: TEXT_TITLE_COLOR,
  fontFamily: TEXT_TITLE_FONT_FAMILY
};

export const TEXT_SUBTITLE_FONT_SIZE = moderateScale(14);
export const TEXT_SUBTITLE_COLOR = '#000';
export const TEXT_SUBTITLE_FONT_FAMILY = Platform.OS === 'android' ? 'Roboto' : 'AppeSDGothicNeo-Regular';
export const TEXT_SUBTITLE_STYLE = {
  fontSize: TEXT_SUBTITLE_FONT_SIZE,
  color: TEXT_SUBTITLE_COLOR,
  fontFamily: TEXT_SUBTITLE_FONT_FAMILY
};

export const TEXT_BODY_FONT_SIZE = moderateScale(12);
export const TEXT_BODY_COLOR = '#000';
export const TEXT_BODY_FONT_FAMILY = Platform.OS === 'android' ? 'Roboto' : 'AppeSDGothicNeo-Regular';
export const TEXT_BODY_STYLE = {
  fontSize: TEXT_BODY_FONT_SIZE,
  color: TEXT_BODY_COLOR,
  fontFamily: TEXT_BODY_FONT_FAMILY
};

//
// DIMENSIONS
//

export const DIMEN_SPACING = moderateScale(15);

export const DIMEN_BUTTON_HEIGHT = moderateScale(45);

export const DIMEN_BORDER_RADIUS = moderateScale(5);
