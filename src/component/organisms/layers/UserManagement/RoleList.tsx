import Box from 'component/atoms/boxes/Box';
import ClickButton from 'component/molecules/buttons/ClickButton';
import UserRoleList from 'component/molecules/list/UserRoleList';
import { Anchor } from 'component/template/layers/UserManagement/UserManagement';

interface IRoleList {
  openAddRole: (anchor: Anchor, open: boolean) => () => void;
  openAddUser: (anchor: Anchor, open: boolean) => () => void;
}
const RoleList = ({ openAddRole, openAddUser }: IRoleList) => {
  return (
    <Box width="20%" gap="sm" padding="xs-y" flexDirection="column">
      <Box justifyContent="space-around" width="full">
        <ClickButton
          text="역할"
          onClick={openAddRole('right', true)}
          icon="fa-folder-user"
        />
        <ClickButton
          text="사용자"
          onClick={openAddUser('right', true)}
          icon="fa-circle-user"
        />
      </Box>
      <UserRoleList />
    </Box>
  );
};

export default RoleList;
