import theme from '@/styles';
import { StyleSheet, Text, View } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { getHexOpacity } from '@/utils/getHexOpacity';
import HistoryCardItemPair from '@/components/history/item/HistoryCardItemPair';
import { ACCENT_COLORS } from '@/constants/accentColors';
import { THistoryItem } from '@/types/common';

interface IHistoryCardProps {
  item: THistoryItem;
}

const HistoryCard = ({ item }: IHistoryCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SimpleLineIcons
          name="social-dropbox"
          size={22}
          color={theme.colors.Main.Primary}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>

        <View style={styles.itemContainer}>
          <HistoryCardItemPair
            first={{ name: '수량', value: item.count }}
            second={{ name: '인원', value: item.unit }}
          />
          <HistoryCardItemPair
            first={{ name: '시간당 검사수량', value: item.perHour }}
            second={{ name: '소요 시간', value: item.duration }}
          />
          <HistoryCardItemPair
            first={{ name: '시작 시간', value: item.startTime }}
            second={{ name: '종료 시간', value: item.endTime }}
          />
        </View>

        <Text style={styles.time}>{item.updateTs}</Text>
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
    backgroundColor: getHexOpacity(theme.colors.Main.Primary, 0.1),
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
