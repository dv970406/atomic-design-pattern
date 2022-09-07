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
import { heightPalette, THeights } from 'util/csstype/height';
import { TOpacity } from 'util/csstype/opacity';
import { TDirection } from 'util/type/prop';
import { TDisplay } from 'util/csstype/display';

// 이 방식으로 css를 작성하면 아래 작성된 css 이외 기타 css의 적용이 까다로워짐

/* background: ${({ bgColor }: IColorPalette) =>
  colorPalette[bgColor] || colorPalette['default']};
width: ${({ width }: IWidthPalette) =>
  widthPalette[width] || widthPalette['default']};
height: ${({ height }: IHeightPalette) =>
  heightPalette[height] || heightPalette['default']};
border-radius: ${({ borderRadius }: IBorderRadiusPalette) =>
  borderRadiusPalette[borderRadius] || borderRadiusPalette['default']};
padding: ${({ padding }: IPaddingPalette) =>
  getDirection(padding, paddingPalette)};
margin: ${({ margin }: IMarginPalette) =>
  getDirection(margin, marginPalette)};
border: ${({ borderColor }: IColorPalette) =>
  borderColor && `${colorPalette[borderColor]} 1px solid`};
gap: ${({ gap }: IGapPalette) => gapPalette[gap] || gapPalette['default']};
opacity: ${({ opacity }) => opacity || 1};
display: flex;
justify-content: ${({ justifyContent }) => justifyContent || 'center'};
flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
align-items: ${({ alignItems }) => alignItems || 'center'}; */

// 위 방식은 지정하지 않은 css 확장의 한계로 인해 아래 방식으로 수정함
// 따라서 미리 규격화된 css가 지정되어 있지 않다고 하더라도 사용자의 재량에 따라 이외의 css 추가 가능
// 단, Atomic을 그대로 가져다 쓸 경우에만 가능하고 Molecules에는 규격 css 이외의 css 추가는 불가능함
const SBox: any = styled.div((props) => {
  const {
    bgColor,
    width,
    height,
    borderRadius,
    padding,
    margin,
    borderColor,
    gap,
    opacity,
    display,
    justifyContent,
    flexDirection,
    alignItems,
    children,
    ...restProps
  }: IBox = props;
  return {
    background: colorPalette[bgColor || 'default'],
    width: widthPalette[width || 'default'],
    height: heightPalette[height || 'default'],
    borderRadius: borderRadiusPalette[borderRadius || 'default'],
    padding: getDirection(padding!, paddingPalette),
    margin: getDirection(margin!, marginPalette),
    ...(borderColor && getBorderColor(borderColor[0], borderColor[1])),
    gap: gapPalette[gap || 'default'],
    opacity: opacity || 1,
    display: display || 'flex',
    justifyContent: justifyContent || 'flex-start',
    flexDirection: flexDirection || 'row',
    alignItems: alignItems || 'flex-start',
    ...restProps,
  };
});

export interface IBox {
  children?: React.ReactNode;
  bgColor?: TColors;
  width?: TWidths;
  height?: THeights;
  borderRadius?: TBorderRadius;
  borderColor?: [TColors, TDirection];
  margin?: TMargin;
  padding?: TPadding;
  gap?: TGap;
  display?: TDisplay;
  justifyContent?: TJustifyContent;
  flexDirection?: TFlexDirection;
  alignItems?: TAlignItems;
  opacity?: TOpacity;
  [key: string]: any;
}
const Box = ({ children, ...props }: IBox) => {
  return <SBox {...props}>{children}</SBox>;
};

export default Box;
