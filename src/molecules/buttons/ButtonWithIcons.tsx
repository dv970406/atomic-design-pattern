import styled from "@emotion/styled";
import Box from "../../atomic/boxes/Box";
import Button, { IButton } from "../../atomic/buttons/Button";
import Text, { IText } from "../../atomic/texts/Text";
import Icon, { IIcon } from "../../atomic/icons/Icon";
import { getCorrectProps } from "../../util/function/prop";

// 각 Atomic의 타입들을 interface로 Molecules쪽 타입에 상속시킨다.
interface IButtonWithIcons extends IButton {
  onClick2?: () => void;
}
interface IButtonWithIcons extends IText {}
interface IButtonWithIcons extends IIcon {}

const ButtonWithIcons = ({
  onClick,
  onClick2,
  icon,
  text,
  ...props
}: IButtonWithIcons) => {
  // 편하게 JSX에 prop을 부여하여 리턴하려면 받은 props들을 atomic 종류에 따라 나눠주는 절차가 필요함
  const { buttonProps, iconProps, textProps, boxProps } =
    getCorrectProps(props);

  return (
    <Box {...boxProps}>
      <Button onClick={onClick} {...buttonProps}>
        <Icon icon={icon[0]} {...iconProps} />
        <Text text={text} {...textProps} />
      </Button>
      <Button onClick={onClick2} {...buttonProps}>
        <Icon icon={icon[1]} {...iconProps} />
      </Button>
    </Box>
  );
};

export default ButtonWithIcons;
