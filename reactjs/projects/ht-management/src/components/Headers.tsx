import {ImgHeader} from "../Data";
import "../Style/Style.scss";
export default function Headers() {
    return (
     <div>
        {ImgHeader.map((item)=>(
            <div className="Header">
            <img className="Header__img" src={item.img} alt="" />
            <h2 className="Header__title">ĐĂNG KÝ KHÓA HỌC</h2>
            </div>
        ))}
     </div>
    );
  }