import React, { useState, useContext, useEffect } from 'react'
import MapScreen from './src/screens/MapScreen';
import SplashScreen from './src/screens/SplashScreen';
import { Provider as MapProvider, Context as MapContext } from './src/context/MapContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getCoinsAndCachedData, getCoinsData } = useContext(MapContext);

  useEffect(() => {
    getCoinsAndCachedData(() => setIsLoading(false));
    //AsyncStorage.clear();
  }, []);

  return isLoading ? <SplashScreen/> : <MapScreen/>
};

export default () => {
  return <SafeAreaProvider>
    <MapProvider>
      <App/>
    </MapProvider>
  </SafeAreaProvider>
};
