import Box from 'component/atoms/boxes/Box';
import Button, { IButton } from 'component/atoms/buttons/Button';
import Icon, { IIcon } from 'component/atoms/icons/Icon';
import Text, { IText } from 'component/atoms/texts/Text';
interface IButtonWithIconAndText {
  buttonProps: IButton;
  iconProps: IIcon;
  textProps: IText;
}
const ButtonWithIconAndText = ({
  buttonProps,
  iconProps,
  textProps,
}: IButtonWithIconAndText) => {
  return (
    <Button {...buttonProps}>
      <Box>
        <Icon {...iconProps} />
      </Box>
      <Box>
        <Text {...textProps} />
      </Box>
    </Button>
  );
};

export default ButtonWithIconAndText;
