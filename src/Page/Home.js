import React from 'react';
import axios from 'axios';
import api from '../Url_api';
import {Link} from 'react-router-dom';


 class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        data: [],
        table_id: ""
    }
 
}

componentDidMount(){
      this.setState({
        table_id:localStorage.getItem('table_id')
      })
}

OnSubmit= (e)=>{
  e.preventDefault();

  const amount_people = this.getAmountPeople.value;
 
  
  axios.post(api('openbill'), 
        JSON.stringify({
            'table' : this.state.table_id,
            'amount' : amount_people
        }))
  .then(res => {
     if(res.data !== null){
       const bill_id = res.data[0].b_id;
       localStorage.setItem('bill_id',bill_id);
       this.props.history.push('/qrcode');
     }
  })
}
    render(){
        return(
          <section className="section">
          <div className="hero-left">
            <div className="container" align="center">
                <div className="hero-carousel-item">
                  <img src="assets/image/m2.jpg" width={470} height={530} />
                </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="hero-right">
          <form onSubmit={this.OnSubmit}>
            <div className="container" align="center">
        <h3 className="hero-title">โต๊ะ {this.state.table_id}</h3>
              <img src="assets/image/shabulogo.png" width={300} height={250} />
              <br />

                <h3>
                &nbsp;
                
                <select name="ele_select" id="ele_select" ref={(input)=>this.getAmountPeople = input}>
                  <option value>จำนวนคน</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>&nbsp;
               
                
                </h3>
                <br />

              <button className="w3-btn w3-blue w3-round w3-large" type="submit">ยืนยัน</button>
              
              &nbsp;&nbsp;
              <Link to="/"><button className="w3-btn w3-dark-grey w3-round w3-large" type="reset">ยกเลิก</button></Link>
        
            </div>
            </form>
            {/* <Link to="/logout">Logout</Link> */}
          </div>
          {/* <QRcode value="http://" /> */}
        </section>
        
        
        )
    }
}

export default Home;