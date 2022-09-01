import { IMarginPalette } from "../csstype/margin";
import { IPaddingPalette } from "../csstype/padding";
import { IProps } from "../type/prop";

// 각 Atomic에 맞는 props들을 반환해줄 것이다.
export const getCorrectProps = (props: IProps) => {
  const {
    bgColor,
    padding,
    margin,
    borderRadius,
    borderColor,
    color,
    size,
    gap,
    width,
    height,
    bold,
    justifyContent,
    alignItems,
    flexDirection,
    disabled,
  }: IProps = props;
  let buttonProps = {
    bgColor,
    padding,
    margin,
    borderRadius,
    gap,
    justifyContent,
    alignItems,
    width,
    disabled,
  };
  let textProps = { size, color, bold };
  let iconProps = { size, color };
  let inputProps = {
    bgColor,
    padding,
    margin,
    borderRadius,
    borderColor,
    width,
  };
  let boxProps = {
    bgColor,
    width,
    height,
    borderRadius,
    borderColor,
    margin,
    padding,
    gap,
    justifyContent,
    alignItems,
    flexDirection,
  };

  return { buttonProps, textProps, iconProps, inputProps, boxProps };
};

// margin or padding이 들어왔을 때 x축이냐 y축을 가려주는 역할을 한다.
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

    default:
      return realSize;
  }
};

/* export const getStandardProps = (standard: TFormatSML, props: IProps) => {
  if (!standard) {
    return;
  }

  props.padding = standard;
  props.borderRadius = standard;
  props.gap = standard;

  return props;
}; */
