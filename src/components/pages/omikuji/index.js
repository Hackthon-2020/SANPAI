import React from 'react'
import funcOmikuji from '../../funcs/funcOmikuji';

class Omikuji extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>おみくじを引いてください。</h2>
        <funcOmikuji />
      </div>
    )
  }
}


export default Omikuji;