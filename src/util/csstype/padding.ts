import { TFormatSMLXY } from "../type/prop";

export type TPadding = TFormatSMLXY;

export interface IPaddingPalette {
  [key: string]: string;
}

export const paddingPalette: IPaddingPalette = {
  default: "0",
  xxl: "78px",
  xl: "60px",
  lg: "48px",
  md: "32px",
  sm: "24px",
  xs: "12px",
  xxs: "8px",
  none: "0",
};
