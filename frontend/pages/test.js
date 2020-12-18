import React,  { Component }  from 'react';
import {Container, Box, Button} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import Question from '../components/Test/Question';
import Judge from '../components/Test/Judge';
import Alternative from '../components/Test/Alternative';
import ResultInfo from '../components/Test/ResultInfo';
import { connect } from 'react-redux';
import Link from 'next/link'
import style from '../static/Style';
import { ProgressBar } from 'react-bootstrap';
import { nextTest, getTestData } from '../store';
import axios from 'axios';

class Index extends Component {
  constructor(props) {
    super(props);
    this.doNext = this.doNext.bind(this);
  }
  
  doNext(e){ 
    // console.log("doNext関数動きます");
    // console.log(this.props.question_word_id,this.props.test_id ,this.props.check)
    // axios.post("http://localhost:8000/api/v1/results/create", {
    //   word_id: this.props.question_word_id,
    //   test_id: this.props.test_id,
    //   is_correct: this.props.check
    // }).then(function (response) {
    //   console.log("データ送信完了");
    //   console.log(response);
    // })
    console.log(this.props.question_word_id,this.props.test_id ,this.props.check)
    let action = nextTest();
    this.props.dispatch(action);
  }
  render(){
    console.log("render動きました");
    console.log(this.props.test_id);
    const testID =  this.props.test_id;
    console.log(testID);
    return (
      <Container disableGutters={true}>
        {style}
        <Header/>
        <Container maxWidth="xs"  style={{padding:"20px"}}>
          <ProgressBar animated now={this.props.timelimit} label={`${5}秒`} />
          <ResultInfo />
          <Question q={this.props.question}/>
          {this.props.status == "question" &&(
          <Alternative a={this.props.alternative}/>
            )} 
          {this.props.status == "answer" &&(
            <div style={{textAlign:"center"}}>
              <Judge/>
              {this.props.data.length -1 != this.props.questioncount &&(
                <Button size="small" onClick={this.doNext} variant="contained">次の問題</Button>
              )} 
              { this.props.data.length -1 == this.props.questioncount &&(
                <Button size="small" href={'/afterTest/' + String(this.props.test_id)} variant="contained">終了する</Button>
              )}
            </div>
          )} 
        </Container>


        <Link href="/">
          <a>Go to index page</a>
        </Link>
        <br></br>
        <Link href="/textInfo">
          <a>Go to textInfo page</a>
        </Link>
        <br></br>
        <Link href="/learningCondition">
          <a>Go to learningCondition page</a>
        </Link>
        <br></br>
        <Link  href={'/afterTest/' + String(this.props.test_id)} >
          <a>Go to afterTest page</a>
        </Link>
      </Container>
    );
  }
}

Index = connect((state) => state)(Index);
export default Index;