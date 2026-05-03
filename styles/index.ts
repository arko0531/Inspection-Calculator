import { colors } from './theme/colors';
import shadow from './theme/shadow';
import typography from './theme/typography';

const theme = {
  colors,
  typo: typography,
  shadow
};

export default theme;

export type { Colors, Shadow, Theme, Typography } from './types';
