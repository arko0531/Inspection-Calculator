interface IRadioOption {
  label: string;
  value: string;
}

export const CALC_TYPE_OPTIONS: IRadioOption[] = [
  { label: '인당 검사 개수', value: 'perPerson' },
  { label: '시간당 검사수량', value: 'perHour' }
];
