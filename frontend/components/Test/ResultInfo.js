import React,  { Component }  from 'react';
import { connect } from 'react-redux';
import {Grid,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

class ResultInfo extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Grid container spacing={2} style={{padding:"10px 0px"}}>
        <Grid item xs={4}>
          <h5>{this.props.questioncount}問目</h5>
        </Grid>
        <Grid item xs={4} style={{color:"red"}}>
          <p>{this.props.correct}問正解中</p>
        </Grid>
        <Grid item xs={4} style={{color:"blue"}}>
          <p>{this.props.wrong}問不正解中</p>
        </Grid>
      </Grid>
    );
  }
}
ResultInfo = connect((state) => state)(ResultInfo);
export default ResultInfo;