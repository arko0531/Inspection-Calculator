import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { IHomeCalcFormProps } from '@/types/home';
import { useMemo } from 'react';

const HomeCalcForm = () => {
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

  return <View style={styles.container}></View>;
};

export default HomeCalcForm;

const styles = StyleSheet.create({
  container: {}
});
