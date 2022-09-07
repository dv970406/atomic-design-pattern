import styled from '@emotion/styled';
import { boldPalette, TBold } from 'util/csstype/bold';
import { colorPalette, TColors } from 'util/csstype/color';
import { sizePalette, TSize } from 'util/csstype/size';

const SText: any = styled.p((props) => {
  const { size, color, bold, text, ...restProps }: Omit<IText, 'text'> = props;
  return {
    fontSize: sizePalette[size || 'default'],
    color: colorPalette[color || 'white'],
    fontWeight: +boldPalette[bold || 'default'],
    //font-family
    margin: 0,
    ...restProps,
  };
});

export interface IText {
  text: string;
  size?: TSize;
  color?: TColors;
  bold?: TBold;
  [key: string]: any;
}
const Text = ({ text, ...prop }: IText) => {
  return <SText {...prop}>{text}</SText>;
};

export default Text;
