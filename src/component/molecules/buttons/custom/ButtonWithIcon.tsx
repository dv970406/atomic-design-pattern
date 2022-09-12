import Button, { IButton } from 'component/atoms/buttons/Button';
import Icon, { IIcon } from 'component/atoms/icons/Icon';

interface IButtonWithIcon {
  buttonProps: IButton;
  iconProps: IIcon;
}

const ButtonWithIcon = ({ buttonProps, iconProps }: IButtonWithIcon) => {
  return (
    <Button {...buttonProps}>
      <Icon {...iconProps} />
    </Button>
  );
};

export default ButtonWithIcon;
