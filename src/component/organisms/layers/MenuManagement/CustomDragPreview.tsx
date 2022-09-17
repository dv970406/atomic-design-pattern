import React from 'react';
import { DragLayerMonitorProps } from '@minoru/react-dnd-treeview';
import { CustomData } from 'util/type/menu';
import BoxWithText from 'component/molecules/boxes/custom/BoxWithText';

type Props = {
  monitorProps: DragLayerMonitorProps<CustomData>;
};

// 메뉴 탭 드래그 시 미리보기
export const CustomDragPreview: React.FC<Props> = (props) => {
  const item = props.monitorProps.item;

  return (
    <BoxWithText
      textProps={{ text: item.text }}
      boxProps={{ justifyContent: 'flex-start' }}
    />
  );
};
