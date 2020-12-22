import React from 'react'

class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>SANPAI:オンラインお賽銭</h2>
      </div>
    )
  }
}


export default Home;