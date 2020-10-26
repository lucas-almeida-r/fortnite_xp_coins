
export const requireImage = (name) => {
  switch (name) {
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