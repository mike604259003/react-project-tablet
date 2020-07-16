import React, { Component } from 'react'
import './Increment.css';
import axios from 'axios';
import api from '../Url_api';

class Deletemenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      table_id:0
     
    };
  }

  componentDidMount(){
    const id = this.props.id;
    const table_id = this.props.table_id;
  
    this.setState({
      id:id,
      table_id:table_id
    })
    
  }

  delete = () => {

    
    axios.post(api('deletemenu'), 
        JSON.stringify({
            'table_id' : this.state.table_id,
            'f_id': this.state.id
        }))
         
  }

    render() {
        return (
           
        
       
            <button onClick={this.delete} className="btn btn-danger">

            ลบ
</button>
          
         
          
        )
    }
}export default Deletemenu;
