import styled from '@emotion/styled';
import Box, { IBox } from 'component/atoms/boxes/Box';
import Input, { IInput } from 'component/atoms/inputs/Input';
import Text, { IText } from 'component/atoms/texts/Text';

interface IBoxWithInputAndText {
  inputProps: IInput;
  textProps: IText;
  boxProps: IBox;
}

const BoxWithInputAndText = ({
  inputProps,
  textProps,
  boxProps,
}: IBoxWithInputAndText) => {
  return (
    <Box {...boxProps}>
      <Text {...textProps} />
      <Input {...inputProps} />
    </Box>
  );
};

export default BoxWithInputAndText;
