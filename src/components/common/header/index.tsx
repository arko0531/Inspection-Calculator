import theme from '@/styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IHeaderProps {
  title: string;
  description: string | React.ReactNode;
  topComp?: React.ReactNode;
}

const Header = ({ title, description, topComp }: IHeaderProps) => {
  return (
    <View>
      <View style={styles.headerTop}>{topComp ?? null}</View>
      <View style={styles.header}>
        <Text style={styles.HeaderTitle}>{title}</Text>
        <Text style={styles.HeaderDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerTop: {
    height: 56
  },

  header: {
    gap: 6
  },

  HeaderTitle: {
    color: theme.colors.Main.Black,

    ...theme.typo.H1_30_Bold
  },

  HeaderDescription: {
    paddingLeft: 2,
    color: theme.colors.Sub.Black[200],

    ...theme.typo.Body2_12_Regular
  }
});
