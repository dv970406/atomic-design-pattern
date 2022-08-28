import Box, { IBox } from "../../atomic/boxes/Box";
import Icon, { IIcon } from "../../atomic/icons/Icon";
import { getCorrectProps } from "../../util/function/prop";

// 각 Atomic의 타입들을 interface로 Molecules쪽 타입에 상속시킨다.
interface IBoxWithIcon extends IBox {}
interface IBoxWithIcon extends IIcon {}

const BoxWithIcon = ({ icon, ...props }: IBoxWithIcon) => {
  // 편하게 JSX에 prop을 부여하여 리턴하려면 받은 props들을 atomic 종류에 따라 나눠주는 절차가 필요함
  const { boxProps, iconProps } = getCorrectProps(props);

  return (
    <Box {...boxProps}>
      <Icon icon={icon} {...iconProps} />
    </Box>
  );
};

export default BoxWithIcon;
