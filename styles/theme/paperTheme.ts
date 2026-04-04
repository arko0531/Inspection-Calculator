import { Platform, type TextStyle } from 'react-native';
import {
  MD3LightTheme,
  configureFonts,
  type MD3Theme
} from 'react-native-paper';

import { colors } from './colors';
import typography from './typography';

const fontFamily =
  Platform.select({ ios: 'System', default: 'sans-serif' }) ?? 'sans-serif';

type PaperFontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

function toPaperFontWeight(
  w: TextStyle['fontWeight'] | undefined
): PaperFontWeight {
  if (w === undefined || w === 'normal') return '400';
  if (w === 'bold') return '700';
  if (typeof w === 'number') return String(w) as PaperFontWeight;
  return w as PaperFontWeight;
}

function tokenToMd3Type(token: {
  fontSize: number;
  fontWeight?: TextStyle['fontWeight'];
  lineHeight: number;
  letterSpacing?: number;
}) {
  return {
    fontFamily,
    fontSize: token.fontSize,
    fontWeight: toPaperFontWeight(token.fontWeight),
    lineHeight: token.lineHeight,
    letterSpacing: token.letterSpacing ?? 0
  };
}

const { Main, Sub } = colors;

export const appPaperTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: Main.Primary,
    onPrimary: Main.White,
    primaryContainer: Sub.Blue[10],
    onPrimaryContainer: Sub.Blue[700],

    secondary: Main.Secondary,
    onSecondary: Main.White,
    secondaryContainer: Sub.Green[10],
    onSecondaryContainer: Sub.Green[700],

    tertiary: Sub.Orange[50],
    onTertiary: Main.White,
    tertiaryContainer: Sub.Orange[10],
    onTertiaryContainer: Sub.Orange[700],

    background: Main.White,
    onBackground: Main.Black,

    surface: Main.White,
    onSurface: Main.Black,
    surfaceVariant: Sub.Black[10],
    onSurfaceVariant: Sub.Black[100],

    error: Main.Warning,
    onError: Main.White,
    errorContainer: Sub.Red[10],
    onErrorContainer: Sub.Red[700],

    outline: Sub.Black[100],
    outlineVariant: Sub.Black[20],

    inverseSurface: Sub.Black[700],
    inverseOnSurface: Main.White,
    inversePrimary: Sub.Blue[30]
  },
  fonts: configureFonts({
    isV3: true,
    config: {
      displayLarge: tokenToMd3Type(typography.P1_B40_Bold),
      displayMedium: tokenToMd3Type(typography.H1_30_Bold),
      displaySmall: tokenToMd3Type(typography.H2_25_Bold),

      headlineLarge: tokenToMd3Type(typography.H2_25_Bold),
      headlineMedium: tokenToMd3Type(typography.H3_20_Bold),
      headlineSmall: tokenToMd3Type(typography.H4_18_Bold),

      titleLarge: tokenToMd3Type(typography.H4_18_Bold),
      titleMedium: tokenToMd3Type(typography.M1_14_Bold),
      titleSmall: tokenToMd3Type(typography.B1_15_Bold),

      bodyLarge: tokenToMd3Type(typography.S1_15_Regular),
      bodyMedium: tokenToMd3Type(typography.Body1_13_Regular),
      bodySmall: tokenToMd3Type(typography.Body2_12_Regular),

      labelLarge: tokenToMd3Type(typography.B1_15_Bold),
      labelMedium: tokenToMd3Type(typography.B2_13_Bold),
      labelSmall: tokenToMd3Type(typography.Body3_11_Bold)
    }
  })
};
