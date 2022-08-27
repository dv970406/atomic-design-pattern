import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorPalette, TColors } from "../../util/csstype/color";
import { TSize } from "../../util/csstype/size";

export interface IIcon {
  icon: string | string[];
  size?: TSize;
  color?: TColors;
}
const Icon = ({ size, color, icon }: IIcon) => {
  const iconSize = () => {
    switch (size) {
      case "xxs":
        return "xs";
      case "xs":
        return "sm";
      case "sm":
        return "lg";
      case "md":
        return "1x";
      case "lg":
        return "2x";
      case "xl":
        return "3x";
      case "xxl":
        return "4x";
    }
  };

  const icons = icon as IconProp;
  return (
    <FontAwesomeIcon
      color={colorPalette[color || "white"]}
      size={iconSize()!}
      icon={icons}
    />
  );
};

export default Icon;
