import Box from "../atomic/boxes/Box";
import BoxWithIcon from "../molecules/boxes/BoxWithIcon";
import BoxWithIconAndText from "../molecules/boxes/BoxWithIconAndText";
import ButtonWithIconAndText from "../molecules/buttons/ButtonWithIconAndText";
import ButtonWithIcons from "../molecules/buttons/ButtonWithIcons";

// 작업 중
const ManageAccount = () => {
  return (
    <Box borderColor="white" borderRadius="xs" flexDirection="column">
      <BoxWithIconAndText
        text="Manage Account"
        icon="circle-user"
        justifyContent="flex-start"
        size="md"
      />
      <Box>
        <Box width="30%" flexDirection="column">
          <Box>
            <ButtonWithIconAndText size="sm" text="역할" icon="times" />
            <ButtonWithIconAndText size="sm" text="사용자" icon="user-plus" />
          </Box>
          <Box flexDirection="column">
            <ButtonWithIcons
              size="xs"
              text="역할 미적용"
              icon={["times", "times"]}
            />
            <ButtonWithIcons size="xs" text="TEST" icon={["times", "times"]} />
            <ButtonWithIcons size="xs" text="test" icon={["times", "times"]} />
            <ButtonWithIcons size="xs" text="user" icon={["times", "times"]} />
            <ButtonWithIcons
              size="xs"
              text="system"
              icon={["times", "times"]}
            />
          </Box>
        </Box>
        <Box width="70%" bgColor="white"></Box>
      </Box>
    </Box>
  );
};

export default ManageAccount;
