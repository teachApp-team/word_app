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
  componentDidMount(){
    console.log("componentDidMount動きました")
    axios.get("http://localhost:8000/api/v1/tests/start").then( res => {
    console.log('データ取得')
    let data = res.data;
    let action = getTestData(data);
    this.props.dispatch(action);
    })
  }
  doNext(e){ 
    let action = nextTest();
    this.props.dispatch(action);
  }
  render(){
    console.log("render動きました");
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
              {this.props.data.length != this.props.questioncount &&(
                <Button size="small" onClick={this.doNext} variant="contained">次の問題</Button>
              )} 
              { this.props.data.length == this.props.questioncount &&(
                <Button size="small" href="/afterTest" variant="contained">終了する</Button>
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
        <Link href="/afterTest">
          <a>Go to afterTest page</a>
        </Link>
      </Container>
    );
  }
}

Index = connect((state) => state)(Index);
export default Index;