import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SelectChangeEvent,
} from "@mui/material";
import { NodeModel } from "@minoru/react-dnd-treeview";
import Box from "component/atomics/boxes/Box";
import Button from "component/atomics/buttons/Button";
import { CustomData } from "util/type/menu";
import TextInput from "component/molecules/boxes/TextInput";

type Props = {
  tree: NodeModel[];
  onClose: () => void;
  onSubmit: (e: Omit<NodeModel<CustomData>, "id">) => void;
};

// 메뉴 폴더/탭 추가하는 폼

const AddDialog: React.FC<Props> = (props) => {
  const [text, setText] = useState("");
  const [parent, setParent] = useState(0);
  const [droppable, setDroppable] = useState(false);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleChangeParent = (e: SelectChangeEvent<number>) =>
    setParent(+e.target.value);
  const handleChangeDroppable = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDroppable(e.target.checked);

  const handleSubmit = () => {
    if (droppable && parent > 0) {
      alert("하위 폴더는 생성할 수 없습니다!");
      return;
    }
    props.onSubmit({
      text,
      parent,
      droppable,
    });
  };

  return (
    <Dialog open={true} onClose={props.onClose}>
      <DialogTitle>Add New Node</DialogTitle>
      <DialogContent>
        <TextInput
          onChange={handleChangeText}
          text="text"
          defaultValue={text}
        />

        <Box>
          <FormControl>
            <InputLabel>Parent</InputLabel>
            <Select label="Parent" onChange={handleChangeParent} value={parent}>
              <MenuItem value={0}>(root)</MenuItem>
              {props.tree
                .filter((node) => node.droppable === true)
                .map((node) => (
                  <MenuItem key={node.id} value={node.id}>
                    {node.text}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={droppable}
                onChange={handleChangeDroppable}
                color="primary"
              />
            }
            label="Droppable"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button disabled={text === ""} onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;
