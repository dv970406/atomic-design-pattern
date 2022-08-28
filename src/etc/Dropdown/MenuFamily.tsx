import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import MenuChild from "./MenuChild";
import { ListSubheader } from "@mui/material";
import MenuParent from "./MenuParent";
import MenuDogs from "./MenuDogs";

const MenuFamily = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  // 클릭 시 소메뉴 리스트 나열
  const handleParent = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // 바깥 클릭 시 메뉴 닫히게 함
  const handleChild = () => setAnchorEl(null);

  // 소메뉴 클릭 시 로직
  const handleDog = () => console.log("hi");

  return (
    <>
      <MenuParent onClick={handleParent} />
      <MenuChild onClose={handleChild} open={open}>
        <MenuDogs
          onClick={handleDog}
          text="hi1"
          subTitle="zz"
          icon={<EditIcon />}
          dogs={["d", "s", "a"]}
        />
        <MenuDogs
          onClick={handleDog}
          text="hi2"
          subTitle="zz"
          icon={<EditIcon />}
          dogs={["d", "s", "a"]}
        />
        <MenuDogs
          onClick={handleDog}
          text="hi3"
          subTitle="zz"
          icon={<EditIcon />}
          dogs={["d", "s", "a"]}
        />
      </MenuChild>
    </>
  );
};

export default MenuFamily;
