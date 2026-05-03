import type { ViewStyle } from 'react-native';
import { colors } from './colors';

const shadow = {
  None: {
    shadowColor: colors.Main.Black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },

  /** 아주 약함 — 드롭 섀도우 계열(작은 blur) */
  XS: {
    shadowColor: colors.Main.Black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3.5,
    elevation: 1
  },

  /** 약함 — 리스트 카드, 입력 필드 등 */
  S: {
    shadowColor: colors.Main.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4.5,
    elevation: 3
  },

  /** 중간 — 떠 있는 카드, 주요 버튼 영역 */
  M: {
    shadowColor: colors.Main.Black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.17,
    shadowRadius: 5.5,
    elevation: 5
  },

  /** 강함 — 바텀시트·드롭다운 패널 */
  L: {
    shadowColor: colors.Main.Black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.22,
    shadowRadius: 6.27,
    elevation: 8
  },

  /** 매우 강함 — 모달·토스트 강조 */
  XL: {
    shadowColor: colors.Main.Black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 11
  }
} as const satisfies Record<string, ViewStyle>;

export type Shadow = typeof shadow;
export type ShadowToken = keyof typeof shadow;

export default shadow;
