import React,  { Component }  from 'react';
import { connect } from 'react-redux';
import {Typography, Container, Button} from '@material-ui/core';

class Judge extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    if (this.props.check=="correct"){
      return(
        <Container style={{textAlign:"center"}}>
          <div className="seikai"></div>
          <div style={{padding:"10px"}}>
            <h5>
              答え：{this.props.answer}
            </h5>
          </div>    
        </Container>
      );
    } else if (this.props.check=="wrong") { 
      return(
        <Container style={{textAlign:"center"}}>
          <div className="batsu"></div>
          <div style={{padding:"10px"}}>
            <h5>
              答え：{this.props.answer}
            </h5>
          </div>      
        </Container>
      );
    }
  }
}
Judge = connect((state) => state)(Judge);
export default Judge;