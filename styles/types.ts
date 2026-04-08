import type { Colors } from './theme/colors';
import type { Shadow } from './theme/shadow';
import type { Typography } from './theme/typography';

export type { Colors } from './theme/colors';
export type { Shadow, ShadowToken } from './theme/shadow';
export type { Typography, TypographyToken } from './theme/typography';

/** `styles/index` default theme과 동일한 형태 */
export type Theme = {
  colors: Colors;
  typo: Typography;
  shadow: Shadow;
};
