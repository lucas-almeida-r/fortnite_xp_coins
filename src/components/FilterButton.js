
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth } from '../utils/scaling';


const FilterButton = ({ label, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

FilterButton.defaultProps = {
  label: '',
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
  label: {
    ...Typography.BASE
  }
});

export default FilterButton;
