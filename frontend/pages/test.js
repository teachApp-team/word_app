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
import { nextTest } from '../store';


class Index extends Component {
  constructor(props) {
    super(props);
    qnumber:0;
    this.doNext = this.doNext.bind(this);
  }
  doNext(e){ 
    let action = nextTest();
    this.props.dispatch(action);
  }
  render(){
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