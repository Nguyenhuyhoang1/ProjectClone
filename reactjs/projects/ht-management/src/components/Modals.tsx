import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, QRCode, Row } from 'antd';
import { ArrowLeftOutlined,QrcodeOutlined,LoadingOutlined } from '@ant-design/icons';
import Modals1 from './Modals1';
import BtnCheckOut from './BtnCheckOut';
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [countDown, setCountDown] = useState(100);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown((prevState) => {
        if (prevState <= 0) {
          clearInterval(timerId);
          return 0;
        }
        return prevState - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);


  return (
    <>
    <div className="PaymentMethod">
        <h2 style={{ textAlign: "left", marginBottom: 20 }}>Thanh toán bằng: </h2>     
          <Button style={{width: 60 , height: 60 }} onClick={() => setOpen(true)}>         
    <img  className="ImgPayment" src="https://tse2.mm.bing.net/th?id=OIP.CKqLDUzbLbxjb8jvSllSvgAAAA&pid=Api&P=0" alt="" />
    </Button>
    <Modals1 />
    
      </div>  
      <BtnCheckOut />
      <Modal
        style={{ top: -10 }}
        title=""
        centered
        open={open}
        width={1000}
      >
        <Row >
          <Col span={8} >
            <div className="Detail">
              <div className="Detail__item">
                <div className=" ">
                  <h2>Đơn hàng hết hạng sau: <p style={{color : "#ED712E", fontSize: 30}}>{countDown}s</p></h2>
                </div>

                <div className="">
                  <h3>Cổng thanh toán: <p>Momo</p> </h3>
                </div>
                <hr />
                <div className="">
                  <h3>Số tiền: <p>1.250.000</p></h3>
                </div>
                <hr />
                <h3 className="">
                  Thông tin: <p>Than toán hóa đơn hàng : 123</p>
                </h3>
                <hr />
                <h3 className="">Đơn hàng: <p>abcdefghiklmomnqk1234</p> </h3>
                <hr />
                <a className='btn-black' href='/'>

                  <h2><ArrowLeftOutlined /> Quay lại </h2>
                </a>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <div className="QR">
              <div className="Header-img">
                <img style={{ width: 60, height: 60 }} src="https://tse2.mm.bing.net/th?id=OIP.CKqLDUzbLbxjb8jvSllSvgAAAA&pid=Api&P=0" alt="" />
                <img style={{ width: 60, height: 60 }} src="https://tse2.mm.bing.net/th?id=OIP.CKqLDUzbLbxjb8jvSllSvgAAAA&pid=Api&P=0" alt="" />
              </div>
              <hr />
              <div className="QR__code">
                <h2>Quét mã để thanh toán</h2>

               <div className="a" style={{textAlign: 'center'}}>
               <QRCode 
                  errorLevel="H"
                  value="https://ant.design/"
                  icon="https://tse2.mm.bing.net/th?id=OIP.CKqLDUzbLbxjb8jvSllSvgAAAA&pid=Api&P=0"
                />
               </div>
               <div className="" style={{margin : 20  }}>
               <QrcodeOutlined /> sử dụng App <strong>MoMo</strong> hoặc <br /> ứng dụng có Camera hỗ trợ QR code để quét mã
               </div>
               <div className="" style={{margin : 20}}>
               <LoadingOutlined /> Đang chờ bạn quét mã ...
               </div>
               <div className="">            
              ------------------------------------------------------------------------  Hoặc  ----------------------------------------------------------------------------- 
               </div>
               <div className="Login">
                Đăng kí tài khoản MoMo và thanh toán lần đầu hoặc <a href="">đăng nhập</a>
               </div>
               <button className='btn-2'> Đăng kí ngay</button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default App;