import Button, { IButton } from "../../atomic/buttons/Button";
import Icon, { IIcon } from "../../atomic/icons/Icon";
import { getCorrectProps } from "../../util/function/prop";

// 각 Atomic의 타입들을 interface로 Molecules쪽 타입에 상속시킨다.
interface IButtonWithIcon extends IButton {}
interface IButtonWithIcon extends IIcon {}

const ButtonWithIcon = ({ onClick, icon, ...props }: IButtonWithIcon) => {
  // 편하게 JSX에 prop을 부여하여 리턴하려면 받은 props들을 atomic 종류에 따라 나눠주는 절차가 필요함
  const { buttonProps, iconProps } = getCorrectProps(props);

  return (
    <Button onClick={onClick} {...buttonProps}>
      <Icon icon={icon} {...iconProps} />
    </Button>
  );
};

export default ButtonWithIcon;
