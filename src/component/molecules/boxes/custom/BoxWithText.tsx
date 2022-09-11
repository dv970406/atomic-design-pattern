import Box, { IBox } from 'component/atoms/boxes/Box';
import Text, { IText } from 'component/atoms/texts/Text';
interface IBoxWithIcon {
  boxProps: IBox;
  textProps: IText;
}

const BoxWithText = ({ boxProps, textProps }: IBoxWithIcon) => {
  return (
    <Box {...boxProps}>
      <Text {...textProps} />
    </Box>
  );
};

export default BoxWithText;
