import Box from 'component/atoms/boxes/Box';
import LayerBase from 'component/molecules/layerbase';
import GiveAuth from 'component/organisms/layers/AuthManagement/GiveAuth';
import UserList from 'component/organisms/layers/AuthManagement/UserList';
import React from 'react';
import { ILayerBase } from 'util/recoil/layer.recoil';

const AuthManagement: React.FC<ILayerBase> = (props) => {
  return (
    <LayerBase {...props}>
      <Box width="full" height="full">
        <UserList />
        <GiveAuth />
      </Box>
    </LayerBase>
  );
};

export default AuthManagement;
