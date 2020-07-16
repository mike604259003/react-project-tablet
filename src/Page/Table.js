import React from 'react';

 class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            table_id: 1
        
        }
     
    }

    componentDidMount(){
        
        this.onPageChange(
            "http://localhost/project_shabu/index.php/OrderFood/getnumbertables"
        );
       
    }

    onPageChange(url) {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
                data: result,
                
            });
            console.log("data:" + this.state.data);
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render(){
        return(
            
            <section className="section">
            <div className="container" align="center">
                <br />
                {/* <h7 className="hero-title">กรุณาเลือกโต๊ะ</h7> */}
                <img src="assets/image/shabulogo.png" width={150} height={150} />
                <br />
                <br />
                <div className="row">
                     {//-----------------------------------
                          this.state.data.map( function(obj, i){
                            return(
                        
                <div  key={i} className="col-lg-6">
                    <div className="media align-items-center food-card">
                    <img
                        className="mr-3 mr-sm-4"
                        src="assets/image/table.png"
                        width={99}
                        height={99}
                    />
                    <div className="media-body">
                        <a href="/home">
                        <h4>โต๊ะ {obj.t_number}</h4>
                        </a>
                        <p>เลือกโต๊ะเพื่อ สั่งอาหารและดูรายการอาหารที่สั่ง</p>
                    </div>
                    </div>
                </div>
                 )

                })
                    
                 //-----------------------------------
                }
                
                </div>
            </div>
        </section>

        
        )
    }
}

export default Table;