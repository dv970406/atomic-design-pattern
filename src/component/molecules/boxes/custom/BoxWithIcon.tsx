import Box, { IBox } from 'component/atoms/boxes/Box';
import Icon, { IIcon } from 'component/atoms/icons/Icon';
interface IBoxWithIcon {
  boxProps: IBox;
  iconProps: IIcon;
}

const BoxWithIcon = ({ boxProps, iconProps }: IBoxWithIcon) => {
  // 편하게 JSX에 prop을 부여하여 리턴하려면 받은 props들을 atomic 종류에 따라 나눠주는 절차가 필요함

  return (
    <Box {...boxProps}>
      <Icon {...iconProps} />
    </Box>
  );
};

export default BoxWithIcon;
