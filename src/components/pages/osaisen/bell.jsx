import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './index.css';
import bellImg1 from '../../../assets/img/osaisen/suzu.png';
import bellImg2 from '../../../assets/img/osaisen/suzu2.png';

class Bell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0,
      bellState: false
    };
  }
  handleBellClickCountUp = () => {
    const tmpState = !this.state.bellState
    this.setState({
      clickCount: this.state.clickCount + 1,
      bellState: tmpState
    })
  }
  render(){
    return(
      <Container className="centering">
        <h2>振って！</h2>
        <h3 id='clickDisplayArea'>{this.state.clickCount}</h3>
        <img src={bellImg1} alt='bellImg' className='bell-img' onClick={this.handleBellClickCountUp}/>      
      </Container>
    );
  }
}

export default Bell