import theme from '@/styles';
import { StyleSheet, Text, View } from 'react-native';

interface IHistoryCardItemProps {
  name: string;
  value: string;
}

const HistoryCardItem = ({ name, value }: IHistoryCardItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default HistoryCardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  name: {
    color: theme.colors.Sub.Black[500],

    ...theme.typo.Body1_13_Regular
  },

  value: {
    color: theme.colors.Main.Black,

    ...theme.typo.Body1_13_Bold
  }
});
