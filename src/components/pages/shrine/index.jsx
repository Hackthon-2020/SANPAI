import React from 'react';
import ShrineCard from '../../card/shrineCard/index';
import ShrineDialog from '../../modal/dialog';

class Shrine extends React.Component {
  
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>神社を選んでください。</h2> 
        <ShrineDialog />
        <ShrineCard />
      </div>
    )
  }
}

export default Shrine;
