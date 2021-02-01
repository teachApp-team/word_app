import React,  { Component }  from 'react';
import {Container, Box, Button} from '@material-ui/core';
import Question from '../../components/Test/Question';
import Judge from '../../components/Test/Judge';
import Alternative from '../../components/Test/Alternative';
import ResultInfo from '../../components/Test/ResultInfo';
import { connect } from 'react-redux';
import Link from 'next/link'
import style from '../../static/Style';
import { ProgressBar } from 'react-bootstrap';
import { nextTest } from '../../store';
import { withRouter } from 'next/router';
import Router  from 'next/router';


class Index extends Component {
  constructor(props) {
    super(props);
    this.doNext = this.doNext.bind(this);
  }
  
  doNext(e){ 
    console.log(this.props.question_word_id,this.props.test_id ,this.props.check)
    let action = nextTest();
    this.props.dispatch(action);
  }

  clickButton(id) {
    console.log(id)
    Router.push({
      pathname:"../test/afterTest/", 
      query: {test_id : String(id)}
    });
  }

  render(){
    console.log("render動きました");
    console.log(this.props.test_id);
    const testID =  this.props.test_id;
    console.log(testID);
    return (
      <Container disableGutters={true}>
        {style}
        <Container maxWidth="xs"  style={{padding:"20px"}}>
          <ProgressBar animated now={this.props.timelimit} label={`${5}秒`} />
          <ResultInfo />
          <Question l={Router.query.id} q={this.props.question}/>
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
                <Button 
                  size="small" 
                  onClick={this.clickButton(this.props.test_id)} 
                  // href={'../afterTest/' + String(this.props.test_id)} 
                  variant="contained"
                >終了する</Button>
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
        <Link  href={'../afterTest/' + String(this.props.test_id)} >
          <a>Go to afterTest page</a>
        </Link>
      </Container>
    );
  }
}

Index = connect((state) => state)(Index);
export default withRouter(Index);