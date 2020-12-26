import React from 'react';
import './index.css';

class Payment extends React.Component {
    render(){
      return(
        <div>
          <h1>{this.props.name}</h1>
          <h2>お支払いをしてください。</h2>
        </div>
      )
    }
  }
  
  
  export default Payment;