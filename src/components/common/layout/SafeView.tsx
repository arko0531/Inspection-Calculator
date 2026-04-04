import React from 'react';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ISafeViewProps {
  children: React.ReactNode;
}

const SafeView = ({ children }: ISafeViewProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 28,
        paddingVertical: 14,
        backgroundColor: theme.colors.background
      }}
      edges={['bottom']}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeView;
