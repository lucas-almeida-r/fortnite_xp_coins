import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Modal, TouchableWithoutFeedback, Button } from "react-native";
import FilterItem from './FilterItem';
import { shortDimension } from '../utils/scaling';

import { COLOR_MODAL_BACKGROUND, COLOR_FILTER_ITEM, 
  DIMEN_BORDER_RADIUS } from '../styles';


const Filter = ({ }) => {
  const [visibility, setVisibility] = useState(false);

  const data = [
    { name: 'aaaa', checked: true },
    { name: 'bbbb', checked: false },
    { name: 'cccc', checked: true },
    { name: 'dddd', checked: false }
  ];
  
  const renderHeader = () => {
    return (
      <FilterItem name='header' header/>
    );
  };
  
  const renderItem = ({ item, index }) => {
    return (
      <FilterItem
        name={item.name}
        last={index === data.length-1}
      />
    );
  };

  return (
    <View>
      <Button
        title='titulo'
        onPress={() => setVisibility(true)}
      />
      <Modal
        visible={visibility}
        transparent
        animationType='slide'
        onRequestClose={() => setVisibility(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisibility(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalSurface}>
              {renderHeader()}
              <FlatList
                renderItem={renderItem}
                data={data}
                keyExtractor={item => item.name}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLOR_MODAL_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalSurface: {
    backgroundColor: COLOR_FILTER_ITEM,
    borderRadius: DIMEN_BORDER_RADIUS,
    width: shortDimension * 0.70,
  },
});

export default Filter;
