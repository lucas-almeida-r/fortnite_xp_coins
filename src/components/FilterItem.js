import React from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

import { DIMEN_BUTTON_HEIGHT, DIMEN_SPACING, 
  COLOR_FILTER_ITEM_BORDER, TEXT_SUBTITLE_STYLE, 
  COLOR_FILTER_ITEM, DIMEN_BORDER_RADIUS, COLOR_FILTER_HEADER, TEXT_TITLE_STYLE } from "../styles";

const FilterItem = ({ name, checked, header, last, onPress, onPressIcon}) => {

  const containerExtraStyle = {
    backgroundColor: header ? COLOR_FILTER_HEADER : COLOR_FILTER_ITEM,
    borderTopLeftRadius: header ? DIMEN_BORDER_RADIUS : 0,
    borderTopRightRadius: header ? DIMEN_BORDER_RADIUS : 0,
    borderBottomWidth : header || last ? 0 : 1,
    borderBottomLeftRadius: last ? DIMEN_BORDER_RADIUS : 0,
    borderBottomRightRadius: last ? DIMEN_BORDER_RADIUS : 0,
  };
  const textStyle = header ? TEXT_TITLE_STYLE : TEXT_SUBTITLE_STYLE;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerExtraStyle]}>

        <Text style={textStyle}>{name}</Text>

        <TouchableOpacity onPress={onPressIcon}>
          <Feather name={checked ? 'check-square' : 'square'} size={20} />
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  );
}

FilterItem.defaultProps = {
  name: '',
  checked: false,
  header: false,
  last: false,
  onPress: () => {},
  onPressIcon: () => {},
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: COLOR_FILTER_ITEM_BORDER,
    height: DIMEN_BUTTON_HEIGHT,
    paddingHorizontal: DIMEN_SPACING,
  },
});

export default FilterItem;
