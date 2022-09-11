import BoxWithText from './custom/BoxWithText';

interface IWarningBox {
  text: string;
}
const WarningBox = ({ text }: IWarningBox) => {
  return (
    <BoxWithText
      textProps={{
        text,
        color: 'red',
        size: 'sm',
        bold: 'lg',
      }}
      boxProps={{
        height: '5%',
      }}
    />
  );
};

export default WarningBox;
