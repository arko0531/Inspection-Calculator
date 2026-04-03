import type { TextStyle } from 'react-native';

const typography = {
  P1_B50_Bold: {
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 60,
    letterSpacing: 0
  },
  P1_B40_Bold: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 48,
    letterSpacing: 0
  },
  H1_30_Bold: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: 0
  },
  H2_25_Bold: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: 0
  },
  H3_20_Bold: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: 0
  },
  H4_18_Bold: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0
  },
  H5_11_Regular: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: 0
  },
  S1_15_Regular: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0
  },
  B1_15_Bold: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0
  },
  B2_13_Bold: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0
  },
  B4_10_Bold: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 14,
    letterSpacing: 0
  },
  M1_14_Bold: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0
  },
  Body1_13_Bold: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0
  },
  Body1_13_Regular: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0
  },
  Body2_12_Bold: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0
  },
  Body2_12_Regular: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0
  },
  Body3_11_Bold: {
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    letterSpacing: 0
  },
  Body3_11_Regular: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0
  },
  Body4_9_Regular: {
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 12,
    letterSpacing: 0
  },
  Body4_9_Bold: {
    fontSize: 9,
    fontWeight: '700',
    lineHeight: 12,
    letterSpacing: 0
  },
  Body5_8_Regular: {
    fontSize: 8,
    fontWeight: '400',
    lineHeight: 11,
    letterSpacing: 0
  },
  Body5_8_Bold: {
    fontSize: 8,
    fontWeight: '700',
    lineHeight: 11,
    letterSpacing: 0
  }
} as const satisfies Record<string, TextStyle>;

export type Typography = typeof typography;
export type TypographyToken = keyof typeof typography;

export default typography;
