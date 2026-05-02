export type TCalcType = 'perPerson' | 'perHour';

export type TResult = {
  calcType: TCalcType;
  perPerson: string;
  duration: string;
  /** `perPerson` 계산 타입에서만 계산된 종료 시각 */
  endTime: string;
  /** `perHour` 계산 타입에서만 계산된 1인 시간당 검사 수량 */
  perHour: string;
};

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
