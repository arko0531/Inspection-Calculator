import Header from '@/components/common/header';
import ScrollView from '@/components/common/layout/ScrollView';
import CalcResult from '@/components/home/CalcResult';
import HomeCalcForm from '@/components/home/HomeCalcForm';
import CalcResultModal from '@/components/home/modal/CalcResultModal';
import { TResult } from '@/types/common';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Home = () => {
  const [isShowResult, setIsShowResult] = useState(false);
  const [result, setResult] = useState<TResult>({
    perPerson: '',
    duration: '',
    endTime: ''
  });

  return (
    <>
      <View style={styles.container}>
        <Header
          title="검사 계산기"
          description="입력값을 넣고 계산 버튼을 눌러주세요."
        />

        <ScrollView style={styles.scrollContainer}>
          <HomeCalcForm
            setResult={setResult}
            setIsShowResult={setIsShowResult}
          />

          {isShowResult && <CalcResult result={result} />}
        </ScrollView>
      </View>

      {/* {isShowResult && (
        <CalcResultModal
          result={result}
          open={isShowResult}
          onClose={() => setIsShowResult(false)}
        />
      )} */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 26
  },

  scrollContainer: {
    gap: 26,
    paddingBottom: 26
  }
});
