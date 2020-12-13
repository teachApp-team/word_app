import React,  { Component }  from 'react';
import {Container, Card, CardContent,Button} from '@material-ui/core';
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
  }
  render(){
    return (
      <Container disableGutters={true}>
      {style}
      <Header/>
        <Container maxWidth="xs"  style={{padding:"20px"}}>
          <Card>
            <CardContent style={{padding:"auto"}}> 
              <div>
                ターゲット英熟語
              </div>
              <div>
                000-100
              </div>
              <div>
                テスト単語数：10単語
              </div>
              <div>
                一問あたりの制限時間：5秒
              </div>
              <div style={{padding:"auto"}}>
                <Button href="test" variant="contained" size="small"style={{margin:"auto"}}>テストスタート</Button>
                <Button href="textInfo" variant="contained" size="small"style={{margin:"auto"}}>キャンセル</Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Container>
  )}
}

Index = connect((state) => state)(Index);
export default Index;