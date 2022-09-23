import { useEffect, useState } from 'react';
import {
  Tree,
  MultiBackend,
  DragLayerMonitorProps,
  getDescendants,
  getBackendOptions,
  DropOptions,
  NodeModel,
  DndProvider,
} from '@minoru/react-dnd-treeview';
import styles from './App.module.css';
import { CustomData } from 'util/type/menu';
import { useGetMenuTree, usePostMenuTree } from 'hook/customMutation';
import LayerBase from 'component/molecules/layerbase';
import { ILayerBase } from 'util/recoil/layer.recoil';
import { CustomDragPreview } from 'component/organisms/layers/MenuManagement/CustomDragPreview';
import CustomNode from 'component/organisms/layers/MenuManagement/CustomNode';
import SaveButton from 'component/molecules/buttons/SaveButton';
import ClickButton from 'component/molecules/buttons/ClickButton';
import AddDialog from 'component/organisms/layers/MenuManagement/AddDialog';
import Box from 'component/atoms/boxes/Box';

// layer Z-index 문제로 인한 테스트 페이지
// organisms - layertest 파일과 같음
const getLastId = (treeData: NodeModel[]) => {
  const reversedArray = [...treeData].sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else if (a.id > b.id) {
      return -1;
    }

    return 0;
  });

  if (reversedArray.length > 0) {
    return reversedArray[0].id;
  }

  return 0;
};
const MenuManagement: React.FC<ILayerBase> = (props) => {
  const { data: menuTreeData, isLoading } = useGetMenuTree();

  const [treeData, setTreeData] =
    useState<NodeModel<CustomData>[]>(menuTreeData);

  const { mutate } = usePostMenuTree();

  const handleDrop = (
    newTreeData: NodeModel<CustomData>[],
    option: DropOptions<CustomData>,
  ) => {
    if (!option.dragSource) {
      alert('다시 시도해주세요!');
      return;
    }
    if (option.dragSource?.droppable) {
      alert('하위 폴더는 만들 수 없습니다.');
      return;
    }
    setTreeData(newTreeData);
  };

  // AddDialog 컴포넌트를 열고 닫는 state
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const handleSubmit = (newNode: Omit<NodeModel<CustomData>, 'id'>) => {
    const lastId = +getLastId(treeData) + 1;

    setTreeData([
      ...treeData,
      {
        id: lastId,
        ...newNode,
      },
    ]);

    setOpen(false);
  };

  // save를 눌러야지 API 서버에 POST 요청이 간다.
  const handleSave = () => mutate(treeData);

  const handleDelete = (id: NodeModel['id']) => {
    const deleteIds = [
      id,
      ...getDescendants(treeData, id).map((node) => node.id),
    ];
    const newTree = treeData.filter((node) => !deleteIds.includes(node.id));

    setTreeData(newTree);
  };

  // 메뉴 텍스트 수정 시 해당 메뉴의 id와 입력값을 가져와 tree에서 id를 통해 해당 메뉴를 찾고 텍스트 값 변경 후 state 갱신
  const handleTextChange = (id: string | number, value: string) => {
    const newTree = treeData.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          text: value,
        };
      }

      return node;
    });

    setTreeData(newTree);
  };

  return isLoading ? (
    <div>hi</div>
  ) : (
    <LayerBase {...props}>
      <Box
        flexDirection="column"
        display="block"
        height="full"
        position="relative"
      >
        <DndProvider backend={MultiBackend} options={getBackendOptions()}>
          <ClickButton icon="add" text="Add Node" onClick={handleOpenDialog} />

          {open && (
            <AddDialog
              tree={treeData}
              onClose={handleCloseDialog}
              onSubmit={handleSubmit}
            />
          )}

          <Box height="full" overflow="scroll">
            <Tree
              tree={treeData}
              rootId={0}
              onDrop={handleDrop}
              render={(node: NodeModel<CustomData>, options) => (
                <CustomNode
                  node={node}
                  {...options}
                  onDelete={handleDelete}
                  onTextChange={handleTextChange}
                />
              )}
              dragPreviewRender={(
                monitorProps: DragLayerMonitorProps<CustomData>,
              ) => <CustomDragPreview monitorProps={monitorProps} />}
              classes={{
                root: styles.treeRoot,
                draggingSource: styles.draggingSource,
                dropTarget: styles.canDropTarget,
              }}
            />
          </Box>

          <Box position="absolute" bottom="0" right="0">
            <SaveButton onClick={handleSave} loading={isLoading} />
          </Box>
        </DndProvider>
      </Box>
    </LayerBase>
  );
};
export default MenuManagement;
