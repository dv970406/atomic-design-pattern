import ButtonWithIconAndText from './custom/ButtonWithIconAndText';

interface ILoginButton {
  onClick: any;
  loading: boolean;
}
const LoginButton = ({ onClick, loading }: ILoginButton) => {
  return (
    <ButtonWithIconAndText
      buttonProps={{
        onClick,
        disabled: loading,
        bgColor: 'gray',
        width: 'full',
        padding: 'xs',
        gap: 'xs',
        borderRadius: 'xxs',
        justifyContent: 'center',
      }}
      iconProps={{
        icon: loading ? 'spinner' : 'right-to-bracket',
        size: 'xs',
      }}
      textProps={{
        text: loading ? 'loading...' : '로그인',
        size: 'sm',
      }}
    />
  );
};

export default LoginButton;
