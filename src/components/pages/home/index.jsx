import React from 'react';
import ShrineCard from '../../card/shrineCard/index';
import ShrineDialog from '../../modal/dialog';


class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>神社を選んでください。</h1> 
        <ShrineDialog />
        <ShrineCard />
      </React.Fragment>
    )
  }
}


export default Home;