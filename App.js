import React, { useState, useContext, useEffect } from 'react'
import MapScreen from './src/screens/MapScreen';
import SplashScreen from './src/screens/SplashScreen';
import { Provider as MapProvider, Context as MapContext } from './src/context/MapContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getCachedData } = useContext(MapContext);

  useEffect(() => {
    getCachedData();
    setIsLoading(false);
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
