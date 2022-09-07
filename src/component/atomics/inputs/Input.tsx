import styled from '@emotion/styled';
import { borderRadiusPalette, TBorderRadius } from 'util/csstype/border';
import { colorPalette, TColors } from 'util/csstype/color';
import { getDirection } from 'util/function/prop';
import { marginPalette, TMargin } from 'util/csstype/margin';
import { paddingPalette, TPadding } from 'util/csstype/padding';
import { TSize } from 'util/csstype/size';

export const SInput: any = styled.input((props) => {
  const {
    bgColor,
    color,
    size,
    padding,
    margin,
    borderRadius,
    borderColor,
    border,
    register,
    type,
    placeholder,
    defaultValue,
    ...restProps
  }: Omit<
    IInput,
    'type' | 'placeholder' | 'register' | 'defaultValue' | 'onChange'
  > = props;

  return {
    background: colorPalette[bgColor || 'white'],
    padding: getDirection(padding!, paddingPalette),
    margin: getDirection(margin!, marginPalette),
    borderRadius: borderRadiusPalette[borderRadius || 'default'],
    border: `${colorPalette[borderColor || 'default']} 1px solid`,
    width: '100%',
    outline: 'none',
    ...restProps,
  };
});

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
  defaultValue?: string | null;
  onChange?: (e?: any) => void;
  [key: string]: any;
}

const Input = ({ onChange, ...props }: IInput) => {
  return <SInput onChange={onChange} {...props.register} {...props} />;
};

export default Input;
