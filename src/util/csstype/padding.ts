import { TFormatSMLXY } from "../type/prop";

export type TPadding = TFormatSMLXY;

export interface IPaddingPalette {
  [key: string]: string;
}

export const paddingPalette: IPaddingPalette = {
  default: "6px",
  xxl: "24px",
  xl: "20px",
  lg: "16px",
  md: "12px",
  sm: "8px",
  xs: "4px",
  xxs: "2px",
};
