import React from 'react';

 class Logo_compo extends React.Component{
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
    render(){
        return(
            <div className="container" align="center">
                 <h6 className="hero-title">โต๊ะ {this.state.table_id}</h6>
                <img src="assets/image/shabulogo.png" width={150} height={150} />
            </div>
        
        )
    }
}

export default Logo_compo;