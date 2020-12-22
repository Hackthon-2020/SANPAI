import React from 'react'

class Shrine extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>神社を選んでください。</h2> 
      </div>
    )
  }
}


export default Shrine;