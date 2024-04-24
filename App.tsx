import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/default.theme';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_700Bold,
    //VolvoNovum: require('./public/fonts/VolvoNovum-Regular.woff')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}