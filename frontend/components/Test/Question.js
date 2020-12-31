import React,  { Component }  from 'react';
import { connect } from 'react-redux';
// import Skeleton from 'react-loading-skeleton';
import {Container,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import axios from 'axios';
import { nextTest, getTestData } from '../../store';
import Skeleton from '@material-ui/lab/Skeleton';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount(){
    console.log("componentDidMount動きました")
    axios.get("http://localhost:8000/api/v1/tests/start/"+ String(this.props.l)).then( res => {
    console.log('データ取得')
    let data = res.data;
    let action = getTestData(data);
    this.props.dispatch(action);
    this.setState({ loading: false });
    })
  }
  render(){
    console.log(this.props.question)
    console.log(this.state.loading)
    if (this.state.loading) {
      return(
        <div className="box27">
          <span className="box-title">問題</span>
          <h5>
            <Skeleton width="100%" height="100%"/>
          </h5>
          <div>
            <Skeleton width="100%" height="100%"/>
          </div>
        </div>
      );
    } else {
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
      );
    }
  }
}

Question = connect((state) => state)(Question);
export default Question;