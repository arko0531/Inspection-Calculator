import type { Theme } from '@react-navigation/native';
import { DefaultTheme } from '@react-navigation/native';

import { colors } from './colors/tokens';

export const LightTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: colors.Blue[50],
    background: colors.Black[10],
    card: colors.Black[0],
    text: colors.Black[700],
    border: colors.Black[20],
    notification: colors.Red[50]
  }
};

export const DarkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: colors.Blue[40],
    background: colors.Black[700],
    card: colors.Black[600],
    text: colors.Black[0],
    border: colors.Black[400],
    notification: colors.Red[50]
  }
};
