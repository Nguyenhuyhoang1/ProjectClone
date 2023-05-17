import {InfoCustomer} from "../Data";
import "../Style/Style.scss";
import DetailPayment from "./DetailPayment";
export default function RightContent() {
    return (
        <div>
            <div className="LContent">
                <h3 className="RContent__title">THÔNG TIN NGƯỜI MUA</h3>
                <hr />
                {InfoCustomer.map((item)=>(
                <div className="Customer">
                    <div className="Customer__item"> <p  style={{marginRight : "80px"}}>Tên :</p>   {item.Name}</div>
                    <div className="Customer__item"> <p  style={{marginRight : "22px"}}>Số điện thoại :</p>   {item.SĐT}</div>
                    <div className="Customer__item"> <p  style={{marginRight : "69px"}}>Email :</p>   {item.Email}</div>
                </div>
                ))}
                <DetailPayment />
            </div>
        </div>
    );
}