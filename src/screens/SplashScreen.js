import React from 'react';
import { Text, Image, View, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sizes, Colors, Typography } from '../styles';


const SplashScreen = () => {
  
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ActivityIndicator size='large'  color="#fff"/>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
