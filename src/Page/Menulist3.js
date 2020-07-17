import React from 'react';
import axios from 'axios';
import api from '../Url_api';
import Logo_compo from './logo_compo';
import StatusMenulist3 from './StatusMenulist3';
import {Link} from 'react-router-dom';

 class Menulist3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            table_id: 1,
            order_id: "",
            count:0,
            order_detail:[]
        
        }

        this.chooseOrder = this.chooseOrder.bind(this);
        this.backToOrder = this.backToOrder.bind(this);
     
    }


    componentDidMount(){
        const table_id = localStorage.getItem('table_id');
        this.setState({
            table_id:table_id
        })
        this.onPageChange(api('getOrderfoodbytableStatus1'),table_id);
       
    }

    onPageChange(url,table_id){
        axios.post(url, 
            JSON.stringify({
                'table_id' : table_id
            }))
      .then(res => {
         
          this.setState({
              data:res.data
          })
      })
    }

    chooseOrder(order_id){
      this.setState({
          order_id:order_id,
          count:0
      })
      axios.post(api('getDetailOrderbyID'), 
        JSON.stringify({
            'order_id' : order_id
        }))
        .then(res => {
     
      this.setState({
          order_detail:res.data
      })
  })

        
    }

    backToOrder(){
        this.setState({
            order_id:"",
            count:0,
            order_detail:[]
        })
    }


    render(){
        return(
           
              <div>
                  <section className="section">
                    <div className="container" align="center">
                        <br />
                        <Logo_compo />
                        <div className="row">
                        <div className="container">
                        <h5 align="left"> &nbsp;  รายการที่รอเสิรฟ์ </h5>
                        {this.state.order_id == "" ?
                            <table className="w3-table-all w3-centered">
                            <tbody>
                                <tr>
                                <th>
                                    <h5>ลำดับ</h5>
                                </th>
                                <th>
                                    <h5>รหัสออเดอร์</h5>
                                </th>
                                <th>
                                    
                                </th>
                                <th>
                                    <h5>สถานะ</h5>
                                </th>
                                </tr>

                                {
                                  
                                 
                                  this.state.data.map( obj =>
                                  
                           
                            <tr onClick={this.chooseOrder.bind("Undata", obj.o_id)}>
                                <td>{this.state.count+=1}</td>
                                <td>
                                    <h6>{obj.o_id}</h6>
                                </td>
                                <td></td>
                                <td>
                                   <StatusMenulist3 order={obj.o_id}/>
                                </td>
                                
                            </tr>
                           
                            

                            )
                        } 
                           
                           
                                <tr>
                                <td />
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td colSpan={2}>
                                    <br />
                                    <a className="w3-btn w3-dark-grey w3-round w3-small" href="#menu">
                                    ย้อนกลับ
                                    </a>
                                </td>
                                </tr>

                            
                            </tbody>
                            </table>
                            :
                              <table className="w3-table-all w3-centered">
                            <tbody>
                                <tr>
                                <th>
                                    <h5>ลำดับ</h5>
                                </th>
                                <th>
                                    <h5>ชื่อ</h5>
                                </th>
                                <th>
                                    <h5>จำนวน</h5> 
                                </th>
                                <th>
                                    <h5>สถานะ</h5>
                                </th>
                                </tr>

                                {
                                  
                                 
                                  this.state.order_detail.map( data =>
                                  
                            <tr>
                                <td>{this.state.count+=1}</td>
                                <td>
                                    <h6>{data.f_name}</h6>
                                </td>
                                <td>
                                    <h6>{data.od_amount}</h6>
                                </td>
                                <td>
                                { data.od_status != 'กำลังเตรียม' ? 
                                <lable type="text" className="btn btn-success">
                                    {data.od_status}
                                </lable>
                                :
                                <lable type="text" className="btn btn-danger">
                                    {data.od_status}
                                </lable>
                                }
                                </td>
                                
                                </tr>
                            

                            )
                        } 
                           
                           
                                <tr>
                                <td />
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td colSpan={2}>
                                    <br />
                                    <button className="w3-btn w3-dark-grey w3-round w3-small" onClick={this.backToOrder}>
                                    ย้อนกลับ
                                    </button>
                                </td>
                                </tr>

                            
                            </tbody>
                            </table>
                            
                            }
                            <p>&nbsp;</p>
                        </div>
                        </div>
                    </div>
                </section>

              </div>
        
        )
    }
}

export default Menulist3;