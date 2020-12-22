import React from 'react'

class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>SANPAI:オンラインお賽銭</h1>
        <h2>お賽銭アプリケーション {this.props.name}</h2>
      </div>
    )
  }
}


export default Home;