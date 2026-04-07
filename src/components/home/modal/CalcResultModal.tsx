import Modal from '@/components/common/modal';
import theme from '@/styles';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getHexOpacity } from '@/utils/getHexOpacity';
import CalcResultItem from '@/components/home/modal/CalcResultItem';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import { TResult } from '@/types/common';

interface ICalcResultModalProps {
  open: boolean;
  onClose: () => void;
  result: TResult;
}
const CalcResultModal = ({ open, onClose, result }: ICalcResultModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={styles.modal}
      title={
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
      }
      closeButton
      closeButtonStyle={styles.closeButton}
      closeIconColor={theme.colors.Main.Primary}
    >
      <View style={styles.container}>
        <CalcResultItem
          icon={
            <FontAwesome
              name="user"
              size={14}
              color={theme.colors.Main.Primary}
            />
          }
          title="인당 검사 개수"
          value={result.perPerson}
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
          value={result.duration}
        />
        <CalcResultItem
          icon={
            <Ionicons name="flag" size={14} color={theme.colors.Main.Primary} />
          }
          title="종료 시간"
          value={result.endTime}
        />
      </View>
    </Modal>
  );
};

export default CalcResultModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: theme.colors.Sub.Blue[0],
    borderWidth: 1,
    borderColor: theme.colors.Sub.Blue[20]
  },

  container: {
    gap: 18,
    paddingHorizontal: 4,
    paddingBottom: 6
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
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: getHexOpacity(theme.colors.Sub.Blue[20], 0.6),
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  closeButton: {
    backgroundColor: theme.colors.Sub.Blue[0],
    borderWidth: 1,
    borderColor: theme.colors.Sub.Blue[20]
  }
});
