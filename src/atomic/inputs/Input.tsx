import styled from "@emotion/styled";
import {
  borderRadiusPalette,
  IBorderRadiusPalette,
  TBorderRadius,
} from "../../util/csstype/border";
import { colorPalette, IColorPalette, TColors } from "../../util/csstype/color";
import { getDirection } from "../../util/function/prop";
import {
  IMarginPalette,
  marginPalette,
  TMargin,
} from "../../util/csstype/margin";
import {
  IPaddingPalette,
  paddingPalette,
  TPadding,
} from "../../util/csstype/padding";
import { TSize } from "../../util/csstype/size";

export const Input: any = styled.input`
  background-color: ${({ bgColor }: IColorPalette) =>
    colorPalette[bgColor] || colorPalette["white"]};
  padding: ${({ padding }: IPaddingPalette) =>
    getDirection(padding, paddingPalette)};
  margin: ${({ margin }: IMarginPalette) =>
    getDirection(margin, marginPalette)};
  border-radius: ${({ borderRadius }: IBorderRadiusPalette) =>
    borderRadiusPalette[borderRadius] || borderRadiusPalette["default"]};
  border: ${({ borderColor }: IColorPalette) =>
      colorPalette[borderColor] || colorPalette["default"]}
    1px solid;

  width: 100%;
  outline: none;
`;

export interface IInput {
  bgColor?: TColors;
  color?: TColors;
  size?: TSize;
  padding?: TPadding;
  margin?: TMargin;
  borderRadius?: TBorderRadius;
  borderColor?: TColors;
  border?: TColors;
  register?: any;
  type?: string;
  placeholder?: string;
}
