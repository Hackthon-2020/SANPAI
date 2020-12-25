import React from 'react'

class Sanpai extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>参拝する。</h2> 
      </div>
    )
  }
}


export default Sanpai;