import React,  { Component }  from 'react';
import { connect } from 'react-redux';
import { checkTest } from '../../store';
import {Container,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import axios from 'axios';
import { nextTest, getTestData } from '../../store';

class Question extends Component {
  constructor(props) {
    super(props);
    qnumber:0;
  }
  componentDidMount(){
    console.log("componentDidMount動きました")
    axios.get("http://localhost:8000/api/v1/tests/start/"+ String(this.props.l)).then( res => {
    console.log('データ取得')
    let data = res.data;
    let action = getTestData(data);
    this.props.dispatch(action);
    })
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