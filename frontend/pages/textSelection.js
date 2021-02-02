import React, { useState,useEffect }  from 'react';
import {Container, Box} from '@material-ui/core';
import Tab from '../components/Tab';
import Header from '../components/Layout/Header';
import LearningTexts from '../components/TextSelection/LearningTexts'
import Column from '../components/TextSelection/Column'
import Link from 'next/link'
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Index() {
  let iniBooks = [{category:null, created_at:null,desciption:null,id:null,name:"sample",updated_at:null}];
  let iniColumns = [{column_name:"sample",created_at:null,id:null,info:null,updated_at:null}];
  let iniLoading = {loading: true};

  const [books, setBooks] = useState(iniBooks);
  const [columns, setColumns] = useState(iniColumns);
  const [loading, setLoading] = useState(iniLoading);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/index").then( res => {
      console.log('データ取得');
      console.log(res.data.books);
      console.log(res.data.columns);
      setBooks(res.data.books);
      setColumns(res.data.columns);
      setLoading({ loading: false});
    })   
  }, []);
  
  return (
    <Container disableGutters={true}>
      <Container maxWidth='lg'>
        <div style={{padding:"20px 0px 10px 0px"}}> 
          <h5>学習中の教材</h5>
        </div>
        <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
          {books.map((b, i) => (
              <LearningTexts id={b.id} bookName={b.name} bookDescription={b.description} l={loading}/>
          ))}
        </div>
        <div style={{padding:"20px 0px 10px 0px"}}>
          <h5>教材一覧</h5>
        </div>
        <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
          {books.map((b, i) => (
              <LearningTexts id={b.id} bookName={b.name} bookDescription={b.description} l={loading}/>
          ))}
        </div>
        <div>
          <div style={{padding:"20px 0px 10px 0px"}}>
            <h5>コラム一覧</h5>
          </div>
          <Slider {...settings}>
            {columns.map((c, i) => (
              <div>
                <Column id={c.id} columnName={c.column_name} columnInfo={c.info} l={loading}/>
              </div>
            ))}
          </Slider>
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