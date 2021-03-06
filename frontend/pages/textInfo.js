import React, { useState,useEffect } from 'react';
import {Container, Box} from '@material-ui/core';
import Header from '../components/Layout/Header';
import TextProgressInfo from '../components/TextInfo/TextProgressInfo'
import SelectLevel from '../components/TextInfo/SelectLevel'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Index() {
  let iniLevel = [[1,"level1"], [2,"level2"], [3,"level3"], [4,"level4"]];
  let iniData = {id:1, name: "テキスト名", description:"サンプルのテキストです", correct:30, wrong:20, not_yet:50}
  let iniLoading = {loading: true};

  const [data, setData] = useState(iniData);
  const [level, setLevel] = useState(iniLevel);
  const [loading, setLoading] = useState(iniLoading);

  let correct_percent = Math.floor(data.correct / (data.correct + data.wrong + data.not_yet) * 100);
  let wrong_percent = Math.floor(data.wrong / (data.correct + data.wrong + data.not_yet) * 100);

  const router = useRouter()
  const id = router.query.id

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/word_books/"+ String(id)).then( res => {
    console.log('教材データ取得');
    console.log(res.data);
    setData(res.data.text);
    setLevel(res.data.levels);
    console.log(data);
    console.log(level);
    setLoading({ loading: false});
    })
  }, []);
  
  return (
    <Container disableGutters={true}>
      <Header/>
      <TextProgressInfo 
        name={data.name}
        info={data.description} 
        correct={correct_percent} 
        wrong={wrong_percent}
        loading={loading}/>
      <SelectLevel 
        textName={data.name}
        level={level}
        loading={loading} />
      <Link href="/textSelection">
        <a>Go to textSelection page</a>
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
      <Link href="/test">
        <a>Go to test page</a>
      </Link>
    </Container>
  );
}