
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
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
    padding: Sizes.BASE_SPACING,
    borderRadius: 100, // high value to fully round the sides of the button
    backgroundColor: Colors.HEADER,
    width: (screenWidth - 4*Sizes.BASE_SPACING) / 3
  },
  title: {
    ...Typography.BASE
  }
});

export default FilterButton;
