import React from 'react'
import MapScreen from './src/screens/MapScreen';
import { Provider as MapProvider } from './src/context/MapContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default () => {
  return <SafeAreaProvider>
    <MapProvider>
      <MapScreen/>
    </MapProvider>
  </SafeAreaProvider>
};
