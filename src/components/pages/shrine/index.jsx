import React from 'react';
import coin1yen from '../../../assets/img/osaisen/coins/coin-1yen.png';
import coin5yen from '../../../assets/img/osaisen/coins/coin-5yen.png';
import coin10yen from '../../../assets/img/osaisen/coins/coin-10yen.png';
import coin50yen from '../../../assets/img/osaisen/coins/coin-50yen.png';
// import coin100yen from '../../../assets/img/osaisen/coins/coin-100yen.png;
import coin500yen from '../../../assets/img/osaisen/coins/coin-500yen.png';
import offertoryBox from '../../../assets/img/osaisen/offertory-box.png'
import styles from '../../../assets/styles/style.css'
class Shrine extends React.Component {
  render(){
    return(
      <React.Fragment>
      <div className='osaisen'>
      <h1>お賽銭</h1>
        <img src={offertoryBox} alt="offertoryBox" />
          <ul className="coins_alignment flex-box">
            <li> <img src={coin1yen} alt="1yen" className="coin-img"/> </li>
            <li> <img src={coin5yen} alt="1yen" className="coin-img"/> </li>
            <li> <img src={coin10yen} alt="1yen" className="coin-img"/> </li>
            <li> <img src={coin50yen} alt="1yen" className="coin-img"/> </li>
            {/* <li> <img src={coin100yen} alt="1yen" className="coin-img"/> </li> */}
            <li> <img src={coin500yen} alt="1yen" className="coin-img"/> </li>
          </ul>
      </div>
      </React.Fragment>

    )
  }
}


export default Shrine;