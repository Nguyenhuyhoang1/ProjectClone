import {  InfoCustomer } from "../Data"
import Modals from "./Modals";
import { QuestionOutlined, CheckCircleOutlined } from '@ant-design/icons';
import  { useState } from 'react';
import { Button, Modal } from 'antd';
const DetailPayment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <form className="PaymentDetail">
      <h3 style={{ fontWeight: 500, fontSize: "24px" }}>Tổng Khóa Học</h3>
      <div className="Form__CheckOut" >

        <label style={{ marginRight: 11 }} htmlFor="MaGT">Nhập mã giới thiệu: </label>
        <input type="text" placeholder=" x x x x x x x x x x x x" name="MaGT" />
        <div className="icon-check" >< CheckCircleOutlined /></div>
        <Button style={{ background: "#FFF", color: "#000" ,marginLeft :15 ,boxShadow: "none" }} type="primary" onClick={showModal}>
          <QuestionOutlined />
        </Button>
        <Modal title="Giới thiệu và hướng dẫn nhập mã giảm giá" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <hr />
          <p style={{ marginTop: "20px", letterSpacing: 1 }}>Đây cũng là ưu đãi mà BSmart dành cho khách hàng. Khi giới
            thiệu cho bạn bè, người thân cùng sử dụng BSmart và họ nhập
            mã giảm giá BSmart này thành công trong bước đăng ký nhé.
            Sau khi người bạn được bạn giới thiệu mua sắm thành công 1
            đơn hàng trên hệ thống BSmart thì bạn và người nhập mã sẽ
            nhận ngay 50.000 BS Coin để mua hàng.</p>
        </Modal>
        <br /> <br />


        <label style={{ marginRight: 50 }} htmlFor="MaGG">Mã giảm giá: </label>
        <input style={{ width: 150 }} type="text" placeholder=" x x x x" name="MaGG" />
        
        <div className="icon-check"><CheckCircleOutlined /></div>
        <Button className="btn-info" style={{ background: "#FFF", color: "#000" , marginLeft :15,boxShadow: "none"  }} type="primary" onClick={showModal}>
          <QuestionOutlined />
        </Button>
        <Modal title="Giới thiệu và hướng dẫn nhập mã giảm giá" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <hr />
          <p style={{ marginTop: "20px", letterSpacing: 1 }}>Đây cũng là ưu đãi mà BSmart dành cho khách hàng. Khi giới
            thiệu cho bạn bè, người thân cùng sử dụng BSmart và họ nhập
            mã giảm giá BSmart này thành công trong bước đăng ký nhé.
            Sau khi người bạn được bạn giới thiệu mua sắm thành công 1
            đơn hàng trên hệ thống BSmart thì bạn và người nhập mã sẽ
            nhận ngay 50.000 BS Coin để mua hàng.</p>
        </Modal>

      </div>


      {InfoCustomer.map((item) => (
        <div className="Payments">
          <div className="Payments__item"> <p>Tạm tính :</p> {item.provisional}</div>
          <div className="Payments__item"> <p>Giảm giá :</p> {item.Discount}</div>
          <strong> <div className="Payments__item"> <p>Tổng Cộng:</p> {item.Total}</div></strong>


        </div>
      ))}

      {InfoCustomer.map((item) => (
        <div className="DropDown" >
          <div style={{ display: "flex", alignItems: "center" }}>Sử dụng BSmart: <p>{item.BSmart}</p></div>
          <select style={{ borderRadius: 3, width: 200, height: 30 }} >
            <option value="Không sử dụng">Không sử dụng</option>
            <option value=" Có sử dụng "> Có sử dụng </option>
          </select>
        </div>
      ))}
      <br />
      <Modals />
    </form>


  );
}

export default DetailPayment;



