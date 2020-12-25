import React from 'react';
import CardList from '../../card/cardList/index';
import './index.css';

class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        <CardList />
      </React.Fragment>
    )
  }
}


export default Home;