import React from 'react'
import OmikujiPlay from './omikujiFunctions/omikujiPlay'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import backImage from '../../../assets/img/back.png'
import './index.css'

class Omikuji extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleClick=() => {
    this.props.history.push('/')
  }

  render(){
    return(
      <div>
        <h2 className="instructor">画像をクリックして、おみくじを引こう!</h2>
        <div><OmikujiPlay /></div>
        <img onClick={this.handleClick} src={backImage} alt="back" className="backImg"/>
      </div>
    )
  }
}

export default withRouter(Omikuji);
