import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Modal, TouchableWithoutFeedback } from "react-native";
import FilterItem from './FilterItem';
import FilterButton from './FilterButton';
import { shortDimension } from '../utils/scaling';

import { COLOR_MODAL_BACKGROUND, COLOR_FILTER_ITEM, 
  DIMEN_BORDER_RADIUS } from '../styles';


const Filter = ({ }) => {
  const [visibility, setVisibility] = useState(false);

  const data = [
    { title: 'aaaa', checked: true },
    { title: 'bbbb', checked: false },
    { title: 'cccc', checked: true },
    { title: 'dddd', checked: false }
  ];
  
  const renderHeader = () => {
    return (
      <FilterItem title='header' header/>
    );
  };
  
  const renderItem = ({ item, index }) => {
    return (
      <FilterItem
        title={item.title}
        last={index === data.length-1}
      />
    );
  };

  return (
    <View>
      <FilterButton
        title='titulo'
        onPress={() => setVisibility(true)}
        buttonStyles={{ borderRadius: 10 }}
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
                keyExtractor={item => item.title}
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
