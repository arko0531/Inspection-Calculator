import { StyleSheet, Text, View } from 'react-native';
import theme from '@/styles';
import { getHexOpacity } from '@/utils/getHexOpacity';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TResult } from '@/types/common';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CalcResultItem from '@/components/home/CalcResultItem';
import Octicons from '@expo/vector-icons/Octicons';

interface ICalcResultProps {
  result: TResult;
}

const CalcResult = ({ result }: ICalcResultProps) => {
  const { perPerson, duration, endTime } = result;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>계산 결과</Text>
        <View />
        <View style={styles.headerIcon}>
          <Ionicons
            name="calculator-outline"
            color={theme.colors.Main.Primary}
            size={22}
          />
        </View>
      </View>

      <CalcResultItem
        icon={
          <FontAwesome
            name="user"
            size={14}
            color={theme.colors.Main.Primary}
          />
        }
        title="인당 검사 개수"
        value={perPerson}
      />
      <CalcResultItem
        icon={
          <Octicons
            name="clock-fill"
            size={14}
            color={theme.colors.Main.Primary}
          />
        }
        title="소요 시간"
        value={duration}
      />
      <CalcResultItem
        icon={
          <Ionicons name="flag" size={14} color={theme.colors.Main.Primary} />
        }
        title="종료 시간"
        value={endTime}
      />
    </View>
  );
};

export default CalcResult;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Sub.Blue[0],
    borderWidth: 1,
    borderColor: theme.colors.Sub.Blue[20],
    gap: 18,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerTitle: {
    color: theme.colors.Main.Black,

    ...theme.typo.B1_15_Bold
  },

  headerIcon: {
    width: 38,
    height: 38,
    borderRadius: '50%',
    backgroundColor: getHexOpacity(theme.colors.Sub.Blue[20], 0.4),
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
