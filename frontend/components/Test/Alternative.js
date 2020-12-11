import React,  { Component }  from 'react';
import {Container, Box, Button} from '@material-ui/core';
import { checkTest } from '../../store';
import { connect } from 'react-redux';

class Alternative extends Component {
  constructor(props) {
    super(props);
    this.doCheck = this.doCheck.bind(this);
  }
  doCheck(e){ 
    var choise = e.target.id;
    let action = checkTest(choise);
    this.props.dispatch(action);
  }
  render(){
    return(
      <div>
        <ul className="alternative-ul">
          <li  onClick={this.doCheck} id="t">{this.props.a[0]}</li>
          <li  onClick={this.doCheck} id="f">{this.props.a[1]}</li>
          <li  onClick={this.doCheck} id="f">{this.props.a[2]}</li>
          <li  onClick={this.doCheck} id="f">{this.props.a[3]}</li>
        </ul>
        <div  style={{textAlign:"center"}}>
          <Button onClick={this.doCheck} id="f" size="small" variant="contained">わからない</Button>
        </div>
      </div>
    );}
}
Alternative = connect((state) => state)(Alternative);
export default Alternative;