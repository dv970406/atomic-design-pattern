import Box from "component/atomics/boxes/Box";
import BoxWithIconAndText from "component/molecules/boxes/custom/BoxWithIconAndText";

const GiveAuth = () => {
  return (
    <Box
      width="70%"
      height="full"
      bgColor="red"
      alignItems="flex-start"
      padding="md"
    >
      <BoxWithIconAndText
        textProps={{ text: "dsacxz" }}
        iconProps={{ icon: "times" }}
        boxProps={{}}
      />
    </Box>
  );
};

export default GiveAuth;
