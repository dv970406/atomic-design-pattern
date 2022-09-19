import Box from 'component/atoms/boxes/Box';
import CheckInput from 'component/atoms/inputs/CheckBox';
import BoxWithText from 'component/molecules/boxes/custom/BoxWithText';
import HeaderBox from 'component/molecules/boxes/HeaderBox';
import TextInput from 'component/molecules/boxes/TextInput';
import WarningBox from 'component/molecules/boxes/WarningBox';
import ButtonWithIconAndText from 'component/molecules/buttons/custom/ButtonWithIconAndText';
import LoginButton from 'component/molecules/buttons/LoginButton';
import { useLogin } from 'hook/customMutation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginForm } from 'util/api/user';

const LoginForm = () => {
  const { isLoading, mutate } = useLogin();

  // react-hook-form 적용
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });
  const savedUserID = localStorage.getItem('userID');

  // 아이디 기억 저장할 것인지 지정
  const [rememberState, setRememberState] = useState(Boolean(savedUserID));

  // 로그인 버튼 클릭 시 진행될 로직
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    if (isLoading) {
      return;
    }
    mutate(data);

    // 아이디 기억을 클릭한 상태에서 로그인한 경우 로컬스토리지에 아이디 set
    if (rememberState) {
      localStorage.setItem('userID', data.stringID);
    }
  };

  // 아이디 기억 클릭 시 로직
  const getRememberState = () => {
    setRememberState((prev) => !prev);
    if (rememberState) {
      localStorage.removeItem('userID');
    }
  };

  return (
    <Box
      flexDirection="column"
      height="full"
      alignItems="center"
      justifyContent="center"
      width="30%"
      padding="xxl"
      gap="xs"
    >
      <HeaderBox icon="lock" text="Sign In" />

      <BoxWithText
        textProps={{ text: 'TIM Flow', size: 'xxl', bold: 'xl' }}
        boxProps={{ margin: 'lg-y' }}
      />
      <TextInput
        text="아이디"
        register={register('stringID', {
          required: true,
          minLength: {
            value: 3,
            message: '아이디는 3글자 이상이어야 합니다.',
          },
          maxLength: {
            value: 10,
            message: '아이디는 10글자 이하여야 합니다.',
          },
        })}
        placeholder="아이디를 입력하세요"
        error={errors?.stringID}
      />

      <WarningBox
        text={errors?.stringID?.message ? errors?.stringID?.message : ''}
      />

      <TextInput
        text="비밀번호"
        register={register('password', {
          required: true,
          minLength: {
            value: 3,
            message: '비밀번호는 3글자 이상이어야 합니다.',
          },
          maxLength: {
            value: 10,
            message: '비밀번호는 10글자 이하여야 합니다.',
          },
        })}
        placeholder="비밀번호를 입력하세요"
        error={errors?.password}
        type="password"
      />

      <WarningBox
        text={errors?.password?.message ? errors?.password?.message : ''}
      />

      <LoginButton onClick={handleSubmit(onSubmit)} loading={isLoading} />

      <Box gap="lg" margin="sm-y">
        <CheckInput
          defaultSelected={Boolean(savedUserID)}
          textProps={{
            text: '아이디 기억',
          }}
          getRememberState={getRememberState}
        />
      </Box>
    </Box>
  );
};

export default LoginForm;
