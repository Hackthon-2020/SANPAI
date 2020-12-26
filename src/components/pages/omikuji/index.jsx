import React from 'react'
//import omikujiPlay from './omikujiPlay';
//import ImgCard from '../../card/imgCard/index'
// import omikujiImg from '../../../assets/img/omikuji/omikuji-box.png'
import OmikujiPlay from './omikujiPlay'

class Omikuji extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     resOmikuji: null,
  //     msgOmikuji: "",
  //   }
  // }
  //classes = useStyles();

  render(){
    //const msg = this.omikuji.msg
    //history = useHistory();
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>画像をクリックして、おみくじを引こう!</h2>
        {/* <img src={omikujiImg} onClick={this.omikuji} alt="" /> */}
        <div><OmikujiPlay /></div>
        {/* omikujiState={this.state} */}
      </div>
      
    )
  }
}


export default Omikuji;