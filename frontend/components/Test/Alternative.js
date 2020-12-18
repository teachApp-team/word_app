import React,  { Component }  from 'react';
import {Container, Box, Button} from '@material-ui/core';
import { checkTest } from '../../store';
import { connect } from 'react-redux';
import axios from 'axios';

class Alternative extends Component {
  constructor(props) {
    super(props);
    this.doCheck = this.doCheck.bind(this);
  }
  doCheck(e){ 
    console.log("doCheck関数動きます");
    let check;
    var choise = e.target.id;
    let action = checkTest(choise);
    this.props.dispatch(action);
    if (choise=="t"){
      check = true;
    }else{
      check = false;
    }
    console.log(this.props.question_word_id,this.props.test_id ,check)
    axios.post("http://localhost:8000/api/v1/results/create", {
      word_id: this.props.question_word_id,
      test_id: this.props.test_id,
      is_correct: check
    }).then(function (response) {
      console.log("データ送信完了");
      console.log(response);
    })
  }
  render(){
    console.log(this.props.a[0][1]);
    return(
      <div>
        <ul className="alternative-ul">
          <li  onClick={this.doCheck} id={this.props.a[0][1]}>{this.props.a[0][0]}</li>
          <li  onClick={this.doCheck} id={this.props.a[1][1]}>{this.props.a[1][0]}</li>
          <li  onClick={this.doCheck} id={this.props.a[2][1]}>{this.props.a[2][0]}</li>
          <li  onClick={this.doCheck} id={this.props.a[3][1]}>{this.props.a[3][0]}</li>
        </ul>
        <div  style={{textAlign:"center"}}>
          <Button onClick={this.doCheck} id="f" size="small" variant="contained">わからない</Button>
        </div>
      </div>
    );}
}
Alternative = connect((state) => state)(Alternative);
export default Alternative;