import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../navigation/index';
import Omikuji from '../../pages/omikuji/index';
import Home from '../../pages/home/index';
import Shrine from '../../pages/shrine/index';
import Sanpai from '../../pages/sanpai/index';


class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navigation />
            <Route exact path='/' render={ () => <Home name={'ホームページ'}/> }/>
            <Route path='/omikuji' render={ () => <Omikuji name={'おみくじ'}/> }/>
            <Route path='/sanpai' render={ () => <Sanpai name={'参拝'}/> }/>
            <Route path='/shrine' render={ () => <Shrine name={'神社を見つける'}/> }/>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routing;
