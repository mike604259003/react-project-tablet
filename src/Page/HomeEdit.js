import React from 'react';
import Logo_compo from './logo_compo';
import axios from 'axios';
import api from '../Url_api';

class HomeEdit extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      bill_id: 0
    }

  }

  componentDidMount() {
    this.setState({
      bill_id: localStorage.getItem('bill_id')
    })
  }

  confirm = (e) => {
    e.preventDefault();
    const amount_people = this.getAmountPeople.value;

    axios.post(api('updatepeople'),
      JSON.stringify({
        'bill': this.state.bill_id,
        'amount': amount_people
      }))
    this.props.history.push("/menu");

  }

  render() {
    return (
      <div>


        <div className="container" align="center">
          <Logo_compo /><br /><br />
          <h4>จำนวนคน</h4>

          <select name="ele_select" id="ele_select" ref={(input) => this.getAmountPeople = input}>
            <option>แก้ไขจำนวน</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={5}>6</option>
            <option value={5}>7</option>
            <option value={5}>8</option>
          </select>&nbsp;

                <br /><br />

          <button onClick={this.confirm} className="w3-btn w3-blue w3-round w3-large" href="#menu">
            &nbsp;&nbsp; ยืนยัน &nbsp;&nbsp;
              </button>&nbsp;&nbsp;
              <a className="w3-btn w3-dark-grey w3-round w3-large" href="#menu">
            &nbsp; ยกเลิก &nbsp;
              </a>
        </div>
      </div>
    )
  }
}

export default HomeEdit;