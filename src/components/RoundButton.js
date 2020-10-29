//
// RoundButton is a circular button.
//
// icon:    It is the name (string) of a icon from Feather
// onPress: It is the function called when the button is clicked
//

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

import { Colors, Sizes  } from "../styles";


const RoundButton = ({ icon, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Feather name={icon} size={Sizes.ICON_ROUND_BUTTON} color={Colors.ON_HEADER}/>
      </View>
    </TouchableOpacity>
  );
}

RoundButton.defaultProps = {
  icon: 'zoom-in',
  onPress: () => {},
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Sizes.ROUND_BUTTON,
    height: Sizes.ROUND_BUTTON,
    borderRadius: 100, // high value to fully round the sides of the button
    backgroundColor: Colors.BUTTON,
    ...Sizes.SHADOW,
  },
});

export default RoundButton;
