//
// Filter is a button that when clicked shows a list of filters as a modal.
// When the user clicks on a filter, it will dispatch the appropriate action funtion 
// to activate or deactivate the filter.
//
// type: This string decides which list of filters to show. 
//       It must be one of the following: 'week', 'color', 'status'
//


import React, { useState, useContext } from 'react';
import { View, StyleSheet, FlatList, Modal, TouchableWithoutFeedback } from "react-native";
import PropTypes from 'prop-types';
import FilterItem from './FilterItem';
import FilterButton from './FilterButton';
import { shortDimension } from '../utils/scaling';
import { Context as MapContext } from '../context/MapContext';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { Colors, Sizes } from '../styles';

const getFilterData = type => {
  switch (type) {
    case 'week':
      return [
        { id: 'week1', label: 'Semana 1' },
        { id: 'week2', label: 'Semana 2' },
        { id: 'week3', label: 'Semana 3' },
        { id: 'week4', label: 'Semana 4' },
        { id: 'week5', label: 'Semana 5' },
        { id: 'week6', label: 'Semana 6' },
        { id: 'week7', label: 'Semana 7' },
        { id: 'week8', label: 'Semana 8' },
        { id: 'week9', label: 'Semana 9' },
        { id: 'week10', label: 'Semana 10' },
      ];
    case 'color':
      return [
        { id: 'green', label: 'Verde' },
        { id: 'blue', label: 'Azul' },
        { id: 'purple', label: 'Roxa' },
        { id: 'gold', label: 'Dourada' },
      ];
    case 'status':
      return [
        { id: 'collected', label: 'Coletada'},
        { id: 'notCollected', label: 'Não Coletada'},
      ];
    default:
      return [];
  }
};



const Filter = ({ type }) => {
  const [visibility, setVisibility] = useState(false);
  const { state: { filters, coins },  setFilters } = useContext(MapContext)

  const filterData = getFilterData(type);
  const availableWeeks = coins.map(c => c.week);

  let headerLabel;
  let iconButton;
  switch (type) {
    case 'week':
      headerLabel = 'Semanas';
      iconButton = <Feather name='calendar' size={20} color={Colors.ON_HEADER}/>;
      break;
    case 'color':
      headerLabel = 'Cores';
      iconButton = <MaterialCommunityIcons name='palette-outline' size={20} color={Colors.ON_HEADER}/>;
      break;
    case 'status':
      headerLabel = 'Status';
      iconButton = <Feather name='check' size={20} color={Colors.ON_HEADER}/>;
      break;
    default:
      headerLabel = '';
      iconButton = null;
      break;
  }
  
  const renderHeader = () => {
    const deactivatedFilters = filterData.filter( item => !filters[item.id]);
    const newFilterValue = deactivatedFilters.length === 0 ? false : true;
    const filtersToUpdate = filterData.map(f => f.id);

    return <FilterItem 
            header
            checked={!newFilterValue}
            label={headerLabel}
            onPressIcon={() => setFilters(filtersToUpdate, newFilterValue)}
          />;
  };
  
  const renderItem = ({ item, index }) => {
    const checked = filters[item.id];
    return type === 'week' && !availableWeeks.includes(item.id)
            ? null
            : <FilterItem
                label={item.label}
                last={index === filterData.length-1}
                checked={checked}
                onPress={() => setFilters([item.id], !checked)}
                onPressIcon={() => setFilters([item.id], !checked)}
              />
  };

  return (
    <View style={{ flex:1 }}>
      <FilterButton
        label={headerLabel}
        onPress={() => setVisibility(true)}
        iconButton={iconButton}
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
                data={filterData}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

Filter.propTypes = {
  types: PropTypes.oneOf(['week', 'color', 'status']),
};

Filter.defaultProps = {
  type: 'week',
};


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.MODAL_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalSurface: {
    backgroundColor: Colors.SURFACE,
    borderRadius: Sizes.BORDER_RADIUS,
    width: shortDimension * 0.70,
  },
});

export default Filter;
