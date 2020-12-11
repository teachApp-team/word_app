import React,  { Component }  from 'react';
import { connect } from 'react-redux';
import { checkTest } from '../../store';
import {Container,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';


class Question extends Component {
  constructor(props) {
    super(props);
    qnumber:0;
    this.doCheck = this.doCheck.bind(this);
  }
  doCheck(e){ 
    var choise = e.target.id;
    let action = checkTest(choise);
    this.props.dispatch(action);
  }
  render(){
    return(
      <div className="box27">
        <span className="box-title">問題</span>
        <div style={{textAlign:"center"}}>
          <h5>
            {this.props.q}
          </h5>
          <div>
            名詞
          </div>
        </div>
      </div>
    );}
}

Question = connect((state) => state)(Question);
export default Question;