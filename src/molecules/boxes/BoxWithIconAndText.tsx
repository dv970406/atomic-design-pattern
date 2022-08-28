import Box, { IBox } from "../../atomic/boxes/Box";
import Text, { IText } from "../../atomic/texts/Text";
import Icon, { IIcon } from "../../atomic/icons/Icon";
import { getCorrectProps } from "../../util/function/prop";

// 각 Atomic의 타입들을 interface로 Molecules쪽 타입에 상속시킨다.
interface IBoxWithIconAndText extends IBox {}
interface IBoxWithIconAndText extends IIcon {}
interface IBoxWithIconAndText extends IText {}

const BoxWithIconAndText = ({ text, icon, ...props }: IBoxWithIconAndText) => {
  // 편하게 JSX에 prop을 부여하여 리턴하려면 받은 props들을 atomic 종류에 따라 나눠주는 절차가 필요함
  const { boxProps, textProps, iconProps } = getCorrectProps(props);

  return (
    <Box {...boxProps}>
      <Icon icon={icon} {...iconProps} />
      <Text text={text} {...textProps} />
    </Box>
  );
};

export default BoxWithIconAndText;
