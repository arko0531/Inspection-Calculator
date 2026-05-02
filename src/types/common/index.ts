export type TResult = {
  perPerson: string;
  duration: string;
  endTime: string;
};

export type TCalcType = 'perPerson' | 'perHour';

export type THistoryItem = {
  type: TCalcType;
  name: string;
  count: string;
  unit: string;
  perHour: string;
  startTime: string;
  endTime: string;
  perPerson: string;
  duration: string;
  updateTs: string;
};
