import theme from '@styles';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ISafeViewProps {
  children: React.ReactNode;
}

const SafeView = ({ children }: ISafeViewProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 28,
        backgroundColor: theme.colors.Main.White
      }}
      edges={['bottom']}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeView;
