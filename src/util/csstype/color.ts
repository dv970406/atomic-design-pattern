// 컬러 추가 시 다음 양식을 지켜주세요
// 한 컬러가 가질 수 있는 종류는 3가지 : deep, normal, soft
// ex) red-deep, red-normal, red-soft
// 반드시 컬러-종류 순서로 작성해주세요

export type TColors =
  | "default"
  | "purple"
  | "blue"
  | "red"
  | "green"
  | "orange"
  | "gray"
  | "none"
  | "black"
  | "white"
  | "transparent";

export interface IColorPalette {
  [key: string]: string;
}

export const colorPalette: IColorPalette = {
  default: "transparent",
  purple: "#9750DD",
  blue: "#0072F5",
  red: "#F31260",
  green: "#17C964",
  orange: "#F5A524",
  gray: "#374151",
  none: "none",
  black: "black",
  white: "white",
  transparent: "transparent",
};
