import React, { useState,useEffect }  from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions,Container, makeStyles} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import LearningTexts from '../components/TextSelection/LearningTexts'
import ColumnContent from '../components/TextSelection/ColumnContent'
import Link from 'next/link'
import style from '../static/Style/ColumnStyle';
import axios from 'axios';


export default function columnInfo() {
  let iniTitle = "タイトル";
  let iniMessage = "";
  let iniContents = [{content_title:"サブタイトル", content:"コンテンツ"},{content_title:"サブタイトル", content:"コンテンツ"}];

  const [title, setTitle] = useState(iniTitle);
  const [message, setMessage] = useState(iniMessage);
  const [contents, setContents] = useState(iniContents);


  useEffect(() => {
    console.log('コラムデータ取得開始');
    axios.get("http://localhost:8000/api/v1/columns/3").then( res => {
      console.log('コラムデータ取得');
      console.log(res.data);
      setTitle(res.data.title);
      setMessage(res.data.message);
      setContents(res.data.contents);
    }).catch(error => {
      console.log(error)
    }) 
  }, []);


  return (
    <Container style={{padding: "2rem"}} maxWidth='lg'>
      {style}
      <div>
        <Typography className="headTitle" gutterBottom variant="h4" component="h4">
          {title}
        </Typography>
      </div>
      <div style={{textAlign: "center"}}>{message}</div>
      <div>
        <div className="columnContent" >
          {contents.map((c, index) => (
            <ColumnContent subtitle={c.content_title} content={c.content}/>
          ))}
        </div>
      </div>
    </Container>
  )}