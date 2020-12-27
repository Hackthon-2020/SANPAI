import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../navigation/index';
import Omikuji from '../../pages/omikuji/index';
import Home from '../../pages/home/index';
import Osaisen from '../../pages/osaisen/index';
// import { Payment } from '@material-ui/icons';
import Payment from '../../pages/payment/index'


class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navigation />
            <Route exact path='/' render={ () => <Home/> }/>
            <Route path='/omikuji' render={ () => <Omikuji name={'おみくじ'}/> }/>
            <Route path='/osaisen' render={ () => <Osaisen name={'お賽銭'}/> }/>
            <Route path='/payment' render={ () => <Payment name={'お支払い'}/> }/>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routing;
