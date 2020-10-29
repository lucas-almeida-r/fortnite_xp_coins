//
// FilterButton is used in Filter. It is the button that 
// makes the modal visible when clicked
//
// label:      It is the string displayed inside the button
// onPress:    It is the function called when the button is clicked
// iconButton: It is the icon show inside the button
//

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography, Sizes  } from "../styles";


const FilterButton = ({ label, onPress, iconButton }) => {

  return (
    <TouchableOpacity onPress={onPress} style={{ borderRadius: 100 }}>
      <View style={styles.container}>
        {iconButton}
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.label}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

FilterButton.defaultProps = {
  label: '',
  onPress: () => {},
  iconButton: null,
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Sizes.BASE_SPACING,
    borderRadius: 100, // high value to fully round the sides of the button
    backgroundColor: Colors.BUTTON,
    marginBottom: Sizes.BASE_SPACING,
    marginRight: Sizes.BASE_SPACING,
    //borderColor: 'white',
    //borderWidth: 1,
    ...Sizes.SHADOW,
  },
  label: {
    ...Typography.BUTTON,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  }
});

export default FilterButton;
