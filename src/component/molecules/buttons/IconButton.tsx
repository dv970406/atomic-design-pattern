import ButtonWithIcon from './custom/ButtonWithIcon';

interface IIconButton {
  icon: string;
  onClick: any;
}
const IconButton = ({ icon, onClick }: IIconButton) => {
  return (
    <ButtonWithIcon
      iconProps={{
        icon,
        color: 'white',
      }}
      buttonProps={{
        onClick,
      }}
    />
  );
};

export default IconButton;
