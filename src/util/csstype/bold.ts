// number로 넘기려고 했는데 emotion 컴포넌트가 string만 받을 수 있는 지 오류를 낸다.
// 따라서 숫자 형태를 string으로 반환해서 emotion에서 +로 number화 한다.

import { TFormatSML } from "../type/prop";

export type TBold = TFormatSML;

export interface IBoldPalette {
  [key: string]: string;
}

export const boldPalette: IBoldPalette = {
  default: "400",
  xxl: "800",
  xl: "700",
  lg: "600",
  md: "500",
  sm: "400",
  xs: "300",
  xxs: "200",
};
