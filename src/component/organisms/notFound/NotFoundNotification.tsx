import Box from "component/atomics/boxes/Box";
import Button from "component/atomics/buttons/Button";
import Text from "component/atomics/texts/Text";
import BounceIcon from "component/molecules/animation/BounceIcon";
import { useNavigate } from "react-router-dom";

const NotFoundNotification = () => {
  const navigate = useNavigate();
  // Home 버튼을 클릭함
  const handleHomeButton_onClick = () => {
    // 메인 페이지로 이동함
    navigate("/");
  };
  return (
    <Box
      width={"fv"}
      height={"fv"}
      justifyContent="center"
      alignItems="center"
      bgColor="gray"
      flexDirection="column"
      gap="md"
    >
      {/* 아이콘 */}
      <BounceIcon />
      {/* 숫자 메시지 */}

      <Box alignItems="center" flexDirection="column" gap="lg">
        <Text text="404" />

        {/*영문 메시지*/}
        <Text text={"Page Not Found"} />

        {/* 한글 메시지 */}
        <Text text={"페이지를 찾을 수 없습니다."} />
      </Box>

      {/* 버튼 */}
      <Button
        onClick={handleHomeButton_onClick}
        bgColor={"red"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"xs"}
        borderRadius="xxs"
        padding="xs"
      >
        <Text text={"Home"} bold={"xl"}></Text>
      </Button>
    </Box>
  );
};
export default NotFoundNotification;
