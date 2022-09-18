import Box from "component/atomics/boxes/Box";
import TextBox from "component/molecules/boxes/TextBox";
import { useGetAllUser } from "hook/customMutation";

const AccountTable = () => {
  //UserList화면에서 사용자 버튼으로 생성된 사용자들이 나열되는 화면입니다.

  const { data } = useGetAllUser();

  return (
    <Box width={"80%"} flexDirection={"column"} height="lg" borderRadius="xxs">
      <Box
        width={"full"}
        gap="xs"
        bgColor="gray"
        padding={"xs"}
        userSelect="none"
      >
        <TextBox text="고유 번호" />
        <TextBox text="이름" />
      </Box>
      <Box width="full" overflow="scroll" flexDirection="column">
        {data?.map((item) => (
          <Box
            key={item.id}
            width={"full"}
            padding={"xs"}
            borderColor={["gray", "bottom"]}
          >
            <TextBox text={item.id + ""} />
            <TextBox text={item.username} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default AccountTable;
