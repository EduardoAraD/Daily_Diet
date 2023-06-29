import { StatusBar } from 'react-native';
import { NunitoSans_700Bold, NunitoSans_400Regular, useFonts } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';

export default function App() {
  const [loadingFonts] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent barStyle='dark-content' />
      {loadingFonts ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
