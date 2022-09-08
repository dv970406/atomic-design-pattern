import { colorPalette, TColors } from "../csstype/color";
import { IMarginPalette } from "../csstype/margin";
import { IPaddingPalette } from "../csstype/padding";
import { TDirection } from "../type/prop";

export const getBorderColor = (color?: TColors, direction?: TDirection) => {
  const borderCss = color && `${colorPalette[color]} 1px solid`;
  switch (direction) {
    case "all":
      return { border: borderCss };
    case "left":
      return { borderLeft: borderCss };
    case "right":
      return { borderRight: borderCss };
    case "top":
      return { borderTop: borderCss };
    case "bottom":
      return { borderBottom: borderCss };
    default:
      return { border: borderCss };
  }
};

// margin or padding이 들어왔을 때 x축이냐 y축, top,bottom,left,right을 가려주는 역할을 한다.
export const getDirection = (
  prop: string,
  palette: IPaddingPalette | IMarginPalette
) => {
  const [size, direction] = prop?.split("-") || [];
  const realSize = palette[size] || palette["default"];
  switch (direction) {
    case "x":
      return `${0} ${realSize}`;
    case "y":
      return `${realSize} ${0}`;
    case "t":
      return `${realSize} 0 0 0`;
    case "r":
      return `0 ${realSize} 0 0`;
    case "b":
      return `0 0 ${realSize} 0`;
    case "l":
      return `0 0 0 ${realSize}`;
    default:
      return realSize;
  }
};
