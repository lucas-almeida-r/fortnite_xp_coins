//
// This function return the appropriate "require(...)" given a name
// We use it, because "require" does not allow template strings as argument
//

export const requireImage = (name) => {
  switch (name) {
    case 'language_icon_pt':
      return require('../../assets/images/language_icon_pt.png');
    case 'language_icon_en':
      return require('../../assets/images/language_icon_en.png');
    case 'map_pt':
      return require('../../assets/images/map_pt.jpg');
    case 'map_en':
      return require('../../assets/images/map_en.jpg');
    case 'xp_coin_green_notCollected':
      return require('../../assets/images/xp_coin_green_notCollected.png');
    case 'xp_coin_blue_notCollected':
      return require('../../assets/images/xp_coin_blue_notCollected.png');
    case 'xp_coin_purple_notCollected':
      return require('../../assets/images/xp_coin_purple_notCollected.png');
    case 'xp_coin_gold_notCollected':
      return require('../../assets/images/xp_coin_gold_notCollected.png');
    case 'xp_coin_green_collected':
      return require('../../assets/images/xp_coin_green_collected.png');
    case 'xp_coin_blue_collected':
      return require('../../assets/images/xp_coin_blue_collected.png');
    case 'xp_coin_purple_collected':
      return require('../../assets/images/xp_coin_purple_collected.png');
    case 'xp_coin_gold_collected':
      return require('../../assets/images/xp_coin_gold_collected.png');
    default:
      return null;
  }
};