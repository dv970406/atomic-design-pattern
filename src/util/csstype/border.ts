import { TFormatSML } from "../type/prop";

export type TBorderRadius = TFormatSML | "full";

export interface IBorderRadiusPalette {
  [key: string]: string;
}

export const borderRadiusPalette: IBorderRadiusPalette = {
  default: "0",
  xxl: "28px",
  xl: "24px",
  lg: "20px",
  md: "16px",
  sm: "14px",
  xs: "10px",
  xxs: "6px",
  full: "50%",
};
