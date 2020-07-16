import React from 'react';
import axios from 'axios';
import api from '../Url_api';
import { Link } from 'react-router-dom';

class Config_table extends React.Component{

  constructor(props){
    super(props);
    this.state={
      table:[]
    }
  }

    OnSubmit = (e)=>{
        e.preventDefault()
        const table_id = this.getTableID.value;
        localStorage.setItem('table_id', table_id);  
        this.props.history.push('/home');
        
    }

    componentDidMount(){
      axios.get(api('getAllTable'))
      .then(res => {
       const table = res.data.data;
       this.setState({table})
       
      })
    }

  
    render(){
        return(
            <div className="limiter">
            <div className="container-login100">
              <div className="wrap-configtable">
              <span className="login100-form-title">เลือกโต๊ะ</span>
               
               <div className="datalist">
                 
                <form onSubmit={this.OnSubmit}>
               <input type="text" id="default" list="table_id" placeholder="เลขโต๊ะ" ref={(input)=>this.getTableID = input}/>
               

                    <datalist id="table_id">
                    { this.state.table.map(table => <option value={table.t_id}>{table.t_number}</option>)}
                      
                          
                    </datalist>
                
                <div className="container-login100-form-btn">
              <button type="submit" className="config-form-btn">
                ยืนยัน
              </button>
            </div>
                </form>
                
               </div>
              
              </div>
            </div>
             <Link to="/logout">Logout</Link>
          </div>
        )
    }
}
export default Config_table;