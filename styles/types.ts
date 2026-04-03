/** `typo-*.css` 유틸 className과 동기화 */
export type TypographyToken =
  | 'typo-p1-b50-bold'
  | 'typo-p1-b40-bold'
  | 'typo-h1-30-bold'
  | 'typo-h2-25-bold'
  | 'typo-h3-20-bold'
  | 'typo-h4-18-bold'
  | 'typo-h5-11-regular'
  | 'typo-s1-15-regular'
  | 'typo-b1-15-bold'
  | 'typo-b2-13-bold'
  | 'typo-b4-10-bold'
  | 'typo-m1-14-bold'
  | 'typo-body1-13-bold'
  | 'typo-body1-13-regular'
  | 'typo-body2-12-bold'
  | 'typo-body2-12-regular'
  | 'typo-body3-11-bold'
  | 'typo-body3-11-regular'
  | 'typo-body4-9-regular'
  | 'typo-body4-9-bold'
  | 'typo-body5-8-regular'
  | 'typo-body5-8-bold';

export type Theme = Record<string, never>;
