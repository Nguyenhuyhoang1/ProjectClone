import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Đã hoàn thành thanh toán',
      description:
        'Cảm ơn bạn đã thanh toán khóa học. Hy vọng bạn sẽ có trải nghiêm thật tốt các khóa học bên mình ',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  return (
    <>
      {contextHolder}
      <Button className='btn' type="primary" onClick={openNotification}>
        Thanh toán
      </Button>
    </>
  );
};

export default App;