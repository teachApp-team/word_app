import React, { useState,useEffect }  from 'react';
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import LearningTexts from '../components/TextSelection/LearningTexts'
import Column from '../components/TextSelection/Column'
import Link from 'next/link'
import axios from 'axios';


export default function Index() {
  let iniBooks = [{category:null, created_at:null,desciption:null,id:null,name:"sample",updated_at:null}];
  let iniColumns = [{column_name:"sample",created_at:null,id:null,info:null,updated_at:null}];

  const [books, setBooks] = useState(iniBooks);
  const [columns, setColumns] = useState(iniColumns);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/index").then( res => {
      console.log('データ取得');
      console.log(res.data.books);
      console.log(res.data.columns);
      setBooks(res.data.books);
      setColumns(res.data.columns);
      setLoading(false);
    }).catch(error => {
      console.log(error)
    })   
  }, []);
  console.log("books");
  console.log(books);
  return (
    <Container disableGutters={true}>
      <Header/>
      <Container maxWidth='lg'>
        <div style={{padding:"20px 0px 10px 0px"}}> 
          <h5>学習中の教材</h5>
        </div>
        <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
          {books.map((b, i) => (
              <LearningTexts id={b.id} bookName={b.name} bookDescription={b.description}/>
          ))}
        </div>
        <div style={{padding:"20px 0px 10px 0px"}}>
          <h5>教材一覧</h5>
        </div>
        <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
          {books.map((b, i) => (
              <LearningTexts id={b.id} bookName={b.name} bookDescription={b.description}/>
          ))}
        </div>
        <div style={{padding:"20px 0px 10px 0px"}}>
          <h5>コラム一覧</h5>
        </div>

        <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
          {columns.map((c, i) => (
            <Column id={c.id} columnName={c.column_name} columnInfo={c.info}/>
          ))}
        </div>

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
        <Link href="/test">
          <a>Go to test page</a>
        </Link>
      </Container>
    </Container>
  );
}