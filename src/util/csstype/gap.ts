import { TFormatSML } from "../type/prop";

export type TGap = TFormatSML;

export interface IGapPalette {
  [key: string]: string;
}

export const gapPalette: IGapPalette = {
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
