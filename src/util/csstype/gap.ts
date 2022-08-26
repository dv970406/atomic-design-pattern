import { TFormatSML } from "../type/prop";

export type TGap = TFormatSML;

export interface IGapPalette {
  [key: string]: string;
}

export const gapPalette: IGapPalette = {
  default: "10px",
  xxl: "32px",
  xl: "28px",
  lg: "24px",
  md: "20px",
  sm: "16px",
  xs: "12px",
  xxs: "8px",
};
