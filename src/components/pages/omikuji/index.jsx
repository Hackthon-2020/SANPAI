import React from 'react'
import OmikujiPlay from './omikujiPlay'

class Omikuji extends React.Component {

  render(){
    return(
      <div>
        <h2>画像をクリックして、おみくじを引こう!</h2>
        <div><OmikujiPlay /></div>
      </div>
    )
  }
}


export default Omikuji;