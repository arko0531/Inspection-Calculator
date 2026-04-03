import { colors } from './index';

const { Main, Sub } = colors;

const light = {
  Background: Sub.Black[10],
  Text: Sub.Black[700],
  Border: Sub.Black[20],
  Primary: Main.Primary
} as const;

const dark = {
  Background: Sub.Black[700],
  Text: Sub.Black[0],
  Border: Sub.Black[400],
  Primary: Sub.Blue[40]
} as const;

export type SemanticColors = typeof light | typeof dark;

export const colorModes = { light, dark } as const;
export type ColorMode = keyof typeof colorModes;

export const defaultColorMode: ColorMode = 'light';
export const semanticColors = colorModes[defaultColorMode];

export function getSemanticColors(mode: ColorMode): SemanticColors {
  return colorModes[mode];
}
