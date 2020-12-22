import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './navigation';
import Omikuji from '../pages/omikuji/index';
import Home from '../pages/home/index';
import Shrine from '../pages/shrine/index';


class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navigation />
            <Route exact path='/' render={ () => <Home name={'ホームページ'}/> }/>
            <Route path='/omikuji' render={ () => <Omikuji name={'おみくじ'}/> }/>
            <Route path='/shrine' render={ () => <Shrine name={'神社選択'}/> }/>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routing;
