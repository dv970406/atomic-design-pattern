import styled from "@emotion/styled";
import { boldPalette, IBoldPalette, TBold } from "../../util/csstype/bold";
import { colorPalette, IColorPalette, TColors } from "../../util/csstype/color";
import { ISizePalette, sizePalette, TSize } from "../../util/csstype/size";

const SText: any = styled.p`
  font-size: ${({ size }: ISizePalette) =>
    sizePalette[size] || sizePalette["default"]};
  color: ${({ color }: IColorPalette) =>
    colorPalette[color] || colorPalette["white"]};
  font-weight: ${({ bold }: IBoldPalette) =>
    +boldPalette[bold] || +boldPalette["default"]};
  //font-family
  margin: 0;
`;

export interface IText {
  text: string;
  size?: TSize;
  color?: TColors;
  bold?: TBold;
}
const Text = ({ text, ...prop }: IText) => {
  return <SText {...prop}>{text}</SText>;
};

export default Text;
