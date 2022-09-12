import Box from 'component/atoms/boxes/Box';
import ButtonWithIconAndText from './custom/ButtonWithIconAndText';

interface ISaveButton {
  loading?: boolean;
  onClick: any;
}

// 초록색 저장 버튼

const SaveButton = ({ loading = false, onClick }: ISaveButton) => {
  return (
    <Box flexDirection="row" justifyContent="flex-end" width="full">
      <ButtonWithIconAndText
        iconProps={{
          icon: loading ? 'spinner' : 'right-to-bracket',
        }}
        textProps={{ text: loading ? 'loading...' : '저장' }}
        buttonProps={{
          gap: 'xs',
          bgColor: 'green',
          padding: 'xs',
          borderRadius: 'xxs',
          width: 'xs',
          onClick,
          disabled: loading,
          justifyContent: 'center',
        }}
      />
    </Box>
  );
};

export default SaveButton;
