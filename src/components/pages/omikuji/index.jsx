import React from 'react'

class Omikuji extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.text}おみくじを引いてください。</h2>
      </div>
    )
  }
}


export default Omikuji;