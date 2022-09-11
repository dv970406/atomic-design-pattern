import Box, { IBox } from 'component/atoms/boxes/Box';
import Icon, { IIcon } from 'component/atoms/icons/Icon';
import Text, { IText } from 'component/atoms/texts/Text';
interface IBoxWithIconAndText {
  boxProps: IBox;
  iconProps: IIcon;
  textProps: IText;
}

const BoxWithIconAndText = ({
  boxProps,
  iconProps,
  textProps,
}: IBoxWithIconAndText) => {
  return (
    <Box {...boxProps}>
      <Icon {...iconProps} />
      <Text {...textProps} />
    </Box>
  );
};

export default BoxWithIconAndText;
