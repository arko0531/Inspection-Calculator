import { colors } from './theme/colors';
import typography from './theme/typography';

const theme = {
  colors,
  typo: typography
};

export default theme;

export type {
  ColorMode,
  Colors,
  SemanticColors,
  Theme,
  Typography
} from './types';
