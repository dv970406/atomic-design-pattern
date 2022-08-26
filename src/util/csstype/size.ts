import { TFormatSML } from "../type/prop";

export type TSize = TFormatSML;

export interface ISizePalette {
  [key: string]: string;
}

export const sizePalette: ISizePalette = {
  default: "16px",
  xxl: "32px",
  xl: "28px",
  lg: "24px",
  md: "20px",
  sm: "16px",
  xs: "12px",
  xxs: "8px",
};
