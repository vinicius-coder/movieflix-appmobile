import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

const App: React.FC = () => {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='#321e38' />
      <Routes />
    </ NavigationContainer>
  );
}

export default App;
