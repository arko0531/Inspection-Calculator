import Header from '@/components/common/header';
import HomeCalcForm from '@/components/home/HomeCalcForm';
import { StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        title="검사 계산기"
        description="입력값을 넣고 계산 버튼을 눌러주세요."
      />
      <HomeCalcForm />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    gap: 26
  }
});
