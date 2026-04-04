import { colors } from './theme/colors';
import typography from './theme/typography';

const theme = {
  colors,
  typo: typography
};

export default theme;

export { appPaperTheme } from './theme/paperTheme';

export type { Colors, Theme, Typography } from './types';
