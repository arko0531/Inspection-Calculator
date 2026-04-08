import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { ICalcFormProps } from '@/types/home';
import { useMemo } from 'react';
import Input from '@/components/common/input';
import FormLayout from '@/components/common/layout/FormLayout';
import DatePicker from '@/components/common/datePicker';
import Button from '@/components/common/button';
import dayjs from 'dayjs';
import { THistoryItem, TResult } from '@/types/common';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import { STORAGE_KEYS } from '@/constants/keys';
import { getData, setData } from '@/utils/storage/asyncStorage';

interface IHomeCalcFormProps {
  setResult: React.Dispatch<React.SetStateAction<TResult>>;
  setIsShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  resetForm: number;
}

const HomeCalcForm = ({
  setResult,
  setIsShowResult,
  resetForm
}: IHomeCalcFormProps) => {
  const defaultValues = useMemo(
    (): ICalcFormProps => ({
      name: '',
      count: '',
      unit: '',
      perHour: '',
      startTime: ''
    }),
    []
  );

  const { control, handleSubmit, reset } = useForm<ICalcFormProps>({
    mode: 'onSubmit',
    defaultValues
  });

  useDidMountEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset, resetForm]);

  const onSubmit = async (data: ICalcFormProps) => {
    const { name, count, unit, perHour, startTime } = data;

    const countN = Number(count);
    const unitN = Number(unit);
    const perHourN = Number(perHour);

    // 인당 검사 개수: 전체 수량을 인원으로 나눈 값
    const perPerson = countN / unitN;
    const perPersonLabel = `${perPerson.toLocaleString('ko-KR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    })}개`;

    // 소요 시간(초): 팀 처리량(인원 × 시간당) 기준으로 전체 수량을 나눔
    const hoursTotal = countN / (unitN * perHourN);
    const totalSeconds = Math.round(hoursTotal * 3600);

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const durationLabel =
      h > 0
        ? s === 0
          ? `${h}시간 ${m}분`
          : `${h}시간 ${m}분 ${s}초`
        : m > 0
          ? s === 0
            ? `${m}분`
            : `${m}분 ${s}초`
          : `${s}초`;

    // 종료 시간: 시작(HH:mm)에 소요 분을 더함
    const start = dayjs(startTime.trim(), 'HH:mm', true);
    const endTimeLabel = start.isValid()
      ? start.add(totalSeconds, 'second').format('HH:mm')
      : '';

    const historyData: THistoryItem = {
      name,
      count: countN.toLocaleString('ko-KR'),
      unit: unitN.toLocaleString('ko-KR'),
      perHour: perHourN.toLocaleString('ko-KR'),
      startTime,
      endTime: endTimeLabel,
      perPerson: perPersonLabel,
      duration: durationLabel,
      updateTs: dayjs().format('YYYY-MM-DD HH:mm:ss')
    };

    // const prev =
    //   (await getData<THistoryItem[]>(STORAGE_KEYS.CALC_HISTORY)) ?? [];
    // await setData<THistoryItem[]>(STORAGE_KEYS.CALC_HISTORY, [
    //   ...prev,
    //   historyData
    // ]);

    setResult({
      perPerson: perPersonLabel,
      duration: durationLabel,
      endTime: endTimeLabel
    });

    setIsShowResult(true);
  };

  return (
    <>
      <View>
        <FormLayout control={control} name="name" title="제품명">
          {({ value, onChange }) => (
            <Input
              value={value}
              onChange={onChange}
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
              onChange={onChange}
              placeholder="수량을 입력해주세요."
              type="numeric"
              number
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
              onChange={onChange}
              placeholder="인원 수를 입력해주세요."
              type="numeric"
              number
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
              onChange={onChange}
              placeholder="시간당 검사수량을 입력해주세요."
              type="numeric"
              number
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
      </View>
    </>
  );
};

export default HomeCalcForm;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 8
  }
});
