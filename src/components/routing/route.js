import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './navigation';
import Omikuji from '../pages/omikuji/index';
import Home from '../pages/home/index';


class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navigation /><hr/>
            <Route exact path='/' render={ () => <Home name={'ホームページ'}/> }/>
            <Route path='/omikuji' render={ () => <Omikuji name={'おみくじ'}/> }/>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routing;
