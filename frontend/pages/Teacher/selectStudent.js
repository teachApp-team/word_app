import React from 'react';
import {Container, Button, Box} from '@material-ui/core';
import Header from '../../components/Layout/Header';
import Link from 'next/link'
import StudentsCardWrapper from '../../components/Teacher/selectStudent/StudentsCardWrapper'


export default function Index() {
  return (
    <Container disableGutters={true}>
      <Header/>
      <Container maxWidth='lg'>
        <div style={{padding:"20px 0px 10px 0px"}}> 
          <h5>担当生徒一覧</h5>
        </div>
        <StudentsCardWrapper />
        <Button  variant="contained" style={{margin: "20px"}} size="large" color="secondary">
          新しい生徒を追加
        </Button>
      </Container>
    </Container>
  )
}