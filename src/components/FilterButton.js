
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography, Sizes  } from "../styles";
import { screenWidth } from '../utils/scaling';
import { MaterialIcons} from '@expo/vector-icons';


const FilterButton = ({ label, onPress, iconButton }) => {

  return (
    <TouchableOpacity onPress={onPress} style={{ borderRadius: 100 }}>
      <View style={styles.container}>
        {iconButton}
        <View style={styles.textContainer}>
          <Text style={styles.label}>{label}</Text>
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
    backgroundColor: Colors.HEADER,
    marginBottom: Sizes.BASE_SPACING,
    marginRight: Sizes.BASE_SPACING,
    //borderColor: 'white',
    //borderWidth: 1,
  },
  label: {
    ...Typography.BASE
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  }
});

export default FilterButton;
