import theme from '@/styles';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { getHexOpacity } from '@/utils/getHexOpacity';
import HistoryCardItemPair from '@/components/history/item/HistoryCardItemPair';
import { ACCENT_COLORS } from '@/constants/accentColors';
import { THistoryItem } from '@/types/common';

interface IHistoryCardProps {
  item: THistoryItem;
  colorIndex: number;
}

const HistoryCard = ({ item, colorIndex }: IHistoryCardProps) => {
  const color = ACCENT_COLORS[colorIndex % ACCENT_COLORS.length];
  const iconBg = getHexOpacity(color, 0.1);

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
        <FontAwesome5 name="box" size={18} color={color} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.name || '미지정'}
        </Text>

        <View style={styles.itemContainer}>
          <HistoryCardItemPair
            first={{ name: '수량', value: item.count || '0' }}
            second={{ name: '인원', value: item.unit || '0' }}
          />
          <HistoryCardItemPair
            first={{ name: '시간당 검사수량', value: item.perHour || '0' }}
            second={{ name: '소요 시간', value: item.duration || '0' }}
          />
          <HistoryCardItemPair
            first={{ name: '시작 시간', value: item.startTime || '00:00' }}
            second={{ name: '종료 시간', value: item.endTime || '00:00' }}
          />
        </View>

        <Text style={styles.time}>{item.updateTs || '00:00:00'}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    borderWidth: 1,
    borderColor: theme.colors.Sub.Black[20],
    borderRadius: 10,
    padding: 16,
    backgroundColor: theme.colors.Main.White,

    ...theme.shadow.S
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  contentContainer: {
    flex: 1,
    gap: 8
  },

  title: {
    color: theme.colors.Main.Black,

    ...theme.typo.B1_15_Bold
  },

  itemContainer: {
    gap: 6
  },

  time: {
    color: theme.colors.Sub.Black[100],

    ...theme.typo.Body3_11_Regular
  }
});
