import theme from '@styles';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const backgroundColor = theme.colors.Main.White;

  useEffect(() => {
    void SystemUI.setBackgroundColorAsync(backgroundColor);
  }, [backgroundColor]);

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
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle="dark-content"
        translucent={false}
      />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: backgroundColor
        }}
        edges={['top', 'left', 'right']}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
