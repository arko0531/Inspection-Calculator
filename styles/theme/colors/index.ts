import { Black, Blue, Green, Orange, Purple, Red, Yellow } from './base';

const Main = {
  Primary: Blue[50],
  Secondary: Green[50],
  Warning: Red[50],
  Green: Green[50],
  White: Black[0],
  Black: Black[700]
} as const;

const Sub = {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Black,
  Purple
};

export const colors = {
  Main,
  Sub
};

export type Colors = typeof colors;
