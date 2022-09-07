import { Checkbox } from '@nextui-org/react';
import Text, { IText } from '../texts/Text';

export interface ICheckInput {
  textProps: IText;
  defaultSelected?: boolean;
  getRememberState?: () => void;
}
const CheckInput = ({
  textProps,
  defaultSelected,
  getRememberState,
  ...props
}: ICheckInput) => {
  return (
    <Checkbox
      isRounded={true}
      defaultSelected={defaultSelected}
      color="default"
      onChange={getRememberState}
    >
      <Text {...textProps} />
    </Checkbox>
  );
};
export default CheckInput;
