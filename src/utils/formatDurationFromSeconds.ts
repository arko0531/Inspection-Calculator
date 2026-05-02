/** 총 초 → "N시간 M분 S초" 형식 (0인 단위는 생략에 가깝게 표현) */
export const formatDurationFromSeconds = (totalSeconds: number): string => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  if (h > 0) {
    return s === 0 ? `${h}시간 ${m}분` : `${h}시간 ${m}분 ${s}초`;
  }
  if (m > 0) {
    return s === 0 ? `${m}분` : `${m}분 ${s}초`;
  }
  return `${s}초`;
};
