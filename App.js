import React, { useState, useContext, useEffect } from 'react'
import MapScreen from './src/screens/MapScreen';
import SplashScreen from './src/screens/SplashScreen';
import { Provider as MapProvider, Context as MapContext } from './src/context/MapContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, LuckiestGuy_400Regular  } from '@expo-google-fonts/luckiest-guy';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [coinsAndCacheLoaded, setCoinsAndCacheLoaded] = useState(false);
  const { getCoinsAndCachedData } = useContext(MapContext);
  let [fontsLoaded] = useFonts({ LuckiestGuy_400Regular });
  

  useEffect(() => {
    getCoinsAndCachedData(() => setCoinsAndCacheLoaded(true));
    //AsyncStorage.clear();
  }, []);

  return coinsAndCacheLoaded || fontsLoaded ? <MapScreen/> : <SplashScreen/>;
};

export default () => {
  return <SafeAreaProvider>
    <MapProvider>
      <App/>
    </MapProvider>
  </SafeAreaProvider>
};
