import '../../styles/global.css';

import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { DarkTheme, LightTheme } from '../../styles/theme/navigationTheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingVertical: 10,
            paddingHorizontal: 30
          }}
          edges={['top', 'left', 'right']}
        >
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
