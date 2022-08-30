import { SubmitHandler, useForm } from "react-hook-form";
import Box from "../atomic/boxes/Box";
import CheckInput from "../atomic/inputs/CheckBox";
import Text from "../atomic/texts/Text";
import BoxWithIconAndText from "../molecules/boxes/BoxWithIconAndText";
import ButtonWithIconAndText from "../molecules/buttons/ButtonWithIconAndText";
import InputWithText from "../molecules/inputs/InputWithText";

// Molecules 부분 extends IProps부분 정말 들어갈 수 있는 prop들로만 따로 만들어서 extends하자
// 즉, height prop은 Button이 아닌 Box에만 들어갈 수 있는 속성인데 Button에도 Organism에서 현재 height를 부여할 수 있게 prop이 존재한다. 이를 수정

interface ILoginForm {
  ID: string;
  password: string;
}
export default function Login() {
  // react-hook-form 적용
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    mode: "onChange",
  });

  // 로그인 버튼 클릭 시 진행될 로직
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    // query 처리 중일 때 submit을 막아버린다.
    /* if (loading) {
      return;
    } */

    let fetchedData;
    // 쿼리 처리 후 아무런 데이터가 없을 때
    if (!fetchedData) {
      // 경고창은 커스텀할지 말지?
      alert("정보없음");
    }
  };

  return (
    <Box
      padding="lg-x"
      width="xxl"
      bgColor="black"
      flexDirection="column"
      borderColor="white"
      borderRadius="xs"
    >
      <BoxWithIconAndText
        icon="lock"
        text="Sign in"
        justifyContent="flex-start"
        bold="xl"
      />
      <Text text="TIM Flow" size="xxl" bold="xl" />
      <InputWithText
        register={register("ID", {
          required: true,
          minLength: {
            value: 3,
            message: "아이디는 3글자 이상이어야 합니다.",
          },
          maxLength: {
            value: 10,
            message: "아이디는 10글자 이하여야 합니다.",
          },
        })}
        text="ID"
        placeholder="아이디를 입력하세요."
        borderColor={errors?.ID?.message ? "red" : "default"}
      />
      {errors?.ID?.message && (
        <Text text={errors.ID.message} color="red" size="sm" bold="lg" />
      )}
      <InputWithText
        register={register("password", {
          required: true,
          minLength: {
            value: 3,
            message: "비밀번호는 3글자 이상이어야 합니다.",
          },
          maxLength: {
            value: 10,
            message: "비밀번호는 10글자 이하여야 합니다.",
          },
        })}
        text="Password"
        placeholder="비밀번호를 입력하세요."
        type="password"
        borderColor={errors?.password?.message ? "red" : "default"}
      />
      {errors?.password?.message && (
        <Text text={errors.password.message} color="red" size="sm" bold="lg" />
      )}
      <ButtonWithIconAndText
        onClick={handleSubmit(onSubmit)}
        icon="right-to-bracket"
        text="로그인"
        margin="lg-y"
        disabled={!isValid}
        bgColor="gray"
      />

      <Box gap="lg" margin="sm-y">
        <CheckInput text="아이디 기억" />
        <CheckInput text="자동 로그인" />
      </Box>
    </Box>
  );
}
