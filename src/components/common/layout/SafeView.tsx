import { colors } from '@styles/theme/colors';
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
        paddingHorizontal: 26,
        paddingVertical: 14,
        backgroundColor: colors.Main.White
      }}
      edges={['bottom']}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeView;
