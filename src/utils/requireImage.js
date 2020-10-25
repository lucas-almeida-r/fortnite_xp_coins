
export const requireImage = (name) => {
  switch (name) {
    case 'xp_coin_green':
      return require('../../assets/images/xp_coin_green.png');
    case 'xp_coin_blue':
      return require('../../assets/images/xp_coin_blue.png');
    case 'xp_coin_purple':
      return require('../../assets/images/xp_coin_purple.png');
    case 'xp_coin_gold':
      return require('../../assets/images/xp_coin_gold.png');
    default:
      return null;
  }
};