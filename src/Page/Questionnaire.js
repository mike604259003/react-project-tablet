import React from 'react';
import axios from 'axios';
import api from '../Url_api';

 class Questionnaire extends React.Component{

    constructor(){
        super();
        this.state ={
           selectedGender: 'male',
           selectedAge: '7-20',
           selectedHis:'yes',
           f1:"",
           f2:"",
           f3:"",
           f4:"",
           f5:"",
           ser1:"",
           ser2:"",
           ser3:"",
           se1:"",
           se2:"",
           se3:"",
        }
    }

    handleGenderChange = (e) =>{
        e.preventDefault();
        this.setState({
            selectedGender:e.target.value
        })
    }

    handleAgeChange = (e) =>{
        e.preventDefault();
        this.setState({
            selectedAge:e.target.value
        })
    }

    handleHisChange = (e) =>{
        e.preventDefault();
        this.setState({
            selectedHis:e.target.value
        })
    }

    handleChangef1 = (e) =>{
        e.preventDefault();
        this.setState({
            f1:e.target.value
        })
    }

    handleChangef2 = (e) =>{
        e.preventDefault();
        this.setState({
            f2:e.target.value
        })
    }

    handleChangef3 = (e) =>{
        e.preventDefault();
        this.setState({
            f3:e.target.value
        })
    }
    handleChangef4 = (e) =>{
        e.preventDefault();
        this.setState({
            f4:e.target.value
        })
    }
    handleChangef5 = (e) =>{
        e.preventDefault();
        this.setState({
            f5:e.target.value
        })
    }
    handleChangeser1 = (e) =>{
        e.preventDefault();
        this.setState({
            ser1:e.target.value
        })
    }
    handleChangeser2 = (e) =>{
        e.preventDefault();
        this.setState({
            ser2:e.target.value
        })
    }
    handleChangeser3 = (e) =>{
        e.preventDefault();
        this.setState({
            ser3:e.target.value
        })
    }
    handleChangese1 = (e) =>{
        e.preventDefault();
        this.setState({
            se1:e.target.value
        })
    }
    handleChangese2 = (e) =>{
        e.preventDefault();
        this.setState({
            se2:e.target.value
        })
    }
    handleChangese3 = (e) =>{
        e.preventDefault();
        this.setState({
            se3:e.target.value
        })
    }


    onClickSubmit = (e) =>{
        e.preventDefault();
        
       axios.post(api('setQuestionnaire'), 
        JSON.stringify({
            'd1' : this.state.selectedGender,
            'd2' : this.state.selectedAge,
            'd3' : this.state.selectedHis,
            'd4' : this.state.f1,
            'd5' : this.state.f2,
            'd6' : this.state.f3,
            'd7' : this.state.f4,
            'd8' : this.state.f5,
            'd9' : this.state.ser1,
            'd10' : this.state.ser2,
            'd11' : this.state.ser3,
            'd12' : this.state.se1,
            'd13' : this.state.se2,
            'd14' : this.state.se3
        }))
        .then(res => {
          if(res.data === 1){
            axios.post(api('changeStatusQuestion'), 
            JSON.stringify({
                'bill' : localStorage.getItem('bill_id'),
            }))
            .then(res => {
                if(res.data === 1){
                    this.props.history.push("/checkbill");
                }
            })
          }

        })
        
        
    }

    

    render(){
        return(
           
              <div>
                  <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                        <center>
                            <img src="assets/image/shabulogo.png" width={150} height={150} />
                            <br />
                            <br />
                        </center>
                        <form onSubmit={this.onClickSubmit}>
                        <h3 align="center">
                            {" "}
                            แบบสอบถามความพึงพอใจการสั่งอาหารร่วมกันสำหรับร้านชาบู{" "}

                            <h5>

                           
                         เพศ * &nbsp;
                            <input type="radio" name="gender" onChange={this.handleGenderChange} value="male" checked={this.state.selectedGender === 'male'} /> ชาย &nbsp;
                            <input type="radio" name="gender" onChange={this.handleGenderChange} value="female" checked={this.state.selectedGender === 'female'}/> หญิง &nbsp;
                            <input type="radio" name="gender" onChange={this.handleGenderChange} value="other" checked={this.state.selectedGender === 'other'}/> อื่นๆ
                            <br />
                        <br />
                        
                             ช่วงอายุ * &nbsp;
                            <input type="radio" name="age" value="7-20" onChange={this.handleAgeChange} checked={this.state.selectedAge === '7-20'} /> 7 -
                            20 ปี &nbsp;
                            <input type="radio" name="age" value="21-30" onChange={this.handleAgeChange} checked={this.state.selectedAge === '21-30'}/> 21 - 30 ปี &nbsp;
                            <input type="radio" name="age" value="31-40" onChange={this.handleAgeChange} checked={this.state.selectedAge === '31-40'}/> 31 - 40 ปี &nbsp;
                            <input type="radio" name="age" value="50+" onChange={this.handleAgeChange} checked={this.state.selectedAge === '50+'}/> 50 ปีขึ้นไป
                            <br />
                            <br />
                       
                        
                        ท่านเคยมารับประทานอาหารที่ร้านนี้หรือไม่ * &nbsp;
                            <input type="radio" name="never" value="yes" onChange={this.handleHisChange} checked={this.state.selectedHis === 'yes'}/>     เคย &nbsp;
                            <input type="radio" name="never" value="no" onChange={this.handleHisChange} checked={this.state.selectedHis === 'no'}/> ไม่เคย &nbsp;
                            
                            <br />
                            <br />
                       

                            </h5>
                        </h3>

                       
                            <table
                            width="100%"
                            border={1}
                            align="center"
                            cellPadding={0}
                            cellSpacing={0}
                            >
                            <tbody>
                                <tr>
                                <td width="75%" rowSpan={2} align="center">
                                    <strong>รายการ</strong>
                                </td>
                                <td colSpan={5} align="center">
                                    <strong>ระดับความพึงพอใจ</strong>
                                </td>
                                </tr>
                                <tr>
                                <td width="5%" align="center">
                                    <strong>5</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>4</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>3</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>2</strong>
                                </td>
                                <td width="5%" align="center">
                                    <strong>1</strong>
                                </td>
                                </tr>
                                
                                <tr>
                                <td height={30} colSpan={6} bgcolor="#F4F4F4">
                                    <strong>&nbsp; ด้านอาหาร</strong>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 1.ความสดของอาหาร</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c1"
                                    value="5"
                                    onChange={this.handleChangef1} checked={this.state.f1 === "5"}/>
                                   
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" value="4" onChange={this.handleChangef1} checked={this.state.f1 === "4"} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" value="3"  onChange={this.handleChangef1} checked={this.state.f1 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" value="2"  onChange={this.handleChangef1} checked={this.state.f1 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c1" value="1"  onChange={this.handleChangef1} checked={this.state.f1 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 2.อาหารสะอาดถูกสุขลักษณะ</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c2"
                                    value="5"
                               
                                    onChange={this.handleChangef2} checked={this.state.f2 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" value="4" onChange={this.handleChangef2} checked={this.state.f2 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" value="3" onChange={this.handleChangef2} checked={this.state.f2 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" value="2" onChange={this.handleChangef2} checked={this.state.f2 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c2" value="1" onChange={this.handleChangef2} checked={this.state.f2 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 3.รสชาตน้ำจิ้ม</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c3"
                                    value="5"
                                 
                                    onChange={this.handleChangef3} checked={this.state.f3 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" value="4" onChange={this.handleChangef3} checked={this.state.f3 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" value="3" onChange={this.handleChangef3} checked={this.state.f3 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" value="2" onChange={this.handleChangef3} checked={this.state.f3 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c3" value="1" onChange={this.handleChangef3} checked={this.state.f3 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 4.ท่านพึงพอใจในด้านอาหารมากน้อยแค่ไหน </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c4"
                                    value="5"
                                
                                    onChange={this.handleChangef4} checked={this.state.f4 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" value="4"  onChange={this.handleChangef4} checked={this.state.f4 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" value="3"  onChange={this.handleChangef4} checked={this.state.f4 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" value="2"  onChange={this.handleChangef4} checked={this.state.f4 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c4" value="1"  onChange={this.handleChangef4} checked={this.state.f4 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 5.ความสะดวกในการสั่งอาหาร</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="c5"
                                    value="5"
                              
                                    onChange={this.handleChangef5} checked={this.state.f5 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" value="4" onChange={this.handleChangef5} checked={this.state.f5 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" value="3" onChange={this.handleChangef5} checked={this.state.f5 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" value="2" onChange={this.handleChangef5} checked={this.state.f5 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="c5" value="1" onChange={this.handleChangef5} checked={this.state.f5 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30} colSpan={6} bgcolor="#F4F4F4">
                                    <strong>&nbsp; ด้านการเข้าถึงบริการของพนักงาน</strong>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 1.ความรวดเร็วในการบริการ</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d1"
                                    value="5"
                            
                                    onChange={this.handleChangeser1} checked={this.state.ser1 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" value="4" onChange={this.handleChangeser1} checked={this.state.ser1 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" value="3" onChange={this.handleChangeser1} checked={this.state.ser1 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" value="2" onChange={this.handleChangeser1} checked={this.state.ser1 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d1" value="1" onChange={this.handleChangeser1} checked={this.state.ser1 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 2.ความใกล้ชิดที่พร้อมจะให้บริการลูกค้าอย่างทั่วถึง
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d2"
                                    value="5"
                                    onChange={this.handleChangeser2} checked={this.state.ser2 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" value="4" onChange={this.handleChangeser2} checked={this.state.ser2 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" value="3" onChange={this.handleChangeser2} checked={this.state.ser2 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" value="2" onChange={this.handleChangeser2} checked={this.state.ser2 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d2" value="1" onChange={this.handleChangeser2} checked={this.state.ser2 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 3.ความใกล้ชิดที่ลูกค้าสามารถสื่อสารเพื่อขอใช้บริการ
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="d3"
                                    value="5"
                    
                                    onChange={this.handleChangeser3} checked={this.state.ser3 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" value="4" onChange={this.handleChangeser3} checked={this.state.ser3 === "4"} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" value="3" onChange={this.handleChangeser3} checked={this.state.ser3 === "3"} />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" value="2"  onChange={this.handleChangeser3} checked={this.state.ser3 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="d3" value="1"  onChange={this.handleChangeser3} checked={this.state.ser3 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30} colSpan={6} bgcolor="#F4F4F4">
                                    <strong>&nbsp; ด้านความปลอดภัย</strong>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>&nbsp; 1.ความสะอาดของอุปกรณ์มาใช้บริการ</td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="e1"
                                    value="5"
                                    onChange={this.handleChangese1} checked={this.state.se1 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e1" value="4" onChange={this.handleChangese1} checked={this.state.se1 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e1" value="3" onChange={this.handleChangese1} checked={this.state.se1 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e1" value="2" onChange={this.handleChangese1} checked={this.state.se1 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e1" value="1" onChange={this.handleChangese1} checked={this.state.se1 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 2.ความปลอดภัยของอุปกรณ์ในขณะที่ลูกค้าใช้บริการ
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="e2"
                                    value="5"
                           
                                    onChange={this.handleChangese2} checked={this.state.se2 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e2" value="4"  onChange={this.handleChangese2} checked={this.state.se2 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e2" value="3"  onChange={this.handleChangese2} checked={this.state.se2 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e2" value="2"  onChange={this.handleChangese2} checked={this.state.se2 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e2" value="1"  onChange={this.handleChangese2} checked={this.state.se2 === "1"}/>
                                </td>
                                </tr>
                                <tr>
                                <td height={30}>
                                    &nbsp; 3.การจัดระบบความปลอดภัยเมื่อมีเหตุฉุกเฉิน
                                </td>
                                <td height={30} align="center">
                                    <input
                                    type="radio"
                                    name="e3"
                                    value="5"
                               
                                    onChange={this.handleChangese3} checked={this.state.se3 === "5"}
                                    />
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e3" value="4" onChange={this.handleChangese3} checked={this.state.se3 === "4"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e3" value="3" onChange={this.handleChangese3} checked={this.state.se3 === "3"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e3" value="2" onChange={this.handleChangese3} checked={this.state.se3 === "2"}/>
                                </td>
                                <td height={30} align="center">
                                    <input type="radio" name="e3" value="1" onChange={this.handleChangese3} checked={this.state.se3 === "1"}/>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <br />
                            
                            <br />
                            <button type="submit" className="w3-btn w3-blue w3-round w3-small">+ บันทึก</button>&nbsp;
                            &nbsp;
                            <a
                                    className="w3-btn w3-dark-grey w3-round w3-small"
                                    href="#checkbill"
                                    >
                                    ยกเลิก
                            </a></form>
                        
                        <br />
                        <br />
                        </div>
                    </div>
                    </div>

              </div>
        
        )
    }
}

export default Questionnaire;