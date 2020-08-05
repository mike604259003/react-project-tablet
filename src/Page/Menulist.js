import React from 'react';
import Logo_compo from './logo_compo';
import axios from 'axios';
import api from '../Url_api';
import Increment from './Increment';
import Deletemenu from './deletemenu';



class Menulist extends React.Component {
//จะเป็น method แรกที่ถูกทำงานก่อนการ render
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            food: "",
            order_id: null,
            statusDelete: "",
            order_list:[],
            table_id: 0


        }
    
    }

    componentDidMount() {
//จะถูกเรียกใช้งานทันทีหลังการ render
        const table_id = localStorage.getItem('table_id');
        this.setState({
            table_id:table_id
        })
            axios.post(api('getOrderGroup'), 
            JSON.stringify({
                'table_id' : table_id
            }))
            .then(res => {
                this.setState({
                    order_list:res.data
               })
    
            })
        
        
        
    }

    

    clearorder = (e) => {
        e.preventDefault();
        const id = localStorage.getItem('table_id');
        axios.post(api('clear'), 
        JSON.stringify({
            'table_id' : id
        }))


        
    }
    onClickSubmit= (e) => {
        e.preventDefault();
        const table_id = localStorage.getItem('table_id');
        const data = this.state.order_list;
        //console.log("data "+JSON.stringify(data));
        //console.log("table "+table_id);
        axios.post(api('setOrderList'), 
        JSON.stringify({
        'table_id':table_id,
        'data':data
        }))
      
        
        this.props.history.push('/menu');
        }
  
    

    render() {
        return (

            <div>
                {/* <button onClick={this.hello} className="btn btn-danger">click</button> */}
                <section className="section">
                    <div className="container" align="center">
                        <br />
                        <Logo_compo />
                        <div className="row">
                            <div className="container">
                                <h5 align="left"> &nbsp;  รายการที่สั่ง </h5>
                                <table className="w3-table-all w3-centered">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <h5>ลำดับ</h5>
                                            </th>
                                            <th>
                                                <h5>รายการที่สั่ง</h5>
                                            </th>
                                            <th>
                                                <h5>จำนวน(ถาด)</h5>
                                            </th>
                                            <th>
                                                <h5>ลบ</h5>
                                            </th>
                                        </tr>
                                        
                                        {
                                        
                                        this.state.order_list == "" ? "":
                                            this.state.order_list.map((order,idx) =>

                                                <tr key={idx}>
                                                    <td>
                                                        <h6>{idx+1}</h6>
                                                    </td>
                                                    <td>
                                                        <h6>{order.f_name}</h6>
                                                    </td>
                                                    <td>
                                                    <Increment table_id={this.state.table_id} id={order.co_f_id} amount={order.total_amount}/>
                                                    </td>
                                                    <td>
                                                       <Deletemenu id={order.co_f_id} table_id={this.state.table_id}/>
                                                    </td>

                                                </tr>


                                            )

                                        }


                                        <tr>
                                            <td align="right">&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td colSpan={2}>
                                                <h>
                                                    <button onClick={this.onClickSubmit}
                                                        className="w3-btn w3-blue w3-round w3-small"
                                                        
                                                    >
                                                        ยืนยันการสั่งาหาร
                                </button>&nbsp;
                                </h>
                                <button className="w3-btn w3-dark-grey w3-round w3-small" onClick={this.clearorder}>
                                                    ยกเลิกรายการสั่งทั้งหมด
                                </button>&nbsp;
                                <a className="w3-btn w3-dark-grey w3-round w3-small" href="#menu">
                                    ย้อนกลับ
                            </a>
                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}



export default Menulist;