import styled from "@emotion/styled";
import Text, { IText } from "../../atomic/texts/Text";
import { IInput, Input } from "../../atomic/inputs/Input";
import { getCorrectProps } from "../../util/function/prop";
import { IWidthPalette, widthPalette } from "../../util/csstype/width";

// 각 Atomic의 타입들을 interface로 Molecules쪽 타입에 상속시킨다.
interface IInputWithText extends IInput {}
interface IInputWithText extends IText {}

const Div: any = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }: IWidthPalette) =>
    widthPalette[width] || widthPalette["default"]};
`;

const InputWithText = ({
  text,
  register,
  type = "text",
  placeholder,
  ...props
}: IInputWithText) => {
  // 편하게 JSX에 prop을 부여하여 리턴하려면 받은 props들을 atomic 종류에 따라 나눠주는 절차가 필요함
  const { textProps, inputProps } = getCorrectProps(props);
  return (
    <Div width={inputProps.width}>
      <Text text={text} {...textProps} />
      <Input
        {...register}
        placeholder={placeholder}
        type={type}
        {...inputProps}
      />
    </Div>
  );
};

export default InputWithText;
