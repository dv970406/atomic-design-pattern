import { TFormatSML } from "../type/prop";

export type TSize = TFormatSML;
export type TIconSize = "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "4x";

export interface ISizePalette {
  [key: string]: string;
}

export const sizePalette: ISizePalette = {
  default: "16px",
  xxl: "48px",
  xl: "42px",
  lg: "30px",
  md: "24px",
  sm: "18px",
  xs: "12px",
  xxs: "8px",
  none: "0",
};
