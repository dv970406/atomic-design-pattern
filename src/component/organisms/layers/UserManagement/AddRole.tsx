import { useState } from "react";
import SaveButton from "component/molecules/buttons/SaveButton";
import { useRegisterNewRole } from "hook/customMutation";
import { IRegisterNewRoleForm } from "util/api/user";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "component/molecules/boxes/TextInput";
import HeaderBox from "component/molecules/boxes/HeaderBox";
import IconButton from "component/molecules/buttons/IconButton";
import Box from "component/atoms/boxes/Box";

const AddRole = () => {
  //사용자 버튼을 클릭했을 때 우측에서 나타나는 모달창 위에 그려지는 화면
  const [checked, setChecked] = useState(true);
  //사용 가능 여부 토글버튼의 state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const { mutate, isLoading } = useRegisterNewRole();

  const { register, handleSubmit } = useForm<IRegisterNewRoleForm>();

  const onSubmit: SubmitHandler<IRegisterNewRoleForm> = (data) => {
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
        <HeaderBox icon="fas fa-circle-user" text="사용자 역할 추가" />

        <IconButton icon="fa-xmark-large" onClick={() => null} />
      </Box>

      <Box
        borderRadius="xxs"
        width="full"
        height="full"
        gap="sm"
        flexDirection="column"
      >
        <TextInput
          text="사용자 역할 이름"
          register={register("roleName", {
            required: true,
          })}
          placeholder="사용자 역할 이름을 입력하세요"
        />

        <TextInput
          text="사용자 역할 설명"
          register={register("roleExplanation", {
            required: true,
          })}
          placeholder="사용자 역할 설명을 입력하세요"
        />

        <SaveButton onClick={handleSubmit(onSubmit)} />
      </Box>
    </Box>
  );
};
export default AddRole;
