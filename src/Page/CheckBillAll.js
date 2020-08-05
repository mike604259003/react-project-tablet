import React from 'react';
import Logo_compo from './logo_compo';
import { Link } from 'react-router-dom';

 class CheckBillAll extends React.Component{
    render(){
        return(
            <div>
                <div className="container" align="center"><br />
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="media align-items-center food-card">
    
                        <div className="media-body">
                       <Logo_compo />
                            <img src="assets/image/bill.png" width={150} height={150} /><br /><br />
                            <p /><h4>กรุณาไปชำระเงิน <br /><br />พร้อมรับใบเสร็จได้
                            ที่แคชเชียร์</h4><p />
                            <Link className="w3-btn w3-dark-grey w3-round w3-small" to="/Logout">
                                    ย้อนกลับ
                            </Link>
                           <br /><br /><br />
                            {/* <a className="button button-hero button-shadow" href="/menu"> ทำรายการต่อ</a>  */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default CheckBillAll;