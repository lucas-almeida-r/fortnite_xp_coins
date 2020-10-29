import React, { useState, useContext, useEffect } from 'react'
import MapScreen from './src/screens/MapScreen';
import SplashScreen from './src/screens/SplashScreen';
import { Provider as MapProvider, Context as MapContext } from './src/context/MapContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, LuckiestGuy_400Regular  } from '@expo-google-fonts/luckiest-guy';
import AsyncStorage from '@react-native-community/async-storage';

// disable warning from firebase sdk bug
import { LogBox, Platform } from 'react-native';
if(Platform.OS === 'android') LogBox.ignoreLogs(['Setting a timer for a long']);

const App = () => {
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const { getInitialData } = useContext(MapContext);
  let [fontsLoaded] = useFonts({ LuckiestGuy_400Regular });
  

  useEffect(() => {
    if(Platform.OS === 'web') document.body.style = "position:fixed!important";
    getInitialData(() => setInitialDataLoaded(true));
    //AsyncStorage.clear();
  }, []);

  return initialDataLoaded && fontsLoaded ? <MapScreen/> : <SplashScreen/>;
};

export default () => {
  return <SafeAreaProvider>
    <MapProvider>
      <App/>
    </MapProvider>
  </SafeAreaProvider>
};
