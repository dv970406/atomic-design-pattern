import BoxWithText from './custom/BoxWithText';

interface ITextBox {
  text: string;
}
const TextBox = ({ text }: ITextBox) => {
  return (
    <BoxWithText
      boxProps={{ width: 'full' }}
      textProps={{
        text,
        size: 'xs',
        bold: 'lg',
      }}
    />
  );
};

export default TextBox;
