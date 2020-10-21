import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>MapScreen</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  
});

export default MapScreen;

