import { Checkbox } from "@nextui-org/react";
import { TBold } from "../../util/csstype/bold";
import { TColors } from "../../util/csstype/color";
import { TSize } from "../../util/csstype/size";
import { getCorrectProps } from "../../util/function/prop";
import Text from "../texts/Text";

export interface ICheckInput {
  text: string;
  color?: TColors;
  size?: TSize;
  bold?: TBold;
}
const CheckInput = ({ text, ...props }: ICheckInput) => {
  const { textProps } = getCorrectProps(props);
  return (
    <Checkbox defaultSelected={false} color="default">
      <Text text={text} {...textProps} />
    </Checkbox>
  );
};
export default CheckInput;
