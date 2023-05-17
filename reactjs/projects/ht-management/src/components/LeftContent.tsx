import {CourseInformation} from "../Data";
import "../Style/Style.scss";
export default function LeftContent() {
    return (
        <div>
            <div className="RContent">
                <h3 className="RContent__title">KHÓA HỌC ĐÃ ĐĂNG KÍ</h3>
                <hr />
                {CourseInformation.map((item)=>(
                <div className="InfoItem">
                    <a href="">
                    <div className="InfoItem__name"> Tên Khóa Học : {item.Name}</div>
                    <div className="InfoItem__name"> Thông Tin Khóa Học : {item.Info}</div>
                    </a>
                </div>
                ))}
            </div>
        </div>
    );
}