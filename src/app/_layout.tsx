import { colors } from '@styles/theme/colors';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.Main.White,
          paddingVertical: 10,
          paddingHorizontal: 30
        }}
        edges={['top', 'left', 'right']}
      >
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
