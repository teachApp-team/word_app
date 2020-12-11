import React,  { Component }  from 'react';
import {Container,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import Link from 'next/link'
import { connect } from 'react-redux';

class Index extends Component {
  constructor(props) {
    super(props);
    const rows = this.props.data
  }
  render(){
    return (
      <Container disableGutters={true}>
        <Header/>
        <Container maxWidth="lg" style={{margin:"20px auto" }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align="right">問題</TableCell>
                  <TableCell align="right">答え</TableCell>
                  <TableCell align="right">間違えた回数</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.data.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.No}
                    </TableCell>
                    <TableCell align="right">{row.English}</TableCell>
                    <TableCell align="right">{row.Japanese}</TableCell>
                    <TableCell align="right">0</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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