import { FieldError } from "react-hook-form";
import BoxWithInputAndText from "./custom/BoxWithInputAndText";

interface ITextInput {
  text: string;
  register?: any;
  onChange?: any;
  placeholder?: string;
  error?: FieldError | undefined;
  type?: string;
  defaultValue?: string;
}
const TextInput = ({
  text,
  register,
  onChange,
  placeholder,
  error,
  type = "text",
  defaultValue,
}: ITextInput) => {
  return (
    <BoxWithInputAndText
      textProps={{ text, bold: "lg" }}
      inputProps={{
        onChange,
        padding: "xs",
        borderRadius: "xxs",
        size: "xs",
        placeholder,
        register,
        borderColor: error ? "red" : "default",
        type,
        defaultValue,
      }}
      boxProps={{
        flexDirection: "column",
        width: "full",
        gap: "xxs",
      }}
    />
  );
};

export default TextInput;
