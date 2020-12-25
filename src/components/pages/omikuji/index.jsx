import React from 'react'
//import omikujiPlay from './omikujiPlay';

class Omikuji extends React.Component {
  
  omikuji = () => {
    const ra = Math.round(Math.floor( Math.random() * 100))
    console.log(ra);
    switch(ra%5){
      case 0:
        console.log("大吉")
        break;
      case 1:
        console.log("中吉")
        break;
      case 2:
        console.log("小吉")
        break;
      case 3:
        console.log("吉")
        break;
      case 4:
        console.log("凶")
        break;
      default:
        console.log("err")
        break;
    }
    
  }

  //classes = useStyles();

  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>画像をクリックして、おみくじを引こう!</h2>
        <button onClick={this.omikuji}>Click Here</button>
      </div>
    )
  }
}


export default Omikuji;