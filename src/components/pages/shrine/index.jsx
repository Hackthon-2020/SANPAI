import React from 'react';
import ShrineCard from '../../card/shrineCard/index';

class Shrine extends React.Component {
  
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>神社を選んでください。</h2> 
        <ShrineCard />
      </div>
    )
  }
}

export default Shrine;
