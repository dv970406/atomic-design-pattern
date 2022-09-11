import BoxWithIconAndText from './custom/BoxWithIconAndText';

interface IHeaderBox {
  icon: string;
  text: string;
}
const HeaderBox = ({ icon, text }: IHeaderBox) => {
  return (
    <BoxWithIconAndText
      iconProps={{ icon, size: 'lg' }}
      boxProps={{ gap: 'xs', alignItems: 'center', placeSelf: 'flex-start' }}
      textProps={{ text, size: 'sm', bold: 'lg' }}
    />
  );
};

export default HeaderBox;
