import React from 'react';
import QRcode from 'qrcode.react';
class Qrcode_compo extends React.Component {
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

    render(){
        return(
            <div>
                <QRcode className="styleQR" size="300"  value={"https://mike604259003.github.io/react-project-mobile/#/home/" + this.state.table_id + "/" + this.state.bill_id} />
            </div>
        )
    }
}
export default Qrcode_compo;
