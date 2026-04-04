import theme from '@styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IHeaderProps {
  title: string;
  description: string | React.ReactNode;
  topComp?: React.ReactNode;
}

const Header = ({ title, description, topComp }: IHeaderProps) => {
  return (
    <>
      <View style={styles.headerTop}>{topComp ?? null}</View>
      <View style={styles.header}>
        <Text
          style={[theme.typo.H1_30_Bold, { color: theme.colors.Main.Black }]}
        >
          {title}
        </Text>
        <Text
          style={[
            theme.typo.Body1_13_Regular,
            { color: theme.colors.Sub.Black[200] }
          ]}
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
    gap: 10
  }
});
