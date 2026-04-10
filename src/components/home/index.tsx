import Header from '@/components/common/header';
import ScrollView from '@/components/common/layout/ScrollView';
import CalcResult from '@/components/home/CalcResult';
import HomeCalcForm from '@/components/home/HomeCalcForm';
import CalcResultModal from '@/components/home/modal/CalcResultModal';
import theme from '@/styles';
import { TResult } from '@/types/common';
import { toast } from '@/utils/toast';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  const [isShowResult, setIsShowResult] = useState(false);
  const [result, setResult] = useState<TResult>({
    perPerson: '',
    duration: '',
    endTime: ''
  });
  const [resetForm, setResetForm] = useState(0);

  const resetHandler = () => {
    setResult({
      perPerson: '',
      duration: '',
      endTime: ''
    });
    setIsShowResult(false);
    setResetForm((prev) => prev + 1);
    toast.success('입력값이 초기화되었습니다.');
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          title="검사 계산기"
          description="입력값을 넣고 계산 버튼을 눌러주세요."
          topComp={
            <Pressable onPress={resetHandler}>
              <Text style={styles.resetButton}>초기화</Text>
            </Pressable>
          }
        />

        <ScrollView style={styles.scrollContainer}>
          <HomeCalcForm
            setResult={setResult}
            setIsShowResult={setIsShowResult}
            resetForm={resetForm}
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
    gap: 26
  },

  resetButton: {
    color: theme.colors.Main.Warning,
    textAlign: 'right',

    ...theme.typo.Body2_12_Bold
  }
});
