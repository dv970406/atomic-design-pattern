import Switch from '@mui/material/Switch';
import { useState } from 'react';
import SaveButton from 'component/molecules/buttons/SaveButton';
import { useRegisterUser } from 'hook/customMutation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterUserForm } from 'util/api/user';
import TextInput from 'component/molecules/boxes/TextInput';
import WarningBox from 'component/molecules/boxes/WarningBox';
import HeaderBox from 'component/molecules/boxes/HeaderBox';
import IconButton from 'component/molecules/buttons/IconButton';
import TextBox from 'component/molecules/boxes/TextBox';
import Box from 'component/atoms/boxes/Box';

const AddUser = () => {
  //사용자 버튼을 클릭했을 때 우측에서 나타나는 모달창 위에 그려지는 화면
  const [checked, setChecked] = useState(true);
  //사용 가능 여부 토글버튼의 state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const { mutate, isLoading } = useRegisterUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IRegisterUserForm> = (data) => {
    if (isLoading) {
      return;
    }
    mutate(data);
  };

  return (
    <Box
      flexDirection="column"
      height="full"
      justifyContent="center"
      alignItems="center"
      padding="sm"
      gap="md"
    >
      <Box width="full" justifyContent="space-between" alignItems="center">
        <HeaderBox icon="fa-circle-user" text="사용자 추가" />

        <IconButton onClick={() => null} icon="fa-xmark-large" />
      </Box>

      <Box
        borderRadius="xxs"
        width="full"
        height="full"
        gap="xs"
        flexDirection="column"
      >
        <TextInput
          text="이름"
          register={register('username', {
            required: true,
            minLength: {
              value: 2,
              message: '이름은 2글자 이상이어야 합니다.',
            },
            maxLength: {
              value: 8,
              message: '이름은 8글자 이하여야 합니다.',
            },
          })}
          placeholder="이름을 입력하세요"
          error={errors?.username}
        />

        <WarningBox
          text={errors?.username?.message ? errors?.username?.message : ''}
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
          type="password"
          error={errors?.password}
        />
        <WarningBox
          text={errors?.password?.message ? errors?.password?.message : ''}
        />

        <TextInput
          text="비밀번호 확인"
          placeholder="비밀번호 확인을 입력하세요"
          type="password"
        />

        <Box flexDirection="column" alignItems="flex-start">
          <TextBox text="활성화" />

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>

        <SaveButton loading={isLoading} onClick={handleSubmit(onSubmit)} />
      </Box>
    </Box>
  );
};
export default AddUser;
