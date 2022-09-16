import Box from "component/atomics/boxes/Box";
import TextBox from "component/molecules/boxes/TextBox";

const UserList = () => {
  // 추후 요청해서 불러올 직원들 정보
  const fakeData = new Array(20).fill(1);
  return (
    <Box
      width="30%"
      height="full"
      bgColor="gray"
      padding="md"
      overflow="scroll"
      flexDirection="column"
      gap="sm"
    >
      {fakeData?.map((data) => (
        <TextBox text="zz" />
      ))}
    </Box>
  );
};

export default UserList;
