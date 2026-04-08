import HistoryCardItem from '@/components/history/item/HistoryCardItem';
import theme from '@/styles';
import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, View } from 'react-native';

interface IHistoryCardItemPairProps {
  first: {
    name: string;
    value: string;
  };
  second: {
    name: string;
    value: string;
  };
}

const HistoryCardItemPair = ({ first, second }: IHistoryCardItemPairProps) => {
  return (
    <View style={styles.container}>
      <HistoryCardItem name={first.name} value={first.value} />
      <Entypo name="dot-single" size={14} color={theme.colors.Sub.Black[100]} />
      <HistoryCardItem name={second.name} value={second.value} />
    </View>
  );
};

export default HistoryCardItemPair;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: 8,
    rowGap: 4
  }
});
