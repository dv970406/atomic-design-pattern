import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPalette, TColors } from 'util/csstype/color';
import { TIconSize } from 'util/csstype/size';

export interface IIcon {
  icon: string | string[];
  size?: TIconSize;
  color?: TColors;
}
const Icon = ({ size, color, icon }: IIcon) => {
  const icons = icon as IconProp;
  return (
    <FontAwesomeIcon
      color={colorPalette[color || 'white']}
      size={size}
      icon={icons}
    />
  );
};

export default Icon;
