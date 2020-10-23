
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { COLOR_FILTER_HEADER, DIMEN_BORDER_RADIUS, DIMEN_BUTTON_HEIGHT, DIMEN_SPACING,
  TEXT_SUBTITLE_STYLE  } from "../styles";
import { screenWidth } from '../utils/scaling';


const FilterButton = ({ title, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

FilterButton.defaultProps = {
  title: '',
  onPress: () => {},
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: DIMEN_BUTTON_HEIGHT,
    paddingHorizontal: DIMEN_SPACING,
    borderRadius: DIMEN_BORDER_RADIUS,
    backgroundColor: COLOR_FILTER_HEADER,
    width: (screenWidth - 4*DIMEN_SPACING) / 3
  },
  title: {
    ...TEXT_SUBTITLE_STYLE
  }
});

export default FilterButton;
