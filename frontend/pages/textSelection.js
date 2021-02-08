import React, { useState,useEffect }  from 'react';
import {Container, Box} from '@material-ui/core';
import style from '../static/Style/TextSelection';
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

  const LearningTextSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const Columnsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    <section 
      style={{
        backgroundImage:"url('../static/texts/6.jpg')",
      }}>
      {style}
      <Container style={{paddingBottom:"2rem"}} disableGutters={true}>
        <section className="TopContainer">
          <section style={{padding:"3rem"}}>
            <div style={{textAlign:"center", padding: "20px"}}> 
              <div style={{fontSize:"2rem"}}>Learning Text</div>
              <div style={{fontSize:"1.3rem"}}>Now, You used this book</div>
            </div>
            <Slider {...LearningTextSettings} style={{textAlign:"center"}}>
              {books.map((b, i) => (
                <div>
                  <LearningTexts id={b.id} bookName={b.name} bookDescription={b.description} l={loading}/>
                </div>
              ))}
            </Slider>
          </section>
          <section style={{padding:"3rem"}}>
            <div style={{textAlign:"center", padding: "20px"}}> 
              <div style={{fontSize:"2rem"}}>All Texts</div>
              <div style={{fontSize:"1.3rem"}}>These are all texts. Select the best one that fits you</div>
            </div>
            <div style={{display:"flex", flexWrap: "wrap", alignContent: "space-around", justifyContent: "space-around"}}>
              {books.map((b, i) => (
                <div>
                  <LearningTexts id={b.id} bookName={b.name} bookDescription={b.description} l={loading}/>
                </div>
              ))}
            </div>
          </section>
        </section>
      </Container>

      <section className="BottomContainer" style={{padding:"2rem 5rem"}}>
        <div style={{textAlign:"center", padding:"3rem 0"}}>
          <div style={{fontSize:"2rem"}}>Columns</div>
          <div style={{fontSize:"1.3rem"}}>I'm sharing useful info in these Columns</div>
        </div>
        <Slider {...Columnsettings} style={{textAlign:"center", color:"black"}}>
          {columns.map((c, i) => (
            <div>
              <Column id={c.id} columnName={c.column_name} columnInfo={c.info} l={loading}/>
            </div>
          ))}
        </Slider>
      </section>
    </section>
  );
}