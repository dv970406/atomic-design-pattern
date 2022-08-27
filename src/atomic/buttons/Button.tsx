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

export const SButton: any = styled.button`
  background: ${({ bgColor }: IColorPalette) =>
    colorPalette[bgColor] || colorPalette["transparent"]};
  padding: ${({ padding }: IPaddingPalette) =>
    getDirection(padding, paddingPalette)};
  margin: ${({ margin }: IMarginPalette) =>
    getDirection(margin, marginPalette)};
  border-radius: ${({ borderRadius }: IBorderRadiusPalette) =>
    borderRadiusPalette[borderRadius] || borderRadiusPalette["default"]};
  gap: ${({ gap }: IGapPalette) => gapPalette[gap] || gapPalette["default"]};
  width: ${({ width }: IWidthPalette) =>
    widthPalette[width] || widthPalette["default"]};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};

  border: none;
  cursor: pointer;
  :not(:disabled):hover {
    opacity: 0.8;
    transition: all 0.5s;
  }
`;

export interface IButton {
  children?: React.ReactNode;
  bgColor?: TColors;
  padding?: TPadding;
  margin?: TMargin;
  borderRadius?: TBorderRadius;
  gap?: TGap;
  width?: TWidths;
  onClick?: () => void;
  justifyContent?: TJustifyContent;
  flexDirection?: TFlexDirection;
  alignItems?: TAlignItems;
  disabled?: boolean;
}
const Button = ({ children, onClick, ...props }: IButton) => {
  return (
    <SButton disabled={props.disabled} {...props} onClick={onClick}>
      {children}
    </SButton>
  );
};

export default Button;
