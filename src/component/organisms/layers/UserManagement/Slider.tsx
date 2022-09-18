import { Drawer } from '@mui/material';
import { Anchor } from 'component/template/layers/UserManagement/UserManagement';
import AddRole from './AddRole';
import AddUser from './AddUser';

interface IRight {
  right: boolean;
}
interface ISlider {
  addUserState: IRight;
  openAddUser: (anchor: Anchor, open: boolean) => () => void;
  addRoleState: IRight;
  openAddRole: (anchor: Anchor, open: boolean) => () => void;
}
const Slider = ({
  addUserState,
  openAddUser,
  addRoleState,
  openAddRole,
}: ISlider) => {
  const DrawerMaker = (component: JSX.Element, param: any, func: any) => {
    //모달창의 기본 틀을 함수화하였습니다. 내부 컴포넌트, 변경할 state, state 변경 함수를 파라미터로 받아 새로운 모달을 생성합니다.
    return (
      <Drawer
        anchor={'right'}
        //나오는 방향
        open={param['right']}
        onClose={func}
        //오른쪽 앵커를 닫는다.
        PaperProps={{
          sx: {
            width: 380,
            height: '90%',
            borderRadius: '0.45rem',
            margin: '0.7rem',
            borderLeft: '1px solid white',
            borderTop: '1px solid white',
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
        }}
      >
        {component}
        {/*모달창 위에 그려질 화면을 입력*/}
      </Drawer>
    );
  };
  return (
    <>
      {DrawerMaker(<AddUser />, addUserState, openAddUser('right', false))}
      {DrawerMaker(<AddRole />, addRoleState, openAddRole('right', false))}
    </>
  );
};

export default Slider;
