import Header from '@/components/common/header';
import { StyleSheet, View } from 'react-native';

const History = () => {
  return (
    <View style={styles.container}>
      <Header title="계산 기록" description="최신 계산 기록이에요." />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
