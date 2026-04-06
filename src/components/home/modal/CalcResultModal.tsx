import Modal from '@/components/common/modal';
import theme from '@/styles';
import { StyleSheet, Text, View } from 'react-native';

interface ICalcResultModalProps {
  open: boolean;
  onClose: () => void;
}
const CalcResultModal = ({ open, onClose }: ICalcResultModalProps) => {
  return (
    <Modal open={open} onClose={onClose} style={styles.modal}>
      <View>
        <Text>CalcResultModal</Text>
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
  }
});
