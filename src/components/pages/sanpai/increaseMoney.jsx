import React from 'react';
import coin1yen from '../../../assets/img/osaisen/coins/coin-1yen.png';

class amount1yen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 };
  }
  handleClick1yen() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleClick1yen()}>+</button>
      </div>
    );
  }
};

export default amount1yen;

