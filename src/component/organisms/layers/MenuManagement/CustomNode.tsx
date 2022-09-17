import React, { useState } from "react";
import { NodeModel, useDragOver } from "@minoru/react-dnd-treeview";

import { CustomData } from "util/type/menu";
import Box from "component/atomics/boxes/Box";
import List from "component/molecules/menu/List";
import EditMode from "component/molecules/menu/EditMode";
import IconButton from "component/molecules/buttons/IconButton";

interface ICustomNode {
  node: NodeModel<CustomData>;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel["id"]) => void;
  onDelete: (id: NodeModel["id"]) => void;
  onTextChange: (id: string | number, value: string) => void;
}

// 각 메뉴 탭의 로직
const CustomNode = ({
  node,
  onToggle,
  onDelete,
  onTextChange,
  depth,
  isOpen,
}: ICustomNode) => {
  const [hover, setHover] = useState<boolean>(false);
  const [visibleInput, setVisibleInput] = useState(false);
  const { id, text } = node;
  const [labelText, setLabelText] = useState(text);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle(node.id);
  };
  const handleShowInput = () => setVisibleInput(true);

  const handleCancel = () => {
    setLabelText(text);
    setVisibleInput(false);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLabelText(e.target.value);

  const handleSubmit = () => {
    setVisibleInput(false);
    onTextChange(id, labelText);
  };

  const indent = depth * 24;
  const dragOverProps = useDragOver(id, isOpen, onToggle);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 50,
        padding: 10,
        paddingInlineStart: indent,
        borderRadius: 6,
        gap: 10,
      }}
      {...dragOverProps}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {node.droppable && (
        <IconButton
          icon={isOpen ? "chevron-down" : "chevron-right"}
          onClick={handleToggle}
        />
      )}
      <Box>
        {visibleInput ? (
          <EditMode
            labelText={labelText}
            handleChangeText={handleChangeText}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />
        ) : (
          <List
            node={node}
            handleShowInput={handleShowInput}
            onDelete={onDelete}
            hover={hover}
            id={id}
          />
        )}
      </Box>
    </div>
  );
};
export default CustomNode;
