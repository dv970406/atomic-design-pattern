import styled from '@emotion/styled';
import Input, { IInput } from 'component/atoms/inputs/Input';
import Text, { IText } from 'component/atoms/texts/Text';
import { IWidthPalette, TWidths, widthPalette } from 'util/csstype/width';

interface IInputWithText {
  inputProps: IInput;
  textProps: IText;
  width?: TWidths;
}

const Div: any = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }: IWidthPalette) =>
    widthPalette[width] || widthPalette['default']};
`;

const InputWithText = ({ inputProps, textProps, width }: IInputWithText) => {
  return (
    <Div width={width}>
      <Text {...textProps} />
      <Input {...inputProps} />
    </Div>
  );
};

export default InputWithText;
