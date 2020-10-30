//
// RoundButton is a circular button.
//
// icon:    It is the name (string) of a icon from Feather 
//          or any component to display inside the button
// onPress: It is the function called when the button is clicked
//

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from "@expo/vector-icons";

import { Colors, Sizes  } from "../styles";


const RoundButton = ({ icon, imageSource, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {
          icon
            ? <Feather name={icon} size={Sizes.ICON_ROUND_BUTTON} color={Colors.ON_HEADER}/>
            : <Image source={imageSource} style={styles.image}/>
        }
        
      </View>
    </TouchableOpacity>
  );
}

RoundButton.defaultProps = {
  icon: '',
  imageSource: '',
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
  image: {
    width: Sizes.ICON_ROUND_BUTTON,
    height: Sizes.ICON_ROUND_BUTTON,
  },
});

export default RoundButton;
