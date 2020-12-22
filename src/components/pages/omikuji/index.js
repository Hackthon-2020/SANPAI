import React from 'react'

class Omikuji extends React.Component {
  render(){
    return(
      <div>
        <h1>お賽銭</h1>
        <h2>お金ください。 {this.props.name}</h2>
      </div>
    )
  }
}


export default Omikuji;