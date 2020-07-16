import React, { Component } from 'react'
import './Increment.css';
import axios from 'axios';
import api from '../Url_api';

class Increment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      amount:1,
      table_id:0,
      data:[]
     
    };
  }

  componentDidMount(){
    const id = this.props.id;
    const amount = this.props.amount;
    const table_id = this.props.table_id;
    const bill = localStorage.getItem('bill_id');
    console.log("bill "+bill);
    this.setState({
      id:id,
      amount:amount,
      table_id:table_id
    })

    axios.post(api('getBillByID'), 
    JSON.stringify({
        'bill_id' : bill,
    })).then(res => {
      if(res.data != null){

          const data = res.data.data[0];
          const date = res.data.date;
          const time = res.data.time;
          this.setState({
              data:data,
              date:date,
              time:time
          })
      }
      
   });
    
    
  }

  IncrementItem = () => {
      
        if( this.state.amount < this.state.data.b_amount_people*10){
        
        const amount = parseInt(this.state.amount)+1;
        this.setState({
          amount:amount
        })
        
        axios.post(api('updateorder'), 
        JSON.stringify({
            'table_id' : this.state.table_id,
            'f_id': this.state.id,
            'amount': amount
        }))

         }

  }

  DecreaseItem = () => {
    if( this.state.amount > 1 ){
    const amount = parseInt(this.state.amount)-1;
    this.setState({
      amount:amount
    })

    axios.post(api('updateorder'), 
    JSON.stringify({
        'table_id' : this.state.table_id,
        'f_id': this.state.id,
        'amount': amount
    }))
  }
}
 

    render() {
        return (
           
        
       
          
              <div className="number-input-container">
                <button type="button" className="button-decrement" onClick={this.DecreaseItem} />
                <div className="number-input">
                  <input type="number" className="number-input-text-box" value={this.state.amount} ref={(input)=>this.getAmount = input}/>
                </div>
                <button type="button" className="button-increment" onClick={this.IncrementItem} />
               </div>
          
         
          
        )
    }
}export default Increment;
