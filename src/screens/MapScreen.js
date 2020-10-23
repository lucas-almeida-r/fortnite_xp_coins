import React, { useContext } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilterItem from '../components/FilterItem';
import Filter from '../components/Filter';
import { moderateScale, screenHeight, screenWidth } from '../utils/scaling';

const MapScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>MapScreen</Text>
      <Text>{screenHeight}</Text>
      <Text>{screenWidth}</Text>
      <FilterItem />
      <Text>aaaaaaaaaaaaaaa</Text>
      <Filter />
    </SafeAreaView>
  );
}

// TESTAR O FILTER ITEM, VER SE O WEB CONSEGUE EXIBIR CORRETAMENTE


const styles = StyleSheet.create({
  
});

export default MapScreen;

