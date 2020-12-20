import React,  { useState, useEffect }  from 'react';
import {Container, Card, CardContent,Button} from '@material-ui/core';
import Tab from '../../components/Tab';
import Header from '../../components/Layout/Header';
import Question from '../../components/Test/Question';
import Judge from '../../components/Test/Judge';
import Alternative from '../../components/Test/Alternative';
import ResultInfo from '../../components/Test/ResultInfo';
import { connect } from 'react-redux';
import Link from 'next/link'
import style from '../../static/Style';
import { ProgressBar } from 'react-bootstrap';
import { nextTest } from '../../store';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function Index(props) {
  const router = useRouter()
  const levelId = router.query.type
  console.log('ルーターデータ取得');
  console.log(router)

  let iniData = { 
    id: 0,
    name: "level1",
    correct:30,
    wrong:20,
    not_yet:50,
  };
  const [data, setData] = useState(iniData);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/levels/"+ String(levelId)).then( res => {
    console.log('レベルデータ取得');
    console.log(res.data);
    setData(res.data);
    })
  }, []);

  const clickButton = () => {
    router.push({
        pathname:"../test/test", 
        query: {id:String(levelId)}
      });
  }

  return (
    <Container disableGutters={true}>
    {style}
    <Header/>
      <Container maxWidth="xs"  style={{padding:"20px"}}>
        <Card>
          <CardContent style={{padding:"auto"}}> 
            <div>
              {router.query.name}
            </div>
            <div>
              {data.name}
            </div>
            <div>
              テスト単語数：10単語
            </div>
            <div>
              一問あたりの制限時間：5秒
            </div>
            <div style={{padding:"auto"}}>
              <Button 
                onClick={clickButton} 
                variant="contained" 
                size="small"
                style={{margin:"auto"}}>
                  テストスタート
              </Button>
              <Button href="textInfo" variant="contained" size="small"style={{margin:"auto"}}>キャンセル</Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Container>
  )
}
