import styled from '@emotion/styled';
import React from 'react';
import { borderRadiusPalette, TBorderRadius } from 'util/csstype/border';
import { colorPalette, TColors } from 'util/csstype/color';
import { getBorderColor, getDirection } from 'util/function/prop';
import { gapPalette, TGap } from 'util/csstype/gap';
import { marginPalette, TMargin } from 'util/csstype/margin';
import { paddingPalette, TPadding } from 'util/csstype/padding';
import { TWidths, widthPalette } from 'util/csstype/width';
import {
  TAlignItems,
  TFlexDirection,
  TJustifyContent,
} from 'util/csstype/flex';
import { TDirection } from 'util/type/prop';
import { heightPalette, THeights } from 'util/csstype/height';
import { TDisplay } from 'util/csstype/display';

const hoverAni = styled.button`
  :not(:disabled) {
    :hover {
      opacity: 0.8;
      transition: all 0.5s;
    }
  }
`;
export const SButton: any = styled(hoverAni)((props) => {
  const {
    bgColor,
    padding,
    margin,
    borderRadius,
    borderColor,
    disabled,
    gap,
    width,
    height,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    children,
    onClick,
    ...restProps
  }: IButton = props;
  return {
    background: colorPalette[bgColor || 'default'],
    padding: getDirection(padding!, paddingPalette),
    margin: getDirection(margin!, marginPalette),
    borderRadius: borderRadiusPalette[borderRadius || 'default'],
    ...(borderColor && getBorderColor(borderColor[0], borderColor[1])),
    gap: gapPalette[gap || 'default'],
    width: widthPalette[width || 'default'],
    height: heightPalette[height || 'default'],
    opacity: disabled ? 0.3 : 1,

    display: display || 'flex',
    justifyContent: justifyContent || 'flex-start',
    flexDirection: flexDirection || 'row',
    alignItems: alignItems || 'flex-start',

    border: 'none',
    cursor: 'pointer',
    ...restProps,
  };
});
export interface IButton {
  children?: React.ReactNode;
  bgColor?: TColors;
  padding?: TPadding;
  margin?: TMargin;
  borderRadius?: TBorderRadius;
  borderColor?: [TColors, TDirection];
  gap?: TGap;
  width?: TWidths;
  height?: THeights;
  onClick?: (e?: any) => void;
  display?: TDisplay;
  justifyContent?: TJustifyContent;
  flexDirection?: TFlexDirection;
  alignItems?: TAlignItems;
  disabled?: boolean;
  [key: string]: any;
}
const Button = ({ children, onClick, ...props }: IButton) => {
  return (
    <SButton {...props} onClick={onClick}>
      {children}
    </SButton>
  );
};

export default Button;
