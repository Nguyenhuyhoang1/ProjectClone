import { LeftOutlined } from '@ant-design/icons';
import "../Style/Style.scss";
import { InforCourse } from "../Data"
import { Col, Row } from 'antd';
export default function MidContent() {
    return (
        <div>
            <div className="MidContent">
                <a href='/' style={{ color: "#000" }} className="MContent__title"><h2 style={{ marginBottom: 13 }}><LeftOutlined />  khảo thêm khóa học</h2></a>
                <hr />
                <h3 style={{ marginTop: 10 }}>ĐĂNG KÝ KHÓA HỌC</h3>


               <div className="" style={{justifyContent: "flex-end", display :"flex",marginTop :30}}> Bạn có <div className="" style={{color: "#ED712E"}}>1</div> khóa học trong giỏ hàng</div>
                <div className="InforCourse">
                    {InforCourse.map((item) => (
                        <Row>
                            <Col>
                                <img style={{ width: 150, height: 150, borderRadius: 8, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} src={item.img} alt="" />
                            </Col>
                            <Col>
        
                                <div className="InforCourses">
                                    <div className="InforCourses__item"> <p> Tên Khóa Học:</p>{item.Name}</div>
                                    <div className="InforCourses__item"> <p> Thông tin khóa học:</p>   {item.InforCourse}</div>
                                    <div className="InforCourses__item"> <p> Mentor:</p>{item.Mentor}</div>
                                    <div className="InforCourses__item"> <p> Thời gian dự kiến mở lớp:</p>{item.Time}</div>
                                    <div className="InforCourses__item"> <p> Giá tiền:</p>{item.Total}</div>
                                    <div className="InforCourses__item"> <p> Số lượng:</p>{item.Number} </div>
                                    <div className=""><a href="/">Xóa</a></div>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
            </div>
        </div>
    );
}