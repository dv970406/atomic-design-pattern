import { ListSubheader, MenuItem } from "@mui/material";

interface IMenuDogs {
  subTitle: string;
  onClick: () => void;
  text: string;
  icon: JSX.Element;
  dogs: any[];
}
const MenuDogs = ({ subTitle, onClick, text, icon, dogs }: IMenuDogs) => {
  return (
    <>
      {subTitle && <ListSubheader>{subTitle}</ListSubheader>}
      {dogs.map((item) => (
        <MenuItem onClick={onClick} disableRipple>
          {icon}
          {item}
        </MenuItem>
      ))}
    </>
  );
};
export default MenuDogs;
