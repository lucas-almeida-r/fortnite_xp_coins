import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth } from '../utils/scaling';


const ZoomButton = ({ icon, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Feather name={icon} size={Sizes.ICON}/>
      </View>
    </TouchableOpacity>
  );
}

ZoomButton.defaultProps = {
  icon: 'zoom-in',
  onPress: () => {},
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Sizes.BUTTON,
    height: Sizes.BUTTON,
    borderRadius: 100, // high value to fully round the sides of the button
    backgroundColor: Colors.HEADER,
  },
});

export default ZoomButton;
