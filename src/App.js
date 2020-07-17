import React, {Component} from 'react';
import { HashRouter , Route , Switch } from 'react-router-dom';
import Signin from './SignupSignin/Signin';
import {PrivateRoute} from './PrivateRoute';
import {history} from './history';
import Logout from './SignupSignin/Logout';
import Home from './Page/Home';
import Qrcode from './Page/Qrcode';
import Menu from './Page/Menu';
import Menulist from './Page/Menulist';
import Menulist2 from './Page/Menulist2';
import Menulist3 from './Page/Menulist3';
import CheckBill from './Page/CheckBill';
import Questionnaire from './Page/Questionnaire';
import HomeEdit from './Page/HomeEdit';
import MenulistCancel from './Page/MenulistCancel';
import CheckBillAll from './Page/CheckBillAll';
import Table from './Page/Table';
import Config_table from './Page/Config_table';


class App extends Component{
  render(){
    return(
      <div className="App">
      <HashRouter history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Config_table} />
          <Route path="/login" component={Signin}/>
          <Route path="/logout" component={Logout}/>
          <Route path='/qrcode' component={Qrcode} />
          <Route path='/menu' component={Menu} />
          <Route path='/menulist' component={Menulist} />
          <Route path='/menulist2' component={Menulist2} />
          <Route path='/menulist3' component={Menulist3} />
          <Route path='/checkbill' component={CheckBill} />
          <Route path='/questionnaire' component={Questionnaire} />
          <Route path="/homeedit" component={HomeEdit} />
          <Route path="/menulistcancel" component={MenulistCancel} />
          <Route path="/checkbillall" component={CheckBillAll} />
          <Route path="/table" component={Table} />
          <Route path="/home" component={Home} />
        </Switch>
      </HashRouter>
      </div>
    )
  }
}

export default App;
