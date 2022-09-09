import { TBold } from "../csstype/bold";
import { TBorderRadius } from "../csstype/border";
import { TColors } from "../csstype/color";
import { TAlignItems, TFlexDirection, TJustifyContent } from "../csstype/flex";
import { TGap } from "../csstype/gap";
import { THeights } from "../csstype/height";
import { TMargin } from "../csstype/margin";
import { TOpacity } from "../csstype/opacity";
import { TPadding } from "../csstype/padding";
import { TSize } from "../csstype/size";
import { TWidths } from "../csstype/width";

type TXXL = "xxl" | "xxl-t" | "xxl-r" | "xxl-b" | "xxl-l" | "xxl-x" | "xxl-y";
type TXL = "xl" | "xl-x" | "xl-y" | "xl-t" | "xl-r" | "xl-b" | "xl-l";
type TLg = "lg" | "lg-x" | "lg-y" | "lg-t" | "lg-r" | "lg-b" | "lg-l";
type TMd = "md" | "md-x" | "md-y" | "md-t" | "md-r" | "md-b" | "md-l";
type TSm = "sm" | "sm-x" | "sm-y" | "sm-t" | "sm-r" | "sm-b" | "sm-l";
type TXS = "xs" | "xs-x" | "xs-y" | "xs-t" | "xs-r" | "xs-b" | "xs-l";
type TXXS = "xxs" | "xxs-x" | "xxs-y" | "xxs-t" | "xxs-r" | "xxs-b" | "xxs-l";

export type TFormatSMLXY =
  | "default"
  | TXXL
  | TXL
  | TLg
  | TMd
  | TSm
  | TXS
  | TXXS
  | "none";

export type TFormatSML =
  | "default"
  | "xxl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "xxs"
  | "none";

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
  opacity?: TOpacity;
}

export type TDirection = "left" | "right" | "top" | "bottom" | "all";
