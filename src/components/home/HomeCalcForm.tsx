import ScrollView from '@/components/common/layout/ScrollView';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { IHomeCalcFormProps } from '@/types/home';
import { useMemo, useState } from 'react';
import Input from '@/components/common/input';
import FormLayout from '@/components/common/layout/FormLayout';
import DatePicker from '@/components/common/datePicker';
import Button from '@/components/common/button';
import CalcResultModal from '@/components/home/modal/CalcResultModal';

const HomeCalcForm = () => {
  const [isOpenResultModal, setIsOpenResultModal] = useState(false);

  const defaultValues = useMemo(
    (): IHomeCalcFormProps => ({
      name: '',
      count: 0,
      unit: '',
      perHour: 0,
      startTime: ''
    }),
    []
  );

  const { control, handleSubmit } = useForm<IHomeCalcFormProps>({
    mode: 'onSubmit',
    defaultValues
  });

  const onSubmit = (data: IHomeCalcFormProps) => {
    console.log(data);
    setIsOpenResultModal(true);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <FormLayout control={control} name="name" title="제품명">
          {({ value, onChange }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="제품명을 입력해주세요."
            />
          )}
        </FormLayout>

        <FormLayout
          control={control}
          name="count"
          title="수량"
          rules={{
            required: '수량을 입력해주세요.',
            validate: (value) => {
              if (Number(value) <= 0) {
                return '수량은 1 이상 입력해주세요.';
              }
              return true;
            }
          }}
        >
          {({ value, onChange }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="수량을 입력해주세요."
              type="numeric"
            />
          )}
        </FormLayout>

        <FormLayout
          control={control}
          name="unit"
          title="인원 수"
          rules={{
            required: '인원 수를 입력해주세요.',
            validate: (value) => {
              if (Number(value) <= 0) {
                return '인원 수는 1 이상 입력해주세요.';
              }
              return true;
            }
          }}
        >
          {({ value, onChange }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="인원 수를 입력해주세요."
              type="numeric"
            />
          )}
        </FormLayout>

        <FormLayout
          control={control}
          name="perHour"
          title="시간당 검사수량"
          rules={{
            required: '시간당 검사수량을 입력해주세요.',
            validate: (value) => {
              if (Number(value) <= 0) {
                return '시간당 검사수량은 1 이상 입력해주세요.';
              }
              return true;
            }
          }}
        >
          {({ value, onChange }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="시간당 검사수량을 입력해주세요."
              type="numeric"
            />
          )}
        </FormLayout>

        <FormLayout
          control={control}
          name="startTime"
          title="시작 시간"
          rules={{
            required: '시작 시간을 선택해주세요.'
          }}
        >
          {({ value, onChange }) => (
            <DatePicker value={value} onChange={onChange} mode="time" />
          )}
        </FormLayout>

        <View style={styles.buttonContainer}>
          <Button title="계산하기" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>

      {isOpenResultModal && (
        <CalcResultModal
          open={isOpenResultModal}
          onClose={() => setIsOpenResultModal(false)}
        />
      )}
    </>
  );
};

export default HomeCalcForm;

const styles = StyleSheet.create({
  container: { gap: 2 },

  buttonContainer: {
    marginTop: 14
  }
});
