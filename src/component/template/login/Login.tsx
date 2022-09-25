import Box from 'component/atoms/boxes/Box';
import BgImg from 'component/organisms/login/BgImg';
import LoginForm from 'component/organisms/login/LoginForm';

// 로그인 로직 및 View

export default function Login() {
  return (
    <Box width="fv" height="fv" bgColor="black">
      <BgImg />
      <LoginForm />
    </Box>
  );
}
