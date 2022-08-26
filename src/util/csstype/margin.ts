import { TFormatSMLXY } from "../type/prop";

export type TMargin = TFormatSMLXY;

export interface IMarginPalette {
  [key: string]: string;
}

export const marginPalette: IMarginPalette = {
  default: "0px",
  xxl: "24px",
  xl: "20px",
  lg: "16px",
  md: "12px",
  sm: "8px",
  xs: "4px",
  xxs: "2px",
};
