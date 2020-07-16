import React from 'react';

 class MenulistCancel extends React.Component{
    render(){
        return(
           
        <div>
            <section className="section">
                <div className="container" align="center">
                    <br />
                    <h7 className="hero-title">Table 1</h7>
                    <img src="assets/image/shabulogo.png" width={150} height={150} />
                    <div className="row">
                    <div className="container">
                    <h5 align="left"> &nbsp; วันที่ 06/01/2563 เวลา 15:45 น. ( รายการที่สั่ง )</h5>
                        <table className="w3-table-all w3-centered">
                        <tbody>
                            <tr>
                            <th>
                                <h5>เลือก</h5>
                            </th>
                            <th>
                                <h5>รายการที่สั่ง</h5>
                            </th>
                            <th>
                                <h5>จำนวน(ถาด)</h5>
                            </th>
                            <th>
                                <h5>แก้ไข/ลบ</h5>
                            </th>
                            </tr>
                            <tr>
                            <td>
                                <input type="checkbox" name="vehicle1" defaultValue="Bike" />
                            </td>
                            <td>
                                <h6></h6>
                            </td>
                            <td>
                                <h6></h6>
                            </td>
                            <td>
                                <button type="button" className="btn btn-warning">
                                +
                                </button>&nbsp;
                                <button type="button" className="btn btn-warning">
                                -
                                </button>&nbsp;
                                <button type="button" className="btn btn-danger">
                                ลบ
                                </button>
                            </td>
                            </tr>
                            
                            <tr>
                            <td align="right">&nbsp;</td>
                            <td>&nbsp;</td>
                            <td colSpan={2}>
                                <h>
                                <a
                                    type="button"
                                    className="btn btn-primary"
                                    href="#menu"
                                >
                                    ย้อนกลับ
                                </a>&nbsp;
                                </h>
                                <a type="button" className="btn btn-danger" href="#menulist">
                                ยกเลิกการเลือกทั้งหมด
                                </a>&nbsp;
                                <a type="button" className="btn btn-danger" href="#">
                                ยกเลิกรายการสั่งทั้งหมด
                                </a>
                                &nbsp;
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

export default MenulistCancel;