import React from 'react';
import Logo_compo from './logo_compo';
import axios from 'axios';
import api from '../Url_api';
import QRcode from 'qrcode.react';
 class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            table_id: "",
            bill_id: ""
        }
    }

    componentDidMount() {
        const table_id = localStorage.getItem('table_id');
        const bill_id = localStorage.getItem('bill_id');
        this.setState({
            table_id: table_id,
            bill_id: bill_id
        })

    }

    confirm= (e) => {
        e.preventDefault();
        const Password = this.getPassword.value;
   
        axios.post(api('reset'), 
        JSON.stringify({
          'password': Password
        }))
        .then(res => {
            
            if(res.data.status == true){
                this.props.history.push("/homeedit");
            }else{
                this.props.history.push("/menu");
            }
  
        })
        

    }
    render(){
        return(
                <section className="section">
                    <div className="container" align="center">
                        <br />
                       <Logo_compo />
                        <br />
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                                <h1>{this.props.data}</h1>
                                <QRcode className="styleQR"  value={"https://mike604259003.github.io/react-project-mobile/#/home/" + this.state.table_id + "/" + this.state.bill_id} />

                            <div className="media-body">
                                <a href="#qrcode">
                                <h4>Qr Code สั่งอาหาร</h4>
                                </a>
                                <p>สแกน Qr Code เพื่อสั่งอาหาร</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/clipboard.png"
                                height={150}
                            />
                            <div className="media-body">
                                <a href="#menulist">
                                <h4>รายการที่สั่ง</h4>
                                </a>
                                <p>ตรวจสอบรายการที่สั่งจาก โทรศัพท์</p>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/file.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#menulist2">
                                <h4>ประวัติการสั่ง</h4>
                                </a>
                                <p>ตรวจสอบจำนวนรายการที่สั่งทั่งหมดว่ามีกี่ครั้ง</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/baker.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#menulist3">
                                <h4>อาหารที่รอเสิร์ฟ</h4>
                                </a>
                                <p>ตรวจสอบรายการอาหาร ที่กำลังรอเสริฟ</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/payment-method.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                                <a href="#checkbill">
                                <h4>เช็คบิล</h4>
                                </a>
                                <p>ตรวจสอบยอดที่ต้องชำระและ<br />ทำแบบสอบถามเพื่อ 'รับส่วนลด'</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="media align-items-center food-card">
                            <img
                                className="mr-3 mr-sm-4"
                                src="assets/image/pencil.png"
                                width={99}
                                height={99}
                            />
                            <div className="media-body">
                               
                                <h4 data-toggle="modal" data-target="#myModal">แก้ไขจำนวนคน</h4>
                                {
                                /* Modal */
                                }
                                <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                    <h6 className="modal-title">กรุณาใส่รหัสพนักงาน</h6>
                                        <button type="button" className="close" data-dismiss="modal">
                                        ×
                                        </button>
                                        
                                    </div>
                                    <div className="modal-body">
                                        <input
                                        type="password"
                                        className="form-control"
                                        id="pwd"
                                        placeholder="Enter password"
                                        name="pwd"
                                        ref={(input)=>this.getPassword = input}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                   <button className="btn btn-default" onClick={this.confirm}>
                                        submit
                                    </button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                             
                                <p>กดที่ปุ่มนี้เพื่อ แก้ไขจำนวนคน</p>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </section>
        
        )
    }
}

export default Menu;