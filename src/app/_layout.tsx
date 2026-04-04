import { appPaperTheme } from '@styles/theme/paperTheme';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { PaperProvider, useTheme } from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const theme = useTheme();

  useEffect(() => {
    if (Platform.OS !== 'android') return;

    void (async () => {
      await NavigationBar.setVisibilityAsync('hidden');
      await NavigationBar.setBehaviorAsync('inset-swipe');
    })();

    return () => {
      void NavigationBar.setVisibilityAsync('visible');
    };
  }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={appPaperTheme}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.background
          }}
          edges={['top', 'left', 'right']}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
