import React from 'react';
import Logo_compo from './logo_compo';
import Qrcode_compo from './qrcode_compo';


class Qrcode extends React.Component {

    constructor(props) {
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
    render() {
        return (
            <div>
                <div className="container" align="center"><br />
                    <div className="row">

                        <div className="col-lg-12">
                            <br /><br /><br />
                            <div className="media align-items-center">

                                <div className="media-body">
                                    <Qrcode_compo />
                                </div>



                                <div className="media-body">
                                    <Logo_compo size="250" />
                                    <p /><h4>สแกน Qr Code <br />เพื่อสั่งอาหารร่วมกัน</h4><p />
                                    <a className="w3-btn w3-dark-grey w3-large" href="#menu" id="back">&nbsp;&nbsp; ย้อนกลับ &nbsp;&nbsp;</a>
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

export default Qrcode;