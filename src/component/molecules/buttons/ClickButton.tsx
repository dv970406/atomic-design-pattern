import ButtonWithIconAndText from './custom/ButtonWithIconAndText';

interface IClickButton {
  onClick: any;
  icon: string;
  text: string;
}
const ClickButton = ({ onClick, icon, text }: IClickButton) => {
  return (
    <ButtonWithIconAndText
      buttonProps={{
        onClick,
        gap: 'xxs',
        alignItems: 'center',
      }}
      iconProps={{ icon, color: 'white' }}
      textProps={{ text, color: 'white', bold: 'md' }}
    />
  );
};

export default ClickButton;
