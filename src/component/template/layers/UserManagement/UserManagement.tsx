import { useEffect, useState } from 'react';
import { ILayerBase } from '../../../../util/recoil/layer.recoil';
import LayerBase from '../../../molecules/layerbase';
import AccountTable from '../../../organisms/layers/UserManagement/AccountTable';
import RoleList from '../../../organisms/layers/UserManagement/RoleList';
import Slider from 'component/organisms/layers/UserManagement/Slider';
import Box from 'component/atoms/boxes/Box';

export type Anchor = 'right';

const UserManagement: React.FC<ILayerBase> = (props) => {
  //Topmenu에서 User(가칭)버튼 클릭 시 나타나게 될 화면입니다.
  const [addUserState, setAddUserState] = useState({ right: false });

  const openAddUser = (anchor: Anchor, open: boolean) => () => {
    setAddUserState({ ...addUserState, [anchor]: open });
  };
  //모달창(Drawer)의 state를 변경합니다.

  const [addRoleState, setAddRoleState] = useState({ right: false });

  const openAddRole = (anchor: Anchor, open: boolean) => () => {
    setAddRoleState({ ...addRoleState, [anchor]: open });
  };

  return (
    <LayerBase {...props}>
      <Box width="full" height="full">
        <RoleList openAddRole={openAddRole} openAddUser={openAddUser} />

        <AccountTable />
        {/*등록된 사용자들이 나열되는 컴포넌트*/}

        <Slider
          openAddUser={openAddUser}
          openAddRole={openAddRole}
          addUserState={addUserState}
          addRoleState={addRoleState}
        />
      </Box>
    </LayerBase>
  );
};
export default UserManagement;
