import { colors } from '@styles/theme/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface IHeaderProps {
  title: string;
  description: string | React.ReactNode;
  topComp?: React.ReactNode;
}

const Header = ({ title, description, topComp }: IHeaderProps) => {
  const theme = useTheme();

  return (
    <>
      <View style={styles.headerTop}>{topComp ?? null}</View>
      <View style={styles.header}>
        <Text
          style={[theme.fonts.headlineLarge, { color: theme.colors.onSurface }]}
        >
          {title}
        </Text>
        <Text
          style={[theme.fonts.bodyMedium, { color: colors.Sub.Black[200] }]}
        >
          {description}
        </Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerTop: {
    height: 40
  },

  header: {
    flex: 1,
    gap: 10
  }
});
