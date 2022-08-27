import styled from "@emotion/styled";
import React from "react";
import {
  borderRadiusPalette,
  IBorderRadiusPalette,
  TBorderRadius,
} from "../../util/csstype/border";
import { colorPalette, IColorPalette, TColors } from "../../util/csstype/color";
import { getDirection } from "../../util/function/prop";
import { gapPalette, IGapPalette, TGap } from "../../util/csstype/gap";
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

import { IWidthPalette, TWidths, widthPalette } from "../../util/csstype/width";
import {
  TAlignItems,
  TFlexDirection,
  TJustifyContent,
} from "../../util/csstype/flex";
import {
  heightPalette,
  IHeightPalette,
  THeights,
} from "../../util/csstype/height";

const SBox: any = styled.div`
  background: ${({ bgColor }: IColorPalette) =>
    colorPalette[bgColor] || colorPalette["black"]};
  width: ${({ width }: IWidthPalette) =>
    widthPalette[width] || widthPalette["default"]};
  height: ${({ height }: IHeightPalette) =>
    heightPalette[height] || heightPalette["default"]};
  border-radius: ${({ borderRadius }: IBorderRadiusPalette) =>
    borderRadiusPalette[borderRadius] || borderRadiusPalette["default"]};
  padding: ${({ padding }: IPaddingPalette) =>
    getDirection(padding, paddingPalette)};
  margin: ${({ margin }: IMarginPalette) =>
    getDirection(margin, marginPalette)};
  border: ${({ borderColor }: IColorPalette) =>
      colorPalette[borderColor] || colorPalette["default"]}
    1px solid;
  gap: ${({ gap }: IGapPalette) => gapPalette[gap] || gapPalette["default"]};

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
`;

export interface IBox {
  children?: React.ReactNode;
  bgColor?: TColors;
  width?: TWidths;
  height?: THeights;
  borderRadius?: TBorderRadius;
  borderColor?: TColors;
  margin?: TMargin;
  padding?: TPadding;
  gap?: TGap;
  justifyContent?: TJustifyContent;
  flexDirection?: TFlexDirection;
  alignItems?: TAlignItems;
}
const Box = ({ children, ...props }: IBox) => {
  return <SBox {...props}>{children}</SBox>;
};

export default Box;
