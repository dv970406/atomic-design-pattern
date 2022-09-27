import { NodeModel } from "@minoru/react-dnd-treeview";
import { Autocomplete, TextField } from "@mui/material";
import { useGetMenuTree } from "hook/customMutation";
import { CustomData } from "util/type/menu";

const SelectMenu = () => {
  const { data, isSuccess } = useGetMenuTree();

  let folderArray: NodeModel<CustomData>[] = [];
  let fileArray: NodeModel<CustomData>[] = [];
  // 가져온 데이터를 폴더 기준으로 정렬하기 위함
  if (isSuccess) {
    const copiedData = JSON.parse(JSON.stringify(data));
    if (isSuccess) {
      folderArray = copiedData.filter(
        (option: NodeModel<CustomData>) => option.droppable
      );
      fileArray = copiedData.filter(
        (option: NodeModel<CustomData>) => !option.droppable
      );

      folderArray?.map((folder) => {
        fileArray?.map((file) => {
          if (file.parent === folder.id) {
            return (file.parent = folder.text);
          } else if (file.parent === 0) {
            return (file.parent = "0-Z");
          }
        });
      });

      fileArray = fileArray.sort(
        (a: NodeModel<CustomData>, b: NodeModel<CustomData>) =>
          a.parent < b.parent ? -1 : a.parent > b.parent ? 1 : 0
      );
    }
  }
  return (
    <Autocomplete
      id="grouped-demo"
      options={fileArray}
      groupBy={(file) => file.parent + ""}
      getOptionLabel={(file) => file.text}
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
      onChange={(e, newValue) => console.log(newValue?.text)}
      sx={{
        borderColor: "blue",
        backgroundColor: "white",
        borderRadius: 1,
      }}
    />
  );
};

export default SelectMenu;
