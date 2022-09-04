import { TFormatSMLXY } from "../type/prop";

export type TMargin = TFormatSMLXY;

export interface IMarginPalette {
  [key: string]: string;
}

export const marginPalette: IMarginPalette = {
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
