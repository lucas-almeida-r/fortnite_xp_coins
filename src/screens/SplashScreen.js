import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sizes, Colors, Typography } from '../styles';


const SplashScreen = () => {
  
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Image
        source={require('../../assets/splash.png')}
        style={styles.logo}
      />
      <Text>
        Partes dos materiais utilizados são marcas comerciais e/ou obras com direitos autorais da Epic Games, Inc. Todos os direitos reservados pela Epic. Este material não é oficial e não é endossado pela Epic.
      </Text>
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
  logo: {
    width: 100,
    height: 100
  },
  warning: {},
});

export default SplashScreen;
