import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MouseEvent } from "react";

interface IMenuParent {
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
const MenuParent = ({ onClick }: IMenuParent) => {
  return (
    <Button
      variant="contained"
      disableElevation
      onClick={onClick}
      endIcon={<KeyboardArrowDownIcon />}
    >
      Options
    </Button>
  );
};

export default MenuParent;
