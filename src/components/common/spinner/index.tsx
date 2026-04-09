import theme from '@/styles';
import { getHexOpacity } from '@/utils/getHexOpacity';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

interface ISpinnerProps {
  loading: boolean;
}

const Spinner = ({ loading }: ISpinnerProps) => {
  return (
    <Modal
      visible={loading}
      transparent
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={getHexOpacity(theme.colors.Main.Primary, 0.7)}
        />
      </View>
    </Modal>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getHexOpacity(theme.colors.Main.White, 0.5),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
