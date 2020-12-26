import React from 'react';
import coin1yen from '../../../assets/img/osaisen/coins/coin-1yen.png';
import coin5yen from '../../../assets/img/osaisen/coins/coin-5yen.png';
import coin10yen from '../../../assets/img/osaisen/coins/coin-10yen.png';
import coin50yen from '../../../assets/img/osaisen/coins/coin-50yen.png';
import coin100yen from '../../../assets/img/osaisen/coins/coin-100yen.png';
import coin500yen from '../../../assets/img/osaisen/coins/coin-500yen.png';
import offertoryBox from '../../../assets/img/osaisen/offertory-box.png';
import './index.css';
// import App from '../../../App';
// import amount1yen from './increaseMoney';

class Shrine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count1yen: 0,
      count5yen: 0,
      count10yen: 0,
      count50yen: 0,
      count100yen: 0,
      count500yen: 0
    };
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  handleClick1yen() {
    this.setState({
      count1yen: this.state.count1yen + 1,
    });
    console.log(this.state.count1yen)
  }

  handleClick5yen() {
    this.setState({
      count5yen: this.state.count5yen + 5
    });
  }

  handleClick10yen() {
    this.setState({
      count10yen: this.state.count10yen + 10
    });
  }

  handleClick50yen() {
    this.setState({
      count50yen: this.state.count50yen + 50
    });
  }

  handleClick100yen() {
    this.setState({
      count100yen: this.state.count100yen + 100
    });
  }

  handleClick500yen() {
    this.setState({
      count500yen: this.state.count500yen + 500
    });
    console.log(this.state.count500yen)
  }

  render() {
    return (
      <React.Fragment>
        <div className='osaisen'>
          <h1>お賽銭</h1>
          <img src={offertoryBox} alt="offertoryBox" className="offertory-box"/>
          <ul className="coins_alignment flex-box">
            <p>{this.state.count1yen}</p>
            <li>
              <button onClick={() => this.handleClick1yen()}>
                <img src={coin1yen} alt="1yen" className="coin-img" />
              </button>
            </li>
            <p>{this.state.count5yen}</p>
            <li>
              <button onClick={() => this.handleClick5yen()}>
                <img src={coin5yen} alt="5yen" className="coin-img" />
              </button>
            </li>
            <p>{this.state.count10yen}</p>
            <li>
              <button onClick={() => this.handleClick10yen()}>
                <img src={coin10yen} alt="10yen" className="coin-img" />
              </button>
            </li>
            <p>{this.state.count50yen}</p>
            <li>
              <button onClick={() => this.handleClick50yen()}>
                <img src={coin50yen} alt="50yen" className="coin-img" />
                </button>
            </li>
            <p>{this.state.count100yen}</p>
            <li>
              <button onClick={() => this.handleClick100yen()}>
                <img src={coin100yen} alt="100yen" className="coin-img" />
              </button>
            </li>
            <p>{this.state.count500yen}</p>
            <li>
              <button onClick={() => this.handleClick500yen()}>
                <img src={coin500yen} alt="500yen" className="coin-img" />
              </button>
            </li>
          </ul>
          <h1>合計金額：{this.state.count1yen+this.state.count5yen+this.state.count10yen+this.state.count50yen+this.state.count100yen+this.state.count500yen}円</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Shrine;