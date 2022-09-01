import { TBold } from "../csstype/bold";
import { TBorderRadius } from "../csstype/border";
import { TColors } from "../csstype/color";
import { TAlignItems, TFlexDirection, TJustifyContent } from "../csstype/flex";
import { TGap } from "../csstype/gap";
import { THeights } from "../csstype/height";
import { TMargin } from "../csstype/margin";
import { TPadding } from "../csstype/padding";
import { TSize } from "../csstype/size";
import { TWidths } from "../csstype/width";

export type TFormatSMLXY =
  | "default"
  | "xxl"
  | "xxl-x"
  | "xxl-y"
  | "xl"
  | "xl-x"
  | "xl-y"
  | "lg"
  | "lg-x"
  | "lg-y"
  | "md"
  | "md-x"
  | "md-y"
  | "sm"
  | "sm-x"
  | "sm-y"
  | "xs"
  | "xs-x"
  | "xs-y"
  | "xxs"
  | "xxs-x"
  | "xxs-y";

export type TFormatSML =
  | "default"
  | "xxl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "xxs";

export interface IProps {
  bgColor?: TColors;
  padding?: TPadding;
  margin?: TMargin;
  borderRadius?: TBorderRadius;
  borderColor?: TColors;
  color?: TColors;
  size?: TSize;
  gap?: TGap;
  width?: TWidths;
  height?: THeights;
  bold?: TBold;
  placeholder?: string;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  flexDirection?: TFlexDirection;
  disabled?: boolean;
}
