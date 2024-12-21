import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Mantém a tela de splash visível enquanto o app carrega
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {
    // Esconde a tela de splash após o app carregar
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade' : 'default',
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    />
  );
}
