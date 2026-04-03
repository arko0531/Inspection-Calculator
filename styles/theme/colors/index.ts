import { Black, Blue, Green, Orange, Red, Yellow } from './base';

const Main = {
  Primary: Blue[50],
  Secondary: Green[50],
  Warning: Red[50]
} as const;

const Sub = {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Black
};

export const colors = {
  Main,
  Sub
};

export type Colors = typeof colors;

export {
  colorModes,
  defaultColorMode,
  getSemanticColors,
  semanticColors
} from './mode';

export type { ColorMode, SemanticColors } from './mode';
